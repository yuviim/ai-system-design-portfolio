import { Header } from "@/components/layout/Header";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-20">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
          Engineering Notes
        </p>

        <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.085em]">
          Technical notes on enterprise AI, data platforms, and distributed systems.
        </h1>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {notes.map((item) => (
            <a
              key={item.slug}
              href={`/notes/${item.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.08)]"
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">
                {item.tags[0]}
              </span>

              <h2 className="mt-8 text-3xl font-black tracking-[-0.055em]">
                {item.title}
              </h2>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <p className="mt-8 text-sm font-black text-blue-600">
                Read note →
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}