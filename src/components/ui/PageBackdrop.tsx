import Image from "next/image";
import type { MediaAsset } from "@/types/content";
import { cn } from "@/lib/cn";

type PageBackdropProps = {
  media: MediaAsset | null;
  /**
   * `hero`: the photo leads; darker at the bottom and left where text sits.
   * `stage`: the photo stays behind content such as the catalogue cards,
   * so it is held further back.
   */
  strength?: "hero" | "stage";
  /** Clip-path reveal on load; use for the page's first section only. */
  unveil?: boolean;
  priority?: boolean;
};

/**
 * Full-bleed background photograph for a page section (Dame Ulos-style
 * documentary photography under dark overlays, PRD F1.1). Renders nothing
 * while the slot is empty. Place inside a `relative isolate` section.
 */
export function PageBackdrop({ media, strength = "hero", unveil = false, priority = true }: PageBackdropProps) {
  if (!media) return null;
  const position = `${media.focal?.x ?? 50}% ${media.focal?.y ?? 45}%`;

  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden", unveil && "motion-safe:animate-unveil")}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {strength === "hero" ? (
        <>
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/50 to-obsidian/15" />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-obsidian/60 to-transparent" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 bg-obsidian/70" />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-obsidian/40 via-transparent to-obsidian" />
        </>
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-brown/20 mix-blend-multiply" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(16_14_12/0.7)_100%)]"
      />
    </div>
  );
}

/** Credit line for a background photo, or an honest note that the slot is empty. */
export function BackdropCredit({ media, label, className }: { media: MediaAsset | null; label: string; className?: string }) {
  return (
    <p className={cn("text-small text-(--fg-muted)", className)}>
      {media
        ? media.illustration
          ? `Latar: ${media.caption ?? "Ilustrasi"} (${media.credit})`
          : `Foto latar: ${media.credit}`
        : `Slot foto latar: ${label} belum tersedia.`}
    </p>
  );
}
