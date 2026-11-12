import type { MediaAsset } from "@/types/content";

/**
 * Every image the site uses, in one place, with its licence trail.
 *
 * Three groups:
 * 1. AI illustrations from docs/sources/06_IMAGE_ASSET_MANIFEST.md
 *    (full-resolution exports, converted to WebP). Always `illustration`,
 *    so the UI labels them; never presented as documentation (§5.2).
 * 2. Photographs provided by the project owner in public/images.
 * 3. Photographs of named people and businesses, credited to the source
 *    the owner's research documents name for them.
 */

const AI_CREDIT = "Ilustrasi AI untuk PARTONUN";
const AI_PERMISSION = "Milik proyek: AI-generated (Figma, 06_IMAGE_ASSET_MANIFEST.md)";

function illustration(src: string, alt: string, caption: string, focal?: { x: number; y: number }): MediaAsset {
  return { src, alt, caption, credit: AI_CREDIT, permission: AI_PERMISSION, illustration: true, focal };
}

/* --- 1. AI illustrations (manifest §A) ------------------------------------ */

export const illustrations = {
  homeHero: illustration(
    "/images/home/home-hero-01.webp",
    "Ulos merah marun bermotif tersampir di pagar kayu, berlatar senja Danau Toba",
    "Ilustrasi suasana",
    { x: 78, y: 60 },
  ),
  homeStoryHands: illustration(
    "/images/home/home-story-01.webp",
    "Tangan penenun merapatkan benang ulos pada alat tenun gedogan",
    "Ilustrasi",
  ),
  homeStack: illustration(
    "/images/home/home-story-02.webp",
    "Tumpukan ulos terlipat dengan beragam warna dan motif di rak kayu",
    "Ilustrasi suasana",
    { x: 28, y: 55 },
  ),
  macroRagidup: illustration("/images/textures/ulos-macro-ragidup.webp", "", "Ilustrasi tekstur"),
  macroRambu: illustration(
    "/images/textures/ulos-macro-rambu.webp",
    "Detail rumbai ulos merah marun bergaris hitam putih",
    "Ilustrasi detail rumbai",
    { x: 50, y: 70 },
  ),
  macroSibolang: illustration("/images/textures/ulos-macro-sibolang.webp", "", "Ilustrasi tekstur"),
  processMaterials: illustration(
    "/images/process/process-01-bahan.webp",
    "Benang katun warna merah, hitam, putih, dan biru bersama daun indigo, kayu secang, dan kunyit",
    "Ilustrasi bahan dan pewarna alami",
    { x: 35, y: 55 },
  ),
  processMangunggas: illustration(
    "/images/process/process-02-mangunggas.webp",
    "Benang lungsi yang dikanji dibentangkan dan disisir di bawah sinar matahari",
    "Ilustrasi mangunggas",
    { x: 60, y: 55 },
  ),
  processMangani: illustration(
    "/images/process/process-03-mangani.webp",
    "Tangan menyusun benang lungsi berwarna pada bingkai kayu",
    "Ilustrasi mangani",
    { x: 40, y: 50 },
  ),
  processMartonun: illustration(
    "/images/process/process-04-martonun.webp",
    "Penenun duduk menenun ulos dengan alat tenun gedogan di dalam rumah kayu",
    "Ilustrasi martonun",
    { x: 35, y: 60 },
  ),
  processManirat: illustration(
    "/images/process/process-05-manirat.webp",
    "Tangan memilin ujung benang ulos menjadi rumbai",
    "Ilustrasi manirat",
    { x: 55, y: 55 },
  ),
  learnHero: illustration(
    "/images/learn/learn-hero-01.webp",
    "Lima jenis ulos dengan warna dan motif berbeda dibentangkan berdampingan",
    "Ilustrasi ragam ulos",
    { x: 50, y: 50 },
  ),
  artisanBackground: illustration("/images/artisan/artisan-bg-01.webp", "", "Ilustrasi suasana", { x: 75, y: 55 }),
  housePlaceholder: illustration(
    "/images/house/house-placeholder-01.webp",
    "Suasana beranda rumah tenun dengan alat tenun dan ulos, berlatar Danau Toba",
    "Ilustrasi, bukan foto lokasi",
    { x: 50, y: 60 },
  ),
  aboutHero: illustration(
    "/images/about/about-hero-01.webp",
    "Ulos terlipat di bangku kayu menghadap Danau Toba saat fajar",
    "Ilustrasi suasana",
    { x: 20, y: 75 },
  ),
} as const;

/** Cover for each Ulos type (manifest §B). Caption per manifest: "Ilustrasi jenis Ulos". */
export function ulosCover(slug: string, name: string, description: string): MediaAsset {
  return illustration(`/images/ulos/${slug}.webp`, `${name}: ${description}`, "Ilustrasi jenis Ulos", { x: 50, y: 50 });
}

/* --- 2. Owner-provided photographs (public/images/USE-ALL-LAYOUT) -------- */

const OWNER_CREDIT = "Koleksi visual PARTONUN";
const OWNER_PERMISSION =
  "Disediakan pemilik proyek di public/images/USE-ALL-LAYOUT. Sumber asli dan izin perlu dicatat sebelum publikasi final (needs_verification).";

function ownerPhoto(src: string, alt: string, focal?: { x: number; y: number }): MediaAsset {
  return { src, alt, credit: OWNER_CREDIT, permission: OWNER_PERMISSION, focal };
}

export const ownerPhotos = {
  womanInUlos: ownerPhoto(
    "/images/suasana/perempuan-berulos.webp",
    "Perempuan berkonde mengenakan ulos gelap bermotif, difoto dari belakang dengan latar merah",
    { x: 50, y: 40 },
  ),
  redUlosDetail: ownerPhoto(
    "/images/suasana/detail-ulos-merah.webp",
    "Tangan memegang ulos merah dengan motif dan rumbai keemasan",
    { x: 50, y: 50 },
  ),
  rumaBolon: ownerPhoto(
    "/images/suasana/ruma-bolon.webp",
    "Rumah adat Batak Toba beratap melengkung dengan patung kayu di halamannya",
    { x: 55, y: 35 },
  ),
  ulosOnChair: ownerPhoto(
    "/images/suasana/ulos-di-kursi.webp",
    "Ulos bermotif tersampir di kursi kayu berlatar dinding berukir",
    { x: 50, y: 50 },
  ),
  ulosHanging: ownerPhoto(
    "/images/suasana/ulos-digantung.webp",
    "Ulos gelap bergaris tergantung di dinding papan kayu merah",
    { x: 50, y: 45 },
  ),
  redLoom: ownerPhoto(
    "/images/suasana/alat-tenun-merah.webp",
    "Benang merah terbentang di alat tenun kayu, tangan penenun merapatkan pakan",
    { x: 50, y: 50 },
  ),
} as const;

/* --- 3. People and businesses (credited to the documented source) -------- */

const MEDIA_PERMISSION =
  "Foto dari media yang tercatat di dokumen profil. Izin tertulis pemegang hak perlu diperoleh sebelum publikasi final (needs_verification).";

export const artisanPhotos = {
  elida: {
    src: "/images/penenun/elida-boru-siahaan.webp",
    alt: "Elida Boru Siahaan tersenyum di depan alat tenun, mengenakan penutup kepala bermotif",
    credit: "IDN Times Sumut, 2026",
    permission: MEDIA_PERMISSION,
    focal: { x: 45, y: 32 },
  },
  evi: {
    src: "/images/penenun/evi-boru-simanjuntak.webp",
    alt: "Evi Boru Simanjuntak menenun kain merah di halaman rumah adat",
    credit: "IDN Times Sumut, 2026",
    permission: MEDIA_PERMISSION,
    focal: { x: 31, y: 28 },
  },
  candro: {
    src: "/images/penenun/candro-fernando-sitorus.webp",
    alt: "Candro Fernando Sitorus berdiri dengan ulos merah tersampir di bahu",
    credit: "Ninna.id, 2021",
    permission: MEDIA_PERMISSION,
    focal: { x: 50, y: 18 },
  },
  renny: {
    src: "/images/penenun/renny-katrina-manurung.webp",
    alt: "Renny Katrina Manurung duduk menenun dengan alat tenun tradisional",
    credit: "MedanBisnisDaily, 2021",
    permission: MEDIA_PERMISSION,
    focal: { x: 30, y: 27 },
  },
} satisfies Record<string, MediaAsset>;

const BUSINESS_PERMISSION =
  "Foto profil usaha disediakan pemilik proyek di public/images/RUMAH_TENUN. Konfirmasi izin dengan usaha terkait sebelum publikasi final (needs_verification).";

export const housePhotos = {
  dameUlos: {
    src: "/images/rumah-tenun/dame-ulos.webp",
    alt: "Model mengenakan ulos cokelat bermotif dari Dame Ulos di taman berlatar pepohonan",
    credit: "Dame Ulos (@dameulos)",
    permission: BUSINESS_PERMISSION,
    focal: { x: 50, y: 25 },
  },
  sianipar: {
    src: "/images/rumah-tenun/galeri-ulos-sianipar.webp",
    alt: "Bangunan kayu Rumah Tenun di depan Galeri Ulos Sianipar dengan papan nama Bank Indonesia",
    credit: "Galeri Ulos Sianipar",
    permission: BUSINESS_PERMISSION,
    focal: { x: 50, y: 40 },
  },
  tobatenun: {
    src: "/images/rumah-tenun/tobatenun.webp",
    alt: "Sekelompok orang berfoto bersama sambil memegang untaian benang berwarna",
    credit: "Tobatenun",
    permission: BUSINESS_PERMISSION,
    focal: { x: 55, y: 45 },
  },
} satisfies Record<string, MediaAsset>;
