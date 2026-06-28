import { Header } from "@/components/layout/Header";
import { getContentBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item || item.category !== "note") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <article className="mx-auto max-w-4xl px-8 py-20">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
          Engineering Note
        </p>

        <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.085em]">
          {item.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-slate-500">
          <span>{item.readingTime ?? 8} min read</span>
          <span>•</span>
          <span>{item.published}</span>
          {item.series && (
            <>
              <span>•</span>
              <span>{item.series}</span>
            </>
          )}
        </div>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          {item.description}
        </p>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-10">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            Article Body Placeholder
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page will become the full engineering note with diagrams,
            explanations, implementation details, references, and links to
            LinkedIn, Medium, YouTube, GitHub, and official articles.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            External Links
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {item.medium && (
              <a
                href={item.medium}
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 hover:text-blue-600"
              >
                Medium →
              </a>
            )}

            {item.linkedin && (
              <a className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 hover:text-blue-600">
                LinkedIn →
              </a>
            )}

            {item.youtube && (
              <a className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 hover:text-blue-600">
                YouTube →
              </a>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}