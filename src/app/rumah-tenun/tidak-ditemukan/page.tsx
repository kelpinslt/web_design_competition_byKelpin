import type { Metadata } from "next";
import { SectionNotFound } from "@/components/ui/SectionNotFound";

/*
 * "Rumah tenun tidak ditemukan", prerendered as a complete static page.
 * src/proxy.ts serves this HTML with HTTP 404 for unknown rumah tenun slugs.
 */
export const metadata: Metadata = {
  title: "Rumah tenun tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function RumahTenunTidakDitemukan() {
  return (
    <SectionNotFound
      title="Rumah tenun tidak ditemukan"
      message="Profil rumah tenun yang Anda cari tidak tersedia. Lihat Rumah Tenun & Galeri Ulos Pilihan di Penenun Hita."
      backHref="/penenun-hita#rumah-judul"
      backLabel="Lihat rumah tenun pilihan"
    />
  );
}
