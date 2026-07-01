import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const contentFile = path.join(process.cwd(), "data", "content.json");

function readContent() {
  try {
    if (!fs.existsSync(contentFile)) return [];

    const raw = fs.readFileSync(contentFile, "utf8").trim();
    if (!raw) return [];

    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to read content.json", error);
    return [];
  }
}

function writeContent(items: any[]) {
  const dir = path.dirname(contentFile);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(contentFile, JSON.stringify(items, null, 2), "utf8");
}

export async function GET() {
  const items = readContent();

  return NextResponse.json(
    items.sort(
      (a: any, b: any) =>
        new Date(b.published || 0).getTime() -
        new Date(a.published || 0).getTime()
    )
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const items = readContent();

  const primaryUrl =
    body.url ||
    body.mediumUrl ||
    body.linkedinUrl ||
    body.youtubeUrl ||
    body.websiteSlug ||
    "";

  const newItem = {
    id: body.id || crypto.randomUUID(),
    type: body.type || "article",

    title: body.title || "",
    description: body.description || "",
    summary: body.summary || "",

    url: primaryUrl,
    mediumUrl: body.mediumUrl || "",
    linkedinUrl: body.linkedinUrl || "",
    youtubeUrl: body.youtubeUrl || "",
    githubUrl: body.githubUrl || "",
    slidesUrl: body.slidesUrl || "",
    websiteSlug: body.websiteSlug || "",

    videoId: body.videoId || "",
    thumbnail: body.thumbnail || "",
    series: body.series || "",
    path: body.path || "",
    episode: body.episode ?? null,
    slug: body.slug || "",
    order: body.order ?? null,
    duration: body.duration || "",
    readingTime: body.readingTime || "",
    tags: body.tags || [],
    featured: Boolean(body.featured),
    published: body.published || new Date().toISOString(),
  };

  const index = items.findIndex((item: any) => item.id === newItem.id);

  if (index >= 0) {
    items[index] = newItem;
  } else {
    items.unshift(newItem);
  }

  writeContent(items);

  return NextResponse.json({ success: true, item: newItem });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const items = readContent().filter((item: any) => item.id !== id);
  writeContent(items);

  return NextResponse.json({ success: true });
}