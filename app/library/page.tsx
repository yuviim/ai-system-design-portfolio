"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Layers3, PlayCircle, Search } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { getContentHref } from "../../lib/urls";
import contentData from "../../data/content.json";
import { series } from "../../data/series";
import { siteStats } from "../../data/stats";

type ContentItem = {
  id: string;
  title: string;
  description?: string;
  type?: string;
  series?: string;
  slug?: string;
  path?: string;
  thumbnail?: string;
  image?: string;
  diagram?: string;
  readingTime?: string;
  date?: string;
  tags?: string[];
};

const content = contentData as ContentItem[];

const filters = [
  "All",
  "Architecture",
  "Article",
  "YouTube",
  "Notes",
  "Enterprise AI",
  "Agentic AI",
  "Sovereign AI",
  "Know Exasol",
];

function getImage(item: ContentItem) {
  return (
    item.thumbnail ||
    item.image ||
    item.diagram ||
    series.find((s) => s.title === item.series || s.id === item.series)?.image ||
    "/images/series/enterprise-agentic-ai.png"
  );
}

function matchesFilter(item: ContentItem, filter: string) {
  if (filter === "All") return true;

  const text = `${item.type} ${item.series} ${item.title} ${
    item.tags?.join(" ") || ""
  }`.toLowerCase();

  return text.includes(filter.toLowerCase());
}

const featuredItem =
  content.find((item) => item.id === "building-enterprise-agentic-ai-systems") ||
  content[0];

export default function LibraryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filteredContent = useMemo(() => {
    return content
      .filter((item) => matchesFilter(item, activeFilter))
      .filter((item) => {
        const searchText = `${item.title} ${item.description || ""} ${
          item.series || ""
        } ${item.tags?.join(" ") || ""}`.toLowerCase();

        return searchText.includes(query.toLowerCase());
      });
  }, [activeFilter, query]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_45%,#eef5ff_100%)] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-blue-600">
              Architecture Library
            </p>

            <h1 className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] md:text-[92px]">
              Explore Enterprise AI architecture.
            </h1>

            <p className="mt-8 max-w-3xl text-xl font-medium leading-9 text-slate-700">
              Articles, diagrams, videos, and implementation notes for modern
              data platforms, agentic systems, sovereign AI, and enterprise AI
              architecture.
            </p>
          </div>

          {featuredItem && (
            <Link
              href={getContentHref(featuredItem)}
              className="group rounded-[36px] border border-slate-200 bg-white/95 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(37,99,235,0.14)]"
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                Featured Architecture
              </p>

              <div className="flex gap-5">
                <div className="h-40 w-32 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={getImage(featuredItem)}
                    alt={featuredItem.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.05em]">
                    {featuredItem.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-sm font-medium leading-6 text-slate-600">
                    {featuredItem.description}
                  </p>

                  <p className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-blue-600">
                    Read now <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </div>
            </Link>
          )}
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            [`${siteStats.articles}+`, "Articles", BookOpen],
            [`${siteStats.architectures}+`, "Architectures", Layers3],
            [`${siteStats.videos}+`, "Videos", PlayCircle],
            [`${siteStats.series}+`, "Series", Layers3],
          ].map(([value, label, Icon]) => {
            const IconComponent = Icon as typeof BookOpen;

            return (
              <div
                key={label as string}
                className="rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <IconComponent className="h-6 w-6" />
                </div>

                <p className="text-4xl font-bold tracking-[-0.06em] text-blue-600">
                  {value as string}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-600">
                  {label as string}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-12 rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-5">
            <div className="relative w-full">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search architecture, agents, governance, Exasol, RAG, MCP..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-5 pl-14 pr-5 text-sm font-semibold outline-none transition focus:border-blue-300 focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-2xl px-4 py-3 text-xs font-bold transition ${
                    activeFilter === filter
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                Latest Knowledge
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.055em]">
                {filteredContent.length} resources found.
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredContent.map((item) => (
              <Link
                key={item.id}
                href={getContentHref(item)}
                className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(37,99,235,0.14)]"
              >
                <div className="overflow-hidden rounded-[26px] bg-slate-100">
                  <img
                    src={getImage(item)}
                    alt={item.title}
                    className="h-[340px] w-full object-contain bg-slate-50 p-4 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[280px] flex-col px-3 pb-4 pt-7">
                  <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    <span>{item.type || "Article"}</span>
                    <span className="text-slate-300">•</span>
                    <span>{item.series || "Architecture"}</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-[1.02] tracking-[-0.06em] text-slate-950">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-5 text-base font-medium leading-7 text-slate-600">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {(item.tags || []).slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 text-sm font-bold text-blue-600">
                    <span>{item.readingTime || "Read"}</span>
                    <span className="inline-flex items-center gap-1">
                      Open <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[44px] border border-slate-200 bg-white/90 p-8 shadow-sm">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
            Architecture Collections
          </p>

          <h2 className="mb-8 text-5xl font-semibold tracking-[-0.06em]">
            Explore by architecture domain.
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {series.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="overflow-hidden rounded-[24px] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}