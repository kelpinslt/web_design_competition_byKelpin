import type { Artisan } from "@/types/content";
import { cn } from "@/lib/cn";

type OrbitPaginationProps = {
  artisans: Artisan[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
};

/**
 * Vertical dots at the right edge of the hero (desktop and tablet).
 * One dot per real artisan (PRD E4.A8): shows the count and the active
 * artisan, and selects on click, Enter or Space. Each dot is a 48px target.
 */
export function OrbitPagination({ artisans, activeIndex, onSelect, className }: OrbitPaginationProps) {
  return (
    <div
      role="group"
      aria-label="Penanda penenun"
      className={cn("flex flex-col", className)}
    >
      {artisans.map((artisan, index) => {
        const active = index === activeIndex;
        return (
          <button
            key={artisan.slug}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Pilih penenun: ${artisan.name}`}
            aria-pressed={active}
            className="group grid size-12 place-items-center rounded-xs"
          >
            <span
              aria-hidden="true"
              className={cn(
                "block rounded-full transition-[width,height,background-color] duration-(--dur-micro) ease-editorial",
                active ? "size-2.5 bg-gold" : "size-1.5 bg-ivory/45 group-hover:bg-ivory",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
