import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Heart, Maximize2, Palette, Sparkles, Wand2 } from "lucide-react";
import { kinderbuecherComparison } from "@/data/resume";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { GalleryTrigger, Lightbox } from "@/components/lightbox";
import { publicAsset } from "@/lib/public-asset";

export const Route = createFileRoute("/projekte/kinderbuecher")({
  component: KinderbuecherCasePage,
});

function KinderbuecherCasePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxItems = kinderbuecherComparison.map((item) => ({
    file: item.file,
    title: item.title,
    subtitle: item.tag,
    description: item.text,
  }));

  return (
    <PortfolioLayout
      kicker="Case Study · Illustration & KI-Art-Direction"
      title="Personalisierte Kinderbücher"
      subtitle="Bilderbücher, in denen echte Kinder die Hauptfiguren ihrer eigenen Geschichte werden. Eine Symbiose aus moderner KI-Bildgenerierung, handwerklicher digitaler Retusche und feinfühligem Buchlayout."
      role="Design, Illustration, KI-Art-Direction, Layout"
      metaBadges={[
        ["Genre", "Bilderbuch / Print"],
        ["Technik", "KI-Synthese & Retusche"],
        ["Werkzeuge", "Photoshop, KI, Figma"],
        ["Fokus", "Charakterkonsistenz"],
      ]}
    >
      <div className="space-y-12">
        {/* Project Description Block */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-base sm:text-lg text-ink leading-relaxed">
            <p>
              Personalisierte Bilderbücher, in denen echte Kinder zu Hauptfiguren ihrer eigenen Geschichte werden – gemeinsam mit ihren Lieblingscharakteren. Arbeit mit KI-Bildgenerierung unter klarer gestalterischer Führung: Stilrichtung, Charakterkonsistenz, Auswahl und Nachbearbeitung der Motive, Seitenlayout und drucknahe Aufbereitung.
            </p>
            <p className="text-base text-muted">
              Künstliche Intelligenz dient hierbei als kraftvolles visuelles Werkzeug. Die eigentliche gestalterische Leistung liegt in der Art-Direction: Gesichtszüge, Mimik und Emotion des Kindes müssen über mehrere Buchseiten hinweg authentisch, warmherzig und stilistisch einheitlich erhalten bleiben.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="border border-rule bg-sheet/40 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-reflex mb-4">
              Kreativer Qualitätsanspruch
            </h3>
            <ul className="space-y-3 text-sm text-ink">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Hoher Wiedererkennungswert des Kindes ohne unnatürliche Verfremdung</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Konsistente malerische Lichtstimmung und warme Farbwelten</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Manuelle Retusche von Händen, Haaren und feinen Lichtkanten in Photoshop</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-gilt shrink-0 mt-0.5" />
                <span>Aufbereitung für hochwertigen Buchdruck (300 dpi, Beschnittzugabe)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Section (Vorbild → Illustration) */}
        <div className="border-t border-rule pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-reflex">
                Vorbild & Umsetzung
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Vom realen Foto zur malerischen Buchillustration
              </h2>
            </div>
            <p className="text-xs text-muted uppercase tracking-wider">
              Klick zum Vergrößern
            </p>
          </div>

          <div className="grid min-w-0 gap-8 md:grid-cols-3">
            {kinderbuecherComparison.map((item, index) => (
              <GalleryTrigger
                key={item.file}
                label={`${item.title} vergrößern`}
                onOpen={() => setLightboxIndex(index)}
                className="group flex min-w-0 cursor-pointer flex-col justify-between border border-rule bg-sheet/25 transition-all duration-200 hover:border-reflex/70 hover:shadow-lg"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-night/5 border-b border-rule">
                    <img
                      src={publicAsset(item.file)}
                      alt={item.title}
                      loading="lazy"
                      className="size-full max-w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-night/90 text-gold px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border border-gold/40">
                      {item.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-night/80 text-gold p-2 opacity-0 group-hover:opacity-100 transition-opacity border border-gold/40 shadow-md">
                      <Maximize2 className="size-4" />
                    </div>
                  </div>

                  <figcaption className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gilt">
                      {item.tag}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl text-ink mt-1 group-hover:text-reflex transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </figcaption>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="text-[11px] uppercase tracking-wider text-gilt/80 border-t border-rule/60 pt-2 flex items-center gap-1.5">
                    <Sparkles className="size-3 text-gold" />
                    <span>Detailansicht im Lightbox-Zoom</span>
                  </div>
                </div>
              </GalleryTrigger>
            ))}
          </div>
        </div>

        {/* 4-Step Production Process */}
        <div className="border border-rule bg-sheet/40 p-6 md:p-10">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-reflex">
              Der Arbeitsprozess
            </p>
            <h3 className="font-display text-3xl text-ink mt-1">
              Methodik hinter den personalisierten Büchern
            </h3>
            <p className="text-sm text-muted mt-2">
              Ein strukturierter vierstufiger Design- und Illustrationsprozess garantiert verlässliche Qualität und emotionale Wirkung.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Merkmalsanalyse",
                desc: "Analyse des Referenzfotos hinsichtlich Augenform, Lächeln, Gesichtsgeometrie und typischer Gestik.",
                icon: Palette,
              },
              {
                step: "02",
                title: "Geführte KI-Generierung",
                desc: "Iteratives Prompting mit exakten Stil- und Beleuchtungsparametern für ein märchenhaftes Buchflair.",
                icon: Wand2,
              },
              {
                step: "03",
                title: "Digitale Retusche",
                desc: "Manuelle Feinarbeit in Photoshop: Farbanpassung, Beseitigung von KI-Artefakten und Freistellung.",
                icon: CheckCircle2,
              },
              {
                step: "04",
                title: "Layout & Reinzeichnung",
                desc: "Satz der Textabschnitte, Einbindung in Druckvorlagen und finale Aufbereitung für den Buchdruck.",
                icon: Heart,
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="border border-rule bg-paper p-5 relative">
                  <span className="font-display text-3xl text-reflex leading-none">
                    {p.step}
                  </span>
                  <div className="mt-3 flex items-center gap-2">
                    <Icon className="size-4 text-gilt" />
                    <h4 className="text-base font-semibold text-ink">{p.title}</h4>
                  </div>
                  <p className="text-xs text-muted mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation between cases */}
        <div className="border-t border-rule pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/projekte/speisekarte"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-reflex hover:text-ink transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Vorheriges Projekt: Speisekarte</span>
          </a>

          <a
            href="/projekte"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gilt hover:text-ink transition-colors"
          >
            <span>Alle Projekte ansehen →</span>
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
