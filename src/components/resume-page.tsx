import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ExternalLink,
  FolderKanban,
  MapPin,
  Printer,
  Sparkles,
} from "lucide-react";
import {
  candidate,
  competences,
  driverLicense,
  education,
  languages,
  profile,
  projects,
  quote,
  software,
  workExperience,
} from "@/data/resume";
import { StarfieldCanvas } from "./starfield-canvas";
import { ScrollProgress } from "./scroll-progress";

const nav = [
  { href: "#profil", index: "01", label: "Profil" },
  { href: "#projekte", index: "02", label: "Projekte" },
  { href: "#kompetenzen", index: "03", label: "Kompetenzen" },
  { href: "#werdegang", index: "04", label: "Werdegang" },
];

/** Symmetrical 5-point Star in Europa-Park gold / gilt */
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

export function ResumePage() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-night text-paper selection:bg-gold selection:text-night">
      {/* 60fps Golden Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Accessible skip link */}
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-3 focus:text-night focus:font-semibold"
      >
        Zum Inhalt springen
      </a>

      {/* STICKY TOP HEADER — Spotless Public Presentation */}
      <header className="no-print sticky top-0 z-40 border-b border-gold/30 bg-night/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 md:px-10">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5 text-paper hover:text-gold transition-colors"
          >
            <Star className="size-4 shrink-0 text-gold" />
            <span className="truncate text-sm font-semibold tracking-wide">{candidate.name}</span>
            <span className="hidden sm:inline text-xs text-mist/70 tracking-normal border-l border-gold/25 pl-2.5">
              Initiativbewerbung · {candidate.company}
            </span>
          </a>

          {/* Quick Anchor Nav on Desktop */}
          <nav aria-label="Schnellnavigation" className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-wider text-mist">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                <span className="text-gold font-display text-sm mr-1">{item.index}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="/projekte"
              className="hidden sm:inline-flex h-9 items-center gap-1.5 border border-gold/40 bg-gold/10 px-3 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold hover:text-night transition-colors"
            >
              <FolderKanban className="size-3.5" />
              <span>Portfolio</span>
            </a>

            {/* Print / PDF Export Button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-9 items-center gap-2 border border-gold bg-gold px-3 text-xs font-semibold uppercase tracking-wider text-night hover:bg-paper hover:border-paper transition-colors shadow-sm"
              title="Als PDF drucken oder speichern"
            >
              <Printer className="size-3.5" aria-hidden="true" />
              <span>PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main id="inhalt">
        {/* HERO SECTION — Atmospheric Reflex Blue & Starfield Canvas */}
        <section id="top" className="sky relative overflow-hidden">
          <StarfieldCanvas density="hero" />

          {/* Constellation Fallback Layer */}
          <div className="constellation pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12 px-5 py-14 md:flex-row md:items-end md:px-10 md:py-24">
            <div className="rise min-w-0 flex-1">
              {/* Symmetrical Europa-Park Sternformation */}
              <div className="mb-5 flex items-center gap-2 text-gold" aria-hidden="true">
                <Star className="size-2.5 opacity-80" />
                <Star className="size-3.5 opacity-90" />
                <Star className="size-5" />
                <Star className="size-3.5 opacity-90" />
                <Star className="size-2.5 opacity-80" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Bewerbung um ein Praktikum · {candidate.role} · {candidate.company}
              </p>

              {/* Candidate Name: First Name in Paper + Last Name in Italic Gold */}
              <h1 className="mt-4 font-display text-6xl leading-none break-words text-paper md:text-8xl">
                <span className="block">{candidate.firstName}</span>
                <span className="mt-1 block italic text-gold">{candidate.lastName}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-mist leading-relaxed font-sans">
                Lebenslauf und Bewerbungsmappe für ein Praktikum im Bereich Werbung / Grafik bei MACK Media (Europa-Park).
                Absolvent der Informationssysteme und Technologien mit Schwerpunkt Medienindustrie; Erfahrung in visueller Gestaltung,
                Markenaufbau, Print-Layouts und digitalen Medien.
              </p>

              {/* Visible Metadata & Location */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist">
                <div className="inline-flex items-center gap-1.5 text-gold font-medium">
                  <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                  <span>{candidate.location}</span>
                </div>

                <a
                  href="/projekte"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-paper underline decoration-gold/40 underline-offset-4 transition-colors"
                >
                  <FolderKanban className="size-3.5 shrink-0" aria-hidden="true" />
                  <span>Portfolio ansehen (Case Studies)</span>
                </a>
              </div>

              {/* Key Frame Parameters Grid */}
              <dl className="mt-10 grid grid-cols-2 gap-px bg-gold/50 sm:grid-cols-4 border border-gold/50 shadow-lg">
                {[
                  ["Standort", candidate.location.replace(", Deutschland", ", DE")],
                  ["Beginn", candidate.start],
                  ["Dauer", candidate.duration],
                  ["Deutsch", candidate.germanLevel],
                ].map(([label, value]) => (
                  <div key={label} className="bg-night/95 px-4 py-3.5 backdrop-blur-sm">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-paper">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Editorial Table of Contents Panel */}
            <nav
              aria-label="Inhaltsverzeichnis"
              className="w-full shrink-0 border border-gold/40 bg-night/90 p-5 md:w-80 md:p-6 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-gold/25 pb-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Inhaltsverzeichnis
                </p>
                <span className="text-xs text-mist/60 uppercase">Lebenslauf</span>
              </div>
              <ol className="mt-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-center justify-between gap-4 border-t border-gold/20 py-3.5 text-paper hover:text-gold transition-colors"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-display text-2xl leading-none text-gold group-hover:translate-x-1 transition-transform">
                          {item.index}
                        </span>
                        <span className="text-base font-medium">{item.label}</span>
                      </span>
                      <ChevronRight className="size-4 text-gold group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-4 pt-3 border-t border-gold/20">
                <a
                  href="/projekte"
                  className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold hover:text-paper transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-3.5" />
                    <span>Portfolio & Case Studies</span>
                  </span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </nav>
          </div>
        </section>

        {/* Crisp Golden Hairline Divider Between Dark and Light */}
        <div className="h-1 bg-gold" aria-hidden="true" />

        {/* SECTION 01 — PROFIL */}
        <Section id="profil" index="01" kicker="Profil & Motivation" title="Was ich mitbringe">
          <div className="flex flex-col gap-10 md:flex-row md:items-start">
            <div className="min-w-0 flex-1 space-y-4 text-lg text-ink leading-relaxed font-sans">
              {profile.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="border-l-2 border-reflex pl-6 font-display text-2xl italic leading-snug text-ink md:w-96 md:text-3xl">
              <span className="text-reflex">«</span>{quote}<span className="text-reflex">»</span>
              <cite className="block mt-4 text-xs font-sans font-semibold uppercase tracking-widest not-italic text-gilt">
                {candidate.name} · Bewerbung {candidate.company}
              </cite>
            </blockquote>
          </div>
        </Section>

        {/* SECTION 02 — PROJEKTE */}
        <Section id="projekte" index="02" kicker="Projekte & Praxis" title="Ausgewählte Arbeiten">
          <div className="divide-y divide-rule border-y border-rule">
            {projects.map((project, i) => {
              const caseHref = "href" in project ? project.href : undefined;
              return (
                <article
                  key={project.key}
                  className={`group flex flex-col gap-4 py-8 md:flex-row md:gap-8 transition-colors duration-200 hover:bg-sheet/40 -mx-4 px-4${project.key === "bunker" ? " cursor-pointer" : ""}`}
                  onClick={project.key === "bunker" ? (event) => {
                    if ((event.target as HTMLElement).closest("a")) return;
                    window.location.href = "/projekte/bunker";
                  } : undefined}
                  onKeyDown={project.key === "bunker" ? (event) => {
                    if ((event.target as HTMLElement).closest("a")) return;
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      window.location.href = "/projekte/bunker";
                    }
                  } : undefined}
                  role={project.key === "bunker" ? "group" : undefined}
                  tabIndex={project.key === "bunker" ? 0 : undefined}
                  aria-label={project.key === "bunker" ? `${project.title} – Case Study öffnen` : undefined}
                >
                  <div className="md:w-36 md:shrink-0">
                    <p className="font-display text-4xl leading-none text-reflex group-hover:translate-x-1 transition-transform duration-200">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2.5 text-xs font-semibold uppercase tracking-widest text-gilt">
                      {project.mark}
                    </p>
                    {project.featured && (
                      <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-reflex bg-sheet px-2 py-0.5 border border-rule">
                        Case Study
                      </span>
                    )}
                    {project.key === "bunker" && (
                      <div className="relative mt-4 flex aspect-[16/10] max-w-40 items-center justify-center overflow-hidden border border-rule bg-night text-center text-paper">
                        <img
                          src="/portfolio/bunker (1).png"
                          alt="BUNKER 404 – Projektcover"
                          className="absolute inset-0 size-full object-cover"
                          onError={(event) => { event.currentTarget.style.display = "none"; }}
                          onLoad={(event) => { event.currentTarget.nextElementSibling?.setAttribute("hidden", ""); }}
                        />
                        <div className="relative px-2" aria-hidden="true">
                          <span className="block text-[9px] font-semibold uppercase tracking-widest text-gold">Interactive Game</span>
                          <span className="mt-1 block font-display text-sm tracking-wider">BUNKER 404</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3 className="font-display text-3xl leading-snug text-ink md:text-4xl">
                        {project.title}
                      </h3>
                      {caseHref && (
                        <a
                          href={caseHref}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-reflex hover:text-gilt transition-colors"
                        >
                          <span>Case Study öffnen</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>

                    <p className="mt-1 text-base text-muted font-medium">
                      {project.subtitle} {project.when ? `· ${project.when}` : ""}
                    </p>

                    <ul className="mt-4 space-y-2 text-base text-ink">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Star className="mt-1 size-3 shrink-0 text-gilt group-hover:scale-125 transition-transform duration-200" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {caseHref && (
                      <div className="mt-5">
                        <a
                          href={caseHref}
                          className="inline-flex items-center gap-2 border border-reflex bg-reflex/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-reflex hover:bg-reflex hover:text-paper transition-colors"
                        >
                          <span>Detaillierten Case ansehen</span>
                          <ArrowRight className="size-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom link to portfolio overview */}
          <div className="mt-8 flex justify-center">
            <a
              href="/projekte"
              className="inline-flex items-center gap-2 border border-reflex bg-reflex px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-paper hover:bg-night transition-colors shadow-md"
            >
              <FolderKanban className="size-4" />
              <span>Alle Arbeiten im Portfolio-Überblick ansehen</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Section>

        {/* SECTION 03 — KOMPETENZEN & SOFTWARE */}
        <Section id="kompetenzen" index="03" kicker="Fachliches Profil" title="Kompetenzen und Software">
          <ol className="divide-y divide-rule border-y border-rule">
            {competences.map((item, i) => (
              <li key={item.title} className="group flex gap-4 py-5 hover:bg-sheet/40 -mx-4 px-4 transition-colors duration-200">
                <span className="w-14 shrink-0 font-display text-3xl leading-none text-reflex group-hover:translate-x-1 transition-transform duration-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-muted leading-normal">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 text-xs font-semibold uppercase tracking-widest text-reflex">
            Software-Kenntnisse & Werkzeuge
          </h3>
          <ul className="mt-4 grid gap-px bg-rule sm:grid-cols-3 border border-rule">
            {software.map((group) => (
              <li key={group.label} className="bg-sheet px-5 py-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-reflex">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg font-medium text-ink flex items-center gap-2">
                      <span className="size-1 bg-gilt shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>

        {/* SECTION 04 — WERDEGANG */}
        <Section id="werdegang" index="04" kicker="Werdegang" title="Beruf und Ausbildung">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-reflex">
                Berufserfahrung
              </h3>
              <div className="mt-4 divide-y divide-rule border-y border-rule">
                {workExperience.map((job) => (
                  <Job
                    key={job.title}
                    title={job.title}
                    place={job.place}
                    meta={job.meta}
                    points={job.points}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-reflex">
                Ausbildung
              </h3>
              <div className="mt-4 divide-y divide-rule border-y border-rule">
                {education.map((edu) => (
                  <Job
                    key={edu.title}
                    title={edu.title}
                    place={edu.place}
                    meta={edu.meta}
                    points={edu.points}
                  />
                ))}
              </div>

              <h3 className="mt-10 text-xs font-semibold uppercase tracking-widest text-reflex">
                Sprachen
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-px bg-rule border border-rule">
                {languages.map((lang) => (
                  <li key={lang.label} className="bg-paper px-4 py-4">
                    <p className="text-base font-semibold text-ink">{lang.label}</p>
                    <p className="mt-1 text-sm text-muted">{lang.level}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-base text-ink">
                Führerschein: <span className="font-semibold">{driverLicense}</span>
              </p>
            </div>
          </div>
        </Section>
      </main>

      {/* Crisp Golden Hairline Divider Before Footer */}
      <div className="h-1 bg-gold" aria-hidden="true" />

      {/* FOOTER SECTION — Atmospheric Night-Sky */}
      <footer className="sky relative overflow-hidden text-paper">
        <StarfieldCanvas density="footer" />
        <div className="constellation pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <div className="mb-4 flex items-center gap-2 text-gold" aria-hidden="true">
              <Star className="size-3" />
              <Star className="size-4" />
              <Star className="size-3" />
            </div>
            <p className="font-display text-3xl leading-none text-paper md:text-4xl">
              Bewerbung um ein Praktikum ab {candidate.start} · {candidate.company}
            </p>
            <p className="mt-3 max-w-md text-base text-mist">
              {candidate.duration} im Bereich {candidate.role}. {candidate.resort}.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="#top"
              className="no-print inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold hover:text-paper transition-colors"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" />
              <span>Nach oben</span>
            </a>

            <a
              href="/projekte"
              className="no-print text-xs uppercase tracking-wider text-gold hover:text-paper transition-colors"
            >
              Portfolio & Case Studies →
            </a>

            <p className="text-xs text-mist/60 mt-1">
              © {new Date().getFullYear()} {candidate.name} · Bewerbungsmappe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** Section with viewport entrance reveal */
function Section({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-14 border-t border-rule bg-paper text-ink transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 py-14 md:px-10 md:py-20">
        <div className="mb-8 flex items-end gap-4">
          <span className="font-display text-5xl leading-none text-reflex">{index}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-reflex">{kicker}</p>
            <h2 className="font-display text-4xl leading-none text-ink md:text-5xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Job({
  title,
  place,
  meta,
  points,
}: {
  title: string;
  place: string;
  meta: string;
  points: string[];
}) {
  return (
    <article className="py-5">
      <h4 className="text-lg font-semibold text-ink">{title}</h4>
      <p className="mt-1 text-base text-reflex font-medium">{place}</p>
      {meta ? <p className="mt-1 text-sm text-muted">{meta}</p> : null}
      <ul className="mt-3 space-y-2 text-base text-ink">
        {points.map((point) => (
          <li key={point} className="flex gap-3">
            <Star className="mt-1 size-3 shrink-0 text-gilt" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
