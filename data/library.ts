import type { ContentItem } from "@/types/content";

export const library: ContentItem[] = [
  {
    slug: "enterprise-ai-gateway",
    title: "Enterprise AI Gateway",
    description:
      "Routing, policy enforcement, observability, model access, and audit for enterprise AI systems.",
    category: "architecture",
    status: "planned",
    published: "2026-06-28",
    readingTime: 12,
    featured: true,
    tags: ["AI Gateway", "Governance", "Enterprise AI"],
  },
  {
    slug: "federated-query",
    title: "Federated Query",
    description:
      "Querying across warehouses, lakehouses, SaaS applications, and operational systems without copying everything first.",
    category: "architecture",
    status: "published",
    published: "2026-05-20",
    readingTime: 10,
    featured: true,
    tags: ["Federation", "Data Platforms", "Query Engines"],
  },
  {
    slug: "enterprise-rag",
    title: "Enterprise RAG",
    description:
      "Secure retrieval architecture with identity, permissions, vector search, and governed context delivery.",
    category: "architecture",
    status: "planned",
    published: "2026-06-28",
    readingTime: 12,
    featured: true,
    tags: ["RAG", "Vector Search", "Enterprise AI"],
  },
  {
    slug: "mpp-architecture",
    title: "MPP Architecture",
    description:
      "Distributed execution, data partitioning, shared-nothing compute, query planning, and workload scale.",
    category: "architecture",
    status: "published",
    published: "2026-05-10",
    readingTime: 11,
    featured: true,
    tags: ["MPP", "Distributed Systems", "Analytics"],
  },
  {
    slug: "lakehouse-architecture",
    title: "Lakehouse Architecture",
    description:
      "Open table formats, object storage, catalogs, query engines, and analytical execution patterns.",
    category: "architecture",
    status: "planned",
    published: "2026-06-28",
    readingTime: 10,
    featured: true,
    tags: ["Lakehouse", "Iceberg", "Delta Lake"],
  },
  {
    slug: "identity-and-policy",
    title: "Identity & Policy",
    description:
      "How authentication, authorization, role mapping, and policy decisions shape AI platform behavior.",
    category: "architecture",
    status: "planned",
    published: "2026-06-28",
    readingTime: 9,
    featured: true,
    tags: ["Identity", "Policy", "AI Governance"],
  },
];