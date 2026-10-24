import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Maximize2 } from "lucide-react";
import { mbankMerchGallery } from "@/data/resume";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/mbank-merch")({
  component: MbankMerchCasePage,
});

function MbankMerchCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const videoId = "thTHlT-D340";
  const lightboxItems = mbankMerchGallery.map((item) => ({
    file: item.file,
    title: item.title,
  }));

  return (
    <PortfolioLayout
      kicker="Case Study · MBank Merch"
      title="MBank Merch"
      subtitle="Konzeptpräsentation als Testaufgabe: eine visuelle Merch-Idee für MBank, von der ersten Richtung bis zur präsentationsreifen Ausarbeitung."
      role="Konzept, Gestaltung, Präsentation"
      metaBadges={[
        ["Projekt", "Testaufgabe"],
        ["Format", "Konzeptpräsentation"],
        ["Thema", "Merch"],
        ["Marke", "MBank"],
      ]}
    >
      <div className="space-y-12">
        <section aria-labelledby="mbank-video-title" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-reflex">Präsentation</p>
            <h2 id="mbank-video-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
              Konzeptvideo
            </h2>
          </div>
          <div className="aspect-video overflow-hidden border border-rule bg-night">
            <iframe
              className="size-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="MBank Merch Konzeptpräsentation"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="mbank-gallery-title" className="border-t border-rule pt-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-reflex">Ausgewählte Folien</p>
            <h2 id="mbank-gallery-title" className="mt-1 font-display text-3xl text-ink sm:text-4xl">
              Einblicke ins Konzept
            </h2>
          </div>
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            {mbankMerchGallery.map((item, index) => (
              <GalleryTrigger
                key={item.file}
                label={`${item.title} vergrößern`}
                onOpen={() => setLightboxIndex(index)}
                className="group min-w-0 cursor-pointer border border-rule bg-sheet/30"
              >
                <div className="relative aspect-video overflow-hidden border-b border-rule bg-night/5">
                  <img
                    src={publicAsset(item.file)}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-2 left-2 border border-gold/30 bg-night/85 px-2 py-0.5 text-xs text-gold">
                    Folie {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-3 top-3 border border-gold/40 bg-night/80 p-2 text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="size-4" />
                  </span>
                </div>
                <figcaption className="p-4 font-display text-xl text-ink">{item.title}</figcaption>
              </GalleryTrigger>
            ))}
          </div>
        </section>
      </div>

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </PortfolioLayout>
  );
}
