import type { DurationExample, ProcessStep, RegionalSequence } from "@/types/content";
import { illustrations } from "./media";

/**
 * Proses Menenun — docs/sources/05_PROSES_MENENUN.md (2026-11-11).
 *
 * The main sequence follows Desa Meat, Toba [S07], with materials and
 * dyeing added first. It is not a universal procedure: other regions name
 * and order the stages differently (regionalSequences). All stage images
 * are AI illustrations, labelled as such.
 */
export const processNote =
  "Nama dan urutan tahap berbeda antardaerah. Alur di halaman ini mengikuti Desa Meat, Toba, ditambah tahap bahan dan pewarnaan di awal. Ini bukan aturan untuk semua penenun.";

export const processSteps: ProcessStep[] = [
  {
    id: "PROCESS-001",
    order: 1,
    title: "Menyiapkan benang dan warna",
    localName: null,
    description:
      "Bahan dasar ulos adalah benang kapas. Dulu benang dipintal dan dicelup sendiri dengan pewarna tumbuhan: indigo (salaon) untuk biru, secang dan mengkudu untuk merah, kunyit untuk kuning. Kini benang umumnya dibeli jadi dan banyak yang memakai pewarna sintetis.",
    tools: [],
    materials: ["Benang kapas/katun", "Salaon/indigo", "Kayu secang", "Mengkudu", "Kunyit"],
    media: [illustrations.processMaterials],
    sourceIds: ["S02", "S05", "S17"],
  },
  {
    id: "PROCESS-002",
    order: 2,
    title: "Mengkanji dan menyisir benang",
    localName: "Mangunggas",
    description:
      "Benang disisir dengan nasi agar kaku dan kuat sebelum ditenun. Di Tarutung, benang halus (“benang 100”) juga perlu dikanji agar lebih kuat. Sumber lain menyebut mangunggas sebagai proses mengeringkan benang di bawah matahari.",
    tools: ["Sikat atau sisir"],
    materials: ["Nasi atau kanji"],
    media: [illustrations.processMangunggas],
    sourceIds: ["S07", "S24"],
  },
  {
    id: "PROCESS-003",
    order: 3,
    title: "Menggulung benang",
    localName: "Makulhul / hul-hul",
    description: "Benang yang sudah dikanji digulung agar mudah dipakai.",
    tools: ["Sibok-sibok (rol benang)"],
    materials: [],
    media: [],
    sourceIds: ["S07", "S14"],
  },
  {
    id: "PROCESS-004",
    order: 4,
    title: "Memasukkan benang",
    localName: "Manorha",
    description: "Benang dimasukkan dan dirangkai untuk persiapan kain ulos.",
    tools: [],
    materials: [],
    media: [],
    sourceIds: ["S07", "S13"],
  },
  {
    id: "PROCESS-005",
    order: 5,
    title: "Memasang benang lungsi",
    localName: "Mangani",
    description: "Benang lungsi (benang warna) dipasang dan disusun sesuai urutan warna dan motif yang direncanakan.",
    tools: [],
    materials: [],
    media: [illustrations.processMangani],
    sourceIds: ["S07"],
  },
  {
    id: "PROCESS-006",
    order: 6,
    title: "Menggulung benang pakan",
    localName: "Makasoli",
    description: "Benang pakan digulung untuk dimasukkan melintang saat menenun.",
    tools: [],
    materials: [],
    media: [],
    sourceIds: ["S07"],
  },
  {
    id: "PROCESS-007",
    order: 7,
    title: "Menenun",
    localName: "Martonun",
    description:
      "Penenun duduk dengan kaki lurus ke depan, telapak kaki menekan penahan, dan posisi duduk tidak boleh bergeser karena memengaruhi keseimbangan. Motif dibuat sesuai hitungan motif, lalu benang dirapatkan. Pada gedogan, tegangan benang berasal dari tubuh penenun yang bersandar pada tali punggung (tundalan).",
    tools: ["Gedogan/boban", "Tundalan", "Pagabe", "Totar", "Sibok-sibok"],
    materials: [],
    media: [illustrations.processMartonun, illustrations.homeStoryHands],
    sourceIds: ["S02", "S07", "S14", "S31"],
  },
  {
    id: "PROCESS-008",
    order: 8,
    title: "Merapikan ujung kain",
    localName: "Manirak / Manirat",
    description: "Sisi dan ujung kain dirapikan agar tidak terurai, termasuk membentuk rumbai.",
    tools: [],
    materials: [],
    media: [illustrations.processManirat],
    sourceIds: ["S07", "S13"],
  },
];

export const regionalSequences: RegionalSequence[] = [
  {
    region: "Desa Meat, Toba",
    steps: ["mangunggas", "makulhul", "manorha", "mangani", "makasoli", "martonun", "manirak"],
    sourceIds: ["S07"],
  },
  {
    region: "Silalahi, Dairi",
    steps: ["mangunggas", "manorha", "mambobok (pembentukan motif)", "martonun", "manirat"],
    sourceIds: ["S13"],
  },
  {
    region: "Angkola, Tapanuli Selatan",
    steps: ["mangunggas", "manjomur", "mangukul", "mangasoli", "mangani", "menenun"],
    sourceIds: ["S31"],
  },
  {
    region: "Hutaraja, Samosir",
    steps: ["pewarnaan", "mangunggas", "mansorha", "martonun"],
    sourceIds: ["S36"],
  },
];

/** Examples only — never a standard duration. */
export const durationExamples: DurationExample[] = [
  { example: "Ragi Hotang, Desa Meat", duration: "2–3 lembar per dua minggu", sourceIds: ["S07"] },
  { example: "Tumtuman, Tarutung (sarung dan selendang)", duration: "± 1 bulan", sourceIds: ["S24"] },
  { example: "Pesanan gedogan, Donalindo Tenun", duration: "Estimasi 1 bulan", sourceIds: ["S33"] },
  { example: "Satu set ulos premium, Dame Ulos", duration: "4 bulan", sourceIds: ["S10"] },
  { example: "Satu ulos, penenun Hutaraja", duration: "Hingga 90 hari", sourceIds: ["S08"] },
];
