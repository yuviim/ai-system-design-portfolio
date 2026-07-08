import Link from "next/link";

const links = [
  { label: "Architecture", href: "/library" },
  { label: "Research", href: "/notes" },
  { label: "Videos", href: "/videos" },
  { label: "NexusIQ", href: "/#nexusiq" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1500px] px-8 pb-10 pt-10">
      <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-950">
              Yuvaraj
            </h3>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-600">
              Enterprise AI Architecture Library for practical reference
              architectures, diagrams, videos, and implementation notes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:justify-end">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-bold text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-500">
          © 2026 Yuvaraj AI. Built as an Enterprise AI Architecture Library.
        </div>
      </div>
    </footer>
  );
}