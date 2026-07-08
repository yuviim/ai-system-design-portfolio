import Link from "next/link";

const siteStats = [
  ["40+", "Architecture Topics"],
  ["100+", "Diagrams"],
  ["25+", "Reference Architectures"],
  ["50+", "Engineering Articles"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />

      <div className="relative mx-auto grid max-w-[1500px] gap-14 px-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col justify-center">
          <p className="mb-5 w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 ring-1 ring-blue-100">
            Enterprise AI Architecture Library
          </p>

          <h1 className="max-w-4xl text-7xl font-semibold leading-[0.95] tracking-[-0.07em] text-slate-950">
            Practical Reference Architectures for Enterprise AI Systems.
          </h1>

          <p className="mt-7 max-w-2xl text-[20px] font-medium leading-9 text-slate-700">
            A practical knowledge base for understanding the systems behind
            modern enterprise AI — data platforms, retrieval, memory,
            governance, agents, and architecture patterns.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/library"
              className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Explore Architecture Library →
            </Link>

            <Link
              href="/content-studio"
              className="rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-sm font-bold text-slate-900 shadow-sm backdrop-blur transition hover:border-blue-200"
            >
              Open Publishing Studio
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-5 sm:grid-cols-4">
            {siteStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-4 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-bold tracking-[-0.04em] text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-xs font-bold leading-5 text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[650px] rounded-[34px] border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
              Flagship Reference Platform
            </p>

            <h2 className="mt-2 text-5xl font-bold tracking-[-0.06em] text-slate-950">
              NexusIQ
            </h2>

            <p className="mt-5 text-[17px] font-medium leading-7 text-slate-700">
              Enterprise AI playground for Text-to-SQL, RAG, federated query,
              governance, research intelligence, and architecture demos.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {["AI SQL", "RAG", "Federation", "Governance"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-900"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex gap-4">
              <Link
                href="/library/nexusiq"
                className="rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white"
              >
                Explore NexusIQ →
              </Link>

              <Link
                href="/library"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-900"
              >
                View architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}