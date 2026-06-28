export type ContentCategory = "note" | "architecture" | "series" | "video";

export type ContentStatus = "published" | "draft" | "planned";

export interface ContentLink {
  label: string;
  url: string;
}

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  category: ContentCategory;
  status: ContentStatus;
  published: string;
  readingTime?: number;
  featured?: boolean;
  tags: string[];
  series?: string;
  youtube?: string;
  linkedin?: string;
  medium?: string;
  github?: string;
  official?: ContentLink[];
  references?: ContentLink[];
}