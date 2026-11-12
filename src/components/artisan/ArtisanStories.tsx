import type { Artisan } from "@/types/content";
import { penenunCopy } from "@/data/penenun";
import { ButtonLink } from "@/components/ui/Links";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section, type Tone } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading, Prose } from "@/components/ui/Typography";
import { artisanPath, reportedAgeLabel } from "@/lib/artisans";
import { cn } from "@/lib/cn";

/**
 * Penenun Hita section 2 — Kisah para penenun (PRD V3.0 E4.B; v3 §7.4).
 * One chapter per artisan; three compositions rotate so chapters never
 * repeat a photo-left/text-right pattern. Artisans without a matched
 * photo get an honest frame, never a borrowed portrait.
 */

const chapterTones: Tone[] = ["ivory", "obsidian", "brown"];

function Meta({ artisan }: { artisan: Artisan }) {
  const age = reportedAgeLabel(artisan);
  return (
    <dl className="grid gap-4 text-small sm:grid-cols-2">
      <div className="border-t border-(--rule) pt-3">
        <dt className="text-(--fg-muted)">Asal</dt>
        <dd className="mt-1 text-(--fg)">{artisan.originFull}</dd>
      </div>
      <div className="border-t border-(--rule) pt-3">
        <dt className="text-(--fg-muted)">Spesialisasi</dt>
        <dd className="mt-1 text-(--fg)">{artisan.specialty}</dd>
      </div>
      {artisan.experience ? (
        <div className="border-t border-(--rule) pt-3">
          <dt className="text-(--fg-muted)">Pengalaman</dt>
          <dd className="mt-1 text-(--fg)">{artisan.experience}</dd>
        </div>
      ) : null}
      {age ? (
        <div className="border-t border-(--rule) pt-3">
          <dt className="text-(--fg-muted)">Usia pada sumber</dt>
          <dd className="mt-1 text-(--fg)">{age}</dd>
        </div>
      ) : null}
    </dl>
  );
}

function Portrait({ artisan, ratio, sizes, className }: { artisan: Artisan; ratio: "portrait" | "landscape" | "wide"; sizes: string; className?: string }) {
  return (
    <MediaFrame
      media={artisan.portrait}
      ratio={ratio}
      sizes={sizes}
      className={className}
      pendingLabel="Foto belum dipasangkan: menunggu konfirmasi identitas foto."
    />
  );
}

function Closing({ artisan }: { artisan: Artisan }) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      <ButtonLink href={artisanPath(artisan)} variant="outline">
        Jelajahi Kisah
      </ButtonLink>
      <SourceNote ids={artisan.sourceIds} />
    </div>
  );
}

/** A: portrait on the right, story in two columns on the left. */
function ColumnsChapter({ artisan }: { artisan: Artisan }) {
  return (
    <>
      <div className="col-span-full md:col-span-4 lg:col-span-7">
        <h3 id={`kisah-${artisan.slug}`} className="font-serif text-h2 text-(--fg)">
          {artisan.name}
        </h3>
        <Prose className="mt-8 md:columns-2 md:gap-(--gutter) [&>p]:break-inside-avoid">
          {artisan.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
        <div className="mt-8">
          <Meta artisan={artisan} />
        </div>
        <Closing artisan={artisan} />
      </div>
      <div className="col-span-full md:col-span-2 md:row-start-1 md:col-start-5 lg:col-span-4 lg:col-start-9">
        <Portrait artisan={artisan} ratio="portrait" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 32vw, 100vw" />
      </div>
    </>
  );
}

/** B: a wide photograph leads, the learning story set large beneath it. */
function WideChapter({ artisan }: { artisan: Artisan }) {
  return (
    <>
      {/* Source photos are small, so the "wide" lead stays at 8 of 12 columns. */}
      <div className="col-span-full lg:col-span-8">
        <Portrait artisan={artisan} ratio="landscape" sizes="(min-width: 1440px) 860px, (min-width: 1024px) 62vw, 100vw" />
      </div>
      <div className="col-span-full lg:col-span-5">
        <h3 id={`kisah-${artisan.slug}`} className="font-serif text-h2 text-(--fg)">
          {artisan.name}
        </h3>
        {artisan.learning ? <p className="prose-measure mt-6 font-serif text-h3 text-(--fg)">{artisan.learning}</p> : null}
      </div>
      <div className="col-span-full lg:col-span-6 lg:col-start-7">
        <Prose>
          {artisan.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
        <div className="mt-8">
          <Meta artisan={artisan} />
        </div>
        <Closing artisan={artisan} />
      </div>
    </>
  );
}

/** C: a timeline thread when real chronology exists; the learning story otherwise. */
function ThreadChapter({ artisan }: { artisan: Artisan }) {
  return (
    <>
      <div className="col-span-full md:col-span-3 lg:col-span-4">
        <Portrait artisan={artisan} ratio="portrait" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="col-span-full md:col-span-3 lg:col-span-7 lg:col-start-6">
        <h3 id={`kisah-${artisan.slug}`} className="font-serif text-h2 text-(--fg)">
          {artisan.name}
        </h3>
        <Prose className="mt-8">
          {artisan.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
        {artisan.timeline.length > 0 ? (
          <ol className="mt-10 border-l border-gold/60 pl-6">
            {artisan.timeline.map((entry) => (
              <li key={entry.period} className="relative pb-6 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[1.6rem] top-2.5 size-2 rounded-full bg-gold" />
                <p className="font-serif text-h3 text-(--fg)">{entry.period}</p>
                <p className="prose-measure mt-1 text-body text-(--fg-muted)">{entry.description}</p>
              </li>
            ))}
          </ol>
        ) : artisan.learning ? (
          <p className="prose-measure mt-8 border-l border-gold/60 pl-6 text-lead text-(--fg)">{artisan.learning}</p>
        ) : null}
        <div className="mt-8">
          <Meta artisan={artisan} />
        </div>
        <Closing artisan={artisan} />
      </div>
    </>
  );
}

const compositions = [ColumnsChapter, WideChapter, ThreadChapter];

export function ArtisanStories({ artisans }: { artisans: Artisan[] }) {
  const { heading, intro } = penenunCopy.stories;

  return (
    <>
      <Section tone="ivory" spacing="tight" aria-labelledby="kisah-judul" className="pb-0">
        <Container grid className="gap-y-6">
          <Heading level={2} id="kisah-judul" className="col-span-full lg:col-span-6">
            {heading}
          </Heading>
          <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
            {intro}
          </p>
        </Container>
      </Section>

      {artisans.map((artisan, index) => {
        // Without a matched photo, use the composition with a small portrait frame.
        const Composition = artisan.portrait ? compositions[index % compositions.length] : ThreadChapter;
        const tone = chapterTones[index % chapterTones.length];
        return (
          <Section
            key={artisan.slug}
            tone={tone}
            spacing="tight"
            aria-labelledby={`kisah-${artisan.slug}`}
            className={cn(index === 0 && "pt-16")}
          >
            <Container grid className="gap-y-10">
              <Composition artisan={artisan} />
            </Container>
          </Section>
        );
      })}
    </>
  );
}
