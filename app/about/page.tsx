import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Layers3,
  Mail,
  Network,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Header } from "../../components/layout/Header";
import { siteStats } from "../../data/stats";

const companies = [
  { name: "Accenture", logo: "/images/logos/accenture.png" },
  { name: "Applied Data Finance", logo: "/images/logos/adf.png" },
  { name: "Crayon Data", logo: "/images/logos/crayon.png" },
  { name: "EXL", logo: "/images/logos/exl.png" },
  { name: "Exasol", logo: "/images/logos/exasol.png" },
  { name: "Maveric Systems", logo: "/images/logos/maveric.png" },
];

const clouds = [
  { name: "AWS", logo: "/images/logos/aws.png" },
  { name: "Azure", logo: "/images/logos/azure.png" },
  { name: "Google Cloud", logo: "/images/logos/google-cloud.png" },
];

const focusAreas = [
  {
    title: "Architecture Library",
    text: "Practical guides, diagrams, and patterns for understanding enterprise AI systems.",
    icon: BookOpen,
  },
  {
    title: "NexusIQ",
    text: "A reference platform for AI SQL, RAG, federation, governance, and architecture demos.",
    icon: Layers3,
  },
  {
    title: "Enterprise AI Research",
    text: "System-level notes on agentic AI, sovereign AI, data platforms, and governance.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  const stats = [
    [`${siteStats.experience}+`, "Years of Experience", BookOpen],
    [`${Math.max(siteStats.architectures, 1)}+`, "Architecture Diagrams", Network],
    [`${Math.max(siteStats.videos, 1)}+`, "YouTube Videos", PlayCircle],
    [`${Math.max(siteStats.articles, 1)}+`, "Engineering Articles", Code2],
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef5ff_100%)] text-slate-950">
      <Header />

      <section className="mx-auto max-w-[1500px] px-8 py-16">
        <section className="grid gap-14 lg:grid-cols-[1.05fr_0.75fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-blue-600">
              About
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-[92px]">
              Enterprise AI Architect.
              <br />
              Building reference architectures.
            </h1>

            <p className="mt-8 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.04em] text-blue-600">
              I build systems, diagrams, and implementation notes that help
              enterprises understand and trust AI.
            </p>

            <p className="mt-8 max-w-2xl text-xl font-medium leading-9 text-slate-700">
              Enterprise AI needs more than models. It needs data platforms,
              retrieval systems, AI gateways, governance, distributed execution,
              and architectures that organizations can operate with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/yuvim"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
              >
                <FaLinkedin className="h-4 w-4 text-[#0A66C2]" />
                LinkedIn
              </a>

              <a
                href="https://github.com/yuviim"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="mailto:hello@yuvarajai.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <Link
                href="/library"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Library
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[56px] bg-blue-300/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-white shadow-[0_50px_140px_rgba(37,99,235,0.18)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(37,99,235,0.14),transparent_42%)]" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-100/80 to-transparent" />

              <img
                src="/images/profile/yuvaraj-profile.png"
                alt="Yuvaraj"
                className="relative z-10 mx-auto h-[520px] w-auto object-contain object-bottom"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[26px] border border-white/80 bg-white/90 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-lg font-bold tracking-[-0.03em] text-slate-900">
                      Enterprise AI • Data Platforms • Distributed Systems
                    </p>
                    <p className="mt-1 text-base font-medium text-slate-500">
                      Building Enterprise AI in public.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map(([value, label, Icon]) => {
              const IconComponent = Icon as typeof BookOpen;

              return (
                <div
                  key={label as string}
                  className="flex items-center gap-5 border-slate-200 md:border-r md:last:border-r-0"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-3xl font-bold tracking-[-0.06em] text-blue-600">
                      {value as string}
                    </p>
                    <p className="mt-1 max-w-[190px] text-sm font-medium leading-5 text-slate-600">
                      {label as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-blue-600">
            What I&apos;m Building
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-[-0.06em] text-slate-950">
            A practical knowledge platform for Enterprise AI Architecture.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base font-medium leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
              Experience
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="group flex h-28 items-center justify-center rounded-[24px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  title={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-14 max-w-[180px] object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
              Multi Cloud
            </p>

            <div className="grid gap-4">
              {clouds.map((cloud) => (
                <div
                  key={cloud.name}
                  className="group flex h-28 items-center justify-center rounded-[24px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  title={cloud.name}
                >
                  <img
                    src={cloud.logo}
                    alt={cloud.name}
                    className="max-h-16 max-w-[220px] object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[46px] bg-slate-950 p-12 text-white shadow-[0_40px_120px_rgba(15,23,42,0.22)]">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-blue-300">
            Why This Exists
          </p>

          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.06em]">
            Enterprise AI needs better system-level explanations.
          </h2>

          <div className="mt-10 grid gap-8 text-lg font-medium leading-9 text-slate-300 md:grid-cols-3">
            <p>
              Enterprise AI has no shortage of content. But much of it focuses
              on models, prompts, tools, and frameworks.
            </p>
            <p>
              Very little explains the engineering underneath: retrieval,
              policy engines, AI gateways, governance, distributed execution,
              and platform architecture.
            </p>
            <p>
              This site is my public engineering notebook for architecture
              notes, diagrams, implementation patterns, and lessons from
              building enterprise AI systems.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}