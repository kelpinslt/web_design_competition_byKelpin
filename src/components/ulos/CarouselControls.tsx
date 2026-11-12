import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CarouselControlsProps = {
  active: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
};

const pad = (value: number) => String(value).padStart(2, "0");

const buttonClass =
  "grid size-12 place-items-center rounded-xs border border-ivory/35 text-ivory transition-colors duration-(--dur-micro) hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30";

/** Previous / next buttons around a "03 / 08" position indicator (PRD E2). */
export function CarouselControls({ active, total, onPrevious, onNext, className }: CarouselControlsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button type="button" onClick={onPrevious} disabled={active === 0} aria-label="Ulos sebelumnya" className={buttonClass}>
        <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.25} />
      </button>
      <p aria-live="polite" className="min-w-[5.5rem] text-center text-ui tabular-nums">
        <span className="text-ivory">{pad(active + 1)}</span>
        <span className="text-ivory-muted"> / {pad(total)}</span>
        <span className="sr-only">, koleksi ke-{active + 1} dari {total}</span>
      </p>
      <button
        type="button"
        onClick={onNext}
        disabled={active === total - 1}
        aria-label="Ulos berikutnya"
        className={buttonClass}
      >
        <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.25} />
      </button>
    </div>
  );
}
