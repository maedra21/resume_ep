import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Maximize2 } from "lucide-react";
import { menuGallery } from "@/data/resume";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/speisekarte")({
  component: SpeisekarteCasePage,
});

function SpeisekarteCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems = menuGallery.map((item) => ({
    file: item.file,
    title: item.title,
    subtitle: item.dishes,
    description: item.description,
  }));

  return (
    <PortfolioLayout
      kicker="Case Study · Print & Gastronomie-Design"
      title="Speisekarte – zentralasiatische Küche"
      subtitle="Konzeption und mehrseitige Gestaltung einer hochwertigen Speisekarte. Verbindung von warmer Papierästhetik, traditionellen Ornamenten und klarer dreisprachiger Typografie."
      role="Konzeption, Layout, Bildbearbeitung, Typografie"
      metaBadges={[
        ["Umfang", "9 Menüseiten"],
        ["Sprachen", "KY / RU / EN"],
        ["Format", "Druck & Digital POS"],
        ["Software", "Photoshop, Figma"],
      ]}
    >
      <div className="space-y-12">
        {/* Project Description Block */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-base sm:text-lg text-ink leading-relaxed">
            <p>
              Gestaltung einer mehrseitigen Speisekarte mit einheitlicher visueller Sprache: warme Papieroptik, ornamentale Rahmen, klare Hierarchie für Gerichtenamen, dreisprachige Beschreibungen (Kirgisisch / Russisch / Englisch), Grammaturen und Preise. Seiten zu Suppen, Kuurdak, Beilagen, Nudelgerichten, Manti & Samsa sowie Getränken.
            </p>
            <p className="text-base text-muted">
              Besonderer Fokus lag auf der appetitanregenden Inszenierung der Speisen: Freigestellte Food-Fotografien wurden mit weichen Schattenwürfen, feinen Kräuterelementen und warmen Hintergrundtönen harmonisch in das Gesamtlayout eingebunden.
            </p>
          </div>

          {/* Design Details Card */}
          <div className="border border-rule bg-sheet/40 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-reflex mb-4">
              Gestaltungsparameter
            </h3>
            <ul className="space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Dreisprachiges Informationssystem mit einheitlicher Schriftgewichtung</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Warmer Vintage-Fond mit dezentem Ornamentband am linken Seitenrand</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Klare Auszeichnung von Preisen und Portionsgewichten (Grammaturen)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Druckfertige Vorbereitung in CMYK mit Schnittmarken</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section Header */}
        <div className="border-t border-rule pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-reflex">
                Seitenübersicht & Reinzeichnung
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Alle 9 Menüseiten im Detail
              </h2>
            </div>
            <p className="text-xs text-muted uppercase tracking-wider">
              Klick auf eine Seite für Vollbildansicht
            </p>
          </div>

          {/* Gallery Grid (Mobile 1 Col, Desktop 2 Col) */}
          <div className="grid min-w-0 gap-8 sm:grid-cols-2">
            {menuGallery.map((item, index) => (
              <GalleryTrigger
                key={item.file}
                label={`${item.title} vergrößern`}
                onOpen={() => setLightboxIndex(index)}
                className="group min-w-0 cursor-pointer border border-rule bg-sheet/20 transition-all duration-200 hover:border-reflex/70 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-night/5 border-b border-rule">
                  <img
                    src={publicAsset(item.file)}
                    alt={`${item.title} – ${item.dishes}`}
                    loading="lazy"
                    className="size-full max-w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3 right-3 bg-night/80 text-gold p-2 opacity-0 group-hover:opacity-100 transition-opacity border border-gold/40 shadow-md">
                    <Maximize2 className="size-4" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-night/85 text-paper px-2 py-0.5 text-xs font-display text-gold border border-gold/30">
                    Seite {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <figcaption className="p-4 sm:p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-ink group-hover:text-reflex transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gilt mt-1">
                    {item.dishes}
                  </p>
                  <p className="text-sm text-muted mt-2">
                    {item.description}
                  </p>
                </figcaption>
              </GalleryTrigger>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="border-t border-rule pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/projekte"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-reflex hover:text-ink transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Zurück zur Projektübersicht</span>
          </a>

          <a
            href="/projekte/kinderbuecher"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gilt hover:text-ink transition-colors"
          >
            <span>Nächstes Projekt: Kinderbücher →</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </PortfolioLayout>
  );
}
