import type { Ulos } from "@/types/content";
import { UlosTeaser } from "@/components/ulos/UlosTeaser";
import { TextLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { SwipeRail } from "@/components/ui/SwipeRail";
import { Heading } from "@/components/ui/Typography";

/** Detail Ulos 9 — continue to the next types in the catalogue. */
export function RelatedUlos({ items }: { items: Ulos[] }) {
  if (items.length === 0) return null;

  return (
    <Section tone="obsidian" spacing="tight" aria-labelledby="terkait-judul">
      <Container grid className="items-end gap-y-6">
        <Heading level={2} id="terkait-judul" className="col-span-full lg:col-span-7">
          Jelajahi jenis Ulos lainnya
        </Heading>
        <div className="col-span-full lg:col-span-4 lg:col-start-9 lg:justify-self-end">
          <TextLink href="/ulos-hita" className="inline-block bg-origin-content py-2.5">
            Kembali ke Ulos Hita
          </TextLink>
        </div>
      </Container>
      <Container className="mt-10">
        <SwipeRail label="Jenis Ulos lainnya">
          {items.map((ulos) => (
            <div key={ulos.slug} className="w-[70%] shrink-0 snap-start md:col-span-2 md:w-auto lg:col-span-4">
              <UlosTeaser ulos={ulos} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 30vw, 70vw" />
            </div>
          ))}
        </SwipeRail>
      </Container>
    </Section>
  );
}
