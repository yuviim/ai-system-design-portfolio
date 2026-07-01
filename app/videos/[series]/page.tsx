import { Header } from "../../../components/layout/Header";
import { PlayCircle } from "lucide-react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type ContentItem = {
  id: string;
  type: string;
  url: string;
  title: string;
  description: string;
  thumbnail: string;
  series: string;
  duration: string;
  tags: string[];
  published: string;
};

function getContent(): ContentItem[] {
  const filePath = path.join(process.cwd(), "data", "content.json");
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function VideoSeriesPage({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const { series } = await params;

  const videos = getContent().filter((item) => item.type === "youtube");

  const matchedVideos = videos.filter(
    (video) => slugify(video.series || "Other Videos") === series
  );

  if (matchedVideos.length === 0) {
    notFound();
  }

  const seriesTitle = matchedVideos[0].series;

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <a href="/videos" className="text-sm font-semibold text-blue-600">
          ← Back to videos
        </a>

        <p className="mt-10 mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Learning Path
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
          {seriesTitle}
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          {matchedVideos.length} videos
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {matchedVideos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
            >
              {video.thumbnail && (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="mb-6 aspect-video w-full rounded-2xl object-cover"
                />
              )}

              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-blue-600">
                  {video.series}
                </p>

                <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-slate-200">
                  {video.duration || "Video"}
                </span>
              </div>

              <h2 className="text-2xl font-medium tracking-[-0.025em]">
                {video.title}
              </h2>

              {video.description && (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {video.description}
                </p>
              )}

              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                <PlayCircle className="h-4 w-4" />
                Watch on YouTube →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}