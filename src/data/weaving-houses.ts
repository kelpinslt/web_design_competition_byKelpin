import type { WeavingHouse } from "@/types/content";
import { housePhotos } from "./media";

/**
 * Rumah Tenun & Galeri Ulos Pilihan — docs/sources/08_TOKO_ULOS_TENUN.md
 * (researched 2026-11-11), per Implementation Pack v3 §4.
 *
 * Each business keeps its actual role (§7.6): Dame Ulos is a weaving
 * business with a gallery, Galeri Ulos Sianipar a gallery and weaving
 * centre, Tobatenun a social enterprise with a studio, outlets and a
 * community house. Figures carry the year of their source. Contacts and
 * hours are shown as "recorded in the source", not as verified-current.
 */
export const weavingHouses: WeavingHouse[] = [
  {
    slug: "dame-ulos",
    name: "Dame Ulos",
    role: "Usaha tenun dan galeri Ulos di Tarutung",
    people: [{ role: "Pemilik", name: "Renny Katrina Manurung" }],
    founded: "Menenun Ulos Batak Toba sejak 2014",
    region: "Tarutung, Kabupaten Tapanuli Utara",
    locations: [
      {
        kind: "galeri",
        name: "Galeri Dame Ulos",
        address: "Saitnihuta, Hutatoruan V, Kecamatan Tarutung, Tapanuli Utara, Sumatera Utara",
      },
    ],
    coverImage: housePhotos.dameUlos,
    gallery: [],
    intro:
      "UMKM dari Tarutung yang menenun kain Batak Toba sejak 2014 dan menggali kembali motif-motif khas Tarutung yang sudah lama tidak dibuat penenun.",
    story: [
      {
        text: "Dame Ulos berawal pada 2014 dengan 20 penenun anggota. Usahanya memberdayakan perempuan muda dan ibu rumah tangga di sekitarnya.",
        sourceIds: ["S09"],
      },
      {
        text: "Bisnis ini diturunkan dari ibunda Renny, yang seorang penenun. Renny menggali kembali motif-motif khas Tarutung yang sudah lama tidak dibuat penenun.",
        sourceIds: ["T01"],
      },
      {
        headline: "2021",
        text: "Galerinya di Saitnihuta dibangun sebagai apresiasi Bank Indonesia pada 2021. Menurut Bisnis.com (2024), Dame Ulos kini bermitra dengan ratusan penenun di Tarutung dan sekitarnya.",
        sourceIds: ["T01"],
      },
    ],
    techniques: [
      {
        headline: "Gedogan",
        text: "Produk premium ditenun tangan dengan gedogan. Teknik ini disebut untuk produk premium, bukan untuk seluruh produk.",
        sourceIds: ["S09"],
        scope: "contoh",
      },
      {
        headline: "Pewarna alam",
        text: "Pewarna alam dipakai pada produk premium seperti Ragidup Silinggom. Sumber tidak menyatakan seluruh produk memakai pewarna alam.",
        sourceIds: ["S09"],
        scope: "contoh",
      },
    ],
    products: [
      {
        headline: "Ragidup Silinggom",
        text: "Contoh produk premium: Ragidup Silinggom, 102 × 206 cm, ditenun dengan gedogan dan pewarna alam.",
        sourceIds: ["S09"],
      },
      {
        headline: "Ulos Hela dan Tumtuman",
        text: "Produk yang dikenal dari Dame Ulos adalah Ulos Hela dan Tumtuman klasik, yang disebut asli tenunan tangan.",
        sourceIds: ["T02"],
      },
      {
        text: "Pemiliknya pernah menyebut satu set ulos dikerjakan 4 bulan dan set yang lebih sederhana 2 bulan. Produknya sudah sampai Kuala Lumpur dan Swiss.",
        sourceIds: ["S10"],
        scope: "contoh",
      },
    ],
    community: [
      {
        text: "Berawal dari 20 penenun anggota, kini bermitra dengan ratusan penenun di Tarutung dan sekitarnya (Bisnis.com, 2024).",
        sourceIds: ["S09", "T01"],
      },
    ],
    contacts: [
      { kind: "whatsapp", label: "0852-9776-9912", href: "https://wa.me/6285297769912" },
      { kind: "instagram", label: "@dameulos", href: "https://www.instagram.com/dameulos/" },
    ],
    priceRange: {
      text: "Rp500 ribu – Rp15 juta per helai",
      sourceIds: ["S09"],
      status: "needs_verification",
    },
    ulosSlugs: ["ulos-ragidup"],
    artisanSlugs: ["renny-katrina-manurung"],
    verificationNotes: [
      "Nomor WhatsApp dan alamat diambil dari dokumen riset; cek ulang lewat Instagram usaha.",
      "Kisaran harga disimpan di data, tidak ditampilkan sampai dikonfirmasi.",
    ],
    sourceIds: ["S09", "T01", "T02", "S10"],
    status: "needs_verification",
  },
  {
    slug: "galeri-ulos-sianipar",
    name: "Galeri Ulos Sianipar",
    role: "Galeri dan pusat tenun Ulos serta songket di Medan",
    people: [{ role: "Pendiri dan pemilik", name: "Robert Maruli Tua Sianipar" }],
    founded: "Berdiri 28 Juni 1992",
    region: "Medan, Sumatera Utara",
    locations: [
      {
        kind: "galeri",
        name: "Galeri Ulos Sianipar",
        address: "Jl. A.R. Hakim Gg. Pendidikan No. 130–134, Medan, Sumatera Utara",
        note: "Jam pusat tenun pada sumber: 08.00–17.00. Konfirmasi sebelum berkunjung.",
      },
      {
        kind: "rumah tenun",
        name: "Rumah Tenun",
        address: null,
        note: "Berbentuk rumah adat Batak di depan galeri; hibah Bank Indonesia untuk regenerasi penenun.",
      },
    ],
    coverImage: housePhotos.sianipar,
    gallery: [],
    intro:
      "Salah satu pusat kerajinan ulos dan songket Batak di Medan, tempat pengunjung bisa melihat langsung penenun bekerja di lokasi galeri.",
    story: [
      {
        headline: "1992",
        text: "Didirikan Robert M.T. Sianipar pada 28 Juni 1992 di Jalan A.R. Hakim, Medan. Galeri ini merupakan UMKM binaan Bank Indonesia.",
        sourceIds: ["T03"],
      },
      {
        headline: "2015",
        text: "Di depan galeri berdiri Rumah Tenun berbentuk rumah adat Batak, hibah Bank Indonesia untuk regenerasi penenun, yang diresmikan Menteri Ketenagakerjaan Hanif Dhakiri pada 10 Desember 2015.",
        sourceIds: ["T03", "T04"],
      },
      {
        text: "Pengunjung dapat melihat langsung penenun bekerja di lokasi galeri.",
        sourceIds: ["T05"],
      },
    ],
    techniques: [
      {
        headline: "ATBM untuk ulos",
        text: "Ulos ditenun dengan ATBM (alat tenun bukan mesin), tercatat 120 unit.",
        sourceIds: ["T03"],
      },
      {
        headline: "Gedogan untuk songket",
        text: "Songket ditenun dengan gedogan, tercatat 7 unit. ATBM dan gedogan adalah alat yang berbeda; tekniknya tidak disamakan.",
        sourceIds: ["T03"],
      },
      {
        text: "Catatan dari sumber: sebagian produk memakai ATBM dan pewarna sintetis. Teknik perlu dilihat per produk, bukan disebut semuanya tenun gedogan.",
        sourceIds: ["T03"],
        status: "needs_verification",
      },
    ],
    products: [
      {
        headline: "± 104 motif",
        text: "Sekitar 104 motif tenun ulos dan songket (Bisnis.com, 2019).",
        sourceIds: ["T04"],
      },
    ],
    community: [
      {
        text: "Bekerja sama dengan sekitar 50 UKM (Bisnis.com, 2019).",
        sourceIds: ["T04"],
      },
      {
        text: "Jumlah pekerja tercatat lebih dari 400 orang pada profil Karya Kreatif Indonesia.",
        sourceIds: ["T03"],
      },
    ],
    contacts: [
      { kind: "whatsapp", label: "0812-6584-6702", href: "https://wa.me/6281265846702" },
      { kind: "telepon", label: "(061) 7330493", href: "tel:+62617330493" },
      { kind: "email", label: "sianiparulos@gmail.com", href: "mailto:sianiparulos@gmail.com" },
      { kind: "instagram", label: "@galeriulos_sianipar", href: "https://www.instagram.com/galeriulos_sianipar/" },
      { kind: "website", label: "galeryulossianipar.com", href: "https://galeryulossianipar.com" },
    ],
    priceRange: null,
    ulosSlugs: [],
    artisanSlugs: [],
    verificationNotes: [
      "Jam pusat tenun (08.00–17.00) berasal dari sumber; konfirmasi sebelum disebut sebagai jam operasional terkini.",
      "Angka motif, UKM mitra, dan pekerja memiliki tahun sumber masing-masing.",
    ],
    sourceIds: ["T03", "T04", "T05"],
    status: "needs_verification",
  },
  {
    slug: "tobatenun-jabu-bonang",
    name: "Tobatenun & Jabu Bonang",
    legalName: "PT Toba Tenun Sejahtra",
    role: "Social enterprise tekstil Sumatera Utara, dengan studio dan gerai di Jakarta serta rumah komunitas di Sumatera Utara",
    people: [
      { role: "Founder & CEO", name: "Kerri Na Basaria Pandjaitan" },
      { role: "Partner & COO", name: "Melvi Tampubolon" },
    ],
    founded: "Berdiri 2018",
    region: "Jakarta dan Pematangsiantar–Simalungun",
    locations: [
      {
        kind: "rumah komunitas",
        name: "Jabu Bonang (“rumah benang”)",
        address: null,
        note: "Perbatasan Simalungun–Pematangsiantar, Sumatera Utara. Alamat jalan belum ditemukan.",
      },
      {
        kind: "rumah pewarnaan",
        name: "Jabu Borna",
        address: null,
        note: "Rumah pewarnaan alami di Pematangsiantar.",
      },
      {
        kind: "studio",
        name: "Tobatenun Studio",
        address: "Sopo Del Tower, Ground Floor, Jakarta",
        note: "Studio di Jakarta, bukan rumah produksi.",
      },
      { kind: "gerai", name: "Alun Alun Indonesia", address: "Grand Indonesia, Jakarta" },
      { kind: "gerai", name: "Sarinah Department Store", address: "Ground Floor, Jakarta" },
      { kind: "gerai", name: "Lakon Store", address: "Mall Kelapa Gading 5, Jakarta" },
    ],
    coverImage: housePhotos.tobatenun,
    gallery: [],
    intro:
      "Social enterprise yang didirikan pada 2018 untuk merevitalisasi dan melestarikan tradisi tekstil Sumatera Utara, bersama mitra penenun di rumah komunitas Jabu Bonang.",
    story: [
      {
        headline: "2018",
        text: "Tobatenun didirikan sebagai social enterprise dengan misi merevitalisasi dan melestarikan tradisi tekstil Sumatera Utara.",
        sourceIds: ["T06"],
      },
      {
        text: "Tobatenun mendirikan rumah komunitas Jabu Bonang (“rumah benang”) dan rumah pewarnaan alami Jabu Borna di Pematangsiantar. Di sana mitra penenun membuat kain dengan alat tradisional gedogan.",
        sourceIds: ["T07"],
      },
      {
        headline: "April 2026",
        text: "Jabu Bonang merayakan ulang tahun ke-6 di Tarutung.",
        sourceIds: ["T11"],
      },
    ],
    techniques: [
      {
        headline: "Gedogan",
        text: "Mitra penenun di Jabu Bonang membuat kain dengan alat tradisional gedogan (Kumparan, 2022).",
        sourceIds: ["T07"],
        scope: "contoh",
      },
      {
        headline: "Pewarna alami",
        text: "Pewarnaan alami dikerjakan di rumah pewarnaan Jabu Borna, bagian dari ekosistem produksi yang dijelaskan sumber.",
        sourceIds: ["T07"],
        scope: "contoh",
      },
    ],
    products: [],
    community: [
      {
        headline: "± 200 perajin",
        text: "Bermitra dengan sekitar 200 perajin di Medan, Siantar, Toba, Labuhan Batu Utara, Tapanuli Utara, Samosir, dan Dairi (Fimela, 2022).",
        sourceIds: ["T08"],
      },
      {
        headline: "10% keuntungan",
        text: "Sepuluh persen keuntungan penjualan disalurkan ke rumah komunitas Jabu Bonang (Liputan6, 2022).",
        sourceIds: ["T09"],
      },
      {
        headline: "13 penenun baru",
        text: "Dari program pelatihan di Simalungun yang diikuti 32 orang, lahir 13 penenun baru. Program ini juga mengaktifkan kembali kelompok tenun di satu desa yang berhenti menenun sejak 2020 (company profile, 2025).",
        sourceIds: ["T10"],
      },
    ],
    contacts: [
      { kind: "website", label: "tobatenun.com", href: "https://www.tobatenun.com" },
      { kind: "instagram", label: "@tobatenun", href: "https://www.instagram.com/tobatenun/" },
      { kind: "instagram", label: "@jabu.bonang", href: "https://www.instagram.com/jabu.bonang/" },
    ],
    priceRange: null,
    ulosSlugs: [],
    artisanSlugs: [],
    verificationNotes: [
      "Nomor WhatsApp tidak tersedia di sumber; hubungi lewat website atau Instagram.",
      "Alamat jalan Jabu Bonang belum ditemukan.",
    ],
    sourceIds: ["T06", "T07", "T08", "T09", "T10", "T11"],
    status: "needs_verification",
  },
];
