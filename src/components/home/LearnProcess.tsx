import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/data/home";
import { illustrations } from "@/data/media";
import type { MediaAsset } from "@/types/content";
import { IllustrationTag } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

const doors: { href: string; label: string; title: string; text: string; media: MediaAsset }[] = [
  {
    href: "/belajar-ulos",
    label: "Discover the craft",
    title: "Belajar Ulos",
    text: "Apa itu Ulos, mangulosi dan Dalihan Na Tolu, cara memakai, bahasa warna, pewarna alami, gedogan dan ATBM, serta glosarium.",
    media: illustrations.learnHero,
  },
  {
    href: "/proses-menenun",
    label: "Discover the craft",
    title: "Proses Menenun",
    text: "Delapan tahap dari menyiapkan benang sampai merapikan rumbai, dengan perbedaan praktik antardaerah.",
    media: illustrations.processMartonun,
  },
];

/**
 * Beranda 7 — doors to Belajar Ulos and Proses Menenun (v3 §7.1): two large
 * image panels whose photo deepens and whose title draws a thread on hover.
 */
export function LearnProcess() {
  const { heading, description } = homeCopy.learn;

  return (
    <Section tone="obsidian" aria-labelledby="belajar-beranda-judul">
      <Container grid className="gap-y-6">
        <Heading level={2} id="belajar-beranda-judul" className="col-span-full lg:col-span-7">
          {heading}
        </Heading>
        <p className="col-span-full text-body text-(--fg-muted) md:col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
          {description}
        </p>
      </Container>

      <Container grid className="mt-14 gap-y-(--gutter)">
        {doors.map((door, index) => (
          <Link
            key={door.href}
            href={door.href}
            className={
              index === 0
                ? "group relative col-span-full block overflow-hidden rounded-xs md:col-span-3 lg:col-span-7"
                : "group relative col-span-full block overflow-hidden rounded-xs md:col-span-3 lg:col-span-5 lg:mt-24"
            }
          >
            <span className="relative block aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3]">
              <Image
                src={door.media.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                style={{ objectPosition: `${door.media.focal?.x ?? 50}% ${door.media.focal?.y ?? 50}%` }}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/45 to-obsidian/10 transition-opacity duration-(--dur-section) group-hover:opacity-90" />
              <IllustrationTag className="absolute left-4 top-4" />
            </span>
            <span className="absolute inset-x-0 bottom-0 block p-6 md:p-8">
              <span className="block text-micro font-semibold uppercase text-gold">{door.label}</span>
              <span className="thread mt-3 inline-block font-serif text-h2 text-ivory group-hover:bg-size-[100%_1px] group-focus-visible:bg-size-[100%_1px]">
                {door.title}
              </span>
              <span className="prose-measure mt-3 block text-body text-ivory">{door.text}</span>
            </span>
          </Link>
        ))}
      </Container>
    </Section>
  );
}
