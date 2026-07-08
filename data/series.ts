export interface Series {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
  accent: string;
  topics: string[];
}

export const series: Series[] = [
  {
    id: "modern-ai-data-platforms",
    slug: "modern-ai-data-platforms",
    title: "Modern AI Data Platforms",
    description:
      "Warehouses • Lakehouses • Federation • MPP",
    image: "/images/series/modern-ai-data-platforms.png",
    href: "/library/modern-ai-data-platform",
    accent: "blue",
    topics: [
      "Warehouses",
      "Lakehouses",
      "Federation",
      "MPP",
    ],
  },

  {
    id: "enterprise-ai-systems",
    slug: "enterprise-ai-systems",
    title: "Enterprise AI Systems",
    description:
      "AI Gateways • Policy Engines • Audit • Governance",
    image: "/images/series/enterprise-ai-systems.png",
    href: "/library",
    accent: "purple",
    topics: [
      "AI Gateways",
      "Policy",
      "Audit",
      "Governance",
    ],
  },

  {
    id: "enterprise-agentic-ai",
    slug: "enterprise-agentic-ai",
    title: "Agentic AI Architecture",
    description:
      "Agents • MCP • Tool Use • Orchestration",
    image: "/images/series/enterprise-agentic-ai.png",
    href: "/library/building-enterprise-agentic-ai-systems",
    accent: "teal",
    topics: [
      "Agents",
      "MCP",
      "Tool Use",
      "Orchestration",
    ],
  },

  {
    id: "sovereign-ai-systems",
    slug: "sovereign-ai-systems",
    title: "Sovereign AI Systems",
    description:
      "Trust Boundaries • Residency • Compliance • Control",
    image: "/images/series/sovereign-ai-systems.png",
    href: "/library/engineering-sovereign-ai-systems",
    accent: "blue",
    topics: [
      "Trust",
      "Residency",
      "Compliance",
      "Control",
    ],
  },

  {
    id: "know-exasol",
    slug: "know-exasol",
    title: "Know Exasol",
    description:
      "MPP • Optimizer • Execution • Memory • Federation",
    image: "/images/series/know-exasol.png",
    href: "/library/know-exasol",
    accent: "green",
    topics: [
      "MPP",
      "Optimizer",
      "Execution",
      "Federation",
    ],
  },
];