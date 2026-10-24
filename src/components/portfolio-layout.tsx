import type { ReactNode } from "react";
import { ArrowLeft, ArrowUp, FolderKanban } from "lucide-react";
import { candidate } from "@/data/resume";
import { ScrollProgress } from "./scroll-progress";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.2 14.55 8.7 22.4 9.15 16.55 14.05 18.45 21.7 12 17.55 5.55 21.7 7.45 14.05 1.6 9.15 9.45 8.7Z"
      />
    </svg>
  );
}

interface PortfolioLayoutProps {
  kicker: string;
  title: string;
  subtitle?: string;
  role?: string;
  metaBadges?: [string, string][];
  children: ReactNode;
}

export function PortfolioLayout({
  kicker,
  title,
  subtitle,
  role,
  metaBadges,
  children,
}: PortfolioLayoutProps) {
  return (
    <div id="top" className="min-h-dvh overflow-x-hidden bg-night text-paper selection:bg-gold selection:text-night">
      <ScrollProgress />

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 border-b border-gold/30 bg-night/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 md:px-10">
          <a
            href="/"
            className="flex min-w-0 items-center gap-2.5 text-paper hover:text-gold transition-colors"
          >
            <Star className="size-4 shrink-0 text-gold" />
            <span className="truncate text-sm font-semibold tracking-wide">{candidate.name}</span>
            <span className="hidden sm:inline text-xs text-mist/70 tracking-normal border-l border-gold/25 pl-2.5">
              Portfolio
            </span>
          </a>

          <nav aria-label="Portfolio Navigation" className="flex items-center gap-3 sm:gap-4 text-xs uppercase tracking-wider">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-mist hover:text-gold transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span className="hidden sm:inline">Zurück zum</span>
              <span>Lebenslauf</span>
            </a>

            <a
              href="/projekte"
              className="inline-flex items-center gap-1.5 border border-gold/40 bg-gold/10 px-2.5 py-1 text-gold hover:bg-gold hover:text-night transition-colors"
            >
              <FolderKanban className="size-3.5" />
              <span>Alle Projekte</span>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="sky relative overflow-hidden border-b border-gold">
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-16">
          <div className="mb-4 flex items-center gap-2 text-gold" aria-hidden="true">
            <Star className="size-2.5 opacity-80" />
            <Star className="size-3.5 opacity-90" />
            <Star className="size-4" />
            <Star className="size-3.5 opacity-90" />
            <Star className="size-2.5 opacity-80" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {kicker}
          </p>

          <h1 className="mt-3 font-display text-4xl leading-tight text-paper sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-mist leading-relaxed font-sans">
              {subtitle}
            </p>
          )}

          {role && (
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-gold/90 font-medium bg-night/60 border border-gold/30 px-3 py-1.5">
              <span className="text-xs uppercase tracking-wider text-mist">Rolle & Disziplin:</span>
              <span className="text-paper">{role}</span>
            </div>
          )}

          {metaBadges && metaBadges.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-px bg-gold/50 sm:grid-cols-4 border border-gold/50 shadow-lg">
              {metaBadges.map(([label, value]) => (
                <div key={label} className="bg-night/95 px-4 py-3 backdrop-blur-sm">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="bg-paper text-ink min-h-[50vh]">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-16">
          {children}
        </div>
      </main>

      {/* DIVIDER */}
      <div className="h-1 bg-gold" aria-hidden="true" />

      {/* FOOTER */}
      <footer className="sky relative overflow-hidden text-paper py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <div className="mb-3 flex items-center gap-2 text-gold" aria-hidden="true">
              <Star className="size-3" />
              <Star className="size-4" />
              <Star className="size-3" />
            </div>
            <p className="font-display text-2xl leading-none text-paper md:text-3xl">
              {candidate.name} · Portfolio
            </p>
            <p className="mt-2 text-sm text-mist max-w-md">
              Bewerbung für ein Praktikum im Bereich Werbung und Grafik bei MACK Media (Europa-Park Erlebnis-Resort, Rust).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs uppercase tracking-wider">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-gold hover:text-paper transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              <span>Zum Lebenslauf</span>
            </a>
            <a
              href="/projekte"
              className="text-gold hover:text-paper transition-colors"
            >
              <span>Alle Projekte</span>
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-mist/60 hover:text-gold transition-colors"
            >
              <ArrowUp className="size-3.5" />
              <span>Nach oben</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
