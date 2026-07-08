import Link from "next/link";
import { getContentHref } from "../../lib/urls";

type FeaturedItem = {
  id: string;
  title: string;
  description: string;
  series: string;
  slug?: string;
  readingTime?: string;
  type?: string;
  thumbnail?: string;
  image?: string;
  date?: string;
};

export function FeaturedArticle({ item }: { item?: FeaturedItem | null }) {
  if (!item) return null;

  const imageSrc =
    item.thumbnail ||
    item.image ||
    "/images/series/enterprise-agentic-ai.png";

  const href = getContentHref(item);

  return (
    <section className="mx-auto max-w-[1500px] px-8 pb-24">
      <div className="grid gap-10 overflow-hidden rounded-[36px] border border-slate-200 bg-white/95 p-8 shadow-sm backdrop-blur lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
        <div className="flex h-[340px] items-center justify-center overflow-hidden rounded-[28px] bg-slate-50">
        <img
            src={imageSrc}
            alt={item.title}
            className="h-[300px] w-auto rounded-xl shadow-xl transition duration-300 group-hover:scale-[1.02]"
        />
        </div>

        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-blue-600">
            Featured This Week
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.055em] text-slate-950">
            {item.title}
          </h2>

          <p className="mt-4 text-sm font-bold text-slate-500">
            {item.series} ・ Jul 3, 2026 ・ {item.readingTime || "3 min read"} ・{" "}
            {item.type || "Article"}
          </p>

          <p className="mt-7 max-w-4xl text-lg font-medium leading-8 text-slate-700">
            {item.description}
          </p>

          <Link
            href={href}
            className="mt-8 inline-flex rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Read featured article →
          </Link>
        </div>
      </div>
    </section>
  );
}