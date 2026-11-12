import { ButtonLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

/** Not-found content for an unknown Detail Ulos slug (PRD H5). */
export function UlosNotFound() {
  return (
    <Section
      tone="obsidian"
      warp
      spacing="none"
      className="flex min-h-[70svh] flex-col justify-end pb-20 pt-[calc(var(--spacing-header)+5rem)]"
    >
      <Container grid className="gap-y-8">
        <Heading level={1} size="h1" className="col-span-full lg:col-span-8">
          Ulos tidak ditemukan
        </Heading>
        <div className="col-span-full space-y-8 md:col-span-4 lg:col-span-5 lg:col-start-8">
          <p className="text-lead text-(--fg-muted)">
            Koleksi yang Anda cari tidak tersedia di katalog. Jelajahi koleksi lain di Ulos Hita.
          </p>
          <ButtonLink href="/ulos-hita">Kembali ke Ulos Hita</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
