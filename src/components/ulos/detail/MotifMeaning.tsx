import type { Ulos } from "@/types/content";
import { FactTags } from "@/components/ui/FactBlock";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";

/**
 * Detail Ulos 5 — Makna motif, set large beside a crop of the cover that
 * shows the motif. Meaning appears only with its sources; interpretations
 * the master data rejects (e.g. Sitoluntuho and Dalihan Na Tolu) are absent.
 */
export function MotifMeaning({ ulos }: { ulos: Ulos }) {
  const meaning = ulos.motifMeaning;

  return (
    <Section tone="obsidian" aria-labelledby="motif-judul" className="overflow-hidden">
      <Container grid className="items-center gap-y-12">
        <div className="col-span-full md:col-span-3 lg:col-span-5">
          <MediaFrame
            media={{ ...ulos.image, alt: `Detail motif ${ulos.name}` }}
            ratio="square"
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            imageClassName="scale-[1.6] group-hover/media:scale-[1.7]"
            bare
          />
        </div>

        <div className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-7">
          <Heading level={2} id="motif-judul">
            Motif dan makna
          </Heading>
          {meaning ? (
            <>
              <p className="prose-measure mt-8 font-serif text-h3 text-ivory">{meaning.text}</p>
              <FactTags fact={meaning} className="mt-5" />
              <SourceNote ids={meaning.sourceIds} className="mt-4" />
            </>
          ) : (
            <p className="prose-measure mt-8 text-lead text-(--fg-muted)">
              Makna motif {ulos.name} belum tersedia dari sumber yang dapat dipertanggungjawabkan. Bagian ini sengaja
              dikosongkan daripada diisi tafsiran.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
