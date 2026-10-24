import { useEffect, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { publicAsset } from "@/lib/public-asset";

export interface LightboxItem {
  file: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({ items, currentIndex, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-h-[95dvh] max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with count & close */}
        <div className="flex w-full items-center justify-between pb-3 text-paper border-b border-gold/30">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-gold">
              {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <span className="font-semibold text-sm sm:text-base text-paper truncate max-w-md">
              {current.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-night transition-colors"
            title="Schließen (Esc)"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Schließen</span>
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative my-3 flex items-center justify-center w-full max-h-[75dvh] overflow-hidden bg-night/50 border border-gold/20">
          <img
            src={publicAsset(current.file)}
            alt={current.title}
            className="max-h-[75dvh] w-auto max-w-full object-contain"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 inline-flex size-11 items-center justify-center bg-night/80 border border-gold/40 text-gold hover:bg-gold hover:text-night transition-colors shadow-lg"
                title="Vorheriges Bild (Pfeiltaste links)"
              >
                <ChevronLeft className="size-6" />
                <span className="sr-only">Vorheriges Bild</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % items.length)}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 inline-flex size-11 items-center justify-center bg-night/80 border border-gold/40 text-gold hover:bg-gold hover:text-night transition-colors shadow-lg"
                title="Nächstes Bild (Pfeiltaste rechts)"
              >
                <ChevronRight className="size-6" />
                <span className="sr-only">Nächstes Bild</span>
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="w-full text-center sm:text-left text-mist text-sm px-2">
          {current.subtitle && (
            <p className="font-semibold text-gold text-xs uppercase tracking-wider">{current.subtitle}</p>
          )}
          {current.description && <p className="mt-1">{current.description}</p>}
        </div>
      </div>
    </div>
  );
}

export function GalleryTrigger({
  label,
  onOpen,
  children,
  className,
}: {
  label: string;
  onOpen: () => void;
  children: ReactNode;
  className?: string;
}) {
  const onKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <figure
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onOpen}
      onKeyDown={onKeyDown}
      className={className}
    >
      {children}
    </figure>
  );
}
