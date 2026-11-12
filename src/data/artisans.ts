import type { Artisan } from "@/types/content";
import { artisanPhotos } from "./media";

/**
 * Five penenun — docs/sources/PARTONUN_Profil_5_Penenun_Ulos.md (2026-11-11).
 *
 * Rules kept here (Master Execution Prompt v3 §4.2):
 * - Ages are the age at the source's publication date, shown with that date.
 * - No experience length, quote or relation is added beyond the sources.
 * - A photo is attached only when its file is clearly this person.
 *   `op adrien simarmata.jpg` carries a different name than Op Valen br
 *   Situmorang, so it is NOT used until the owner confirms who it shows.
 */
export const artisans: Artisan[] = [
  {
    slug: "elida-boru-siahaan",
    name: "Elida Boru Siahaan",
    portrait: artisanPhotos.elida,
    stageImage: artisanPhotos.elida,
    origin: "Desa Meat, Toba",
    originFull: "Desa Meat, Kecamatan Tampahan, Kabupaten Toba, Sumatera Utara",
    reportedAge: { age: 38, asOf: "26 Juni 2026", sourceId: "N01" },
    startedWeaving: "usia 13 tahun",
    experience: "Sekitar 25 tahun menenun (2026)",
    specialty: "Ulos Ragi Hotang, khususnya Ragi Hotang Hela",
    introduction:
      "Penenun dari Desa Meat yang secara khusus mengerjakan Ulos Ragi Hotang, termasuk Ragi Hotang Hela untuk hantaran pernikahan.",
    story: [
      "Saat diwawancarai IDN Times, Elida sedang menenun Ragi Hotang Hela, kain yang digunakan sebagai hantaran dari pihak laki-laki kepada keluarga perempuan.",
      "Ia dapat menghasilkan sekitar tiga lembar Ragi Hotang dalam satu pekan. Elida juga mengajarkan kegiatan martonun kepada wisatawan yang datang ke Desa Meat.",
    ],
    learning: "Elida mulai belajar menenun dari ibunya pada usia 13 tahun, sebuah keterampilan yang diwariskan dari ibu kepada anak.",
    skills: ["Ulos Ragi Hotang", "Ragi Hotang Hela", "Mengajarkan martonun kepada wisatawan"],
    quote: null,
    timeline: [],
    gallery: [],
    ulosSlugs: ["ulos-ragi-hotang"],
    weavingHouseSlug: null,
    verificationNotes: ["Konfirmasi ejaan nama, usia terbaru, dan izin publikasi nama serta foto."],
    sourceIds: ["N01"],
    status: "needs_verification",
    featured: true,
  },
  {
    slug: "evi-boru-simanjuntak",
    name: "Evi Boru Simanjuntak",
    portrait: artisanPhotos.evi,
    stageImage: artisanPhotos.evi,
    origin: "Desa Meat, Toba",
    originFull: "Desa Meat, Kecamatan Tampahan, Kabupaten Toba, Sumatera Utara",
    reportedAge: { age: 81, asOf: "26 Juni 2026", sourceId: "N01" },
    startedWeaving: null,
    // The sources give no number of years; none is added.
    experience: null,
    specialty: "Ulos untuk sarung dan selendang",
    introduction:
      "Penenun senior Desa Meat yang menenun Ulos untuk sarung dan selendang bersama anak dan cucunya.",
    story: [
      "Berbeda dari penenun yang berfokus pada satu jenis Ulos, keluarga Evi memproduksi Ulos untuk sarung dan selempang.",
      "Evi menenun bersama anak dan cucunya. Dalam laporan IDN Times, kelompok keluarga ini dapat menghasilkan sekitar tiga pasang sarung dan selendang dalam satu pekan.",
    ],
    learning:
      "Evi belajar menenun dari neneknya, lalu mewariskan keterampilan martonun kepada anak dan cucunya. Sumber tidak menyebut berapa tahun ia telah menenun.",
    skills: ["Sarung", "Selendang", "Menenun bersama keluarga lintas generasi"],
    quote: null,
    timeline: [],
    gallery: [],
    ulosSlugs: [],
    weavingHouseSlug: null,
    verificationNotes: ["Konfirmasi usia terbaru, lama pengalaman, dan izin publikasi nama serta foto."],
    sourceIds: ["N01", "N02"],
    status: "needs_verification",
    featured: true,
  },
  {
    slug: "candro-fernando-sitorus",
    name: "Candro Fernando Sitorus",
    portrait: artisanPhotos.candro,
    stageImage: artisanPhotos.candro,
    origin: "Partali Julu, Tarutung",
    originFull:
      "Dusun Merpati Lumban Tolong, Desa Partali Julu, Kecamatan Tarutung, Kabupaten Tapanuli Utara, Sumatera Utara",
    reportedAge: { age: 21, asOf: "5 Oktober 2021", sourceId: "N03" },
    startedWeaving: "usia 12 tahun",
    experience: "9 tahun pada saat diwawancarai (2021)",
    specialty: "Berbagai jenis Ulos Batak, antara lain Ragi Huting, Ragi Hotang, Maulana, dan Sadum",
    introduction:
      "Salah satu penenun laki-laki yang terdokumentasi di Tapanuli Utara, menenun beberapa jenis Ulos sekaligus.",
    story: [
      "Candro dikenal sebagai salah satu penenun laki-laki yang terdokumentasi di Kabupaten Tapanuli Utara. Ia menyatakan mampu menghasilkan sedikitnya empat lembar Ulos dalam satu minggu.",
      "Ia pernah diundang sebagai mentor atau pelatih dalam kegiatan yang berkaitan dengan Ulos. Hasil tenunannya dipasarkan ke berbagai kota dan disebut pernah mencapai Singapura serta Malaysia.",
    ],
    learning: "Candro mulai belajar menenun dari orang tuanya ketika berusia 12 tahun.",
    skills: ["Ragi Huting", "Ragi Hotang", "Maulana", "Sadum", "Mentor kegiatan Ulos"],
    quote: null,
    timeline: [],
    gallery: [],
    ulosSlugs: ["ulos-ragi-hotang", "ulos-sadum"],
    weavingHouseSlug: null,
    verificationNotes: ["Data berasal dari artikel 2021. Konfirmasi usia, pengalaman terbaru, dan izin foto."],
    sourceIds: ["N03", "N04"],
    status: "needs_verification",
    featured: true,
  },
  {
    slug: "renny-katrina-manurung",
    name: "Renny Katrina Manurung",
    portrait: artisanPhotos.renny,
    stageImage: artisanPhotos.renny,
    origin: "Tarutung, Tapanuli Utara",
    originFull: "Tarutung, Kabupaten Tapanuli Utara, Sumatera Utara",
    reportedAge: { age: 29, asOf: "9 Februari 2021", sourceId: "N05" },
    startedWeaving: null,
    experience: "Mendirikan Dame Ulos pada 2014",
    specialty: "Pelestarian dan revitalisasi motif Ulos tradisional yang rumit, termasuk Ulos Sirara atau Ros na Marsimata",
    introduction:
      "Pendiri Dame Ulos di Tarutung yang menghidupkan kembali motif Ulos lama yang mulai ditinggalkan.",
    story: [
      "Renny membangun Dame Ulos untuk menghidupkan kembali desain Ulos lama yang mulai ditinggalkan karena prosesnya rumit dan membutuhkan ketelatenan.",
      "Ia bekerja bersama kelompok penenun muda dan perempuan dewasa. Dalam wawancara MedanBisnisDaily, ia menjelaskan bahwa pembuatan Ragidup dengan alat pamunggung dapat memerlukan waktu hingga satu bulan.",
    ],
    learning: "Renny tumbuh dalam keluarga penenun dan belajar dari neneknya sejak kecil.",
    skills: ["Revitalisasi motif lama", "Ulos Sirara / Ros na Marsimata", "Regenerasi penenun"],
    quote: null,
    timeline: [
      { period: "2014", description: "Mendirikan Dame Ulos di Tarutung.", sourceIds: ["N05", "S09"] },
      {
        period: "2021",
        description: "Galeri Dame Ulos di Saitnihuta dibangun sebagai apresiasi Bank Indonesia.",
        sourceIds: ["T01"],
      },
    ],
    gallery: [],
    ulosSlugs: [],
    weavingHouseSlug: "dame-ulos",
    verificationNotes: [
      "Desa asal disebut berbeda: Saitnihuta, Desa Huta Toruan I menurut satu artikel, dan Banjarnahor menurut profil lain. Konfirmasi sebelum ditulis sebagai alamat definitif.",
      "Sumber tidak menyebut jumlah tahun pengalaman menenun.",
    ],
    sourceIds: ["N05", "N06"],
    status: "needs_verification",
    featured: true,
  },
  {
    slug: "op-valen-br-situmorang",
    name: "Op Valen br Situmorang",
    // No photo: the available file is named "op adrien simarmata.jpg" and
    // cannot be matched to this person with certainty (§4.2).
    portrait: null,
    stageImage: null,
    origin: "Hutaraja, Samosir",
    originFull:
      "Kampung Ulos Hutaraja, Desa Lumban Suhi-Suhi Toruan, Kecamatan Pangururan, Kabupaten Samosir, Sumatera Utara",
    reportedAge: { age: 72, asOf: "Mei 2025", sourceId: "S08" },
    startedWeaving: null,
    experience: "Puluhan tahun menenun",
    specialty: "Ulos Sitolutuho dan tenun dengan alat tradisional",
    introduction:
      "Penenun senior Kampung Ulos Hutaraja yang tetap memakai alat tenun tradisional peninggalan leluhur.",
    story: [
      "Dalam dokumentasi ZonaUtara, Op Valen mempertahankan alat tenun tradisional dan menolak beralih ke ATBM. Ia menyebut satu ulos bisa dikerjakan sampai 90 hari dengan alat peninggalan leluhur.",
      "Menurutnya, waktu pengerjaan bergantung pada jumlah warna dan kerumitan motif. ZonaUtara juga mendokumentasikan Ulos Sitolutuho yang sedang dikerjakannya, lengkap dengan penjelasan makna motif menurut penenun.",
      "Dokumentasi lain memperlihatkan ia juga terlibat dalam produksi berbagai Ulos di Galeri Ulos Hutaraja.",
    ],
    learning: "Op Valen belajar dari orang tuanya dan telah mewariskan keterampilan tersebut kepada anak serta cucunya.",
    skills: ["Ulos Sitolutuho", "Alat tenun tradisional", "Pengetahuan lisan tentang makna motif"],
    quote: null,
    timeline: [],
    gallery: [],
    ulosSlugs: ["ulos-sitoluntuho"],
    weavingHouseSlug: null,
    verificationNotes: [
      "Foto belum dipasangkan. File foto yang tersedia bernama “op adrien simarmata.jpg”, berbeda dari nama di dokumen profil. Menunggu konfirmasi pemilik proyek.",
    ],
    sourceIds: ["S08", "N07"],
    status: "needs_verification",
    featured: false,
  },
];
