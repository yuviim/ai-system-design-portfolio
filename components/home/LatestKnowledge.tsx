import Link from "next/link";
import { BookOpen, FileText, PlayCircle } from "lucide-react";
import { PlatformLinks } from "../content/PlatformLinks";
import {
  ContentItem,
  formatDate,
  getContentHref,
  getContentImage,
  getTypeLabel,
} from "../../lib/content";

function getTypeIcon(type: string) {
  if (type === "youtube") return PlayCircle;
  if (type === "architecture") return BookOpen;
  return FileText;
}

export function LatestKnowledge({ items }: { items: ContentItem[] }) {
  return (
    <section className="mx-auto max-w-[1500px] px-8 pb-24">
      <div className="mb-8 flex items-end justify-between border-t border-slate-200 pt-12">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
            Latest Knowledge
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
            Articles, videos, notes, and architecture updates.
          </h2>
        </div>

        <Link href="/library" className="text-sm font-bold text-blue-600">
          View all →
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const href = getContentHref(item);
          const Icon = getTypeIcon(item.type);

          return (
            <article
              key={item.id}
              className="group grid gap-5 rounded-[30px] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 md:grid-cols-[220px_1fr]"
            >
              <Link href={href} className="overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={getContentImage(item)}
                  alt={item.title}
                  className="aspect-[16/11] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-col px-1 py-2">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-4 w-4" />
                  </span>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    {getTypeLabel(item.type)}
                  </p>
                </div>

                <Link href={href}>
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.035em] text-slate-950 transition hover:text-blue-600">
                    {item.title}
                  </h3>
                </Link>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
                  <span>{item.series}</span>
                  {item.published && (
                    <>
                      <span>•</span>
                      <span>{formatDate(item.published)}</span>
                    </>
                  )}
                  {item.readingTime && (
                    <>
                      <span>•</span>
                      <span>{item.readingTime}</span>
                    </>
                  )}
                </div>

                {item.description && (
                  <p className="mt-4 line-clamp-3 text-sm font-medium leading-6 text-slate-700">
                    {item.description}
                  </p>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                  <PlatformLinks
                    mediumUrl={item.mediumUrl}
                    linkedinUrl={item.linkedinUrl}
                    youtubeUrl={item.youtubeUrl}
                    githubUrl={item.githubUrl}
                    slidesUrl={item.slidesUrl}
                  />

                  <Link href={href} className="text-sm font-bold text-blue-600">
                    Open →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}