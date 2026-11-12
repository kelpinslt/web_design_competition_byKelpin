import type { Artisan, Ulos, WeavingHouse } from "@/types/content";
import { PortraitCircle } from "@/components/artisan/PortraitCircle";
import { TextLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { artisanPath, weavingHousePath } from "@/lib/artisans";

/**
 * Detail Ulos 7 — the people and places linked to this type, only where
 * their own sources document it. These weavers are documented weaving the
 * type; they are not presented as the maker of a particular cloth.
 */
export function ArtisanBehind({ ulos, artisans, houses }: { ulos: Ulos; artisans: Artisan[]; houses: WeavingHouse[] }) {
  return (
    <Section tone="obsidian" warp aria-labelledby="pengrajin-judul">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id="pengrajin-judul">
            Penenun dan rumah tenun
          </Heading>
          <p className="prose-measure mt-6 text-body text-(--fg-muted)">
            {artisans.length > 0
              ? `Penenun yang menurut sumber profilnya menenun ${ulos.name}. Mereka tidak disebut sebagai pembuat satu kain tertentu.`
              : `Identitas penenun untuk ${ulos.name} belum tersedia. Penenun tidak dihubungkan ke jenis Ulos tanpa bukti.`}
          </p>
        </div>

        <div className="col-span-full lg:col-span-7 lg:col-start-6">
          {artisans.length > 0 ? (
            <ul className="grid gap-x-(--gutter) gap-y-10 sm:grid-cols-2">
              {artisans.map((artisan) => (
                <li key={artisan.slug} className="flex flex-col items-start gap-4 border-t border-(--rule) pt-6">
                  {artisan.portrait ? (
                    <PortraitCircle
                      href={artisanPath(artisan)}
                      name={artisan.name}
                      origin={artisan.origin}
                      portrait={artisan.portrait}
                      size="third"
                      labelPlacement="right"
                    />
                  ) : (
                    <div>
                      <p className="font-serif text-h3 italic text-ivory">{artisan.name}</p>
                      <p className="text-small text-(--fg-muted)">{artisan.origin}</p>
                    </div>
                  )}
                  <p className="text-body text-(--fg-muted)">{artisan.specialty}</p>
                  <SourceNote ids={artisan.sourceIds} />
                  <TextLink href={artisanPath(artisan)} className="inline-block bg-origin-content py-2.5">
                    Baca kisah {artisan.name}
                  </TextLink>
                </li>
              ))}
            </ul>
          ) : (
            <p className="border-t border-(--rule) pt-6 text-body text-(--fg-muted)">Informasi belum tersedia</p>
          )}

          {houses.length > 0 ? (
            <div className="mt-12 border-t border-(--rule) pt-6">
              <p className="text-small font-semibold text-(--fg-muted)">Disebut dalam profil rumah tenun</p>
              <ul className="mt-3 space-y-2">
                {houses.map((house) => (
                  <li key={house.slug}>
                    <TextLink href={weavingHousePath(house)} className="inline-block bg-origin-content py-2.5">
                      {house.name}, {house.region}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
