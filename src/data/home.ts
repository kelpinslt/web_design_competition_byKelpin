import type { Fact } from "@/types/content";

/**
 * Beranda copy — docs/sources/07_KONTEN_BERANDA_DAN_TENTANG.md §A, arranged
 * in the section order of Master Execution Prompt v3 §7.1. Source codes
 * resolve in sources.ts; "[P]" is the PARTONUN proposal.
 */
export const homeCopy = {
  hero: {
    eyebrow: "Warisan tenun Batak",
    // A1, headline option 1
    headline: "Setiap helai menyimpan nama penenunnya.",
    // A1 subjudul, first sentence and condensed second
    description:
      "PARTONUN adalah ruang dokumentasi digital Ulos Batak: jenis Ulos beserta makna motifnya, para penenun di baliknya, dan proses panjang yang menjadikan sehelai kain bernilai.",
  },
  // A2 (wajib)
  statement: {
    heading: "Partonun berarti penenun.",
    body: "PARTONUN, dari kata Batak partonun (penenun), adalah katalog dan ruang dokumentasi digital. Di sini Ulos diperkenalkan bersama identitas penenun, bahan, teknik, dan maknanya.",
    boundary:
      "PARTONUN bukan toko daring. Tidak ada transaksi di platform ini. Tujuannya membuat karya dan pembuatnya lebih mudah ditemukan, dipahami, dan dihargai.",
  },
  // A3 (wajib)
  issues: {
    heading: "Mengapa keberlanjutan penenun penting",
    items: [
      {
        headline: "Karya ada, pembeli jauh",
        text: "Sumatera Utara memiliki 43 sentra tenun ulos, tetapi akses pasar konvensional dan digital masih menjadi kendala.",
        sourceIds: ["P"],
      },
      {
        headline: "Harga sering tak sebanding",
        text: "Di Hutaraja, kain yang dikerjakan berminggu-minggu pernah dihargai tengkulak hanya Rp500 ribu. Di Desa Meat, Ragi Hotang dibeli pengepul Rp400–600 ribu lalu dijual kembali di atas Rp1 juta (2022).",
        sourceIds: ["S08", "S07"],
      },
      {
        headline: "Penerus makin sedikit",
        text: "Kurangnya regenerasi penenun muda tercatat di Hutaraja, Silalahi, dan Lumban Suhi-Suhi.",
        sourceIds: ["S18", "S21", "P"],
      },
    ] satisfies Fact[],
  },
  // A4 (diutamakan)
  culture: {
    heading: "Satu dari tiga sumber kehangatan",
    body: "Bagi orang Batak, ulos adalah satu dari tiga sumber kehangatan, bersama matahari dan api. Kain ini hadir dari kelahiran hingga kematian.",
    bodySources: ["S16", "S03"],
    process:
      "Di balik maknanya ada kerja berminggu-minggu sampai berbulan-bulan, dari mengkanji benang, memasang lungsi, sampai merapikan rumbai. Mendokumentasikan proses itu adalah cara untuk menunjukkan mengapa sehelai ulos bernilai.",
    processSources: ["S07", "S08"],
  },
  collection: {
    heading: "Koleksi Ulos pilihan",
    description:
      "Empat jenis dengan data paling lengkap. Setiap jenis dibuka bersama sembilan informasinya, dari bahan dan teknik sampai makna motif, lengkap dengan sumbernya.",
  },
  artisans: {
    heading: "Kisah para penenun",
    description:
      "Penenun adalah pemilik pengetahuan, keterampilan, dan sejarah di balik setiap helai Ulos. Kenali mereka dari sumber yang dapat ditelusuri.",
  },
  houses: {
    heading: "Rumah Tenun & Galeri Ulos Pilihan",
    description: "Tiga tempat dengan peran berbeda: usaha tenun di Tarutung, galeri dan pusat tenun di Medan, dan social enterprise dengan rumah komunitas di Sumatera Utara.",
  },
  learn: {
    heading: "Pelajari kainnya, kenali prosesnya",
    description: "Materi edukasi dan dokumentasi proses menenun, disusun dari jurnal, museum, dan sumber pemerintah.",
  },
  // A6: only figures counted from the published data
  figures: { heading: "Yang terdokumentasi saat ini" },
  about: {
    heading: "Mengapa PARTONUN dibuat?",
    body: "Ulos memiliki nilai historis, sosial, dan filosofis, dan keberlanjutannya bergantung pada keberlanjutan profesi penenun. Pelajari latar belakang, tujuan, dan batasan platform ini.",
    sdg: "Selaras dengan topik Digital Economy & Sociopreneurship: SDG 8 dan SDG 10.",
  },
} as const;
