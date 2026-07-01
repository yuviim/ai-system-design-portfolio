import { Header } from "../../components/layout/Header";
import { getAllItems } from "../../lib/mdx";

export default function NotesPage() {
  const notes = getAllItems("notes");

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-blue-600">
          Engineering Notes
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.055em]">
          Engineering notes for enterprise AI and modern data platforms.
        </h1>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {notes.map((item) => (
            <a
              key={item.slug}
              href={`/notes/${item.slug}`}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {item.tags[0] ?? "Engineering Note"}
              </span>

              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
                {item.title}
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <p className="mt-8 text-sm font-semibold text-blue-600">
                Read note →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}