import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/numizmat")({
  component: NumizmatCasePage,
});

const numizmatGallery = [1, 2, 3, 4, 5].map((number) => ({
  file: `/portfolio/numizmat (${number}).png`,
  title: `Website-Mock-up · Ansicht ${String(number).padStart(2, "0")}`,
  subtitle: "Numismatische Sammlerstücke",
}));

function NumizmatCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PortfolioLayout
      kicker="Case Study · Web UI"
      title="Website-Mock-up"
      subtitle="Konzeption und Gestaltung eines Online-Shop-Mock-ups für numismatische Sammlerstücke."
      role="Webdesign & digitale Produktpräsentation"
      metaBadges={[["Bereich", "Numismatik"], ["Format", "Website-Mock-up"], ["Zeitraum", "2024"], ["Ansichten", "5"]]}
    >
      <div className="space-y-8">
        <section className="border-t border-rule pt-8" aria-labelledby="numizmat-gallery-title">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-reflex">Online-Shop</p>
              <h2 id="numizmat-gallery-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
                Projektansichten
              </h2>
            </div>
            <p className="text-xs uppercase tracking-wider text-muted">Klick zum Vergrößern</p>
          </div>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {numizmatGallery.map((item, index) => (
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

        <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/projekte/kinderbuecher" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-reflex transition-colors hover:text-ink">
            <ArrowLeft className="size-3.5" />
            <span>Vorheriges Projekt: Kinderbücher</span>
          </a>
          <a href="/#projekte" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gilt transition-colors hover:text-ink">
            <span>Alle Projekte ansehen →</span>
          </a>
        </div>
      </div>

      <Lightbox
        items={numizmatGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </PortfolioLayout>
  );
}
