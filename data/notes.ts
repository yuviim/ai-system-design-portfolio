import type { ContentItem } from "@/types/content";

export const notes: ContentItem[] = [
  {
    slug: "why-ai-assistants-need-more-than-database-access",
    title: "Why AI Assistants Need More Than Database Access",
    description:
      "Why enterprise AI assistants need platform knowledge, governance context, and agent skills beyond raw SQL access.",
    category: "note",
    status: "published",
    published: "2026-06-01",
    readingTime: 8,
    featured: true,
    tags: ["Enterprise AI", "Agent Skills", "Data Platforms"],
    series: "Enterprise AI Architecture",
    medium:
      "https://medium.com/@yuvii336_72159/why-ai-assistants-need-more-than-database-access-e30131e5a64f",
  },
  {
    slug: "engineering-ai-gateways-for-enterprise-control",
    title: "Engineering AI Gateways for Enterprise Control",
    description:
      "How AI gateways help enterprises control routing, identity, policy, observability, and model access.",
    category: "note",
    status: "planned",
    published: "2026-06-20",
    readingTime: 10,
    featured: true,
    tags: ["AI Gateway", "Governance", "Enterprise AI"],
  },
  {
    slug: "how-federated-query-systems-work",
    title: "How Federated Query Systems Actually Work",
    description:
      "A practical look at planning, pushdown, execution, movement, and optimization in federated query systems.",
    category: "note",
    status: "published",
    published: "2026-05-20",
    readingTime: 9,
    featured: true,
    tags: ["Federated Query", "Data Platforms", "Query Engines"],
  },
  {
    slug: "inside-an-mpp-database",
    title: "Inside an MPP Database",
    description:
      "How distributed query execution, partitioning, parallelism, and shared-nothing architecture work together.",
    category: "note",
    status: "published",
    published: "2026-05-10",
    readingTime: 11,
    featured: true,
    tags: ["MPP", "Distributed Systems", "Analytics"],
  },
];