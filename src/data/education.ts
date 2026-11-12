import type { EducationEntry, GlossaryEntry } from "@/types/content";
import { illustrations, ownerPhotos } from "./media";

/**
 * Belajar Ulos — docs/sources/04_BELAJAR_ULOS.md (2026-11-11).
 * Focus is Batak Toba unless stated; customs differ between Batak
 * sub-groups, so nothing here is presented as universal.
 */
export const educationScopeNote =
  "Praktik adat berbeda antarsubkelompok Batak (Toba, Simalungun, Karo, Angkola, Mandailing, Pakpak). Materi ini berfokus pada Batak Toba kecuali disebut lain.";

export const educationEntries: EducationEntry[] = [
  {
    id: "LEARN-001",
    slug: "apa-itu-ulos",
    title: "Apa itu Ulos?",
    summary: "Ulos adalah kain tenun tradisional masyarakat Batak di Sumatera Utara.",
    blocks: [
      {
        type: "points",
        items: [
          {
            text: "Secara harfiah ulos berarti selimut atau penghangat. Awalnya kain ini dibutuhkan untuk menghangatkan tubuh di pegunungan yang dingin, lalu berkembang menjadi simbol sakral dalam upacara adat.",
            sourceIds: ["S03"],
          },
          { text: "Orang Batak mengenal tiga sumber kehangatan: matahari, api, dan ulos.", sourceIds: ["S16"] },
          { text: "Ulos hadir di setiap tahap hidup, dari kelahiran, pernikahan, hingga kematian.", sourceIds: ["S03"] },
          {
            text: "Ulos Batak Toba ditetapkan sebagai Warisan Budaya Takbenda Indonesia melalui SK Nomor 270/P/2014.",
            sourceIds: ["P"],
          },
          {
            text: "Secara tradisional menenun adalah pekerjaan perempuan. Diyakini perempuan menanamkan nilai merawat keluarga ke dalam kain yang ditenunnya.",
            sourceIds: ["S02"],
          },
        ],
      },
    ],
    image: illustrations.learnHero,
    localTerms: [],
    relatedUlosSlugs: [],
    status: "sumber_publik",
  },
  {
    id: "LEARN-002",
    slug: "mangulosi",
    title: "Mangulosi dan Dalihan Na Tolu",
    summary: "Memberikan ulos adalah tanda kasih, perantara doa, dan penanda kedudukan dalam struktur adat.",
    blocks: [
      {
        type: "points",
        items: [
          { text: "Mangulosi adalah tradisi memberikan ulos, simbol kasih sayang kepada penerima.", sourceIds: ["S16"] },
          {
            text: "Pemberian dilakukan dengan khidmat karena ulos dianggap perantara doa dan restu leluhur.",
            sourceIds: ["S03"],
          },
          {
            text: "Ulos juga menandai kedudukan seseorang dalam struktur adat Dalihan Na Tolu: hula-hula, dongan tubu, dan boru.",
            sourceIds: ["S03"],
          },
          {
            text: "Contohnya, pada pernikahan Ulos Ragi Hotang diberikan pihak hula-hula kepada pihak boru sebagai tanda restu.",
            sourceIds: ["S32"],
          },
        ],
      },
    ],
    image: illustrations.homeStack,
    localTerms: ["mangulosi", "Dalihan Na Tolu", "hula-hula", "dongan tubu", "boru"],
    relatedUlosSlugs: ["ulos-ragi-hotang"],
    status: "sumber_publik",
  },
  {
    id: "LEARN-003",
    slug: "cara-memakai-ulos",
    title: "Tiga cara memakai Ulos",
    summary: "Cara memakai Ulos punya istilahnya sendiri: di badan, di kepala atau ditenteng, dan di pinggang.",
    blocks: [
      {
        type: "table",
        columns: ["Istilah", "Arti", "Contoh ulos"],
        rows: [
          { cells: ["Siabithononton", "Dipakai di badan", "Ragidup, Sibolang, Runjat, Ragi Pakko"], sourceIds: ["S01", "S16"] },
          {
            cells: ["Sihadanghononton", "Dililit di kepala atau ditenteng", "Sadum, Sumbat, Bolean, Mangiring, Suri-suri"],
            sourceIds: ["S01", "S16"],
          },
          { cells: ["Sitalitalihononton", "Dililit di pinggang", "Tumtuman, Mangiring, Padang Ursa"], sourceIds: ["S01", "S16"] },
        ],
        note: "Daftar contoh sedikit berbeda antarsumber.",
      },
      {
        type: "points",
        items: [
          {
            text: "Bila dipakai laki-laki, bagian atas disebut ande-ande, bagian bawah singkot, dan yang di kepala tali-tali atau bulang-bulang.",
            sourceIds: ["S16"],
          },
        ],
      },
    ],
    image: ownerPhotos.womanInUlos,
    localTerms: ["siabithononton", "sihadanghononton", "sitalitalihononton"],
    relatedUlosSlugs: ["ulos-ragidup", "ulos-sibolang", "ulos-mangiring", "ulos-sadum", "ulos-suri-suri"],
    status: "sumber_publik",
  },
  {
    id: "LEARN-004",
    slug: "makna-warna",
    title: "Bahasa warna Ulos",
    summary: "Empat warna utama Ulos membawa maknanya sendiri.",
    blocks: [
      {
        type: "table",
        columns: ["Warna", "Makna"],
        rows: [
          { cells: ["Merah", "Kepahlawanan dan keberanian"], sourceIds: ["S01", "S03"] },
          { cells: ["Putih", "Kesucian dan kejujuran"], sourceIds: ["S01", "S03"] },
          { cells: ["Hitam", "Duka. Ada juga yang menafsirkan sebagai kepemimpinan"], sourceIds: ["S01", "S03"] },
          { cells: ["Kuning", "Kekayaan dan kesuburan"], sourceIds: ["S01"] },
        ],
      },
    ],
    image: illustrations.macroRambu,
    localTerms: [],
    relatedUlosSlugs: [],
    status: "sumber_publik",
  },
  {
    id: "LEARN-005",
    slug: "pewarna-alami",
    title: "Dari tumbuhan menjadi warna",
    summary: "Warna tradisional Ulos berasal dari tumbuhan, meski banyak penenun kini beralih ke pewarna kimia.",
    blocks: [
      {
        type: "points",
        items: [
          {
            text: "Biru dari indigo, merah dari kayu secang dan mengkudu, kuning dari kunyit, hitam dari campuran mengkudu dan indigo, dan hijau dari campuran indigo dan kunyit.",
            sourceIds: ["S02"],
          },
          {
            text: "Di Sumatera Utara, tanaman indigo dikenal sebagai salaon. Riset Universitas Negeri Medan menemukan benang ulos berpewarna salaon lebih tahan luntur daripada pewarna kimia yang diuji.",
            sourceIds: ["S05"],
          },
          {
            text: "Banyak penenun beralih ke pewarna kimia karena proses pewarna alami lama dan tidak praktis.",
            sourceIds: ["S05", "S06"],
          },
          {
            text: "Pada 2021, program UNESCO melatih 6 penenun senior tentang pewarna alami, yang kemudian melatih 18 penenun muda di kawasan Toba.",
            sourceIds: ["S11"],
          },
        ],
      },
    ],
    image: illustrations.processMaterials,
    localTerms: ["salaon"],
    relatedUlosSlugs: ["ulos-sibolang"],
    status: "sumber_publik",
  },
  {
    id: "LEARN-006",
    slug: "gedogan-dan-atbm",
    title: "Gedogan dan ATBM",
    summary: "Dua alat yang berbeda: gedogan ditegangkan oleh tubuh penenun, ATBM datang bersama modernisasi.",
    blocks: [
      {
        type: "points",
        items: [
          {
            headline: "Gedogan",
            text: "Alat tenun gendong (backstrap). Tegangan benang dihasilkan dari berat tubuh penenun yang bersandar pada tali punggung, sehingga lebar kain hanya sebatas rentang lengan penenun.",
            sourceIds: ["S02"],
          },
          { text: "Di Silalahi, keseluruhan alat tenun disebut boban.", sourceIds: ["S14"] },
          {
            headline: "ATBM",
            text: "Alat tenun bukan mesin, masuk seiring modernisasi. Kemendag mencatat pemakaian gedogan mulai jarang.",
            sourceIds: ["S02", "S25"],
          },
          {
            text: "Dengan gedogan, apalagi bila menenun dikerjakan di sela waktu mengurus rumah, satu kain bisa memakan waktu berbulan-bulan.",
            sourceIds: ["S02", "S25"],
          },
        ],
      },
    ],
    image: illustrations.processMartonun,
    localTerms: ["gedogan", "boban", "ATBM"],
    relatedUlosSlugs: [],
    status: "sumber_publik",
  },
  {
    id: "LEARN-007",
    slug: "mengenali-ulos-asli",
    title: "Mengenali Ulos tenun tangan",
    summary: "Panduan sederhana dari Indonesia Travel untuk membedakan tenun tangan dari kain mesin.",
    blocks: [
      {
        type: "points",
        items: [
          {
            headline: "Tekstur",
            text: "Tenun tangan terasa sedikit kasar dan tidak selalu simetris sempurna. Kain mesin terasa sangat halus dan licin.",
            sourceIds: ["S02", "S03"],
          },
          {
            headline: "Detail benang",
            text: "Tenun tangan menunjukkan simpul kecil atau sambungan benang manual. Kain mesin rata tanpa variasi ketebalan benang.",
            sourceIds: ["S02", "S03"],
          },
          {
            headline: "Warna",
            text: "Pewarna alami terlihat dalam tetapi tidak mencolok. Pewarna kimia sering terlalu terang dan mudah pudar.",
            sourceIds: ["S02", "S03"],
          },
        ],
      },
    ],
    image: ownerPhotos.redLoom,
    localTerms: [],
    relatedUlosSlugs: [],
    status: "sumber_publik",
  },
];

/** LEARN-008 · Glosarium. Spelling still to be confirmed with a cultural source. */
export const glossary: GlossaryEntry[] = [
  { term: "Ulos", meaning: "Kain tenun Batak; harfiah “selimut”.", sourceIds: ["S03"] },
  { term: "Mangulosi", meaning: "Memberikan ulos sebagai tanda kasih dan restu.", sourceIds: ["S16"] },
  { term: "Partonun", meaning: "Penenun.", sourceIds: [] },
  { term: "Martonun", meaning: "Menenun.", sourceIds: ["S07", "S13"] },
  { term: "Mangunggas", meaning: "Mengkanji atau menyisir benang (dengan nasi) agar kaku.", sourceIds: ["S07"] },
  { term: "Mangani", meaning: "Memasang benang lungsi.", sourceIds: ["S07"] },
  { term: "Manirat / Manirak", meaning: "Merapikan ujung kain atau rumbai agar tidak terurai.", sourceIds: ["S07", "S13"] },
  { term: "Gedogan", meaning: "Alat tenun gendong (backstrap).", sourceIds: ["S02"] },
  { term: "Boban", meaning: "Nama keseluruhan alat tenun (Silalahi).", sourceIds: ["S14"] },
  { term: "Tundalan", meaning: "Penahan di punggung penenun.", sourceIds: ["S14"] },
  { term: "Totar", meaning: "Bilah bambu pemisah lapisan benang untuk pola.", sourceIds: ["S14"] },
  { term: "Salaon", meaning: "Tanaman indigo, pewarna biru.", sourceIds: ["S05"] },
  { term: "Hula-hula / Boru / Dongan tubu", meaning: "Tiga unsur Dalihan Na Tolu.", sourceIds: ["S03"] },
  { term: "Ulos hela", meaning: "Ulos untuk menantu (biasanya Ragi Hotang).", sourceIds: ["S12"] },
  { term: "Ulos ni tondi", meaning: "“Ulos jiwa”, diberikan saat kehamilan pertama.", sourceIds: ["S04"] },
  { term: "Nabalga / Nametmet", meaning: "Ulos kelas atas (adat) / ulos sehari-hari.", sourceIds: ["S01"] },
];

export const glossaryNote = "Ejaan istilah lokal masih perlu dikonfirmasi ke narasumber.";
