import Link from "next/link";
import type { Artisan } from "@/types/content";
import { artisans } from "@/data/artisans";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink, TextLink } from "@/components/ui/Links";
import { creditLine, MediaFrame } from "@/components/ui/MediaFrame";
import { PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { SourceList } from "@/components/ui/SourceNote";
import { SwipeRail } from "@/components/ui/SwipeRail";
import { Heading, Prose } from "@/components/ui/Typography";
import { UlosTeaser } from "@/components/ulos/UlosTeaser";
import { artisanPath, getWeavingHouseBySlug, reportedAgeLabel, weavingHousePath } from "@/lib/artisans";
import { getUlosBySlugs } from "@/lib/ulos";

/**
 * Detail Penenun (/penenun-hita/[slug]) — PRD V3.0 E4.C, v3 §7.5.
 * Immersive editorial: portrait-led hero, opening narrative, learning and
 * inheritance, profile facts, a timeline only with real dates, the Ulos
 * types and house the sources link them to, then sources and the open
 * verification questions. No quote is shown without a source.
 */
export function ArtisanDetail({ artisan }: { artisan: Artisan }) {
  const index = artisans.findIndex((item) => item.slug === artisan.slug);
  const next = artisans[(index + 1) % artisans.length];
  const works = getUlosBySlugs(artisan.ulosSlugs);
  const house = getWeavingHouseBySlug(artisan.weavingHouseSlug);
  const age = reportedAgeLabel(artisan);

  const facts = [
    { label: "Asal", value: artisan.originFull },
    { label: "Spesialisasi", value: artisan.specialty },
    artisan.startedWeaving ? { label: "Mulai menenun", value: artisan.startedWeaving } : null,
    artisan.experience ? { label: "Pengalaman", value: artisan.experience } : null,
    age ? { label: "Usia pada sumber", value: age } : null,
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <>
      {/* 1. Hero */}
      <Section
        tone="obsidian"
        spacing="none"
        aria-labelledby="penenun-nama"
        className="overflow-hidden pb-section-tight pt-[calc(var(--spacing-header)+1.5rem)]"
      >
        <PageBackdrop media={pageBackgrounds.penenunHita} strength="stage" />
        <Container>
          <Breadcrumb items={[{ label: "Penenun Hita", href: "/penenun-hita" }, { label: artisan.name }]} />
        </Container>
        <Container grid className="mt-8 items-end gap-y-10">
          <div className="col-span-full md:col-span-3 md:col-start-4 lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <MediaFrame
              media={artisan.portrait}
              ratio="portrait"
              priority
              unveil
              sizes="(min-width: 1440px) 560px, (min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              pendingLabel="Foto belum dipasangkan. Foto yang tersedia belum dapat dipastikan sebagai foto penenun ini."
            />
          </div>
          <div className="col-span-full lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:pb-10">
            <p className="text-micro font-semibold uppercase text-gold motion-safe:animate-rise">Penenun Hita</p>
            <h1
              id="penenun-nama"
              className="mt-5 font-serif text-display text-ivory motion-safe:animate-rise motion-safe:[animation-delay:80ms]"
            >
              {artisan.name}
            </h1>
            <p className="mt-6 text-ui text-ivory">{artisan.origin}</p>
            <p className="prose-measure mt-8 text-lead text-ivory motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
              {artisan.introduction}
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Story and inheritance */}
      <Section tone="ivory" aria-labelledby="cerita-penenun-judul">
        <Container grid className="gap-y-12">
          <div className="col-span-full lg:col-span-5">
            <Heading level={2} id="cerita-penenun-judul">
              Cerita {artisan.name.split(" ")[0] === "Op" ? artisan.name : artisan.name.split(" ")[0]}
            </Heading>
            {artisan.learning ? (
              <p className="prose-measure mt-10 border-l-2 border-ulos pl-6 font-serif text-h3 text-(--fg)">
                {artisan.learning}
              </p>
            ) : null}
          </div>
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
            <Prose>
              {artisan.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>
            <dl className="mt-12 grid gap-x-(--gutter) gap-y-6 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-(--rule) pt-3">
                  <dt className="text-small font-semibold text-(--fg-muted)">{fact.label}</dt>
                  <dd className="mt-1 text-body text-(--fg)">{fact.value}</dd>
                </div>
              ))}
            </dl>
            {artisan.skills.length > 0 ? (
              <div className="mt-10">
                <p className="text-small font-semibold text-(--fg-muted)">Keahlian dan jenis kain</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {artisan.skills.map((skill) => (
                    <li key={skill} className="rounded-xs border border-(--rule) px-3 py-1.5 text-small text-(--fg)">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>

      {/* 3. Timeline, only with real chronology */}
      {artisan.timeline.length > 0 ? (
        <Section tone="brown" warp spacing="tight" aria-labelledby="perjalanan-judul">
          <Container grid className="gap-y-10">
            <Heading level={2} id="perjalanan-judul" className="col-span-full lg:col-span-4">
              Perjalanan
            </Heading>
            <ol className="col-span-full grid gap-(--gutter) md:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {artisan.timeline.map((entry) => (
                <li key={entry.period} className="border-t border-gold/60 pt-5">
                  <p className="font-serif text-h1 text-gold">{entry.period}</p>
                  <p className="mt-3 text-body text-ivory">{entry.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      ) : null}

      {/* 4. Ulos types and house the sources connect */}
      {works.length > 0 || house ? (
        <Section tone="obsidian" aria-labelledby="karya-judul">
          <Container grid className="gap-y-6">
            <Heading level={2} id="karya-judul" className="col-span-full lg:col-span-7">
              {works.length > 0 ? "Jenis Ulos yang ditenun" : "Rumah tenun"}
            </Heading>
            <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
              Hanya hubungan yang disebut sumber profil. Ini jenis Ulos, bukan kain tertentu buatan {artisan.name}.
            </p>
          </Container>
          {works.length > 0 ? (
            <Container className="mt-10">
              <SwipeRail label={`Jenis Ulos yang ditenun ${artisan.name}`}>
                {works.map((ulos) => (
                  <div key={ulos.slug} className="w-[70%] shrink-0 snap-start md:col-span-3 md:w-auto lg:col-span-4">
                    <UlosTeaser ulos={ulos} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 70vw" withTeaser />
                  </div>
                ))}
              </SwipeRail>
            </Container>
          ) : null}
          {house ? (
            <Container className="mt-14">
              <Link
                href={weavingHousePath(house)}
                className="group grid gap-6 border-t border-(--rule) pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
              >
                <span>
                  <span className="block text-micro font-semibold uppercase text-gold">Terhubung dengan rumah tenun</span>
                  <span className="thread mt-3 inline-block font-serif text-h2 text-ivory group-hover:bg-size-[100%_1px] group-focus-visible:bg-size-[100%_1px]">
                    {house.name}
                  </span>
                  <span className="mt-2 block text-body text-(--fg-muted)">{house.role}</span>
                </span>
                <span className="text-ui font-semibold text-ivory">Kenali rumah tenun ini</span>
              </Link>
            </Container>
          ) : null}
        </Section>
      ) : null}

      {/* 5. Sources, photo credit and open questions */}
      <Section tone="ivory" spacing="tight" aria-labelledby="sumber-penenun-judul">
        <Container grid className="gap-y-10">
          <div className="col-span-full lg:col-span-5">
            <Heading level={2} id="sumber-penenun-judul" size="h3">
              Sumber dan verifikasi
            </Heading>
            <p className="prose-measure mt-4 text-body text-(--fg-muted)">
              Profil disusun dari dokumentasi publik. Usia ditulis sesuai tanggal sumber, bukan usia saat ini.
              {artisan.portrait ? ` ${creditLine(artisan.portrait)}.` : null}
            </p>
            {artisan.verificationNotes.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {artisan.verificationNotes.map((note) => (
                  <li key={note} className="border-l-2 border-ulos pl-4 text-small text-(--fg)">
                    {note}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <SourceList ids={artisan.sourceIds} className="col-span-full lg:col-span-6 lg:col-start-7" />
        </Container>
      </Section>

      {/* 6. Next artisan */}
      <Section tone="obsidian" spacing="tight" aria-label="Penenun berikutnya">
        <Container grid className="items-end gap-y-6">
          <div className="col-span-full lg:col-span-8">
            <p className="text-micro font-semibold uppercase text-gold">Penenun berikutnya</p>
            <Link
              href={artisanPath(next)}
              className="thread mt-4 inline-block py-2 font-serif text-h1 text-ivory hover:bg-size-[100%_2px] focus-visible:bg-size-[100%_2px]"
            >
              {next.name}
            </Link>
            <p className="mt-2 text-body text-(--fg-muted)">{next.origin}</p>
          </div>
          <div className="col-span-full flex flex-wrap gap-6 lg:col-span-4 lg:justify-end">
            <TextLink href="/penenun-hita" className="inline-block bg-origin-content py-2.5">
              Semua penenun
            </TextLink>
            <ButtonLink href={artisanPath(next)} variant="outline">
              Lanjutkan
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
