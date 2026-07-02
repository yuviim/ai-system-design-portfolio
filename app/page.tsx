import Link from "next/link";
import fs from "fs";
import path from "path";
import {
  BookOpen,
  BrainCircuit,
  Database,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "../components/layout/Header";
import { PlatformLinks } from "../components/content/PlatformLinks";

type ContentItem = {
  id: string;
  type: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  series: string;
  path?: string;
  slug?: string;
  mediumUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
  diagram?: string;
  websiteSlug?: string;
  readingTime?: string;
  featured?: boolean;
  published?: string;
};

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");

  if (!fs.existsSync(filePath)) return [];

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return [];
  }
}

function formatDate(date?: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const libraryCards = [
  {
    title: "Modern AI Data Platforms",
    text: "Warehouses • Lakehouses • Federation • MPP",
    href: "/library/modern-ai-data-platform",
    image: "/images/library/modern-ai-data-platform.png",
  },
  {
    title: "Enterprise AI Systems",
    text: "AI Gateways • Policy Engines • Audit • Governance",
    href: "/library",
    image: "/images/library/enterprise-ai-systems.png",
  },
  {
    title: "Agentic AI Architecture",
    text: "Agents • MCP • Tool Use • Orchestration",
    href: "/library/engineering-agentic-enterprise-systems",
    image: "/images/library/agentic-ai-architecture.png",
  },
  {
    title: "Sovereign AI Systems",
    text: "Trust Boundaries • Residency • Compliance • Control",
    href: "/library/engineering-sovereign-ai-systems",
    image: "/images/library/sovereign-ai-systems.png",
  },
  {
    title: "Know Exasol",
    text: "MPP • Optimizer • Execution • Memory • Federation",
    href: "/library/know-exasol",
    image: "/images/library/know-exasol.png",
  },
];

export default function HomePage() {
  const content = getContent();

  const latestVideos = content
    .filter((item) => item.type === "youtube")
    .slice(0, 4);

  const latestArticles = content
    .filter(
      (item) =>
        item.type === "architecture" ||
        item.type === "medium" ||
        item.type === "linkedin" ||
        item.type === "article" ||
        item.type === "note"
    )
    .sort(
      (a, b) =>
        new Date(b.published || 0).getTime() -
        new Date(a.published || 0).getTime()
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.06),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_45%,#f1f5f9_100%)] text-slate-950">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-slate-300/30 blur-[140px]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-5 w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 ring-1 ring-blue-100">
              Enterprise AI Architecture Library
            </p>

            <h1 className="max-w-4xl text-7xl font-semibold leading-[0.95] tracking-[-0.07em] text-slate-950">
              Practical Reference Architectures for Enterprise AI Systems.
            </h1>

            <p className="mt-7 max-w-2xl text-[20px] font-medium leading-9 text-slate-700">
              I design, build, and explain the systems behind modern AI —
              from AI gateways and agentic workflows to governed data platforms,
              federation, and enterprise architecture patterns.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/library"
                className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore Architecture Library →
              </Link>

              <Link
                href="/library/nexusiq"
                className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition hover:border-blue-200"
              >
                Explore NexusIQ
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-4 gap-8">
              {[
                ["18+", "Years Experience"],
                ["AI", "Platform Architect"],
                ["NexusIQ", "Reference Platform"],
                ["EU", "Career Target"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-bold tracking-[-0.03em] text-slate-950">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium leading-5 text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle,rgba(37,99,235,0.14)_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="relative w-full max-w-[650px] rounded-[34px] border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                    Flagship Reference Platform
                  </p>
                  <h2 className="mt-2 text-5xl font-bold tracking-[-0.06em] text-slate-950">
                    NexusIQ
                  </h2>
                </div>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                  Live Platform
                </span>
              </div>

              <p className="mb-6 text-[17px] font-medium leading-7 text-slate-700">
                Enterprise AI playground for Text-to-SQL, RAG, federated query,
                governance, research intelligence, and architecture demos.
              </p>

              <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4 shadow-xl">
                <div className="rounded-[22px] bg-white p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-bold text-slate-950">
                      NexusIQ Dashboard
                    </p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      Enterprise AI
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {[
                      ["AI SQL", "Ask data"],
                      ["RAG", "Documents"],
                      ["Federation", "Sources"],
                      ["Governance", "Access"],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="text-sm font-bold text-slate-950">
                          {title}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-600">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      [
                        "Research Studio",
                        ["Competitor signals", "Product gaps", "Strategy brief"],
                      ],
                      [
                        "AI + SQL Lab",
                        [
                          "Natural language query",
                          "Governed execution",
                          "Explain plan",
                        ],
                      ],
                    ].map(([title, rows]) => (
                      <div
                        key={title as string}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <p className="mb-3 text-sm font-bold text-slate-950">
                          {title as string}
                        </p>
                        {(rows as string[]).map((item) => (
                          <p
                            key={item}
                            className="border-t border-slate-200 py-2 text-xs font-medium text-slate-700"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 flex gap-4">
                <Link
                  href="/library/nexusiq"
                  className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20"
                >
                  Explore NexusIQ →
                </Link>

                <Link
                  href="/videos"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-900"
                >
                  Watch demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXUSIQ FLAGSHIP */}
      <section className="mx-auto max-w-[1500px] px-8 py-24">
        <div className="grid gap-12 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              NexusIQ
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">
              The flagship system behind the work.
            </h2>

            <p className="mt-6 text-[18px] font-medium leading-8 text-slate-700">
              NexusIQ is the reference platform where enterprise AI architecture
              patterns become working software — AI SQL, RAG, federation,
              governance, research intelligence, and product strategy workflows.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Text-to-SQL",
                "Enterprise RAG",
                "Federated Query",
                "Research Studio",
                "Governance",
                "Architecture Demos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc]/90 px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/library/nexusiq"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
              >
                Open NexusIQ →
              </Link>

              <Link
                href="/videos"
                className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-bold text-slate-900"
              >
                Watch walkthroughs
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-slate-50/80 p-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-lg font-bold text-slate-950">
                  Enterprise AI Execution Flow
                </p>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                  Reference Architecture
                </span>
              </div>

              {[
                ["User", "Applications • APIs • Humans", Sparkles],
                ["AI Gateway", "Routing • Authentication • Guardrails", BrainCircuit],
                ["Policy Engine", "Governance • Audit • Compliance", ShieldCheck],
                ["Knowledge & Skills", "MCP • Enterprise APIs • RAG", BookOpen],
                ["Data Platform", "Federation • Optimization • Analytics", Database],
              ].map(([title, text, Icon]) => {
                const StepIcon = Icon as typeof Sparkles;

                return (
                  <div key={title as string} className="mb-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-950">
                          {title as string}
                        </p>
                        <p className="text-sm font-medium text-slate-700">
                          {text as string}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-5 grid grid-cols-4 gap-3">
                {["Exasol", "Snowflake", "Iceberg", "BigQuery"].map((name) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center text-sm font-bold text-slate-900"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE LIBRARY */}
      <section className="relative mx-auto max-w-[1500px] px-8 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              Architecture Library
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.055em] text-slate-950">
              Learn the systems behind modern AI.
            </h2>
          </div>

          <Link
            href="/library"
            className="hidden rounded-2xl border border-slate-200 bg-white/90 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition hover:border-blue-200 md:block"
          >
            View all library →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {libraryCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(37,99,235,0.14)]"
            >
              <div className="overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-[250px] flex-col px-3 pb-4 pt-6">
                <h3 className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-slate-950">
                  {card.title}
                </h3>

                <p className="mt-5 text-base font-medium leading-7 text-slate-700">
                  {card.text}
                </p>

                <p className="mt-auto pt-6 text-sm font-bold text-blue-600">
                  Open Library →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED LEARNING PATH */}
      <section className="mx-auto max-w-[1500px] px-8 pb-20">
        <div className="grid gap-10 rounded-[36px] border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur lg:grid-cols-[0.8fr_1.2fr]">
          <div className="p-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Featured Learning Path
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">
              Know Exasol
            </h2>

            <p className="mt-6 text-[18px] font-medium leading-8 text-slate-700">
              A practical architecture series explaining analytical database
              internals: MPP, columnar storage, memory, optimizer, execution
              engine, and federation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "MPP Architecture",
                "Columnar Storage",
                "In-Memory Processing",
                "Execution Engine",
                "Optimizer",
                "Federation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc]/90 px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/library/know-exasol"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
              >
                Open Know Exasol →
              </Link>

              <Link
                href="/videos"
                className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-bold text-slate-900"
              >
                Watch videos
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 p-4 shadow-xl shadow-slate-200">
            <img
              src="/images/library/know-exasol.png"
              alt="Know Exasol"
              className="h-full min-h-[360px] w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ARCHITECTURE NOTES */}
      <section className="mx-auto max-w-[1500px] px-8 py-10">
        <div className="mb-8 flex items-end justify-between border-t border-slate-200 pt-12">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Engineering Library
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Latest Engineering Notes
            </h2>
          </div>

          <Link href="/notes" className="text-sm font-bold text-blue-600">
            View all articles →
          </Link>
        </div>

        <div className="space-y-5">
          {latestArticles.length > 0 ? (
            latestArticles.map((article) => {
              const articleHref =
                article.path && article.slug
                  ? `/library/${article.path}/${article.slug}`
                  : article.websiteSlug ||
                    article.mediumUrl ||
                    article.linkedinUrl ||
                    article.url ||
                    "#";

              const fallbackImage =
                article.series === "Running AI Inside SQL"
                  ? "/images/library/modern-ai-data-platform.png"
                  : article.slug === "connecting-claude-desktop"
                  ? "/images/library/agentic-ai-architecture.png"
                  : article.series === "Know Exasol"
                  ? "/images/library/know-exasol.png"
                  : "/images/library/enterprise-ai-systems.png";

              return (
                <article
                  key={article.id}
                  className="group grid gap-6 rounded-[30px] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 md:grid-cols-[360px_1fr]"
                >
                  <a
                    href={articleHref}
                    target={articleHref.startsWith("http") ? "_blank" : undefined}
                    className="overflow-hidden rounded-[24px] bg-slate-100"
                  >
                    <img
                      src={article.diagram || article.thumbnail || fallbackImage}
                      alt={article.title}
                      className="aspect-[16/10] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </a>

                                    <div className="flex flex-col px-2 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                      {article.type === "architecture"
                        ? "Engineering Note"
                        : article.type === "medium"
                        ? "Medium Article"
                        : article.type === "linkedin"
                        ? "LinkedIn Post"
                        : article.type === "youtube"
                        ? "YouTube Video"
                        : "Engineering Note"}
                    </p>

                    <a
                      href={articleHref}
                      target={articleHref.startsWith("http") ? "_blank" : undefined}
                      className="mt-3"
                    >
                      <h3 className="max-w-4xl text-2xl font-bold leading-tight tracking-[-0.035em] text-slate-950 transition hover:text-blue-600">
                        {article.title}
                      </h3>
                    </a>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[15px] font-medium text-slate-600">
                      <span>{article.series}</span>

                      {article.published && (
                        <>
                          <span>•</span>
                          <span>{formatDate(article.published)}</span>
                        </>
                      )}

                      {article.readingTime && (
                        <>
                          <span>•</span>
                          <span>{article.readingTime}</span>
                        </>
                      )}
                    </div>

                    {article.diagram && (
                      <div className="mt-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        Architecture diagram included
                      </div>
                    )}

                    {article.description && (
                      <p className="mt-4 max-w-3xl text-[16px] font-medium leading-7 text-slate-700">
                        {article.description}
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                      <PlatformLinks
                        mediumUrl={article.mediumUrl}
                        linkedinUrl={article.linkedinUrl}
                        youtubeUrl={article.youtubeUrl}
                        githubUrl={article.githubUrl}
                        slidesUrl={article.slidesUrl}
                      />

                      <a
                        href={articleHref}
                        target={articleHref.startsWith("http") ? "_blank" : undefined}
                        className="text-sm font-bold text-blue-600 transition group-hover:translate-x-1"
                      >
                        Read article →
                      </a>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm font-medium text-slate-600 backdrop-blur">
              Articles will appear here when added from Content Studio.
            </div>
          )}
        </div>
      </section>

      {/* LATEST VIDEOS */}
      <section className="mx-auto max-w-[1500px] px-8 py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              Latest Videos
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Visual architecture walkthroughs.
            </h2>
          </div>

          <Link href="/videos" className="text-sm font-bold text-blue-600">
            View all videos →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {latestVideos.map((video) => (
            <a key={video.id} href={video.url} target="_blank" className="group">
              {video.thumbnail && (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="aspect-video w-full rounded-3xl object-cover shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-100"
                />
              )}

              <p className="mt-4 text-xs font-bold uppercase text-blue-600">
                {video.series}
              </p>

              <h3 className="mt-2 text-base font-bold leading-6 text-slate-950">
                {video.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1500px] px-8 pb-20 pt-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-sm backdrop-blur">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-[120px]" />

          <div className="relative grid gap-8 md:grid-cols-[0.8fr_1fr_0.4fr] md:items-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Building and explaining enterprise AI architecture.
            </h2>

            <p className="text-lg font-medium leading-8 text-slate-700">
              A growing library of reference architectures, diagrams, videos,
              and implementation notes for practical enterprise AI systems.
            </p>

            <Link
              href="/about"
              className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-bold text-white"
            >
              About Yuvaraj →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}