import { Header } from "../../components/layout/Header";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";

type ContentItem = {
  id: string;
  type: string;
  title: string;
  description: string;
  thumbnail: string;
  series: string;
  path?: string;
  episode?: number | null;
  slug?: string;
};

const learningPaths = [
  {
    id: "know-exasol",
    title: "Know Exasol",
    description: "Architecture learning path covering Exasol internals, MPP, storage, memory, execution engine, optimizer, and virtual schema.",
  },
  {
    id: "modern-ai-data-platform",
    title: "Modern AI Data Platform",
    description: "Warehouses, lakehouses, federation, MPP, governance, semantic layers, and AI-ready data platforms.",
  },
  {
    id: "engineering-sovereign-ai-systems",
    title: "Engineering Sovereign AI Systems",
    description: "Trust boundaries, AI gateways, identity, policy engines, regional inference, and data residency.",
  },
  {
    id: "engineering-agentic-enterprise-systems",
    title: "Engineering Agentic Enterprise Systems",
    description: "Agent skills, MCP, secure tool use, policy-aware execution, orchestration, and enterprise agents.",
  },
  {
    id: "nexusiq",
    title: "NexusIQ",
    description: "Reference implementation for enterprise AI knowledge, Text-to-SQL, RAG, federation, and governed analytics.",
  },
  {
    id: "architecture-notes",
    title: "Architecture Notes",
    description: "Standalone articles, diagrams, and technical notes across enterprise AI and data platform architecture.",
  },
];

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default function LibraryPage() {
  const content = getContent();

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Enterprise AI Architecture Library
        </p>

        <h1 className="max-w-5xl text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
          Structured learning paths for enterprise AI and platform architecture.
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {learningPaths.map((pathItem) => {
            const items = content.filter((item) => item.path === pathItem.id);
            const episodes = new Set(items.map((item) => item.slug).filter(Boolean));

            return (
              <a
                key={pathItem.id}
                href={`/library/${pathItem.id}`}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    Learning Path
                  </span>
                  <span className="text-sm font-medium text-slate-500">
                    {episodes.size} topics
                  </span>
                </div>

                <h2 className="text-2xl font-medium tracking-[-0.025em]">
                  {pathItem.title}
                </h2>

                <p className="mt-4 min-h-24 text-sm leading-6 text-slate-600">
                  {pathItem.description}
                </p>

                <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Explore path <ArrowRight className="h-4 w-4" />
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}