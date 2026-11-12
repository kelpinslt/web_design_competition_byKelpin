import { artisans } from "@/data/artisans";
import { educationEntries } from "@/data/education";
import { homeCopy } from "@/data/home";
import { ownerPhotos } from "@/data/media";
import { weavingHouses } from "@/data/weaving-houses";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";
import { getCatalogUlos } from "@/lib/ulos";

/**
 * Beranda 2 — platform statement (07 §A2, mandatory) with the only figures
 * allowed: counts of what is actually published (07 §A6). No statistic is
 * shown without a source and a date.
 */
export function PlatformStatement() {
  const { statement, figures } = homeCopy;
  const counts = [
    { value: getCatalogUlos().length, label: "jenis Ulos terdokumentasi" },
    { value: artisans.length, label: "profil penenun dari sumber publik" },
    { value: weavingHouses.length, label: "rumah tenun & galeri pilihan" },
    // Seven topics plus the glossary (LEARN-008).
    { value: educationEntries.length + 1, label: "topik Belajar Ulos" },
  ];

  return (
    <Section tone="ivory" aria-labelledby="pernyataan-judul" className="overflow-hidden">
      <Container grid className="gap-y-12">
        <Reveal className="col-span-full md:col-span-3 lg:col-span-5 lg:-ml-margin">
          <MediaFrame
            media={ownerPhotos.ulosOnChair}
            ratio="tall"
            sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
          />
        </Reveal>

        <div className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-7 lg:pt-10">
          <Heading level={2} id="pernyataan-judul">
            {statement.heading}
          </Heading>
          <p className="prose-measure mt-8 font-serif text-h3 text-(--fg)">{statement.body}</p>
          <p className="prose-measure mt-8 border-l-2 border-ulos pl-5 text-body font-medium text-(--fg)">
            {statement.boundary}
          </p>

          <div className="mt-14">
            <p className="text-micro font-semibold uppercase text-(--label)">{figures.heading}</p>
            <dl className="mt-5 grid grid-cols-2 gap-x-(--gutter) gap-y-8">
              {counts.map((item) => (
                <div key={item.label} className="border-t border-(--rule) pt-4">
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span className="block font-serif text-h1 text-(--fg)">{item.value}</span>
                    <span className="mt-1 block text-small text-(--fg-muted)">{item.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
