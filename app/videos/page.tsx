import { Header } from "../../components/layout/Header";
import { ArrowRight } from "lucide-react";
import fs from "fs";
import path from "path";

type ContentItem = {
  id: string;
  type: string;
  url: string;
  title: string;
  thumbnail: string;
  series: string;
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

function groupBySeries(videos: ContentItem[]) {
  return videos.reduce<Record<string, ContentItem[]>>((acc, video) => {
    const key = video.series || "Other Videos";
    if (!acc[key]) acc[key] = [];
    acc[key].push(video);
    return acc;
  }, {});
}

export default function VideosPage() {
  const videos = getContent().filter((item) => item.type === "youtube");
  const grouped = groupBySeries(videos);

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Enterprise AI Videos
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
          Architecture series, technical walkthroughs, and platform demos.
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {Object.entries(grouped).map(([series, items]) => {
            const latest = items[0];

            return (
              <a
                key={series}
                href={`/videos/${slugify(series)}`}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
              >
                {latest?.thumbnail && (
                  <img
                    src={latest.thumbnail}
                    alt={series}
                    className="mb-6 aspect-video w-full rounded-2xl object-cover"
                  />
                )}

                <p className="text-sm font-semibold text-blue-600">
                  {items.length} videos
                </p>

                <h2 className="mt-3 text-2xl font-medium tracking-[-0.025em]">
                  {series}
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Latest: {latest?.title}
                </p>

                <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  View series <ArrowRight className="h-4 w-4" />
                </p>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}