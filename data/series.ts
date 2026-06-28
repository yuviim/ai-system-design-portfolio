import type { ContentItem } from "@/types/content";

export const series: ContentItem[] = [
  {
    slug: "modern-ai-data-platform-architecture",
    title: "Modern AI Data Platform Architecture",
    description:
      "A flagship educational series on warehouses, lakehouses, federation, governance, and AI execution.",
    category: "series",
    status: "published",
    published: "2026-05-01",
    featured: true,
    tags: ["Data Platforms", "Enterprise AI", "Architecture"],
    youtube: "",
  },
  {
    slug: "engineering-sovereign-ai-systems",
    title: "Engineering Sovereign AI Systems",
    description:
      "Architecture-first exploration of trust boundaries, identity, data residency, AI gateways, and secure RAG.",
    category: "series",
    status: "published",
    published: "2026-06-20",
    featured: true,
    tags: ["AI Sovereignty", "Governance", "Enterprise AI"],
  },
  {
    slug: "know-exasol",
    title: "Know Exasol",
    description:
      "Technical education series covering Exasol internals, MPP, columnar storage, optimizer, compiler, and AI integrations.",
    category: "series",
    status: "published",
    published: "2026-05-01",
    featured: true,
    tags: ["Exasol", "MPP", "Data Platforms"],
  },
];