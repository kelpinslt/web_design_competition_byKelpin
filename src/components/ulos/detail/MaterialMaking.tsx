import type { Ulos } from "@/types/content";
import { FactBlock } from "@/components/ui/FactBlock";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

/**
 * Detail Ulos 4 — Bahan, Pewarna, Teknik pembuatan, Kerumitan motif as an
 * asymmetric grid of large values with their sources (v3 §7.3).
 */
export function MaterialMaking({ ulos }: { ulos: Ulos }) {
  return (
    <Section tone="brown" warp aria-labelledby="bahan-judul">
      <Container grid className="gap-y-12">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id="bahan-judul">
            Bahan dan pembuatan
          </Heading>
          <p className="prose-measure mt-6 text-body text-(--fg-muted)">
            Label <span className="text-(--fg)">Data umum Ulos</span> berarti data khusus jenis ini belum ada.
            Label <span className="text-(--fg)">Contoh terdokumentasi</span> berasal dari satu pembuat atau tempat dan
            tidak berlaku untuk semua kain.
          </p>
        </div>
        <dl className="col-span-full grid gap-x-(--gutter) gap-y-12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          <FactBlock definition label="Bahan" fact={ulos.material} />
          <FactBlock definition label="Pewarna" fact={ulos.dye} className="sm:mt-16" />
          <FactBlock definition label="Teknik pembuatan" fact={ulos.technique} />
          <FactBlock definition label="Kerumitan motif" fact={ulos.motifComplexity} className="sm:mt-16" />
        </dl>
      </Container>
    </Section>
  );
}
