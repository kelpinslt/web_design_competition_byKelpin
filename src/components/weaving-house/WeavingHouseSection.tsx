import Image from "next/image";
import type { WeavingHouse } from "@/types/content";
import { penenunCopy } from "@/data/penenun";
import { ButtonLink } from "@/components/ui/Links";
import { creditLine, MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";
import { weavingHousePath } from "@/lib/artisans";

/**
 * Rumah Tenun & Galeri Ulos Pilihan (PRD V3.0 E4.D; v3 §7.4). Three
 * profiles, three compositions — no uniform card list. Each states the
 * business's actual role and links to its detail page.
 */

function RoleLine({ house }: { house: WeavingHouse }) {
  return (
    <p className="text-micro font-semibold uppercase text-(--label)">
      {house.region} · {house.founded}
    </p>
  );
}

function DetailLink({ house }: { house: WeavingHouse }) {
  return (
    <ButtonLink href={weavingHousePath(house)} variant="outline" className="mt-8">
      Kenali {house.name}
    </ButtonLink>
  );
}

/** A: a portrait photograph beside the story, offset downward. */
function PortraitHouse({ house }: { house: WeavingHouse }) {
  return (
    <>
      <div className="col-span-full md:col-span-3 lg:col-span-4">
        <MediaFrame media={house.coverImage} ratio="portrait" sizes="(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-6 lg:pt-16">
        <RoleLine house={house} />
        <h3 id={`rumah-${house.slug}`} className="mt-4 font-serif text-h1 text-(--fg)">
          {house.name}
        </h3>
        <p className="mt-3 text-ui text-(--fg-muted)">{house.role}</p>
        <p className="prose-measure mt-8 text-lead text-(--fg)">{house.intro}</p>
        <DetailLink house={house} />
      </div>
    </>
  );
}

/** B: a tall photograph with the name set over it, the story to its left. */
function OverlayHouse({ house }: { house: WeavingHouse }) {
  const position = `${house.coverImage.focal?.x ?? 50}% ${house.coverImage.focal?.y ?? 50}%`;
  return (
    <>
      <div className="col-span-full md:col-span-3 lg:col-span-5 lg:self-end">
        <RoleLine house={house} />
        <p className="mt-3 text-ui text-(--fg-muted)">{house.role}</p>
        <p className="prose-measure mt-8 text-lead text-(--fg)">{house.intro}</p>
        <DetailLink house={house} />
      </div>
      <figure className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-7">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-brown lg:aspect-[5/6]">
          <Image
            src={house.coverImage.src}
            alt={house.coverImage.alt}
            fill
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: position }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-obsidian/90 via-obsidian/20 to-transparent" />
          <h3 id={`rumah-${house.slug}`} className="absolute inset-x-0 bottom-0 p-6 font-serif text-h1 text-ivory md:p-8">
            {house.name}
          </h3>
        </div>
        <figcaption className="mt-3 text-small text-(--fg-muted)">{creditLine(house.coverImage)}</figcaption>
      </figure>
    </>
  );
}

/** C: a landscape photograph across eight columns, locations listed beside it. */
function WideHouse({ house }: { house: WeavingHouse }) {
  return (
    <>
      <div className="col-span-full lg:col-span-8">
        <MediaFrame media={house.coverImage} ratio="landscape" sizes="(min-width: 1440px) 860px, (min-width: 1024px) 62vw, 100vw" />
      </div>
      <div className="col-span-full lg:col-span-4">
        <RoleLine house={house} />
        <h3 id={`rumah-${house.slug}`} className="mt-4 font-serif text-h2 text-(--fg)">
          {house.name}
        </h3>
        <p className="mt-3 text-ui text-(--fg-muted)">{house.role}</p>
        <ul className="mt-6">
          {house.locations.slice(0, 3).map((location) => (
            <li key={location.name} className="border-t border-(--rule) py-3">
              <span className="block text-micro font-semibold uppercase text-(--fg-muted)">{location.kind}</span>
              <span className="block text-body text-(--fg)">{location.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="prose-measure col-span-full text-lead text-(--fg) lg:col-span-7">{house.intro}</p>
      <div className="col-span-full lg:col-span-4 lg:col-start-9 lg:self-end">
        <DetailLink house={house} />
      </div>
    </>
  );
}

const compositions = [PortraitHouse, OverlayHouse, WideHouse];

export function WeavingHouseSection({ houses, headingLevel = 2 }: { houses: WeavingHouse[]; headingLevel?: 2 }) {
  const { heading, intro } = penenunCopy.houses;

  return (
    <Section tone="obsidian" warp aria-labelledby="rumah-judul">
      <Container grid className="gap-y-6">
        <Heading level={headingLevel} id="rumah-judul" className="col-span-full lg:col-span-7">
          {heading}
        </Heading>
        <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
          {intro}
        </p>
      </Container>

      {houses.map((house, index) => {
        const Composition = compositions[index % compositions.length];
        return (
          <article key={house.slug} aria-labelledby={`rumah-${house.slug}`} className="mt-section-tight">
            <Container grid className="gap-y-10 border-t border-(--rule) pt-section-tight">
              <Composition house={house} />
            </Container>
          </article>
        );
      })}
    </Section>
  );
}
