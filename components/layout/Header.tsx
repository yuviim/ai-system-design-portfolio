import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white shadow-sm">
            Y
          </div>

          <div>
            <p className="text-lg font-semibold leading-tight tracking-[-0.02em] text-slate-950">
              Yuvaraj
            </p>
            <p className="mt-0.5 text-sm font-medium text-slate-500">
              Enterprise AI & Platform Architect
            </p>
          </div>
        </Link>

        <nav className="ml-20 hidden items-center gap-10 md:flex">
          <Link
            href="/library"
            className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
          >
            Architecture
          </Link>

          <Link
            href="/research"
            className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
          >
            Research
          </Link>

          <Link
            href="/videos"
            className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
          >
            Videos
          </Link>

          <Link
            href="/library/nexusiq"
            className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
          >
            NexusIQ
          </Link>

          <Link
            href="/about"
            className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-2xl bg-blue-600 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Contact →
        </Link>
      </div>
    </header>
  );
}