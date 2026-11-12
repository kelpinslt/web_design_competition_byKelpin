import type { Ulos } from "@/types/content";
import { FactTags } from "@/components/ui/FactBlock";
import { TextLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";

/**
 * Detail Ulos 6 — Lama pengerjaan, only when a source gives it, always as
 * a documented example rather than a standard duration.
 */
export function ProductionStory({ ulos }: { ulos: Ulos }) {
  const duration = ulos.productionDuration;

  return (
    <Section tone="ivory" spacing="tight" aria-labelledby="produksi-judul">
      <Container grid className="items-end gap-y-8">
        <div className="col-span-full lg:col-span-5">
          <Heading level={2} id="produksi-judul">
            Lama pengerjaan
          </Heading>
          {duration?.headline ? <p className="mt-8 font-serif text-h1 text-(--fg)">{duration.headline}</p> : null}
        </div>
        <div className="col-span-full lg:col-span-6 lg:col-start-7">
          {duration ? (
            <>
              <p className="prose-measure text-lead text-(--fg)">{duration.text}</p>
              <FactTags fact={duration} className="mt-4" />
              <SourceNote ids={duration.sourceIds} className="mt-3" />
            </>
          ) : (
            <p className="prose-measure text-lead text-(--fg-muted)">
              Informasi belum tersedia. Lama pengerjaan bergantung pada kain, alat, dan penenunnya, jadi tidak ditulis
              tanpa sumber.
            </p>
          )}
          <TextLink href="/proses-menenun" className="mt-6 inline-block bg-origin-content py-2.5">
            Lihat tahapan proses menenun
          </TextLink>
        </div>
      </Container>
    </Section>
  );
}
