import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  PlayCircle,
} from "lucide-react";
import { Header } from "../../../../components/layout/Header";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type ContentItem = {
  id: string;
  type: string;
  url: string;
  videoId?: string;

  title: string;
  description: string;

  thumbnail?: string;
  diagram?: string;
  content?: string;

  series: string;
  path?: string;
  episode?: number | null;
  slug?: string;

  readingTime?: string;
  tags?: string[];

  mediumUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
};

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getResourceLabel(type: string) {
  if (type === "youtube") return "Watch video";
  if (type === "medium") return "Read article";
  if (type === "linkedin") return "LinkedIn post";
  if (type === "architecture") return "Open architecture";
  return "Open resource";
}

function getResourceIcon(type: string) {
  if (type === "youtube") return PlayCircle;
  if (type === "medium") return BookOpen;
  if (type === "architecture") return BookOpen;
  return FileText;
}

function renderMarkdown(content?: string) {
  if (!content) return null;

  return content.split("\n").map((line, index) => {
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="mt-10 text-2xl font-bold tracking-[-0.03em] text-slate-950">
          {line.replace("### ", "")}
        </h3>
      );
    }

    if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-14 text-3xl font-bold tracking-[-0.04em] text-slate-950">
          {line.replace("## ", "")}
        </h2>
      );
    }

    if (line.startsWith("# ")) {
      return (
        <h1 key={index} className="mt-14 text-4xl font-bold tracking-[-0.05em] text-slate-950">
          {line.replace("# ", "")}
        </h1>
      );
    }

    if (line.startsWith("- ")) {
      return (
        <li key={index} className="ml-6 list-disc text-lg leading-8 text-slate-700">
          {line.replace("- ", "")}
        </li>
      );
    }

    if (!line.trim()) return <div key={index} className="h-4" />;

    return (
      <p key={index} className="text-lg leading-9 text-slate-700">
        {line}
      </p>
    );
  });
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ path: string; slug: string }>;
}) {
  const { path: pathId, slug } = await params;

  const allContent = getContent();

  const resources = allContent.filter(
    (item) => item.path === pathId && item.slug === slug
  );

  if (resources.length === 0) notFound();

  const item = resources[0];

  const video = resources.find((resource) => resource.type === "youtube");

  const heroImage =
    item.diagram ||
    item.thumbnail ||
    resources.find((resource) => resource.diagram)?.diagram ||
    resources.find((resource) => resource.thumbnail)?.thumbnail;

  const readingTime = item.readingTime || "5 min read";

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-6xl px-8 py-16">
        <Link
          href={`/library/${pathId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {item.series}
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
            {item.series}
          </p>

          <h1 className="text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
            {item.title}
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-700">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime}
            </span>

            {video && (
              <span className="inline-flex items-center gap-2">
                <PlayCircle className="h-4 w-4" />
                Video
              </span>
            )}

            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Architecture
            </span>
          </div>
        </div>

        {heroImage && (
          <div className="my-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <img src={heroImage} alt={item.title} className="h-auto w-full" />
          </div>
        )}

        <section className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.03em]">
            Overview
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            {item.description ||
              "This topic explains one of the core architectural building blocks used inside modern analytical data platforms."}
          </p>
        </section>

        {item.diagram && item.diagram !== heroImage && (
          <section className="mx-auto mt-20 max-w-6xl">
            <h2 className="mb-8 text-3xl font-medium tracking-[-0.03em]">
              Architecture Diagram
            </h2>

            <img
              src={item.diagram}
              alt={item.title}
              className="w-full rounded-[28px] border border-slate-200 bg-white shadow-sm"
            />
          </section>
        )}

        {item.content && (
          <section className="mx-auto mt-16 max-w-3xl">
            <div>{renderMarkdown(item.content)}</div>
          </section>
        )}

        {video?.videoId && (
          <section className="mx-auto mt-20 max-w-4xl">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">
              Watch the walkthrough
            </h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-medium tracking-[-0.03em]">
            Key Takeaways
          </h2>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
            <li>Understand the engineering motivation behind this topic.</li>
            <li>See where it fits in enterprise AI and data architecture.</li>
            <li>Connect the concept to practical platform implementation.</li>
          </ul>
        </section>

        {resources.length > 0 && (
          <section className="mx-auto mt-20 max-w-4xl border-t border-slate-200 pt-12">
            <h2 className="text-3xl font-medium tracking-[-0.03em]">
              Resources
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {resources.map((resource) => {
                const Icon = getResourceIcon(resource.type);
                const resourceHref =
                  resource.url ||
                  resource.mediumUrl ||
                  resource.linkedinUrl ||
                  resource.youtubeUrl ||
                  `/library/${resource.path}/${resource.slug}`;

                return (
                  <a
                    key={resource.id}
                    href={resourceHref}
                    target={resourceHref.startsWith("http") ? "_blank" : undefined}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="text-sm font-semibold uppercase text-blue-600">
                      {resource.type}
                    </p>

                    <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">
                      {resource.title}
                    </h3>

                    <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      {getResourceLabel(resource.type)}
                      <ArrowRight className="h-4 w-4" />
                    </p>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}