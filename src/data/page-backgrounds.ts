import type { MediaAsset } from "@/types/content";
import { illustrations, ownerPhotos } from "./media";

/**
 * Background image for every page — one place to change them.
 * Images come from media.ts with their credit and "Ilustrasi" flag.
 */
export type PageKey =
  | "beranda"
  | "ulosHita"
  | "detailUlos"
  | "penenunHita"
  | "belajarUlos"
  | "prosesMenenun"
  | "tentangPlatform"
  | "notFound";

export const pageBackgrounds: Record<PageKey, MediaAsset | null> = {
  /** Beranda hero (manifest HOME-HERO-01). */
  beranda: illustrations.homeHero,
  /** Ulos Hita catalogue stage, behind the carousel. */
  ulosHita: illustrations.homeStack,
  /** Detail Ulos backdrop behind the cover. */
  detailUlos: illustrations.macroRagidup,
  /** Penenun Hita hero, used when an artisan has no stage photo (manifest ARTISAN-BACKGROUND-01). */
  penenunHita: illustrations.artisanBackground,
  belajarUlos: illustrations.learnHero,
  prosesMenenun: illustrations.processMartonun,
  tentangPlatform: illustrations.aboutHero,
  notFound: ownerPhotos.ulosHanging,
};
