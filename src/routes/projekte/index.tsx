import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/data/resume";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/")({
  component: ProjectsOverviewPage,
});

function ProjectsOverviewPage() {
  return (
    <PortfolioLayout
      kicker="Portfolio & Werkschau"
      title="Ausgewählte Arbeiten & Case Studies"
      subtitle="Konzeption, Print-Layouts, Screendesign und KI-gestützte Bildwelten. Ein Einblick in eigenständige Projekte vom visuellen Konzept bis zur druckfertigen Reinzeichnung."
      metaBadges={[
        ["Kandidat", "Atai Duisheev"],
        ["Bewerbung", "MACK Media"],
        ["Disziplin", "Werbung & Grafik"],
        ["Tools", "Adobe CC, Figma, AI"],
      ]}
    >
      <div className="space-y-12">
        {/* Intro notice */}
        <div className="border-l-2 border-reflex pl-5 py-1">
          <p className="text-base text-ink leading-relaxed">
            Diese Bewerbungsmappe für ein Praktikum im Bereich Werbung und Grafik bei MACK Media zeigt ausgewählte Projekte aus Print-Layout, digitaler Gestaltung und Illustration.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => {
            const caseHref = "href" in project ? project.href : undefined;
            return (
              <article
                key={project.key}
                className={`group flex min-w-0 flex-col justify-between border border-rule bg-sheet/30 transition-all duration-200 hover:border-reflex/60 hover:shadow-md${project.key === "bunker" ? " cursor-pointer" : ""}`}
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
                <div>
                  {/* Cover preview for case studies */}
                  {project.coverImage && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-night/10 border-b border-rule">
                      <img
                        src={publicAsset(project.coverImage)}
                        alt={project.title}
                        className="size-full max-w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        onError={project.key === "bunker" ? (event) => { event.currentTarget.style.display = "none"; } : undefined}
                        onLoad={project.key === "bunker" ? (event) => { event.currentTarget.nextElementSibling?.setAttribute("hidden", ""); } : undefined}
                      />
                      {project.key === "bunker" && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-night px-5 text-center text-paper" aria-hidden="true">
                          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Interactive Game · 2026</span>
                          <span className="mt-2 font-display text-3xl tracking-[0.16em]">BUNKER 404</span>
                          <span className="mt-2 text-xs text-mist">Projektcover folgt</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-night/90 text-gold px-2.5 py-1 text-xs font-semibold uppercase tracking-widest border border-gold/40">
                        {project.mark}
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3 bg-gold text-night px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                          <Sparkles className="size-3" />
                          <span>Case Study</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {!project.coverImage && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-display text-2xl text-reflex">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-gilt">
                          {project.mark}
                        </span>
                      </div>
                    )}

                    <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-sm text-muted font-medium">
                      {project.subtitle} {project.when ? `· ${project.when}` : ""}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-ink/90">
                      {project.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="size-1.5 bg-gilt shrink-0 mt-2" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {caseHref ? (
                    <a
                      href={caseHref}
                      className="inline-flex w-full items-center justify-center gap-2 border border-reflex bg-reflex px-4 py-3 text-xs font-semibold uppercase tracking-widest text-paper hover:bg-night transition-colors"
                    >
                      <span>Ausführliche Case Study ansehen</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  ) : (
                    <div className="border-t border-rule/80 pt-3 text-xs text-muted">
                      <span>Praxisprojekt im Rahmen des Studiums / E-Commerce</span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </PortfolioLayout>
  );
}
