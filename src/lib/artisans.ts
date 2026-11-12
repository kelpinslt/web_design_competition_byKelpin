import { artisans } from "@/data/artisans";
import { getSource } from "@/data/sources";
import { weavingHouses } from "@/data/weaving-houses";
import type { Artisan, ArtisanQuote, Source, WeavingHouse } from "@/types/content";

/**
 * Artisans that can appear in the Penenun Hita hero. A circle always
 * represents a real person, so a matched portrait photo is required (E4.A3).
 */
export function getGalleryArtisans(): Artisan[] {
  return artisans.filter((artisan) => artisan.portrait);
}

export function getArtisanBySlug(slug: string | null): Artisan | undefined {
  if (!slug) return undefined;
  return artisans.find((artisan) => artisan.slug === slug);
}

export function getArtisansBySlugs(slugs: string[]): Artisan[] {
  return slugs.map((slug) => getArtisanBySlug(slug)).filter((artisan): artisan is Artisan => Boolean(artisan));
}

/** A quote is publishable only with a resolvable source. */
export function getVerifiedQuote(artisan: Artisan): { quote: ArtisanQuote; source: Source } | null {
  if (!artisan.quote) return null;
  const source = getSource(artisan.quote.sourceId);
  return source ? { quote: artisan.quote, source } : null;
}

/** "38 tahun (26 Juni 2026)" — the age at the source's date, never recalculated. */
export function reportedAgeLabel(artisan: Artisan): string | null {
  if (!artisan.reportedAge) return null;
  return `${artisan.reportedAge.age} tahun saat diberitakan (${artisan.reportedAge.asOf})`;
}

export function getWeavingHouseBySlug(slug: string | null): WeavingHouse | undefined {
  if (!slug) return undefined;
  return weavingHouses.find((house) => house.slug === slug);
}

export function getShowcasedHouses(): WeavingHouse[] {
  return weavingHouses;
}

export function artisanPath(artisan: Pick<Artisan, "slug">): string {
  return `/penenun-hita/${artisan.slug}`;
}

export function weavingHousePath(house: Pick<WeavingHouse, "slug">): string {
  return `/rumah-tenun/${house.slug}`;
}
