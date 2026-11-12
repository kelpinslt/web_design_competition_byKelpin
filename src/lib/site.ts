/**
 * Platform identity — the single source for the brand name, tagline,
 * description and contacts shown to visitors (header, menu, footer,
 * metadata). Internal identifiers ("ulos-heritage") stay unchanged.
 */
export const site = {
  name: "PARTONUN",
  tagline: "Menghidupkan Cerita, Merawat Warisan Tenun.",
  description:
    "PARTONUN adalah platform digital yang memperkenalkan warisan tenun Ulos Batak melalui cerita para penenun, pengetahuan budaya, karakteristik kain, dan proses pembuatannya.",
  locale: "id_ID",
  competition: "National Web Design Competition Invofest 2026",
  topic: "Digital Economy & Sociopreneurship (SDG 8 & SDG 10)",
  // Master Execution Prompt v3 §8, footer.
  email: "partonun1@gmail.com",
  phone: { label: "+62 853-7193-7076", href: "tel:+6285371937076" },
  whatsapp: "https://wa.me/6285371937076",
  copyright: "2026 PARTONUN. All rights reserved.",
} as const;
