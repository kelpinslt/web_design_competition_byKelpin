import type { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Section";

/**
 * Simple legal page (Master Execution Prompt v3 §8). States only what is
 * true of the site today; marked as a draft for the owner to review. No
 * detailed legal policy is invented.
 */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Section tone="obsidian" warp spacing="none" aria-labelledby="legal-judul" className="pb-section pt-[calc(var(--spacing-header)+4rem)]">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-4">
          <h1 id="legal-judul" className="font-serif text-h1 text-ivory">
            {title}
          </h1>
          <p className="mt-6 rounded-xs border border-gold/60 p-4 text-small text-ivory">
            Draf sederhana untuk ditinjau pemilik proyek. Belum merupakan dokumen hukum final.
          </p>
        </div>
        <div className="prose-measure col-span-full space-y-6 text-body text-ivory lg:col-span-7 lg:col-start-6 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-h3 [&_h2]:text-ivory [&_p]:text-(--fg-muted)">
          {children}
        </div>
      </Container>
    </Section>
  );
}
