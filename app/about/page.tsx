import { Header } from "../../components/layout/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section className="mx-auto grid max-w-[1500px] gap-12 px-8 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
            About Yuvaraj
          </p>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.085em]">
            Enterprise AI & Data Platform Architect
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            I design enterprise AI reference architectures, build working
            platforms, and explain modern data systems through architecture
            diagrams, engineering notes, videos, and practical demonstrations.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-8">
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            Current focus
          </h2>

          <div className="mt-8 grid gap-4">
            {[
              "Enterprise AI architecture",
              "AI sovereignty and trust boundaries",
              "Modern data platforms",
              "Federated query and distributed analytics",
              "Agent skills, MCP, RAG, and AI gateways",
              "NexusIQ reference implementations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-black">Mission</h3>
            <p className="mt-4 text-base leading-8 text-slate-600">
              To build one of the most useful freely available learning
              resources for Enterprise AI and Data Platform Architecture —
              combining reference architectures, implementation notes, videos,
              and working systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}