import { ButtonLink, TextLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

/**
 * Closing note of Ulos Hita: why each Ulos opens into its own detail page
 * (PRD B4 Masalah 2), the pricing principle, and contextual next steps
 * (D3.6). The nine details themselves live on Detail Ulos.
 */
export function CatalogNote() {
  return (
    <Section tone="ivory" aria-labelledby="catatan-judul">
      <Container grid className="gap-y-10">
        <Heading level={2} id="catatan-judul" className="col-span-full lg:col-span-6">
          Foto dan harga saja tidak cukup untuk menjelaskan nilai sebuah Ulos.
        </Heading>
        <div className="col-span-full lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="prose-measure text-body text-(--fg)">
            Buka salah satu jenis untuk melihat sembilan informasinya: identitas, bahan, pewarna, teknik
            pembuatan, kerumitan dan makna motif, lama pengerjaan, penenun, dan harga referensi. Setiap
            keterangan disertai sumbernya, dan yang belum ada ditulis apa adanya.
          </p>
          <p className="prose-measure mt-6 border-t border-(--rule) pt-6 text-body font-medium text-ulos">
            Harga yang tercantum adalah referensi dari sumber publik bertanggal, bukan penawaran. PARTONUN
            tidak melayani transaksi dan tidak menetapkan harga.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href="/penenun-hita">Kenali Penenun Hita</ButtonLink>
            <TextLink href="/belajar-ulos" className="inline-block bg-origin-content py-2.5">
              Pelajari jenis dan makna motif
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
