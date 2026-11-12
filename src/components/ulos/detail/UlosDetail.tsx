import type { Metadata } from "next";
import type { Ulos } from "@/types/content";
import { ArtisanBehind } from "./ArtisanBehind";
import { MaterialMaking } from "./MaterialMaking";
import { MotifMeaning } from "./MotifMeaning";
import { PriceInfo } from "./PriceInfo";
import { ProductionStory } from "./ProductionStory";
import { RelatedUlos } from "./RelatedUlos";
import { UlosIdentity } from "./UlosIdentity";
import { UlosStory } from "./UlosStory";
import { getCatalogUlos, getNextUlos, getUlosArtisans, getUlosHouses } from "@/lib/ulos";

/**
 * Detail Ulos (/ulos-hita/[slug]) — an editorial narrative in the order of
 * v3 §7.3: cover and identity, the story of the type, material and making,
 * motif and meaning, duration, penenun, reference prices, other types.
 * All nine details remain present; missing ones say so honestly.
 */
export function UlosDetail({ ulos }: { ulos: Ulos }) {
  const catalogue = getCatalogUlos();
  const artisans = getUlosArtisans(ulos);
  return (
    <>
      <UlosIdentity ulos={ulos} index={catalogue.findIndex((item) => item.slug === ulos.slug)} total={catalogue.length} />
      <UlosStory ulos={ulos} artisans={artisans} />
      <MaterialMaking ulos={ulos} />
      <MotifMeaning ulos={ulos} />
      <ProductionStory ulos={ulos} />
      <ArtisanBehind ulos={ulos} artisans={artisans} houses={getUlosHouses(ulos)} />
      <PriceInfo prices={ulos.prices} name={ulos.name} />
      <RelatedUlos items={getNextUlos(ulos)} />
    </>
  );
}

export function ulosDetailMetadata(ulos: Ulos): Metadata {
  return {
    title: ulos.name,
    description: ulos.shortDescription,
    openGraph: { title: ulos.name, description: ulos.shortDescription, images: [{ url: ulos.image.src, alt: ulos.image.alt }] },
  };
}
