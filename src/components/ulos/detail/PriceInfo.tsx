import type { PriceReference } from "@/types/content";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";

/**
 * Detail Ulos 8 — reference prices from dated public sources (v3 §0):
 * information with its context, never an offer. No buy, cart, checkout
 * or payment controls anywhere.
 */
export function PriceInfo({ prices, name }: { prices: PriceReference[]; name: string }) {
  return (
    <Section tone="ivory" spacing="tight" aria-labelledby="harga-judul">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id="harga-judul">
            Harga referensi
          </Heading>
          <p className="prose-measure mt-6 text-body font-medium text-ulos">
            Harga di bawah dicatat dari sumber publik pada tanggal yang tertera, bisa berubah, dan bukan penawaran.
            PARTONUN tidak melayani transaksi.
          </p>
        </div>
        <div className="col-span-full lg:col-span-7 lg:col-start-6">
          {prices.length > 0 ? (
            <ul className="space-y-8">
              {prices.map((price) => (
                <li key={price.amount + price.context} className="border-t border-(--rule) pt-5">
                  <p className="font-serif text-h2 text-(--fg)">{price.amount}</p>
                  <p className="prose-measure mt-3 text-body text-(--fg)">{price.context}</p>
                  <p className="mt-2 text-small text-(--fg-muted)">Tanggal sumber: {price.date}</p>
                  <SourceNote ids={price.sourceIds} className="mt-1" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="border-t border-(--rule) pt-5 text-body text-(--fg-muted)">
              Informasi belum tersedia. Harga untuk {name} akan dicantumkan bila ada sumber yang jelas tanggal,
              cakupan produk, dan pembuatnya.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
