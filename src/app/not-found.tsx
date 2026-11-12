import type { Metadata } from "next";
import { pageBackgrounds } from "@/data/page-backgrounds";
import { ButtonLink } from "@/components/ui/Links";
import { PageBackdrop } from "@/components/ui/PageBackdrop";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <Section
      tone="obsidian"
      warp={!pageBackgrounds.notFound}
      spacing="none"
      className="flex min-h-[80svh] flex-col justify-end pb-20 pt-[calc(var(--spacing-header)+5rem)]"
    >
      <PageBackdrop media={pageBackgrounds.notFound} />
      <Container grid className="gap-y-8">
        <Heading level={1} size="h1" className="col-span-full lg:col-span-8">
          Halaman tidak ditemukan
        </Heading>
        <div className="col-span-full space-y-8 md:col-span-4 lg:col-span-5 lg:col-start-8">
          <p className="text-lead text-(--fg-muted)">
            Alamat ini tidak tersedia, atau halamannya masih disiapkan. Semua halaman bisa dibuka
            dari menu di kanan atas.
          </p>
          <ButtonLink href="/">Kembali ke Beranda</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
