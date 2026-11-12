import type { Metadata } from "next";
import { TopicArticle } from "@/components/learning/TopicArticle";
import { TopicNav } from "@/components/learning/TopicNav";
import { ButtonLink } from "@/components/ui/Links";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { SourceList, SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { educationEntries, educationScopeNote, glossary, glossaryNote } from "@/data/education";
import { pageBackgrounds } from "@/data/page-backgrounds";

export const metadata: Metadata = {
  title: "Belajar Ulos",
  description:
    "Materi edukasi tentang Ulos Batak: apa itu Ulos, mangulosi dan Dalihan Na Tolu, cara memakai, bahasa warna, pewarna alami, gedogan dan ATBM, mengenali tenun tangan, dan glosarium.",
  openGraph: { images: [{ url: pageBackgrounds.belajarUlos!.src, alt: pageBackgrounds.belajarUlos!.alt }] },
};

/**
 * Belajar Ulos (PRD V3.0 E5; v3 §7.7) — an editorial learning library from
 * 04_BELAJAR_ULOS.md: title and summary, textile imagery, in-page topic
 * navigation, short staged narrative, glossary, sources at the foot.
 * No quizzes or gamification.
 */
export default function BelajarUlosPage() {
  const background = pageBackgrounds.belajarUlos;
  const topics = [
    ...educationEntries.map((entry) => ({ id: entry.slug, label: entry.title })),
    { id: "glosarium", label: "Glosarium" },
  ];
  const allSources = [
    ...educationEntries.flatMap((entry) =>
      entry.blocks.flatMap((block) => (block.type === "points" ? block.items.flatMap((item) => item.sourceIds) : block.rows.flatMap((row) => row.sourceIds))),
    ),
    ...glossary.flatMap((item) => item.sourceIds),
  ];

  return (
    <>
      <Section
        tone="obsidian"
        spacing="none"
        aria-labelledby="belajar-judul"
        className="flex min-h-[78svh] flex-col justify-end overflow-hidden pb-14 pt-[calc(var(--spacing-header)+3rem)]"
      >
        <PageBackdrop media={background} unveil />
        <Container grid className="gap-y-8">
          <p className="col-span-full text-micro font-semibold uppercase text-gold">Discover the craft</p>
          <h1 id="belajar-judul" className="col-span-full font-serif text-display text-ivory motion-safe:animate-rise lg:col-span-8">
            Belajar Ulos
          </h1>
          <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-8">
            <p className="prose-measure text-lead text-ivory">
              Kenali kain, maknanya, dan cara masyarakat Batak memakainya, dalam delapan topik yang disusun dari jurnal,
              museum, dan sumber pemerintah.
            </p>
            <p className="prose-measure mt-5 text-small text-ivory-muted">{educationScopeNote}</p>
          </div>
          <BackdropCredit media={background} label="foto latar" className="col-span-full border-t border-(--rule) pt-4" />
        </Container>
      </Section>

      <Section tone="obsidian" spacing="tight" aria-label="Materi Belajar Ulos" className="pt-0 lg:pt-section-tight">
        <Container grid className="gap-y-10">
          <aside className="sticky top-header z-10 col-span-full -mx-margin bg-obsidian/95 px-margin py-3 lg:static lg:col-span-3 lg:mx-0 lg:bg-transparent lg:p-0">
            <div className="lg:sticky lg:top-[calc(var(--spacing-header)+2rem)]">
              <p className="mb-4 hidden text-micro font-semibold uppercase text-gold lg:block">Daftar topik</p>
              <TopicNav topics={topics} label="Daftar topik Belajar Ulos" />
            </div>
          </aside>

          <div className="col-span-full space-y-16 lg:col-span-8 lg:col-start-5">
            {educationEntries.map((entry, index) => (
              <TopicArticle key={entry.slug} entry={entry} index={index} />
            ))}

            <section id="glosarium" aria-labelledby="glosarium-judul" className="scroll-mt-[calc(var(--spacing-header)+5rem)] border-t border-(--rule) pt-12 lg:pt-16">
              <p className="font-serif text-h3 text-gold tabular-nums">{String(educationEntries.length + 1).padStart(2, "0")}</p>
              <Heading level={2} id="glosarium-judul" className="mt-3">
                Glosarium
              </Heading>
              <p className="mt-4 text-small text-(--fg-muted)">{glossaryNote}</p>
              <dl className="mt-10 grid gap-x-(--gutter) md:grid-cols-2">
                {glossary.map((item) => (
                  <div key={item.term} className="border-t border-(--rule) py-5">
                    <dt className="font-serif text-h3 italic text-ivory">{item.term}</dt>
                    <dd className="mt-2 text-body text-(--fg-muted)">
                      {item.meaning}
                      <SourceNote ids={item.sourceIds} className="mt-2" />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" spacing="tight" aria-labelledby="belajar-sumber-judul">
        <Container grid className="gap-y-10">
          <div className="col-span-full lg:col-span-4">
            <Heading level={2} id="belajar-sumber-judul" size="h3">
              Sumber materi
            </Heading>
            <p className="prose-measure mt-4 text-body text-(--fg-muted)">
              Ditelusuri pada 11 November 2026. Setiap poin di atas menyebut sumbernya.
            </p>
            <ButtonLink href="/proses-menenun" className="mt-8">
              Lanjut ke Proses Menenun
            </ButtonLink>
          </div>
          <SourceList ids={allSources} heading="Daftar sumber" className="col-span-full lg:col-span-7 lg:col-start-6" />
        </Container>
      </Section>
    </>
  );
}
