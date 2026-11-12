/**
 * Navigation destinations — PRD V2.0, D1 and D3.3.
 *
 * Page names and group labels follow the PRD exactly. `description` is the
 * one-line menu text from D3.3; `purpose` is drawn from each page's
 * "Tujuan" in Bagian E and is shown in the desktop menu preview.
 * `image` is the menu preview; it comes from media.ts.
 */
import type { MediaAsset } from "@/types/content";
import { artisanPhotos, illustrations } from "@/data/media";
import { ulosCollection } from "@/data/ulos";

const ulosCoverFor = (slug: string) => ulosCollection.find((ulos) => ulos.slug === slug)?.image ?? null;

export type NavItem = {
  href: string;
  label: string;
  description: string;
  purpose: string;
  image: MediaAsset | null;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    id: "explore",
    label: "Explore",
    items: [
      {
        href: "/",
        label: "Beranda",
        description: "Pengantar platform dan warisan Ulos.",
        purpose:
          "Ulos bukan sekadar kain, melainkan hasil keterampilan, waktu, proses, identitas penenun, dan nilai budaya.",
        image: illustrations.homeHero,
      },
      {
        href: "/ulos-hita",
        label: "Ulos Hita",
        description: "Katalog sepuluh jenis Ulos Batak.",
        purpose:
          "Sepuluh jenis Ulos Batak beserta sembilan informasinya: jenis, bahan, pewarna, teknik, kerumitan dan makna motif, lama pengerjaan, penenun, dan harga referensi.",
        image: ulosCoverFor("ulos-ragidup"),
      },
      {
        href: "/penenun-hita",
        label: "Penenun Hita",
        description: "Kisah penenun dan rumah tenun pilihan.",
        purpose:
          "Kenali manusia di balik Ulos: perjalanan dan keterampilan para penenun, serta Rumah Tenun & Galeri Ulos pilihan.",
        image: artisanPhotos.elida,
      },
    ],
  },
  {
    id: "craft",
    label: "Discover the Craft",
    items: [
      {
        href: "/belajar-ulos",
        label: "Belajar Ulos",
        description: "Jenis, motif, makna, dan pengetahuan budaya.",
        purpose:
          "Materi tentang jenis, motif, makna, dan penggunaan Ulos dalam kehidupan masyarakat Batak, disusun dari referensi yang dapat dipertanggungjawabkan.",
        image: illustrations.learnHero,
      },
      {
        href: "/proses-menenun",
        label: "Proses Menenun",
        description: "Dokumentasi keterampilan dan tahapan menenun.",
        purpose:
          "Alat, bahan, dan tahapan menenun dari dokumentasi Desa Meat, lengkap dengan perbedaan praktik antardaerah.",
        image: illustrations.processMartonun,
      },
    ],
  },
  {
    id: "platform",
    label: "Platform",
    items: [
      {
        href: "/tentang-platform",
        label: "Tentang Platform",
        description: "Tujuan, pendekatan, dan kontribusi platform.",
        purpose:
          "Mengapa platform ini dibuat dan bagaimana katalog, cerita penenun, dan edukasi terhubung dengan pemberdayaan ekonomi serta pelestarian budaya.",
        image: illustrations.aboutHero,
      },
    ],
  },
];

export const navItems: NavItem[] = navGroups.flatMap((group) => group.items);

/** A destination is active on its own path and on its detail routes. */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
