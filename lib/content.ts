import { notes } from "@/data/notes";
import { library } from "@/data/library";
import { series } from "@/data/series";
import type { ContentCategory, ContentItem } from "@/types/content";

export const allContent: ContentItem[] = [...notes, ...library, ...series];

export function getAllContent(): ContentItem[] {
  return allContent.sort(
    (a, b) =>
      new Date(b.published).getTime() - new Date(a.published).getTime()
  );
}

export function getContentByCategory(
  category: ContentCategory
): ContentItem[] {
  return getAllContent().filter((item) => item.category === category);
}

export function getFeaturedContent(): ContentItem[] {
  return getAllContent().filter((item) => item.featured);
}

export function getLatestNotes(limit = 4): ContentItem[] {
  return notes
    .filter((item) => item.status !== "draft")
    .sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime()
    )
    .slice(0, limit);
}

export function getFeaturedArchitectures(limit = 6): ContentItem[] {
  return library
    .filter((item) => item.featured)
    .slice(0, limit);
}

export function getContentBySlug(slug: string): ContentItem | undefined {
  return allContent.find((item) => item.slug === slug);
}