import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtisanDetail } from "@/components/artisan/ArtisanDetail";
import { artisans } from "@/data/artisans";
import { getArtisanBySlug } from "@/lib/artisans";

/*
 * Detail Penenun (PRD V3.0 E4.C; Master Execution Prompt v3 §7.5).
 * All profiles are prerendered; `params` is awaited outside <Suspense> so
 * an unknown slug returns a real HTTP 404.
 */
export function generateStaticParams() {
  return artisans.map((artisan) => ({ slug: artisan.slug }));
}

export async function generateMetadata({ params }: PageProps<"/penenun-hita/[slug]">): Promise<Metadata> {
  const artisan = getArtisanBySlug((await params).slug);
  if (!artisan) return { title: "Penenun tidak ditemukan", robots: { index: false } };
  return {
    title: artisan.name,
    description: `${artisan.name}, penenun dari ${artisan.origin}. ${artisan.introduction}`,
    openGraph: artisan.portrait ? { images: [{ url: artisan.portrait.src, alt: artisan.portrait.alt }] } : undefined,
  };
}

export default async function DetailPenenunPage({ params }: PageProps<"/penenun-hita/[slug]">) {
  const artisan = getArtisanBySlug((await params).slug);
  if (!artisan) notFound();
  return <ArtisanDetail artisan={artisan} />;
}
