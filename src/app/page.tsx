import type { Metadata } from "next";
import { AboutCta } from "@/components/home/AboutCta";
import { ArtisanTeaser } from "@/components/home/ArtisanTeaser";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { HomeHero } from "@/components/home/HomeHero";
import { HousesTeaser } from "@/components/home/HousesTeaser";
import { IssuesSection } from "@/components/home/IssuesSection";
import { LearnProcess } from "@/components/home/LearnProcess";
import { PlatformStatement } from "@/components/home/PlatformStatement";
import { illustrations } from "@/data/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  description: site.description,
  openGraph: { images: [{ url: illustrations.homeHero.src, alt: illustrations.homeHero.alt }] },
};

/**
 * Beranda — section order of Master Execution Prompt v3 §7.1. The footer
 * comes from the root layout.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PlatformStatement />
      <IssuesSection />
      <FeaturedCollection />
      <ArtisanTeaser />
      <HousesTeaser />
      <LearnProcess />
      <AboutCta />
    </>
  );
}
