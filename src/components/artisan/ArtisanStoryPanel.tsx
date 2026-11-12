import type { CSSProperties } from "react";
import type { Artisan } from "@/types/content";
import { stageImageFor } from "./ArtisanStage";
import { formatSource } from "@/data/sources";
import { ButtonLink } from "@/components/ui/Links";
import { artisanPath, getVerifiedQuote } from "@/lib/artisans";

/** Delay for the n-th line of the staggered text reveal. */
const line = (n: number): CSSProperties => ({ animationDelay: `${n * 60}ms` });

/**
 * Left story panel of the Penenun Hita hero, set directly on the
 * photograph (no card). Order (approved K3): name, location and start
 * year, verified quote with source, short history, weaving
 * characteristics, "Jelajahi Kisah". Re-mount with a new key to replay
 * the reveal when the artisan changes.
 */
export function ArtisanStoryPanel({ artisan }: { artisan: Artisan }) {
  const verified = getVerifiedQuote(artisan);
  const stage = stageImageFor(artisan);

  return (
    <div className="max-w-[34rem]">
      <h2 style={line(0)} className="mt-5 font-serif text-h1 text-ivory motion-safe:animate-rise">
        {artisan.name}
      </h2>

      {artisan.origin ? (
        <p style={line(1)} className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-ui text-ivory motion-safe:animate-rise">
          <span>{artisan.origin}</span>
          {artisan.experience ? <span>{artisan.experience}</span> : null}
        </p>
      ) : null}

      {verified ? (
        <figure style={line(2)} className="mt-8 border-l border-gold/60 pl-5 motion-safe:animate-rise">
          <blockquote className="font-serif text-[1.5rem] italic leading-snug text-ivory">
            <p>&ldquo;{verified.quote.text}&rdquo;</p>
          </blockquote>
          {verified.quote.translation ? (
            <p className="mt-2 text-small text-ivory-muted">{verified.quote.translation}</p>
          ) : null}
          <figcaption className="mt-3 text-small text-ivory-muted">
            {verified.quote.language}. Sumber: {formatSource(verified.source)}
            {verified.quote.locator ? `, ${verified.quote.locator}` : null}
          </figcaption>
        </figure>
      ) : null}

      <p style={line(3)} className="prose-measure mt-6 line-clamp-4 text-body text-ivory motion-safe:animate-rise">
        {artisan.introduction}
      </p>

      <p style={line(4)} className="prose-measure mt-5 text-small text-ivory motion-safe:animate-rise">
        <span className="block font-semibold text-gold">Spesialisasi</span>
        {artisan.specialty}
      </p>

      <div style={line(5)} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 motion-safe:animate-rise">
        <ButtonLink href={artisanPath(artisan)}>Jelajahi Kisah</ButtonLink>
        <span className="text-small text-ivory-muted">
          {stage ? (stage.illustration ? `Latar: ${stage.credit}` : `Foto: ${stage.credit}`) : null}
        </span>
      </div>
    </div>
  );
}
