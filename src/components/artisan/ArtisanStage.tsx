import Image from "next/image";
import type { Artisan, MediaAsset } from "@/types/content";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { cn } from "@/lib/cn";

/** The artisan's own stage photo, or the page-level Penenun Hita slot (K1). */
export function stageImageFor(artisan: Artisan): MediaAsset | null {
  return artisan.stageImage ?? pageBackgrounds.penenunHita;
}

type StageLayerProps = {
  image: MediaAsset;
  /** Fade and settle in (a newly selected artisan). */
  entering: boolean;
  priority?: boolean;
};

/**
 * Two-layer photograph (PRD E4.A2 + approved edge blur): a small, blurred
 * copy fills the frame; the sharp full-size photo sits on top with a radial
 * mask centred on the photo's focal point, so the artisan stays sharp and
 * the edges soften. Blurring the small copy keeps rendering cheap.
 */
function StageLayer({ image, entering, priority = false }: StageLayerProps) {
  // Without a recorded focal point the artisan is assumed centre-right, so
  // the photo leads from the middle to the right and the story sits left.
  const position = `${image.focal?.x ?? 62}% ${image.focal?.y ?? 38}%`;
  const mask = `radial-gradient(ellipse 62% 78% at ${position}, #000 44%, transparent 82%)`;
  // A soft, warm key light on the subject for cinematic depth (measured gold accent).
  const keyLight = `radial-gradient(ellipse 42% 55% at ${position}, rgb(198 161 91 / 0.22), transparent 70%)`;
  return (
    <div className={cn("absolute inset-0", entering && "motion-safe:animate-crossfade")}>
      <Image
        src={image.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="480px"
        className="scale-110 object-cover blur-[28px]"
        style={{ objectPosition: position }}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn("object-cover", entering && "motion-safe:animate-settle")}
        style={{ objectPosition: position, maskImage: mask, WebkitMaskImage: mask }}
      />
      <div aria-hidden="true" className="absolute inset-0 mix-blend-soft-light" style={{ background: keyLight }} />
    </div>
  );
}

type ArtisanStageProps = {
  current: Artisan;
  previous: Artisan | null;
};

/**
 * Full-bleed hero background for the selected artisan. The previous photo
 * stays underneath while the new one cross-fades in, then readability and
 * grading layers sit on top: overlay, left and bottom gradients, warm
 * multiply and vignette (E4.A2 items 4–8).
 */
export function ArtisanStage({ current, previous }: ArtisanStageProps) {
  const currentImage = stageImageFor(current);
  const previousImage = previous ? stageImageFor(previous) : null;

  return (
    <div className="absolute inset-0 -z-10 bg-obsidian">
      {previous && previousImage && previous.slug !== current.slug ? (
        <StageLayer key={`previous-${previous.slug}`} image={previousImage} entering={false} />
      ) : null}
      {currentImage ? (
        <StageLayer key={current.slug} image={currentImage} entering={previous !== null} priority={previous === null} />
      ) : null}

      <div aria-hidden="true" className="absolute inset-0 bg-obsidian/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-obsidian/90 via-obsidian/45 via-45% to-transparent to-70%"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[78%] bg-linear-to-t from-obsidian via-obsidian/70 to-transparent md:h-1/2"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brown/30 mix-blend-multiply" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(16_14_12/0.75)_100%)]"
      />
    </div>
  );
}
