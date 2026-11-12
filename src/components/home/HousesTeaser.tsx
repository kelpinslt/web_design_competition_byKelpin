import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/data/home";
import { weavingHouses } from "@/data/weaving-houses";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";
import { weavingHousePath } from "@/lib/artisans";

/**
 * Beranda 6 — Rumah Tenun & Galeri Ulos Pilihan (v3 §7.1). An index of the
 * three places: each row names the place, its role and region; the photo
 * reveals on hover or focus on desktop and sits inline on mobile.
 */
export function HousesTeaser() {
  const { heading, description } = homeCopy.houses;

  return (
    <Section tone="ivory" aria-labelledby="rumah-beranda-judul">
      <Container grid className="gap-y-6">
        <Heading level={2} id="rumah-beranda-judul" className="col-span-full lg:col-span-6">
          {heading}
        </Heading>
        <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
          {description}
        </p>
      </Container>

      <Container className="mt-14">
        <ul className="border-b border-(--rule)">
          {weavingHouses.map((house, index) => {
            const position = `${house.coverImage.focal?.x ?? 50}% ${house.coverImage.focal?.y ?? 50}%`;
            return (
              <Reveal as="li" key={house.slug} index={index}>
                <Link
                  href={weavingHousePath(house)}
                  className="group grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-5 border-t border-(--rule) py-6 md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_9rem] md:gap-(--gutter) lg:py-8"
                >
                  <span className="relative row-span-2 block aspect-square overflow-hidden rounded-xs bg-brown md:order-last md:row-span-1 md:aspect-[4/3] md:opacity-70 md:transition-opacity md:duration-(--dur-hover) md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                    <Image
                      src={house.coverImage.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 144px, 88px"
                      className="object-cover transition-transform duration-(--dur-section) ease-editorial group-hover:scale-105"
                      style={{ objectPosition: position }}
                    />
                  </span>
                  <span className="hidden font-serif text-h3 tabular-nums text-ulos md:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-serif text-h2 text-(--fg) transition-colors duration-(--dur-hover) group-hover:text-ulos">
                    {house.name}
                  </span>
                  <span className="block text-body text-(--fg-muted)">
                    {house.role}
                    <span className="mt-1 block text-small">{house.founded}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
        <TextLink href="/penenun-hita#rumah-judul" className="mt-8 inline-block bg-origin-content py-2.5">
          Lihat di Penenun Hita
        </TextLink>
      </Container>
    </Section>
  );
}
