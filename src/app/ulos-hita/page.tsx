import type { Metadata } from "next";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { CatalogEmpty } from "@/components/ulos/CatalogEmpty";
import { CatalogNote } from "@/components/ulos/CatalogNote";
import { UlosCatalog } from "@/components/ulos/UlosCatalog";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { getCatalogUlos } from "@/lib/ulos";

export const metadata: Metadata = {
  title: "Ulos Hita",
  description:
    "Katalog sepuluh jenis Ulos Batak, dari Pinuncaan dan Ragidup hingga Suri-Suri. Setiap jenis dibuka bersama sembilan informasinya dan sumbernya.",
};

/**
 * Ulos Hita — digital Ulos catalogue (PRD V3.0, E2). Each card opens its
 * Detail Ulos inside this section of the site: /ulos-hita/[slug].
 */
export default function UlosHitaPage() {
  const items = getCatalogUlos();
  const background = pageBackgrounds.ulosHita;

  return (
    <>
      <Section
        tone="obsidian"
        warp={!background}
        spacing="none"
        aria-labelledby="ulos-hita-judul"
        className="overflow-hidden pb-section-tight pt-[calc(var(--spacing-header)+3.5rem)] lg:pt-[calc(var(--spacing-header)+5rem)]"
      >
        <PageBackdrop media={background} strength="stage" />

        <Container grid className="gap-y-6">
          <h1
            id="ulos-hita-judul"
            className="col-span-full font-serif text-h1 text-ivory motion-safe:animate-rise lg:col-span-6"
          >
            Ulos Hita
          </h1>
          <div className="col-span-full md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-lead text-ivory">Sepuluh jenis Ulos Batak.</p>
            <p className="prose-measure mt-2 text-body text-ivory-muted">
              Geser untuk menjelajah, lalu buka satu jenis untuk membaca cerita, bahan, teknik, dan makna
              motifnya. Foto kain adalah ilustrasi jenis Ulos.
            </p>
            {items.length > 0 ? <p className="mt-4 text-small text-gold">{items.length} jenis terdokumentasi</p> : null}
          </div>
        </Container>

        {items.length > 0 ? <UlosCatalog items={items} /> : <CatalogEmpty />}

        <Container className="mt-10">
          <BackdropCredit media={background} label="tekstur Ulos" />
        </Container>
      </Section>

      <CatalogNote />
    </>
  );
}
