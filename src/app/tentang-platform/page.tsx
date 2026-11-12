import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Links";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { aboutCopy } from "@/data/about";
import { ownerPhotos } from "@/data/media";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Platform",
  description:
    "Latar belakang, tujuan, dan batasan PARTONUN: katalog, dokumentasi, dan edukasi Ulos Batak yang selaras dengan SDG 8 dan SDG 10. Bukan marketplace.",
  openGraph: { images: [{ url: pageBackgrounds.tentangPlatform!.src, alt: pageBackgrounds.tentangPlatform!.alt }] },
};

/**
 * Tentang Platform (PRD V3.0 E7; v3 §7.9) — copy from 07 §B. Factual and
 * restrained: every figure carries its source; no unmeasured impact.
 */
export default function TentangPlatformPage() {
  const { hero, background, why, goals, audiences, roles, economy, socio, boundary } = aboutCopy;
  const media = pageBackgrounds.tentangPlatform;

  return (
    <>
      <Section
        tone="obsidian"
        spacing="none"
        aria-labelledby="tentang-judul"
        className="flex min-h-[86svh] flex-col justify-end overflow-hidden pb-14 pt-[calc(var(--spacing-header)+3rem)]"
      >
        <PageBackdrop media={media} unveil />
        <Container grid className="gap-y-8">
          <p className="col-span-full text-micro font-semibold uppercase text-gold">Platform</p>
          <h1 id="tentang-judul" className="col-span-full font-serif text-display text-ivory motion-safe:animate-rise lg:col-span-9">
            {hero.heading}
          </h1>
          <p className="prose-measure col-span-full text-lead text-ivory md:col-span-4 lg:col-span-5 lg:col-start-8">{hero.lead}</p>
          <BackdropCredit media={media} label="foto latar" className="col-span-full border-t border-(--rule) pt-4" />
        </Container>
      </Section>

      {/* B1 Background */}
      <Section tone="ivory" aria-labelledby="latar-judul">
        <Container grid className="gap-y-12">
          <div className="col-span-full lg:col-span-5">
            <Heading level={2} id="latar-judul">
              {background.heading}
            </Heading>
            <p className="prose-measure mt-8 font-serif text-h3 text-(--fg)">{background.intro.text}</p>
            <SourceNote ids={background.intro.sourceIds} className="mt-3" />
          </div>
          <ol className="col-span-full grid gap-x-(--gutter) gap-y-10 md:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {background.pressures.map((item, index) => (
              <Reveal as="li" key={item.headline} index={index % 2} className={index % 2 === 1 ? "md:mt-16" : undefined}>
                <div className="border-t-2 border-ulos pt-5">
                  <h3 className="font-serif text-h3 text-(--fg)">{item.headline}</h3>
                  <p className="mt-3 text-body text-(--fg)">{item.text}</p>
                  <SourceNote ids={item.sourceIds} className="mt-3" />
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* B2 Why digital documentation */}
      <Section tone="obsidian" warp aria-labelledby="mengapa-judul">
        <Container grid className="items-center gap-y-12">
          <div className="col-span-full md:col-span-3 lg:col-span-5">
            <MediaFrame media={ownerPhotos.ulosHanging} ratio="tall" sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-7">
            <Heading level={2} id="mengapa-judul">
              {why.heading}
            </Heading>
            <ul className="mt-10 space-y-8">
              {why.items.map((item) => (
                <li key={item.text} className="border-l-2 border-gold pl-6">
                  <p className="prose-measure text-lead text-ivory">{item.text}</p>
                  <SourceNote ids={item.sourceIds} className="mt-2" />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* B3 Goals and B4 audiences */}
      <Section tone="brown" aria-labelledby="tujuan-judul">
        <Container grid className="gap-y-12">
          <Heading level={2} id="tujuan-judul" className="col-span-full lg:col-span-6">
            {goals.heading}
          </Heading>
          <ol className="col-span-full grid gap-x-(--gutter) gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {goals.items.map((goal, index) => (
              <li key={goal} className="border-t border-gold/60 pt-5">
                <p className="font-serif text-h1 text-gold tabular-nums">{index + 1}</p>
                <p className="mt-4 text-body text-ivory">{goal}</p>
              </li>
            ))}
          </ol>

          <div className="col-span-full mt-8 lg:col-span-4">
            <h3 className="font-serif text-h2 text-ivory">{audiences.heading}</h3>
          </div>
          <dl className="col-span-full lg:col-span-7 lg:col-start-6">
            {audiences.items.map((item) => (
              <div key={item.who} className="grid gap-2 border-t border-(--rule) py-5 md:grid-cols-2 md:gap-(--gutter)">
                <dt className="font-serif text-h3 text-ivory">{item.who}</dt>
                <dd className="text-body text-(--fg-muted)">{item.need}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* How each part helps */}
      <Section tone="ivory" spacing="tight" aria-labelledby="peran-judul">
        <Container grid className="gap-y-10">
          <Heading level={2} id="peran-judul" className="col-span-full lg:col-span-6">
            {roles.heading}
          </Heading>
          <ul className="col-span-full grid gap-x-(--gutter) md:grid-cols-2">
            {roles.items.map((role) => (
              <li key={role.title}>
                <Link href={role.href} className="group flex h-full flex-col border-t border-(--rule) py-6">
                  <span className="thread self-start font-serif text-h3 text-(--fg) group-hover:bg-size-[100%_1px] group-focus-visible:bg-size-[100%_1px]">
                    {role.title}
                  </span>
                  <span className="prose-measure mt-3 text-body text-(--fg-muted)">{role.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* B5 & B6 */}
      <Section tone="obsidian" aria-labelledby="ekonomi-judul" className="overflow-hidden">
        <Container grid className="gap-y-12">
          <div className="col-span-full lg:col-span-6">
            <Heading level={2} id="ekonomi-judul">
              {economy.heading}
            </Heading>
            <p className="prose-measure mt-8 text-lead text-ivory">{economy.body}</p>
          </div>
          <div className="col-span-full lg:col-span-5 lg:col-start-8">
            <h2 className="font-serif text-h2 text-ivory">{socio.heading}</h2>
            <p className="prose-measure mt-8 text-body text-ivory">{socio.body}</p>
          </div>
          <div className="col-span-full grid gap-x-(--gutter) gap-y-8 md:grid-cols-2">
            {socio.sdg.map((goal) => (
              <div key={goal.code} className="border-t-2 border-gold pt-6">
                <p className="font-serif text-display text-gold">{goal.code}</p>
                <p className="mt-4 font-serif text-h3 text-ivory">{goal.title}</p>
                <p className="prose-measure mt-3 text-body text-(--fg-muted)">{goal.text}</p>
              </div>
            ))}
          </div>
          <div className="col-span-full lg:col-span-6">
            <SourceNote ids={socio.sources} label="Keterkaitan SDG mengacu pada" />
          </div>
        </Container>
      </Section>

      {/* B8 Boundary */}
      <Section tone="brown" warp spacing="tight" aria-labelledby="batasan-judul">
        <Container grid className="items-end gap-y-10">
          <div className="col-span-full lg:col-span-7">
            <Heading level={2} id="batasan-judul">
              {boundary.heading}
            </Heading>
            <p className="prose-measure mt-8 text-lead text-ivory">{boundary.body}</p>
            <p className="mt-6 text-small text-(--fg-muted)">
              Karya untuk {site.competition}. Topik: {site.topic}.
            </p>
          </div>
          <div className="col-span-full flex flex-col items-start gap-4 sm:flex-row lg:col-span-4 lg:col-start-9 lg:flex-col">
            <ButtonLink href="/ulos-hita">Jelajahi Ulos Hita</ButtonLink>
            <ButtonLink href="/penenun-hita" variant="outline">
              Kenali Penenun Hita
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
