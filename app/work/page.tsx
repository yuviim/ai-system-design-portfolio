import { Header } from "../../components/layout/Header";
import { Boxes, Database, Layers3, ShieldCheck } from "lucide-react";

const work = [
  {
    title: "NexusIQ",
    type: "Enterprise AI Reference Platform",
    description:
      "A working platform for demonstrating federated query, AI SQL generation, agent skills, governed access, and enterprise analytics workflows.",
    highlights: [
      "FastAPI + React architecture",
      "Federated query experiments",
      "AI SQL and agent skills",
      "Research intelligence and dashboards",
    ],
    icon: Boxes,
    color: "blue",
  },
  {
    title: "Modern AI Data Platform Architecture",
    type: "Flagship Educational Series",
    description:
      "A long-running architecture series explaining warehouses, lakehouses, federation, governance, distributed execution, and AI-native analytics.",
    highlights: [
      "Architecture diagrams",
      "YouTube episodes",
      "LinkedIn articles",
      "NexusIQ demonstrations",
    ],
    icon: Layers3,
    color: "green",
  },
  {
    title: "Know Exasol",
    type: "Technical Architecture Series",
    description:
      "Developer-focused content explaining Exasol internals including MPP, columnar storage, in-memory processing, optimizer, compiler, UDFs, and virtual schema.",
    highlights: [
      "MPP architecture",
      "Columnar execution",
      "Optimizer and compiler",
      "MCP and agent skills",
    ],
    icon: Database,
    color: "purple",
  },
  {
    title: "Engineering Sovereign AI Systems",
    type: "Architecture Research",
    description:
      "Engineering-first exploration of AI gateways, identity, policy engines, data residency, trust boundaries, secure RAG, and agent security.",
    highlights: [
      "AI gateway patterns",
      "Identity and policy",
      "Secure RAG",
      "Data residency architecture",
    ],
    icon: ShieldCheck,
    color: "orange",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-violet-50 text-violet-600",
  orange: "bg-orange-50 text-orange-600",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-20">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-600">
          Engineering Work
        </p>

        <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.085em]">
          Reference implementations, architecture series, and technical systems.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          A focused collection of work demonstrating enterprise AI architecture,
          distributed data platforms, technical storytelling, and practical
          implementation.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {work.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-7 flex items-start justify-between gap-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorMap[item.color]}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <span className="rounded-full bg-slate-50 px-4 py-2 text-xs font-black text-slate-500 ring-1 ring-slate-200">
                    {item.type}
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-[-0.055em]">
                  {item.title}
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-3 text-sm font-bold text-slate-700"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-block text-sm font-black text-blue-600"
                >
                  View details →
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}