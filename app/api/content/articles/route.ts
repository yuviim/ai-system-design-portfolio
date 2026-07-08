import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function POST(req: Request) {
  const body = await req.json();

  const title = body.title || "Untitled Article";
  const slug = slugify(body.slug || title);
  const articleDir = path.join(ARTICLES_DIR, slug);

  fs.mkdirSync(articleDir, { recursive: true });

  const metadata = {
    id: slug,
    title,
    slug,
    description: body.description || "",
    type: body.type || "article",
    series: body.series || "",
    category: body.category || "",
    difficulty: body.difficulty || "Intermediate",
    readingTime: body.readingTime || "5 min read",
    published: body.published || new Date().toISOString().slice(0, 10),
    thumbnail: body.thumbnail || "/images/series/enterprise-agentic-ai.png",
    tags: body.tags || [],
    featured: Boolean(body.featured),
  };

  fs.writeFileSync(
    path.join(articleDir, "metadata.json"),
    JSON.stringify(metadata, null, 2),
    "utf8"
  );

  fs.writeFileSync(path.join(articleDir, "index.mdx"), body.content || "", "utf8");

  return NextResponse.json({
    success: true,
    slug,
    path: `/library/${slug}`,
  });
}