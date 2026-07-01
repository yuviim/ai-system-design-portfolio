import { Header } from "../../../components/layout/Header";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

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
  order?: number;
};

const pathTitles: Record<string, string> = {
  "know-exasol": "Know Exasol",
  "modern-ai-data-platform": "Modern AI Data Platform",
  "engineering-sovereign-ai-systems": "Engineering Sovereign AI Systems",
  "engineering-agentic-enterprise-systems": "Engineering Agentic Enterprise Systems",
  nexusiq: "NexusIQ",
  "architecture-notes": "Architecture Notes",
};

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export default async function LearningPathPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path: pathId } = await params;
  const title = pathTitles[pathId];

  if (!title) notFound();

  const items = getContent().filter((item) => item.path === pathId);

  const grouped = Object.values(
    items.reduce<Record<string, ContentItem[]>>((acc, item) => {
      const key = item.slug || item.id;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {})
  ).sort((a, b) => (a[0].order || 999) - (b[0].order || 999));

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <a href="/library" className="text-sm font-semibold text-blue-600">
          ← Back to Architecture Library
        </a>

        <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Learning Path
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
          {title}
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          {grouped.length} topics
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {grouped.map((resources) => {
            const first = resources[0];
            const hero = resources.find((item) => item.thumbnail) || first;

            return (
              <a
                key={first.slug || first.id}
                href={`/library/${pathId}/${first.slug}`}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
              >
                {hero.thumbnail && (
                  <img
                    src={hero.thumbnail}
                    alt={first.title}
                    className="mb-6 aspect-video w-full rounded-2xl object-cover"
                  />
                )}

                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-blue-600">
                    {first.episode !== null && first.episode !== undefined
                      ? `Episode ${first.episode}`
                      : "Topic"}
                  </p>

                  <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                    {resources.length} resources
                  </span>
                </div>

                <h2 className="text-2xl font-medium tracking-[-0.025em]">
                  {first.title}
                </h2>

                {first.description && (
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
                    {first.description}
                  </p>
                )}

                <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Open topic <ArrowRight className="h-4 w-4" />
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}