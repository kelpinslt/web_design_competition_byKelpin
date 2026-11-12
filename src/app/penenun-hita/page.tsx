import type { Metadata } from "next";
import { ArtisanEmpty } from "@/components/artisan/ArtisanEmpty";
import { ArtisanGallery } from "@/components/artisan/ArtisanGallery";
import { ArtisanStories } from "@/components/artisan/ArtisanStories";
import { WeavingHouseSection } from "@/components/weaving-house/WeavingHouseSection";
import { artisans as allArtisans } from "@/data/artisans";
import { penenunCopy } from "@/data/penenun";
import { getGalleryArtisans, getShowcasedHouses } from "@/lib/artisans";

export const metadata: Metadata = {
  title: "Penenun Hita",
  description: penenunCopy.purpose,
};

/** Penenun Hita — artisan storytelling and weaving houses (PRD V3.0, E4). */
export default function PenenunHitaPage() {
  const artisans = getGalleryArtisans();

  return (
    <>
      {artisans.length > 0 ? <ArtisanGallery artisans={artisans} /> : <ArtisanEmpty />}
      {/* Stories include artisans without a portrait; only the hero needs one. */}
      <ArtisanStories artisans={allArtisans} />
      <WeavingHouseSection houses={getShowcasedHouses()} />
    </>
  );
}
