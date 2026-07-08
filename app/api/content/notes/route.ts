import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "content.json");

function readItems() {
  if (!fs.existsSync(FILE_PATH)) return [];
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
}

function writeItems(items: any[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(items, null, 2));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getYoutubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\n?#]+)/
  );
  return match?.[1] ?? "";
}

async function enrichYouTube(url: string) {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
    );

    const meta = await res.json();
    const videoId = getYoutubeId(url);

    return {
      videoId,
      title: meta.title,
      description: meta.title,
      thumbnail: meta.thumbnail_url || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch {
    const videoId = getYoutubeId(url);
    return {
      videoId,
      title: "Untitled YouTube Video",
      description: "",
      thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "",
    };
  }
}

async function enrichGenericUrl(url: string) {
  try {
    const res = await fetch(url);
    const html = await res.text();

    return {
      title:
        html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ||
        html.match(/<title>(.*?)<\/title>/)?.[1] ||
        "Untitled Article",
      description:
        html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ||
        "",
      thumbnail:
        html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] || "",
    };
  } catch {
    return {
      title: "Untitled Article",
      description: "",
      thumbnail: "",
    };
  }
}

export async function GET() {
  return NextResponse.json(readItems());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let auto: any = {};

    if (body.type === "youtube") auto = await enrichYouTube(body.url);
    if (body.type === "medium" || body.type === "linkedin") {
      auto = await enrichGenericUrl(body.url);
    }

    const title = body.title || auto.title || "Untitled";

    const item = {
      id: crypto.randomUUID(),
      type: body.type,
      url: body.url,
      videoId: auto.videoId || "",
      title,
      description: body.description || auto.description || "",
      thumbnail: body.thumbnail || auto.thumbnail || "",
      series: body.series || "",
      path: body.path || slugify(body.series || "architecture-notes"),
      episode: body.episode ? Number(body.episode) : null,
      slug: body.slug || slugify(title),
      order: body.order ? Number(body.order) : body.episode ? Number(body.episode) : 999,
      duration: body.duration || "",
      tags: body.tags
        ? body.tags.split(",").map((tag: string) => tag.trim()).filter(Boolean)
        : [],
      published: new Date().toISOString(),
    };

    const items = readItems();

    const exists = items.find(
      (i: any) => i.type === item.type && i.url === item.url
    );

    if (!exists) {
      writeItems([item, ...items]);
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("CONTENT_SAVE_ERROR", error);
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}