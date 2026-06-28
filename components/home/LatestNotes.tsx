import { getLatestNotes } from "@/lib/content";

export function LatestNotes() {
  const latestNotes = getLatestNotes(4);

  return (
    <section id="notes" className="border-b border-slate-200 bg-[#f7fbff]">
      <div className="mx-auto max-w-[1500px] px-8 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              Engineering Notes
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.075em] text-slate-950">
              Latest architecture thinking.
            </h2>
          </div>

          <a href="/notes" className="text-sm font-black text-blue-600">
            View all notes →
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {latestNotes.map((note) => (
            <article
              key={note.slug}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.08)]"
            >
              <div className="mb-6 rounded-2xl border border-slate-200 bg-blue-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                  {note.tags[0]}
                </p>
              </div>

              <h3 className="min-h-20 text-xl font-black leading-tight tracking-[-0.045em] text-slate-950">
                {note.title}
              </h3>

              <p className="mt-4 min-h-24 text-sm leading-6 text-slate-600">
                {note.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 text-xs">
                <span className="font-bold text-slate-500">
                  {note.readingTime ?? 8} min read
                </span>

                <a
                  href={`/notes/${note.slug}`}
                  className="font-black text-blue-600 transition group-hover:translate-x-1"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}