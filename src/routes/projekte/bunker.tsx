import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Gamepad2, Maximize2 } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/bunker")({
  component: BunkerCasePage,
});

const bunkerCover = "/portfolio/bunker (1).png";
const gameUrl = "https://bunker-diplomacy.vercel.app/";

const bunkerGallery = [
  { file: "/portfolio/bunker (1).png", title: "Lobby & Raum-Erstellung", subtitle: "Multiplayer-Lobby", description: "Eigene Räume erstellen und Spielende per Zugangscode einladen." },
  { file: "/portfolio/bunker (2).png", title: "Spieloberfläche", subtitle: "Bunker-UI", description: "Atmosphärische Oberfläche für die gemeinsame Spielrunde." },
  { file: "/portfolio/bunker (3).png", title: "Modifikatoren & Regeln", subtitle: "Individuelle Spielvarianten", description: "Spielmodifikatoren sorgen für unterschiedliche Abläufe und Situationen." },
];

const projectPoints = [
  "Konzeption und Umsetzung eines browserbasierten Multiplayer-Spiels",
  "Räume erstellen und Beitritt per Zugangscode",
  "Individuelle Spielmodifikatoren und Regeln",
  "Atmosphärische Benutzeroberfläche im Bunker-Stil",
];

function BunkerCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PortfolioLayout
      kicker="Case Study · Interactive Game"
      title="BUNKER 404 – Multiplayer-Browsergame"
      subtitle="Ein browserbasiertes Multiplayer-Spiel: eigene Räume erstellen, per Zugangscode beitreten und mit individuellen Spielmodifikatoren jede Runde neu gestalten."
      role="Konzeption und Umsetzung (Design & Frontend)"
      metaBadges={[
        ["Typ", "Interactive Game"],
        ["Format", "Browsergame"],
        ["Spielmodus", "Multiplayer"],
        ["Jahr", "2026"],
      ]}
    >
      <div className="space-y-12">
        <section id="projektbeschreibung" className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 text-base leading-relaxed text-ink sm:text-lg md:col-span-2">
            <p>
              BUNKER 404 überträgt das soziale Deduktionsspiel „Bunker“ in ein atmosphärisches Browser-Erlebnis. Spielende erstellen eigene Räume oder treten über einen Zugangscode bei und diskutieren, wer im Schutzraum Platz finden soll.
            </p>
            <p className="text-base text-muted">
              Individuelle Modifikatoren und Regeln geben den Partien einen eigenen Verlauf. Die Benutzeroberfläche greift mit ihrer dunklen, funktionalen Gestaltung die Stimmung eines Bunkers auf.
            </p>
          </div>

          <aside className="border border-rule bg-sheet/40 p-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-reflex">
              Spielkonzept
            </h2>
            <ul className="space-y-3 text-sm text-ink">
              {projectPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gilt" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="border-t border-rule pt-8" aria-labelledby="bunker-preview-title">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-reflex">
              Einblick ins Projekt
            </p>
            <h2 id="bunker-preview-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
              BUNKER 404
            </h2>
          </div>

          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border border-rule bg-night px-6 py-12 text-center sm:min-h-96">
            <img
              src={publicAsset(bunkerCover)}
              alt="BUNKER 404 – Projektcover"
              className="absolute inset-0 size-full object-cover"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
              onLoad={(event) => { event.currentTarget.nextElementSibling?.setAttribute("hidden", ""); }}
            />
            <div className="relative z-10 flex max-w-xl flex-col items-center border border-gold/40 bg-night/90 px-8 py-10 text-paper shadow-lg">
              <Gamepad2 className="mx-auto size-8 text-gold" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Interactive Game · 2026
              </p>
              <p className="mt-2 font-display text-4xl tracking-[0.18em] sm:text-5xl">
                BUNKER 404
              </p>
              <p className="mt-3 text-sm text-mist">Multiplayer-Browsergame · eigene Räume · individuelle Modifikatoren</p>
              <a
                href={gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-gilt bg-gilt px-6 py-3 text-xs font-semibold uppercase tracking-widest text-night transition-colors hover:border-gold hover:bg-gold"
              >
                <span>Spiel starten</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-rule pt-8" aria-labelledby="bunker-gallery-title">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-reflex">Screenshots</p>
              <h2 id="bunker-gallery-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">Einblicke in die Spieloberfläche</h2>
            </div>
            <p className="text-xs uppercase tracking-wider text-muted">Klick zum Vergrößern</p>
          </div>

          <div className="grid min-w-0 gap-8 md:grid-cols-3">
            {bunkerGallery.map((item, index) => (
              <GalleryTrigger
                key={item.file}
                label={`${item.title} vergrößern`}
                onOpen={() => setLightboxIndex(index)}
                className="group min-w-0 cursor-pointer overflow-hidden border border-rule bg-sheet/20 transition-all duration-200 hover:border-reflex/70 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-night/5">
                  <img src={publicAsset(item.file)} alt={item.title} loading="lazy" className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]" />
                  <div className="absolute right-3 top-3 bg-night/80 p-2 text-gold opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                    <Maximize2 className="size-4" />
                  </div>
                </div>
                <figcaption className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gilt">{item.subtitle}</p>
                  <h3 className="mt-1 font-display text-xl text-ink group-hover:text-reflex">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </figcaption>
              </GalleryTrigger>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 border-t border-rule pt-8 sm:flex-row sm:justify-center">
          <a
            href="#projektbeschreibung"
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-reflex px-5 py-3 text-xs font-semibold uppercase tracking-widest text-reflex transition-colors hover:bg-reflex hover:text-paper"
          >
            <span>Case Study ansehen</span>
            <ArrowRight className="size-3.5" />
          </a>
        </section>

        <div className="flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/projekte"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-reflex transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-3.5" />
            <span>Zurück zur Projektübersicht</span>
          </a>
          <a
            href="/projekte/speisekarte"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gilt transition-colors hover:text-ink"
          >
            <span>Nächstes Projekt: Speisekarte →</span>
          </a>
        </div>
      </div>
      <Lightbox
        items={bunkerGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </PortfolioLayout>
  );
}
