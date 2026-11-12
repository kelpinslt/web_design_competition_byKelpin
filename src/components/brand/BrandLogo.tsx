import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The official PARTONUN symbol, from the owner's master file
 * (docs/references/logo). This is the trimmed copy: only fully transparent
 * margins were cropped so the symbol centres optically; shape, proportion
 * and colour are untouched. Never redraw or stretch it — size by height.
 */
const LOGO = { src: "/brand/partonun-logo-trimmed.png", width: 206, height: 259 };

type BrandLogoProps = {
  /** Rendered height in px; width follows the original proportion. */
  height: number;
  /** Decorative when the brand name is written next to it. */
  decorative?: boolean;
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ height, decorative = true, priority = false, className }: BrandLogoProps) {
  const width = Math.round((height * LOGO.width) / LOGO.height);
  return (
    <Image
      src={LOGO.src}
      width={width}
      height={height}
      alt={decorative ? "" : `Logo ${site.name}`}
      aria-hidden={decorative || undefined}
      priority={priority}
      className={cn("shrink-0", className)}
      style={{ width, height }}
    />
  );
}

/**
 * "PARTONUN" set in the wordmark face (high-contrast Didone capitals).
 * Bodoni Moda's text optical size (11) at weight 700: still Didone in
 * character, but its hairlines are sturdy enough to survive 1x screens and
 * fractional pixel positions (larger optical sizes made strokes drop out).
 * Grayscale smoothing is off here for the same reason.
 */
export function BrandName({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-wordmark font-bold uppercase leading-none [font-variation-settings:'opsz'_11] [-webkit-font-smoothing:auto]",
        className,
      )}
    >
      {site.name}
    </span>
  );
}

/**
 * Vertical brand lockup: symbol, PARTONUN beneath it, tagline beneath that.
 * For places with room, such as the footer.
 */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-fit flex-col items-center text-center", className)}>
      <BrandLogo height={88} />
      {/* A 0.3px stroke keeps the large wordmark's hairlines solid at 1x density,
          where the footer's compositing layer renders text with grayscale smoothing. */}
      <BrandName className="mt-5 text-[2.25rem] tracking-[0.06em] text-ivory [-webkit-text-stroke:0.3px_currentColor]" />
      <p className="mt-3 font-serif text-[1.0625rem] italic text-ivory-muted">{site.tagline}</p>
    </div>
  );
}
