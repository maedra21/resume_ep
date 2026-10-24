import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Maximize2 } from "lucide-react";
import { solecoverGallery } from "@/data/resume";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/solecover")({
  component: SolecoverCasePage,
});

function SolecoverCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PortfolioLayout
      kicker="Case Study · Marke & Web"
      title="Solecover"
      subtitle="Aufbau einer eigenen Streetwear-Marke – von der visuellen Identität und Produktpräsentation bis zu digitalen Inhalten und Online-Shop."
      role="Konzeption, Branding, Content & E-Commerce"
      metaBadges={[
        ["Projekt", "Eigene Marke"],
        ["Bereich", "Streetwear"],
        ["Format", "Web & Social Media"],
        ["Zeitraum", "2023 – 2024"],
      ]}
    >
      <div className="space-y-12">
        <section className="grid gap-8 md:grid-cols-3" aria-labelledby="solecover-description-title">
          <div className="space-y-4 text-base leading-relaxed text-ink sm:text-lg md:col-span-2">
            <p>
              Solecover war eine eigene Streetwear-Marke mit einem klaren, urbanen Auftritt. Im Mittelpunkt standen die Entwicklung der visuellen Sprache, die Präsentation der Produkte und die Umsetzung digitaler Inhalte für Web und Social Media.
            </p>
            <p className="text-base text-muted">
              Das Projekt verband Gestaltung und praktische E-Commerce-Aufgaben: von der Markenidee und Content-Erstellung bis zur Kommunikation mit Kundinnen und Kunden sowie den operativen Verkaufsprozessen.
            </p>
          </div>

          <aside className="border border-rule bg-sheet/40 p-6">
            <h2 id="solecover-description-title" className="mb-4 text-xs font-semibold uppercase tracking-widest text-reflex">
              Projektfokus
            </h2>
            <ul className="space-y-3 text-sm text-ink">
              {[
                "Entwicklung des visuellen Markenauftritts",
                "Produktpräsentation für Web und Social Media",
                "Mitwirkung am Online-Shop",
                "Marketing und Kundenkommunikation",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gilt" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="border-t border-rule pt-8" aria-labelledby="solecover-gallery-title">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-reflex">Markenauftritt</p>
              <h2 id="solecover-gallery-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">Solecover in Bildern</h2>
            </div>
            <p className="text-xs uppercase tracking-wider text-muted">Klick zum Vergrößern</p>
          </div>

          <div className="mb-8 flex justify-center border border-rule bg-paper p-5 sm:p-8">
            <img
              src={publicAsset("/portfolio/solecover_logo.jpg")}
              alt="Solecover Logo"
              className="max-h-28 w-auto max-w-full object-contain"
            />
          </div>

          <div className="grid min-w-0 gap-8 md:grid-cols-3">
            {solecoverGallery.map((item, index) => (
              <GalleryTrigger
                key={item.file}
                label={`${item.title} vergrößern`}
                onOpen={() => setLightboxIndex(index)}
                className="group min-w-0 cursor-pointer overflow-hidden border border-rule bg-sheet/20 transition-all duration-200 hover:border-reflex/70 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-rule bg-night/5">
                  <img
                    src={publicAsset(item.file)}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute right-3 top-3 border border-gold/40 bg-night/80 p-2 text-gold opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                    <Maximize2 className="size-4" />
                  </div>
                </div>
                <figcaption className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gilt">{item.subtitle}</p>
                  <h3 className="mt-1 font-display text-xl text-ink group-hover:text-reflex">{item.title}</h3>
                </figcaption>
              </GalleryTrigger>
            ))}
          </div>
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
            href="/projekte/bunker"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gilt transition-colors hover:text-ink"
          >
            <span>Vorheriges Projekt: BUNKER →</span>
          </a>
        </div>
      </div>

      <Lightbox
        items={solecoverGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </PortfolioLayout>
  );
}
