import content from "./content.json";

type ContentItem = {
  type?: string;
  diagram?: string;
  series?: string;
};

export const siteStats = {
  experience: 18,

  architectures: content.filter(
    (item: ContentItem) => item.type === "architecture" || item.diagram
  ).length,

  videos: content.filter((item: ContentItem) => item.type === "youtube").length,

  articles: content.filter((item: ContentItem) => item.type === "article").length,

  series: new Set(
    content.map((item: ContentItem) => item.series).filter(Boolean)
  ).size,
};