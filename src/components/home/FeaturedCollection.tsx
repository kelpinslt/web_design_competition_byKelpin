import { homeCopy } from "@/data/home";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { SwipeRail } from "@/components/ui/SwipeRail";
import { Heading } from "@/components/ui/Typography";
import { UlosTeaser } from "@/components/ulos/UlosTeaser";
import { cn } from "@/lib/cn";
import { getCatalogUlos } from "@/lib/ulos";

/**
 * Beranda 4 — Koleksi Ulos pilihan (07 §A5: Ragidup, Ragi Hotang, Sibolang,
 * Sadum, the four with the most complete data). Stepped at different
 * heights: an editorial preview, not a product grid. No prices.
 */
const sizes = "(min-width: 1024px) 22vw, (min-width: 768px) 46vw, 78vw";
const positions = [
  { ratio: "portrait" as const, className: "md:col-span-3 lg:col-span-3", sizes },
  { ratio: "tall" as const, className: "md:col-span-3 lg:col-span-3 lg:mt-24", sizes },
  { ratio: "portrait" as const, className: "md:col-span-3 lg:col-span-3 lg:mt-8", sizes },
  { ratio: "tall" as const, className: "md:col-span-3 lg:col-span-3 lg:mt-36", sizes },
];

export function FeaturedCollection() {
  const featured = getCatalogUlos().filter((ulos) => ulos.featured).slice(0, positions.length);
  const { heading, description } = homeCopy.collection;

  return (
    <Section tone="brown" aria-labelledby="koleksi-judul">
      <Container grid className="gap-y-6">
        <Heading level={2} id="koleksi-judul" className="col-span-full lg:col-span-6">
          {heading}
        </Heading>
        <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
          {description}
        </p>
      </Container>

      <Container className="mt-14">
        <SwipeRail label={heading}>
          {featured.map((ulos, index) => (
            <Reveal key={ulos.slug} index={index} className={cn("w-[78%] shrink-0 snap-start md:w-auto", positions[index].className)}>
              <UlosTeaser ulos={ulos} ratio={positions[index].ratio} sizes={positions[index].sizes} withTeaser />
            </Reveal>
          ))}
        </SwipeRail>
      </Container>

      <Container className="mt-12 flex lg:justify-end">
        <ButtonLink href="/ulos-hita" variant="outline">
          Jelajahi sepuluh jenis di Ulos Hita
        </ButtonLink>
      </Container>
    </Section>
  );
}
