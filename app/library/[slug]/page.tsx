import { Header } from "@/components/layout/Header";
import { getContentBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function LibraryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getContentBySlug(slug);

  if (!item || item.category !== "architecture") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <article className="mx-auto max-w-4xl px-8 py-20">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
          Reference Architecture
        </p>

        <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.085em]">
          {item.title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          {item.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-10">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            Architecture Overview
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page will contain the architecture diagram, design rationale,
            trade-offs, implementation notes, related videos, and references.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            What this architecture explains
          </h2>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
            <li>• The core problem this architecture solves.</li>
            <li>• The main components and trust boundaries.</li>
            <li>• How data, identity, policy, and execution flow through the system.</li>
            <li>• Trade-offs and implementation considerations.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}