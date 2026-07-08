import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { Header } from "../../components/layout/Header";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "Professional profile & updates",
    href: "https://www.linkedin.com/in/yuvim/",
    icon: FaLinkedin,
    action: "Open →",
    external: true,
  },
  {
    label: "GitHub",
    value: "Open-source projects & demos",
    href: "https://github.com/yuviim?tab=repositories",
    icon: FaGithub,
    action: "Open →",
    external: true,
  },
  {
    label: "YouTube",
    value: "Technical videos & architecture series",
    href: "https://www.youtube.com/@yuvarajplatforms",
    icon: FaYoutube,
    action: "Open →",
    external: true,
  },
  {
    label: "Email",
    value: "Speaking, consulting & collaborations",
    href: "mailto:yuvarajm336@gmail.com",
    icon: Mail,
    action: "Send →",
    external: false,
  },
  {
    label: "Phone",
    value: "+91 98848 84306",
    href: "",
    icon: Phone,
    action: "",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_45%,#f1f5f9_100%)] text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative border-b border-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />

        <div className="relative mx-auto max-w-[1500px] px-8 py-24">
          <p className="mb-5 w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 ring-1 ring-blue-100">
            Contact
          </p>

          <h1 className="max-w-4xl text-7xl font-semibold leading-[0.95] tracking-[-0.07em] text-slate-950">
            Let’s connect around enterprise AI architecture.
          </h1>

          <p className="mt-7 max-w-3xl text-[20px] font-medium leading-9 text-slate-700">
            For architecture discussions, speaking opportunities, technical
            content, product storytelling, enterprise AI platforms, data
            architecture, or collaboration around NexusIQ and reference
            implementations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-[1500px] gap-8 px-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div className="rounded-[34px] border border-slate-200 bg-white/95 p-8 shadow-sm">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
            Availability
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.05em]">
            Let's build better enterprise AI systems.
          </h2>

          <p className="mt-5 text-lg font-medium leading-8 text-slate-700">
            I'm focused on enterprise AI architecture, modern data platforms,
            AI-native analytics, agentic systems, governance, and practical
            reference architectures.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Enterprise AI platform architecture",
              "Modern data platform strategy",
              "RAG, Enterprise Knowledge Layer & Enterprise Memory",
              "NexusIQ demos and reference implementations",
              "Speaking, workshops, and technical storytelling",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-bold text-slate-600">
            <MapPin className="h-4 w-4 text-blue-600" />
            Chennai, India · Europe-focused Enterprise AI Architecture
          </div>
        </div>

        {/* Right */}
        <div className="rounded-[34px] border border-slate-200 bg-white/95 p-8 shadow-sm">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
            Channels
          </p>

          <div className="grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-slate-950">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-600">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {item.href && (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="text-sm font-bold text-blue-600 transition group-hover:translate-x-1"
                    >
                      {item.action}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1500px] px-8 pb-20">
        <div className="rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1fr_0.4fr] md:items-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              Explore the architecture library before reaching out.
            </h2>

            <p className="text-lg font-medium leading-8 text-slate-700">
              The site is built as a growing library of enterprise AI
              architecture patterns, diagrams, articles, videos, and reference
              implementations.
            </p>

            <Link
              href="/library"
              className="rounded-2xl bg-blue-600 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Open Library →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}