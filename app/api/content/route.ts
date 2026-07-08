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

function normalizeSlug(value: string) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeTags(tags: any) {
  if (Array.isArray(tags)) return tags;

  return (tags || "")
    .split(",")
    .map((tag: string) => tag.trim())
    .filter(Boolean);
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

  const slug = normalizeSlug(body.slug || body.title || "");
  const libraryPath = normalizeSlug(body.path || body.series || "");

  const newItem = {
    id: body.id || crypto.randomUUID(),

    // Type
    type: body.type || "article",

    // Core content
    title: body.title || "",
    description: body.description || body.subtitle || "",
    summary: body.summary || "",

    // CMS article content
    content: body.content || "",
    body: body.body || "",
    blocks: Array.isArray(body.blocks) ? body.blocks : [],

    // Media
    thumbnail: body.thumbnail || body.coverImage || "",
    coverImage: body.coverImage || body.thumbnail || "",
    heroImage: body.heroImage || body.coverImage || body.thumbnail || "",
    diagram: body.diagram || "",

    // Links
    url: primaryUrl,
    mediumUrl: body.mediumUrl || "",
    linkedinUrl: body.linkedinUrl || "",
    youtubeUrl: body.youtubeUrl || "",
    githubUrl: body.githubUrl || "",
    slidesUrl: body.slidesUrl || "",
    websiteSlug: body.websiteSlug || "",

    // Video
    videoId: body.videoId || "",

    // Metadata
    series: body.series || "",
    path: libraryPath,
    episode: body.episode ?? null,
    slug,
    order: body.order ?? null,
    duration: body.duration || "",
    readingTime: body.readingTime || "",
    tags: normalizeTags(body.tags),
    featured: Boolean(body.featured),
    status: body.status || "published",
    published: body.published || new Date().toISOString(),
  };

  const index = items.findIndex((item: any) => item.id === newItem.id);

  if (index >= 0) {
    items[index] = {
      ...items[index],
      ...newItem,
    };
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