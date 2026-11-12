/**
 * Content types — PRD V3.0 Bagian I, extended for the Master Execution
 * Prompt v3 (§4, §12): every fact keeps its sources, its scope and its
 * verification status.
 *
 * Local data files are static content from the owner's research documents
 * (docs/sources), not a database and not dummy data. `null` means "not yet
 * available"; the UI says so honestly instead of inventing a value.
 */

/**
 * - `terverifikasi`: confirmed with the person or business.
 * - `sumber_publik`: documented in a cited public source.
 * - `needs_verification`: sourced, but to be confirmed before final publication.
 */
export type Verification = "terverifikasi" | "sumber_publik" | "needs_verification";

/** A photograph or illustration with its licence trail (I6). */
export type MediaAsset = {
  src: string;
  /** Accurate visual description. */
  alt: string;
  /** Owner or photographer, shown with the image. */
  credit: string;
  /** Who granted permission and on what basis. Not rendered. */
  permission: string;
  caption?: string;
  /**
   * AI-generated or otherwise not documentary. The UI labels it
   * "Ilustrasi" so it is never mistaken for documentation (§5.2).
   */
  illustration?: boolean;
  /** Point of interest in percent (0–100); keeps the subject in view when cropped. */
  focal?: { x: number; y: number };
  /** Mobile focal point when it differs from desktop. */
  focalMobile?: { x: number; y: number };
};

/** A reference that supports historical, cultural or factual claims (I6). */
export type Source = {
  id: string;
  title: string;
  author?: string;
  publisher?: string;
  year?: string;
  url?: string;
  /** Article, journal, museum, government site, business profile… */
  kind?: string;
};

/**
 * One sourced statement. `headline` is a short value for large type
 * (e.g. "Sangat tinggi"); `text` is the full statement.
 */
export type Fact = {
  headline?: string;
  text: string;
  sourceIds: string[];
  /**
   * - `jenis`: true of this Ulos type in the sources.
   * - `umum`: general to most Ulos, used because no type-specific data exists.
   * - `contoh`: a documented example from one maker or place; not a generalisation.
   */
  scope?: "jenis" | "umum" | "contoh";
  status?: Verification;
};

/** A price seen in a public source: information, never an offer (§0). */
export type PriceReference = {
  amount: string;
  /** What the price is for, and from whom. */
  context: string;
  /** Year or access date of the source. */
  date: string;
  sourceIds: string[];
};

/** Ulos type — 01_ULOS_MASTER_DATA.md. Data describes the type, not one cloth. */
export type Ulos = {
  id: string;
  slug: string;
  name: string;
  alternativeNames: string[];
  /** Class or function as given by the master data, e.g. "Ulos nabalga". */
  category: string;
  origin: string;
  shortDescription: string;
  image: MediaAsset;
  /** 1. Identitas / jenis */
  identity: Fact;
  /** 2. Bahan */
  material: Fact | null;
  /** 3. Pewarna */
  dye: Fact | null;
  /** 4. Teknik pembuatan */
  technique: Fact | null;
  /** 5. Kerumitan motif */
  motifComplexity: Fact | null;
  /** 6. Makna motif */
  motifMeaning: Fact | null;
  /** 7. Lama pengerjaan */
  productionDuration: Fact | null;
  /** Function and way of wearing ("Fungsi & cara pakai"). */
  usage: Fact | null;
  /**
   * 8. Weavers documented as weaving this type (from their own profile
   * sources). Not the maker of a specific cloth.
   */
  artisanSlugs: string[];
  /** 9. Indicative prices from dated public sources. */
  prices: PriceReference[];
  status: Verification;
  /** Shown in Beranda "Koleksi Ulos pilihan" (07 §A5). */
  featured: boolean;
};

/** A dated event in an artisan's journey — only with real chronology (I3). */
export type TimelineEntry = {
  period: string;
  description: string;
  sourceIds: string[];
};

/** A verbatim quote with its source. None are published without one. */
export type ArtisanQuote = {
  text: string;
  language: string;
  translation: string | null;
  sourceId: string;
  locator?: string;
};

/** Penenun — PARTONUN_Profil_5_Penenun_Ulos.md. */
export type Artisan = {
  slug: string;
  name: string;
  /** Null until a photo is matched to this person with certainty (§4.2). */
  portrait: MediaAsset | null;
  /** Full-bleed photo for the Penenun Hita hero; falls back to the page slot. */
  stageImage: MediaAsset | null;
  /** Short location for labels, e.g. "Desa Meat, Toba". */
  origin: string;
  /** Full place of origin as documented. */
  originFull: string;
  /** Age at the source's publication date — never recalculated (§4.2). */
  reportedAge: { age: number; asOf: string; sourceId: string } | null;
  /** Year or period they began weaving, only when the source gives it. */
  startedWeaving: string | null;
  /** Experience as documented, with its date context. */
  experience: string | null;
  specialty: string;
  /** One to two sentences for the hero panel. */
  introduction: string;
  /** Profile narrative, paragraph by paragraph, from the sources. */
  story: string[];
  /** How the skill was learned and passed on. */
  learning: string | null;
  skills: string[];
  quote: ArtisanQuote | null;
  timeline: TimelineEntry[];
  gallery: MediaAsset[];
  ulosSlugs: string[];
  weavingHouseSlug: string | null;
  /** Open questions to confirm with the artisan before final publication. */
  verificationNotes: string[];
  sourceIds: string[];
  status: Verification;
  featured: boolean;
};

export type HouseLocationKind =
  | "galeri"
  | "rumah tenun"
  | "studio"
  | "rumah komunitas"
  | "rumah pewarnaan"
  | "gerai";

export type HouseLocation = {
  kind: HouseLocationKind;
  name: string;
  /** Null when the source gives no street address. */
  address: string | null;
  note?: string;
};

export type HouseContact = {
  kind: "whatsapp" | "telepon" | "email" | "instagram" | "website";
  label: string;
  href: string;
};

/** Rumah Tenun / Galeri Ulos — 08_TOKO_ULOS_TENUN.md (Implementation Pack v3 §4). */
export type WeavingHouse = {
  slug: string;
  name: string;
  legalName?: string;
  /** The business's actual role, described accurately (§7.6). */
  role: string;
  people: { role: string; name: string }[];
  founded: string;
  region: string;
  locations: HouseLocation[];
  coverImage: MediaAsset;
  gallery: MediaAsset[];
  intro: string;
  story: Fact[];
  techniques: Fact[];
  products: Fact[];
  community: Fact[];
  contacts: HouseContact[];
  /** Kept in the data, not shown: needs confirmation before display (§0). */
  priceRange: Fact | null;
  /** Ulos types in the catalogue that the sources link to this house. */
  ulosSlugs: string[];
  artisanSlugs: string[];
  verificationNotes: string[];
  sourceIds: string[];
  status: Verification;
};

export type EducationBlock =
  | { type: "points"; items: Fact[] }
  | {
      type: "table";
      columns: string[];
      rows: { cells: string[]; sourceIds: string[] }[];
      note?: string;
    };

/** Belajar Ulos topic — 04_BELAJAR_ULOS.md. */
export type EducationEntry = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  blocks: EducationBlock[];
  image: MediaAsset | null;
  localTerms: string[];
  relatedUlosSlugs: string[];
  status: Verification;
};

export type GlossaryEntry = {
  term: string;
  meaning: string;
  sourceIds: string[];
};

/** Process stage — 05_PROSES_MENENUN.md. Order follows Desa Meat [S07], not a universal rule. */
export type ProcessStep = {
  id: string;
  order: number;
  title: string;
  localName: string | null;
  description: string;
  tools: string[];
  materials: string[];
  media: MediaAsset[];
  sourceIds: string[];
};

export type RegionalSequence = {
  region: string;
  steps: string[];
  sourceIds: string[];
};

export type DurationExample = {
  example: string;
  duration: string;
  sourceIds: string[];
};
