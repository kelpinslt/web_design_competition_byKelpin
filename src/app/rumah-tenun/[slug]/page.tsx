import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HouseDetail } from "@/components/weaving-house/HouseDetail";
import { weavingHouses } from "@/data/weaving-houses";
import { getWeavingHouseBySlug } from "@/lib/artisans";

/*
 * Detail Rumah Tenun (PRD V3.0 E4.D; Master Execution Prompt v3 §7.6).
 * Three profiles from 08_TOKO_ULOS_TENUN.md, prerendered. Unknown slugs
 * return a real HTTP 404. There is deliberately no /toko-ulos route.
 */
export function generateStaticParams() {
  return weavingHouses.map((house) => ({ slug: house.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rumah-tenun/[slug]">): Promise<Metadata> {
  const house = getWeavingHouseBySlug((await params).slug);
  if (!house) return { title: "Rumah tenun tidak ditemukan", robots: { index: false } };
  return {
    title: house.name,
    description: `${house.name}: ${house.role}. ${house.intro}`,
    openGraph: { images: [{ url: house.coverImage.src, alt: house.coverImage.alt }] },
  };
}

export default async function DetailRumahTenunPage({ params }: PageProps<"/rumah-tenun/[slug]">) {
  const house = getWeavingHouseBySlug((await params).slug);
  if (!house) notFound();
  return <HouseDetail house={house} />;
}
