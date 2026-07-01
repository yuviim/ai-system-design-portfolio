import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type Collection = "notes" | "library" | "videos" | "series";

export type MdxItem = {
  slug: string;
  title: string;
  description: string;
  published: string;
  tags: string[];
  readingTime: string;
  collection: Collection;
  content: string;
  youtube?: string;
  linkedin?: string;
  medium?: string;
  github?: string;
  series?: string;
  duration?: string;
  thumbnail?: string;
};

export function getAllItems(collection: Collection): MdxItem[] {
  const dir = path.join(CONTENT_ROOT, collection);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((slug) => fs.existsSync(path.join(dir, slug, "page.mdx")))
    .map((slug) => getItem(collection, slug))
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.published).getTime() - new Date(a!.published).getTime()
    ) as MdxItem[];
}

export function getItem(collection: Collection, slug: string): MdxItem | null {
  const filePath = path.join(CONTENT_ROOT, collection, slug, "page.mdx");

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    published: data.published ?? "",
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    collection,
    content,
    youtube: data.youtube,
    linkedin: data.linkedin,
    medium: data.medium,
    github: data.github,
    series: data.series,
    duration: data.duration,
    thumbnail: data.thumbnail,
  };
}