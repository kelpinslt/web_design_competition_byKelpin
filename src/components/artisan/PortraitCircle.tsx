import Image from "next/image";
import Link from "next/link";
import type { MediaAsset } from "@/types/content";
import { cn } from "@/lib/cn";

/**
 * Circular artisan portrait with name and location label.
 *
 * Shared by the Beranda teaser and the Penenun Hita hero (PRD V3.0, E4.A3–A5):
 * a perfect circle, object-fit cover, thin translucent ivory border, soft
 * shadow, name in DM Serif italic and location in Manrope. A circle always
 * represents a real artisan, so a portrait photo is required.
 *
 * Two modes:
 * - `href`: a link (Beranda teaser).
 * - `onSelect`: a button that selects without navigating (Penenun Hita
 *   hero, E4.A7), with `active` for the selected state.
 */

export type PortraitSize = "featured" | "second" | "third" | "fourth" | "support";

/** Starting sizes from E4.A3, in px. */
export const portraitSizePx: Record<PortraitSize, number> = {
  featured: 152,
  second: 108,
  third: 96,
  fourth: 112,
  support: 92,
};

type BaseProps = {
  name: string;
  origin: string | null;
  portrait: MediaAsset;
  size?: PortraitSize;
  /** Exact diameter in px; overrides `size` (used by the Penenun Hita curve). */
  diameter?: number;
  /** `responsive` stacks the label below on small screens and beside on desktop. */
  labelPlacement?: "below" | "right" | "left" | "responsive";
  /** Extra classes for the name/location label, e.g. to quiet it on tablet. */
  labelClassName?: string;
  /** Selected state (selection mode). */
  active?: boolean;
  /** Slightly dim when another portrait is selected (E4.A4). */
  dimmed?: boolean;
  className?: string;
};

type PortraitCircleProps =
  | (BaseProps & { href: string; onSelect?: never })
  | (BaseProps & { onSelect: () => void; href?: never });

export function PortraitCircle(props: PortraitCircleProps) {
  const {
    name,
    origin,
    portrait,
    size = "support",
    diameter,
    labelPlacement = "below",
    labelClassName,
    active = false,
    dimmed = false,
    className,
  } = props;
  const px = diameter ?? portraitSizePx[size];

  const wrapperClass = cn(
    "group/portrait flex min-h-11 min-w-11 items-center gap-3 rounded-xs text-ivory",
    "transition-opacity duration-(--dur-hover) ease-editorial",
    labelPlacement === "below" && "flex-col text-center",
    labelPlacement === "right" && "flex-row text-left",
    labelPlacement === "left" && "flex-row-reverse text-right",
    labelPlacement === "responsive" && "flex-col text-center lg:flex-row lg:gap-4 lg:text-left",
    dimmed && !active && "opacity-75 hover:opacity-100 focus-visible:opacity-100",
    className,
  );

  const content = (
    <>
      <span
        className={cn(
          "relative block shrink-0 overflow-hidden rounded-full shadow-[0_18px_40px_-16px_rgb(0_0_0/0.75)]",
          "ring-1 transition-[width,height,transform,box-shadow] duration-[400ms] ease-editorial",
          "group-hover/portrait:scale-[1.04] group-focus-visible/portrait:scale-[1.04]",
          active ? "scale-[1.06] ring-2 ring-gold" : "ring-ivory/35",
        )}
        style={{ width: px, height: px }}
      >
        <Image src={portrait.src} alt={portrait.alt} fill
          // With a changing diameter, request the largest size once so the
          // image is not re-fetched when the portrait grows.
          sizes={diameter ? "160px" : `${px}px`}
          className="object-cover"
        />
      </span>
      <span className={cn("block transition-opacity duration-(--dur-hover)", labelClassName)}>
        <span className="block font-serif text-[1.125rem] italic leading-tight">{name}</span>
        {origin ? <span className="mt-0.5 block text-small text-ivory-muted">{origin}</span> : null}
      </span>
    </>
  );

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={wrapperClass}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={props.onSelect} aria-pressed={active} className={wrapperClass}>
      {content}
    </button>
  );
}
