import { Header } from "../../components/layout/Header";
import { PlayCircle } from "lucide-react";
import fs from "fs";
import path from "path";

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

export default function VideosPage() {
  const videos = getContent().filter((item) => item.type === "youtube");

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Videos
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.035em]">
          Architecture videos, technical walkthroughs, and platform demos.
        </h1>

        {videos.length === 0 ? (
          <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-600">
              No videos added yet. Add one from Content Studio.
            </p>
            <a
              href="/admin/content"
              className="mt-4 inline-block text-sm font-semibold text-blue-600"
            >
              Open Content Studio →
            </a>
          </div>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {videos.map((video) => (
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
                    {video.series || "Video"}
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
        )}
      </section>
    </main>
  );
}