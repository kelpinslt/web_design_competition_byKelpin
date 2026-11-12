import type { Metadata } from "next";
import { ProcessScrolly } from "@/components/process/ProcessScrolly";
import { ButtonLink } from "@/components/ui/Links";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { SourceList, SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { durationExamples, processNote, processSteps, regionalSequences } from "@/data/process";

export const metadata: Metadata = {
  title: "Proses Menenun",
  description:
    "Delapan tahap menenun Ulos dari menyiapkan benang sampai merapikan rumbai, dengan alat, bahan, perbedaan praktik antardaerah, dan contoh lama pengerjaan.",
  openGraph: { images: [{ url: pageBackgrounds.prosesMenenun!.src, alt: pageBackgrounds.prosesMenenun!.alt }] },
};

/**
 * Proses Menenun (PRD V3.0 E6; v3 §7.8) — a dark, cinematic workshop story
 * from 05_PROSES_MENENUN.md. The Desa Meat sequence leads; other regions'
 * sequences follow so no single practice reads as the standard. Durations
 * are examples, never a norm.
 */
export default function ProsesMenenunPage() {
  const background = pageBackgrounds.prosesMenenun;
  const tools = [...new Set(processSteps.flatMap((step) => step.tools))];
  const materials = [...new Set(processSteps.flatMap((step) => step.materials))];
  const allSources = [
    ...processSteps.flatMap((step) => step.sourceIds),
    ...regionalSequences.flatMap((item) => item.sourceIds),
    ...durationExamples.flatMap((item) => item.sourceIds),
  ];

  return (
    <>
      <Section
        tone="obsidian"
        spacing="none"
        aria-labelledby="proses-judul"
        className="flex min-h-svh flex-col justify-end overflow-hidden pb-14 pt-[calc(var(--spacing-header)+3rem)]"
      >
        <PageBackdrop media={background} unveil />
        <Container grid className="gap-y-8">
          <p className="col-span-full text-micro font-semibold uppercase text-gold">Discover the craft</p>
          <h1 id="proses-judul" className="col-span-full font-serif text-display text-ivory motion-safe:animate-rise lg:col-span-8">
            Proses Menenun
          </h1>
          <div className="col-span-full md:col-span-4 lg:col-span-5 lg:col-start-8">
            <p className="prose-measure text-lead text-ivory">
              Dari benang yang dikanji sampai rumbai yang dipilin: delapan tahap yang menjadikan sehelai Ulos.
            </p>
            <p className="prose-measure mt-5 border-l-2 border-gold pl-4 text-small text-ivory">{processNote}</p>
          </div>
          <BackdropCredit media={background} label="foto latar" className="col-span-full border-t border-(--rule) pt-4" />
        </Container>
      </Section>

      <Section tone="obsidian" spacing="tight" aria-labelledby="tahap-judul" className="pt-0">
        <Container>
          <Heading level={2} id="tahap-judul" className="sr-only">
            Tahapan menenun versi Desa Meat
          </Heading>
          <ProcessScrolly steps={processSteps} />
        </Container>
      </Section>

      <Section tone="brown" warp aria-labelledby="alat-judul">
        <Container grid className="gap-y-12">
          <Heading level={2} id="alat-judul" className="col-span-full lg:col-span-5">
            Alat dan bahan yang disebut sumber
          </Heading>
          <div className="col-span-full md:col-span-3 lg:col-span-3 lg:col-start-7">
            <p className="text-micro font-semibold uppercase text-gold">Alat</p>
            <ul className="mt-4">
              {tools.map((tool) => (
                <li key={tool} className="border-t border-(--rule) py-3 font-serif text-h3 text-ivory">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-full md:col-span-3 lg:col-span-3 lg:col-start-10">
            <p className="text-micro font-semibold uppercase text-gold">Bahan</p>
            <ul className="mt-4">
              {materials.map((material) => (
                <li key={material} className="border-t border-(--rule) py-3 font-serif text-h3 text-ivory">
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" aria-labelledby="daerah-judul">
        <Container grid className="gap-y-10">
          <div className="col-span-full lg:col-span-4">
            <Heading level={2} id="daerah-judul">
              Lain daerah, lain urutan
            </Heading>
            <p className="prose-measure mt-6 text-body text-(--fg-muted)">
              Nama dan urutan tahap tercatat berbeda di setiap daerah. Tidak ada satu prosedur yang berlaku untuk semua
              penenun.
            </p>
          </div>
          <ol className="col-span-full lg:col-span-7 lg:col-start-6">
            {regionalSequences.map((sequence) => (
              <li key={sequence.region} className="border-t border-(--rule) py-6">
                <p className="font-serif text-h3 text-(--fg)">{sequence.region}</p>
                <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                  {sequence.steps.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-xs border border-(--rule) px-3 py-1 text-small italic text-(--fg)">{step}</span>
                      {index < sequence.steps.length - 1 ? (
                        <span aria-hidden="true" className="text-ulos">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
                <SourceNote ids={sequence.sourceIds} className="mt-3" />
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="obsidian" spacing="tight" aria-labelledby="durasi-judul">
        <Container grid className="gap-y-10">
          <div className="col-span-full lg:col-span-4">
            <Heading level={2} id="durasi-judul">
              Berapa lama?
            </Heading>
            <p className="prose-measure mt-6 text-body text-(--fg-muted)">
              Contoh yang terdokumentasi, bukan patokan. Lama pengerjaan bergantung pada kain, alat, jumlah warna, dan
              kerumitan motif.
            </p>
          </div>
          <dl className="col-span-full lg:col-span-7 lg:col-start-6">
            {durationExamples.map((item) => (
              <div key={item.example} className="grid gap-2 border-t border-(--rule) py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                <dt className="text-body text-ivory">
                  {item.example}
                  <SourceNote ids={item.sourceIds} className="mt-1" />
                </dt>
                <dd className="font-serif text-h3 text-gold sm:text-right">{item.duration}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="ivory" spacing="tight" aria-labelledby="proses-sumber-judul">
        <Container grid className="gap-y-10">
          <div className="col-span-full lg:col-span-4">
            <Heading level={2} id="proses-sumber-judul" size="h3">
              Sumber dokumentasi
            </Heading>
            <p className="prose-measure mt-4 text-body text-(--fg-muted)">
              Semua gambar tahapan adalah ilustrasi AI, bukan dokumentasi penenun tertentu. Ditelusuri pada 11 November 2026.
            </p>
            <ButtonLink href="/penenun-hita" className="mt-8">
              Kenali para penenun
            </ButtonLink>
          </div>
          <SourceList ids={allSources} heading="Daftar sumber" className="col-span-full lg:col-span-7 lg:col-start-6" />
        </Container>
      </Section>
    </>
  );
}
