import { Header } from "../../../components/layout/Header";
import { getItem } from "../../../lib/mdx";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-14 border-t border-slate-200 pt-10 text-3xl font-black tracking-[-0.05em] text-slate-950"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-5 text-lg leading-9 text-slate-700" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700" {...props} />
  ),
};

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItem("notes", slug);

  if (!item) notFound();

  const { content } = await compileMDX({
    source: item.content,
    components: mdxComponents,
  });

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
          <span>{item.readingTime}</span>
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

        <div className="mt-14">{content}</div>

        {(item.medium || item.linkedin || item.youtube || item.github) && (
          <section className="mt-16 border-t border-slate-200 pt-10">
            <h2 className="text-3xl font-black tracking-[-0.05em]">
              Published Elsewhere
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {item.medium && (
                <a href={item.medium} target="_blank" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black">
                  Medium →
                </a>
              )}
              {item.linkedin && (
                <a href={item.linkedin} target="_blank" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black">
                  LinkedIn →
                </a>
              )}
              {item.youtube && (
                <a href={item.youtube} target="_blank" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black">
                  YouTube →
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black">
                  GitHub →
                </a>
              )}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}