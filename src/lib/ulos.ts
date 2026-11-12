import { artisans } from "@/data/artisans";
import { ulosCollection } from "@/data/ulos";
import { weavingHouses } from "@/data/weaving-houses";
import type { Artisan, Fact, Ulos, WeavingHouse } from "@/types/content";

/** All Ulos types in catalogue order. */
export function getCatalogUlos(): Ulos[] {
  return ulosCollection;
}

export function getUlosBySlug(slug: string): Ulos | undefined {
  return ulosCollection.find((ulos) => ulos.slug === slug);
}

export function getUlosBySlugs(slugs: string[]): Ulos[] {
  return slugs.map(getUlosBySlug).filter((ulos): ulos is Ulos => Boolean(ulos));
}

/** Weavers documented as weaving this type (from their own profile sources). */
export function getUlosArtisans(ulos: Ulos): Artisan[] {
  return ulos.artisanSlugs
    .map((slug) => artisans.find((artisan) => artisan.slug === slug))
    .filter((artisan): artisan is Artisan => Boolean(artisan));
}

/** Rumah Tenun whose sources mention this Ulos type. */
export function getUlosHouses(ulos: Ulos): WeavingHouse[] {
  return weavingHouses.filter((house) => house.ulosSlugs.includes(ulos.slug));
}

/**
 * "Jelajahi jenis lainnya": the next types in catalogue order. A neutral
 * continuation, not a claimed relation between types.
 */
export function getNextUlos(ulos: Ulos, count = 3): Ulos[] {
  const index = ulosCollection.findIndex((item) => item.slug === ulos.slug);
  return Array.from({ length: count }, (_, step) => ulosCollection[(index + step + 1) % ulosCollection.length]);
}

/** The nine details as [key, fact] pairs, in the order of the master data. */
export function ulosNineDetails(ulos: Ulos): { key: string; label: string; fact: Fact | null }[] {
  return [
    { key: "identity", label: "Identitas / jenis", fact: { ...ulos.identity, headline: ulos.category } },
    { key: "material", label: "Bahan", fact: ulos.material },
    { key: "dye", label: "Pewarna", fact: ulos.dye },
    { key: "technique", label: "Teknik pembuatan", fact: ulos.technique },
    { key: "motifComplexity", label: "Kerumitan motif", fact: ulos.motifComplexity },
    { key: "motifMeaning", label: "Makna motif", fact: ulos.motifMeaning },
    { key: "productionDuration", label: "Lama pengerjaan", fact: ulos.productionDuration },
    { key: "artisan", label: "Penenun", fact: null },
    { key: "price", label: "Harga referensi", fact: null },
  ];
}

/** Path of a Detail Ulos page. */
export function ulosPath(ulos: Pick<Ulos, "slug">): string {
  return `/ulos-hita/${ulos.slug}`;
}

/** Shared ViewTransition name linking a catalogue card to its detail hero. */
export function ulosTransitionName(ulos: Pick<Ulos, "slug">): string {
  return `ulos-${ulos.slug}`;
}
