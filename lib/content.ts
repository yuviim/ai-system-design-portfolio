import fs from "fs";
import path from "path";
import legacyContent from "../data/content.json";

export type ContentItem = {
  id: string;
  title: string;
  slug?: string;
  path?: string;
  description?: string;
  type?: string;
  series?: string;
  category?: string;
  difficulty?: string;
  readingTime?: string;
  published?: string;
  date?: string;
  thumbnail?: string;
  image?: string;
  diagram?: string;
  tags?: string[];
  featured?: boolean;
  content?: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function getArticleFolders() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
}

export function getFolderArticles(): ContentItem[] {
  return getArticleFolders()
    .map((folder) => {
      const articleDir = path.join(ARTICLES_DIR, folder);
      const metadataPath = path.join(articleDir, "metadata.json");
      const contentPath = path.join(articleDir, "index.mdx");

      if (!fs.existsSync(metadataPath)) return null;

      const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      const content = fs.existsSync(contentPath)
        ? fs.readFileSync(contentPath, "utf8")
        : "";

      return {
        ...metadata,
        id: metadata.id || folder,
        slug: metadata.slug || folder,
        content,
      };
    })
    .filter(Boolean) as ContentItem[];
}

export function getContent(): ContentItem[] {
  const folderArticles = getFolderArticles();
  const legacy = legacyContent as ContentItem[];

  const merged = [...folderArticles, ...legacy];
  const unique = new Map<string, ContentItem>();

  for (const item of merged) {
    unique.set(item.id || item.slug || item.title, item);
  }

  return Array.from(unique.values());
}

export function getFeaturedArticle(content: ContentItem[] = getContent()) {
  return content.find((item) => item.featured) || content[0] || null;
}

export function getLatestKnowledge(
  content: ContentItem[] = getContent(),
  excludeId?: string
) {
  return content
    .filter((item) => item.id !== excludeId)
    .sort((a, b) => {
      const aDate = new Date(a.published || a.date || "2000-01-01").getTime();
      const bDate = new Date(b.published || b.date || "2000-01-01").getTime();
      return bDate - aDate;
    })
    .slice(0, 6);
}

export function getContentHref(item: ContentItem) {
  const slug = item.slug || item.path || item.id;
  return `/library/${slug}`;
}

export function getContentImage(item: ContentItem) {
  return (
    item.thumbnail ||
    item.image ||
    item.diagram ||
    "/images/series/enterprise-agentic-ai.png"
  );
}

export function getTypeLabel(type?: string) {
  if (!type) return "Article";

  const labels: Record<string, string> = {
    article: "Article",
    architecture: "Architecture",
    youtube: "Video",
    video: "Video",
    note: "Note",
    notes: "Note",
  };

  return labels[type] || type;
}

export function formatDate(value?: string) {
  if (!value) return "";

  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}