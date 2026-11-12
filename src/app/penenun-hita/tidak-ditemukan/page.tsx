import type { Metadata } from "next";
import { SectionNotFound } from "@/components/ui/SectionNotFound";

/*
 * "Penenun tidak ditemukan", prerendered as a complete static page.
 * src/proxy.ts serves this HTML with HTTP 404 for unknown penenun slugs.
 */
export const metadata: Metadata = {
  title: "Penenun tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function PenenunTidakDitemukan() {
  return (
    <SectionNotFound
      title="Penenun tidak ditemukan"
      message="Profil yang Anda cari tidak tersedia. Kenali penenun lain di Penenun Hita."
      backHref="/penenun-hita"
      backLabel="Kembali ke Penenun Hita"
    />
  );
}
