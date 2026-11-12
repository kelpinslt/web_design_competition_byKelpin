import type { Fact } from "@/types/content";

/**
 * Tentang Platform copy — docs/sources/07_KONTEN_BERANDA_DAN_TENTANG.md §B.
 * Factual, no unmeasured impact claims (PRD E7). "Akses pasar" means
 * visibility, never transactions on the platform.
 */
export const aboutCopy = {
  hero: {
    heading: "Tentang Platform",
    lead: "PARTONUN adalah katalog, dokumentasi, dan edukasi tentang Ulos Batak serta para penenunnya.",
  },
  // B1
  background: {
    heading: "Latar belakang",
    intro: {
      text: "Ulos Batak Toba telah ditetapkan sebagai Warisan Budaya Takbenda Indonesia (SK 270/P/2014). Namun keberlanjutannya bergantung pada penenun, dan profesi itu menghadapi tekanan nyata.",
      sourceIds: ["P"],
    } satisfies Fact,
    pressures: [
      {
        headline: "Akses pasar terbatas",
        text: "Sumatera Utara memiliki 43 sentra tenun ulos. Komisi VII DPR (2025) mencatat kendala pembiayaan, perlindungan motif, akses pasar konvensional dan digital, serta kapasitas SDM. Di Desa Sigaol Timur, pemasaran masih banyak dilakukan secara tradisional.",
        sourceIds: ["P"],
      },
      {
        headline: "Nilai kerja tidak terlihat",
        text: "Penenun di Silalahi ada yang meminjam bahan baku dari toke, sehingga wajib menjual hasilnya kepada toke. Di Hutaraja, sebelum 2019 harga banyak ditentukan tengkulak.",
        sourceIds: ["S21", "S08"],
      },
      {
        headline: "Regenerasi",
        text: "Kurangnya penenun muda tercatat di Hutaraja dan Silalahi. UNESCO (2021) melibatkan 6 penenun senior untuk melatih 18 penenun muda di kawasan Toba.",
        sourceIds: ["S18", "S21", "S11"],
      },
      {
        headline: "Saat ada dukungan, hasilnya terlihat",
        text: "Setelah penataan kawasan dan galeri di Hutaraja, harga ulos dan pendapatan penenun meningkat, rata-rata Rp2,5–3,5 juta per bulan menurut laporan Zonautara (2025). Katadata (2025) juga melaporkan kisah Monica Situmorang, penenun 22 tahun yang membiayai kuliahnya dari menenun dan memasarkan secara daring setelah mendapat pendampingan.",
        sourceIds: ["S08", "P"],
      },
    ] satisfies Fact[],
  },
  // B2
  why: {
    heading: "Mengapa dokumentasi digital",
    items: [
      {
        text: "Informasi tentang jenis, makna, bahan, dan teknik ulos tersebar di jurnal, skripsi, dan artikel. Sumbernya jarang tersusun rapi untuk publik.",
        sourceIds: [],
      },
      {
        text: "Identitas penenun dan proses kerja jarang terlihat oleh calon pemakai ulos. Padahal transparansi proses membantu orang memahami mengapa harga ulos tenun tangan berbeda dari kain mesin.",
        sourceIds: ["S02", "S03"],
      },
      {
        text: "Pengetahuan langka, misalnya pewarna indigo yang di Hutaraja hanya dikuasai satu penenun, berisiko hilang bila tidak didokumentasikan.",
        sourceIds: ["S17"],
      },
    ] satisfies Fact[],
  },
  // B3
  goals: {
    heading: "Tujuan PARTONUN",
    items: [
      "Mendokumentasikan jenis Ulos beserta sembilan informasinya secara terstruktur dan bersumber.",
      "Menampilkan identitas dan cerita penenun serta rumah tenun, dengan izin.",
      "Menyediakan materi edukasi dan dokumentasi proses menenun bagi generasi muda.",
      "Meningkatkan visibilitas karya penenun sebagai dasar akses pasar di luar platform.",
    ],
  },
  // B4
  audiences: {
    heading: "Untuk siapa",
    items: [
      { who: "Penenun & rumah tenun", need: "Visibilitas karya dan identitas." },
      { who: "Calon pemakai dan kolektor Ulos", need: "Memahami jenis, makna, dan nilai proses sebelum membeli di kanal penenun." },
      { who: "Generasi muda Batak & pelajar", need: "Mengenal ulos dan profesi penenun." },
      { who: "Peneliti dan wisatawan budaya", need: "Rujukan terstruktur dan bersumber." },
    ],
  },
  // How each part of the platform helps (PRD E7)
  roles: {
    heading: "Peran katalog dan dokumentasi digital",
    items: [
      { title: "Katalog Ulos Hita", text: "Membuka akses informasi tentang sepuluh jenis Ulos dalam satu tempat.", href: "/ulos-hita" },
      { title: "Sembilan informasi", text: "Bahan, pewarna, teknik, kerumitan, makna, lama pengerjaan, penenun, dan harga referensi membantu transparansi nilai sebuah kain.", href: "/ulos-hita/ulos-ragidup" },
      { title: "Penenun Hita", text: "Memperkenalkan pelaku budaya di balik kain dan rumah tenun tempat mereka berkarya.", href: "/penenun-hita" },
      { title: "Belajar Ulos & Proses Menenun", text: "Mendukung pengenalan keterampilan dan pengetahuan bagi generasi muda.", href: "/belajar-ulos" },
    ],
  },
  // B5
  economy: {
    heading: "Smart Digital Economy",
    body: "PARTONUN memakai teknologi web sebagai infrastruktur informasi untuk ekonomi tenun. Katalog yang terstruktur dan transparan memperkuat posisi penenun ketika berhadapan dengan pasar. Penilaian sebuah kain bergeser dari harga semata menjadi pemahaman tentang bahan, teknik, kerumitan, dan waktu pengerjaannya.",
  },
  // B6
  socio: {
    heading: "Sociopreneurship",
    body: "Nilai sosialnya adalah memperkuat identitas dan martabat profesi penenun, serta membuka jalan pewarisan keterampilan. Platform ini tidak mengambil margin dari transaksi karena memang tidak ada transaksi di dalamnya. Fokusnya membuat pembuat terlihat dan dihargai.",
    sdg: [
      { code: "SDG 8", title: "Pekerjaan Layak dan Pertumbuhan Ekonomi", text: "Membuat kerja penenun dan nilai prosesnya terlihat, sebagai dasar penghidupan yang layak." },
      { code: "SDG 10", title: "Berkurangnya Kesenjangan", text: "Memperkecil jarak informasi antara penenun di desa dan calon pemakai karya mereka." },
    ],
    sources: ["P"],
  },
  // B8
  boundary: {
    heading: "Batasan platform",
    body: "PARTONUN adalah katalog, dokumentasi, dan edukasi. Tidak ada login, keranjang, checkout, atau pembayaran. Informasi harga hanya indikatif, lengkap dengan sumber dan tanggalnya, dan bisa berubah.",
  },
} as const;
