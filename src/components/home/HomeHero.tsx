import { homeCopy } from "@/data/home";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { ButtonLink } from "@/components/ui/Links";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";

/**
 * Beranda 1 — cinematic hero (v3 §7.1): full-bleed photograph with space
 * for type on the left, eyebrow, short editorial headline, one-sentence
 * description, two CTAs. The photo unveils, then the copy rises.
 */
export function HomeHero() {
  const media = pageBackgrounds.beranda;
  const { eyebrow, headline, description } = homeCopy.hero;

  return (
    <Section
      tone="obsidian"
      spacing="none"
      aria-labelledby="beranda-judul"
      className="flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-[calc(var(--spacing-header)+3rem)] lg:pb-14"
    >
      <PageBackdrop media={media} unveil />

      <Container grid className="gap-y-8 lg:gap-y-10">
        <p className="col-span-full text-micro font-semibold uppercase text-gold motion-safe:animate-rise">{eyebrow}</p>
        <h1
          id="beranda-judul"
          className="col-span-full font-serif text-display text-ivory motion-safe:animate-rise motion-safe:[animation-delay:80ms] md:col-span-6 lg:col-span-10"
        >
          {headline}
        </h1>

        <div className="col-span-full space-y-8 motion-safe:animate-rise motion-safe:[animation-delay:200ms] md:col-span-4 lg:col-span-5">
          <p className="prose-measure text-lead text-ivory">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/ulos-hita">Jelajahi Ulos</ButtonLink>
            <ButtonLink href="/penenun-hita" variant="outline">
              Kenali Penenun
            </ButtonLink>
          </div>
        </div>

        <BackdropCredit
          media={media}
          label="foto latar"
          className="col-span-full border-t border-(--rule) pt-4 lg:col-span-4 lg:col-start-9 lg:self-end lg:text-right"
        />
      </Container>
    </Section>
  );
}
