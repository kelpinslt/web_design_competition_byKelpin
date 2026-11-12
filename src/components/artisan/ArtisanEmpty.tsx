import { pageBackgrounds } from "@/data/page-backgrounds";
import { penenunCopy } from "@/data/penenun";
import { BackdropCredit, PageBackdrop } from "@/components/ui/PageBackdrop";
import { EmptyState } from "@/components/ui/EmptyState";
import { Container, Section } from "@/components/ui/Section";

/**
 * Penenun Hita hero while no verified artisan exists. No circles and no
 * pagination are drawn: they would imply real people (E4.A3, Bagian Q3).
 */
export function ArtisanEmpty() {
  return (
    <Section
      tone="obsidian"
      warp={!pageBackgrounds.penenunHita}
      spacing="none"
      aria-labelledby="penenun-hita-judul"
      className="flex min-h-svh flex-col justify-end pb-12 pt-[calc(var(--spacing-header)+4rem)] lg:pb-16"
    >
      <PageBackdrop media={pageBackgrounds.penenunHita} unveil />
      <Container grid className="gap-y-12">
        <div className="col-span-full lg:col-span-7">
          <h1 id="penenun-hita-judul" className="text-micro font-semibold uppercase text-gold">
            Penenun Hita
          </h1>
          <h2 className="mt-6 font-serif text-h1 text-ivory motion-safe:animate-rise">Manusia di balik Ulos</h2>
          <p className="prose-measure mt-6 text-lead text-(--fg-muted)">{penenunCopy.purpose}</p>
        </div>
        <EmptyState
          className="col-span-full lg:col-span-5 lg:col-start-8 lg:self-end"
          title="Profil penenun belum ditampilkan"
          description="Potret, nama, lokasi, kutipan, dan riwayat penenun tampil di sini setelah datanya dikonfirmasi dan izin publikasinya diperoleh."
        />
        <BackdropCredit
          media={pageBackgrounds.penenunHita}
          label="dokumentasi aktivitas menenun yang autentik dan berizin"
          className="col-span-full border-t border-(--rule) pt-4 lg:col-span-6"
        />
      </Container>
    </Section>
  );
}
