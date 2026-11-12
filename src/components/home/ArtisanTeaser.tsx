import { artisans } from "@/data/artisans";
import { homeCopy } from "@/data/home";
import { PortraitCircle, type PortraitSize } from "@/components/artisan/PortraitCircle";
import { EmptyState } from "@/components/ui/EmptyState";
import { ButtonLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";
import { artisanPath } from "@/lib/artisans";
import { cn } from "@/lib/cn";

/**
 * Beranda 5 — Kisah penenun (v3 §7.1).
 *
 * A teaser for Penenun Hita: narrative on the left, up to four circular
 * portraits stepped at different heights on the right. Circles are never
 * drawn without a real artisan's photo, so with no data the section shows
 * an honest empty state instead of placeholder circles.
 */

/** Desktop slots: organic, staggered positions; sizes from E4.A3. */
const slots: { size: PortraitSize; className: string }[] = [
  { size: "featured", className: "lg:left-[2%] lg:top-[28%]" },
  { size: "second", className: "lg:left-[48%] lg:top-[2%]" },
  { size: "fourth", className: "lg:left-[56%] lg:top-[50%]" },
  { size: "third", className: "lg:left-[14%] lg:top-[76%]" },
];

export function ArtisanTeaser() {
  const featured = artisans.filter((artisan) => artisan.featured && artisan.portrait).slice(0, slots.length);
  const { heading, description } = homeCopy.artisans;

  return (
    <Section tone="brown" warp aria-labelledby="penenun-judul">
      <Container grid className="items-center gap-y-14">
        <div className="col-span-full md:col-span-5 lg:col-span-5">
          <Heading level={2} id="penenun-judul">
            {heading}
          </Heading>
          <p className="prose-measure mt-6 text-lead text-(--fg)">{description}</p>
          <ButtonLink href="/penenun-hita" className="mt-10">
            Kenali Penenun Hita
          </ButtonLink>
        </div>

        <div className="col-span-full lg:col-span-6 lg:col-start-7">
          {featured.length > 0 ? (
            <ul
              aria-label="Penenun"
              className="-mx-margin flex snap-x snap-mandatory gap-8 overflow-x-auto px-margin pb-2 scroll-px-margin [scrollbar-width:none] lg:relative lg:mx-0 lg:block lg:h-[34rem] lg:overflow-visible lg:px-0"
            >
              {featured.map((artisan, index) => (
                <li key={artisan.slug} className={cn("shrink-0 snap-start lg:absolute", slots[index].className)}>
                  <PortraitCircle
                    href={artisanPath(artisan)}
                    name={artisan.name}
                    origin={artisan.origin}
                    portrait={artisan.portrait!}
                    size={slots[index].size}
                    labelPlacement="responsive"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Profil penenun belum ditampilkan"
              description="Potret, nama, dan lokasi penenun tampil setelah datanya dikonfirmasi dan izin publikasinya diperoleh."
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
