import Image from "next/image";
import type { MediaAsset } from "@/types/content";
import { cn } from "@/lib/cn";

type Ratio = "portrait" | "tall" | "landscape" | "wide" | "square" | "cinema";

const ratioClass: Record<Ratio, string> = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[2/3]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
  cinema: "aspect-[4/5] md:aspect-[21/9]",
};

type MediaFrameProps = {
  /** Null while a licensed photograph is not yet available. */
  media: MediaAsset | null;
  ratio?: Ratio;
  /** next/image `sizes`; describe the rendered width per breakpoint. */
  sizes: string;
  priority?: boolean;
  /** Darken the image so overlaid text stays readable. */
  overlay?: boolean;
  /** Clip-path reveal on load. Use once per page, on the lead image. */
  unveil?: boolean;
  /** Shown in the empty frame, e.g. which photograph is still needed. */
  pendingLabel?: string;
  /** Hide caption and credit (when they are shown elsewhere nearby). */
  bare?: boolean;
  className?: string;
  imageClassName?: string;
};

/**
 * Standard image treatment: fixed ratio (no layout shift), object-cover on
 * the recorded focal point, optional overlay, caption and credit below.
 * Illustrations carry a visible "Ilustrasi" label so they are never read
 * as documentation (Master Execution Prompt v3 §5.2). Without a photo it
 * renders an honest empty frame instead of a stand-in image.
 */
export function MediaFrame({
  media,
  ratio = "portrait",
  sizes,
  priority = false,
  overlay = false,
  unveil = false,
  pendingLabel = "Foto belum tersedia",
  bare = false,
  className,
  imageClassName,
}: MediaFrameProps) {
  const position = media ? `${media.focal?.x ?? 50}% ${media.focal?.y ?? 50}%` : undefined;
  const showMeta = !bare && media && (media.caption || media.credit);

  return (
    <figure className={cn("group/media", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xs bg-brown",
          ratioClass[ratio],
          unveil && "motion-safe:animate-unveil",
          !media && "border border-(--rule) bg-transparent",
        )}
      >
        {media ? (
          <>
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes={sizes}
              priority={priority}
              className={cn(
                "object-cover transition-transform duration-(--dur-section) ease-editorial group-hover/media:scale-[1.03]",
                imageClassName,
              )}
              style={{ objectPosition: position }}
            />
            {overlay ? (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-obsidian/85 via-obsidian/25 to-transparent"
              />
            ) : null}
            {media.illustration ? <IllustrationTag className="absolute left-3 top-3" /> : null}
          </>
        ) : (
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-small text-(--fg-muted)">{pendingLabel}</span>
          </div>
        )}
      </div>
      {showMeta ? (
        <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-small text-(--fg-muted)">
          {media.caption ? <span className="text-(--fg)">{media.caption}</span> : null}
          <span>{creditLine(media)}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

/** "Foto: IDN Times Sumut, 2026" for photographs; the plain credit for illustrations. */
export function creditLine(media: MediaAsset): string {
  return media.illustration ? media.credit : `Foto: ${media.credit}`;
}

/** Visible marker on AI or non-documentary images. */
export function IllustrationTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "rounded-xs bg-obsidian/75 px-2 py-1 text-micro font-semibold uppercase text-ivory",
        className,
      )}
    >
      Ilustrasi
    </span>
  );
}
