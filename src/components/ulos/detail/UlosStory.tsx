import type { Artisan, Ulos } from "@/types/content";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { ulosNineDetails } from "@/lib/ulos";

const anchors: Record<string, string> = {
  identity: "#cerita-judul",
  material: "#bahan-judul",
  dye: "#bahan-judul",
  technique: "#bahan-judul",
  motifComplexity: "#bahan-judul",
  motifMeaning: "#motif-judul",
  productionDuration: "#produksi-judul",
  artisan: "#pengrajin-judul",
  price: "#harga-judul",
};

/**
 * Detail Ulos 3 — the story of the type in short paragraphs, each with
 * its sources, beside an index of the nine details showing which are
 * documented. Not a rigid table (v3 §7.3): the index only orients and
 * links to the sections that explain each detail.
 */
export function UlosStory({ ulos, artisans }: { ulos: Ulos; artisans: Artisan[] }) {
  const details = ulosNineDetails(ulos).map((detail) => {
    if (detail.key === "artisan") return { ...detail, available: artisans.length > 0 };
    if (detail.key === "price") return { ...detail, available: ulos.prices.length > 0 };
    return { ...detail, available: Boolean(detail.fact) };
  });
  const available = details.filter((detail) => detail.available).length;

  return (
    <Section tone="ivory" aria-labelledby="cerita-judul">
      <Container grid className="gap-y-14">
        <div className="col-span-full lg:col-span-7">
          <Heading level={2} id="cerita-judul">
            Mengenal {ulos.name}
          </Heading>
          <div className="mt-10 space-y-8">
            <div>
              <p className="prose-measure font-serif text-h3 text-(--fg)">{ulos.identity.text}</p>
              <SourceNote ids={ulos.identity.sourceIds} className="mt-3" />
            </div>
            {ulos.usage ? (
              <div className="border-l-2 border-gold pl-6">
                <p className="text-small font-semibold text-(--fg-muted)">Fungsi dan cara pakai</p>
                <p className="prose-measure mt-2 text-body text-(--fg)">{ulos.usage.text}</p>
                <SourceNote ids={ulos.usage.sourceIds} className="mt-3" />
              </div>
            ) : null}
          </div>
        </div>

        <nav aria-labelledby="sembilan-judul" className="col-span-full lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
            <h3 id="sembilan-judul" className="text-micro font-semibold uppercase text-(--label)">
              Sembilan informasi
            </h3>
            <p className="mt-3 font-serif text-h3 text-(--fg)">{available} dari 9 terdokumentasi</p>
            <ol className="mt-6">
              {details.map((detail, index) => (
                <li key={detail.key}>
                  <a
                    href={anchors[detail.key]}
                    className="group flex min-h-11 items-center gap-4 border-t border-(--rule) py-2 text-body text-(--fg) transition-colors duration-(--dur-micro) hover:text-ulos"
                  >
                    <span className="w-6 text-small tabular-nums text-(--fg-muted)">{index + 1}</span>
                    <span className="flex-1">{detail.label}</span>
                    <span className={detail.available ? "text-small text-(--fg)" : "text-small text-(--fg-muted)"}>
                      {detail.available ? "Ada" : "Belum tersedia"}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </Container>
    </Section>
  );
}
