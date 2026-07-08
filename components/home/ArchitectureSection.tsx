import Link from "next/link";
import { series } from "@/data/series";

export function ArchitectureLibrary() {
  return (
    <section className="relative mx-auto max-w-[1500px] px-8 pb-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
            Architecture Library
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] leading-tight text-slate-950">
            Learn the systems behind modern AI.
          </h2>
        </div>

        <Link
          href="/library"
          className="hidden rounded-2xl border border-slate-200 bg-white/90 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition hover:border-blue-200 md:block"
        >
          View all library →
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {series.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(37,99,235,0.14)]"
          >
           <div className="overflow-hidden rounded-[24px] bg-slate-100 h-[440px]">
                <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex min-h-[250px] flex-col px-3 pb-4 pt-6">
              <h3 className="text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-slate-950">
                {card.title}
              </h3>

              <p className="mt-5 text-base font-medium leading-7 text-slate-700">
                {card.description}
              </p>

              <p className="mt-auto pt-6 text-sm font-bold text-blue-600">
                Open Library →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}