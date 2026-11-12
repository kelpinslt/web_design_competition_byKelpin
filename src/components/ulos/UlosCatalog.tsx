import type { Ulos } from "@/types/content";
import { FloatingCarousel } from "./FloatingCarousel";

/**
 * The editorial catalogue rail. No filter: the ten types have ten
 * different categories in the master data, so a filter would not help
 * anyone find anything (v3 §7.2, "filter hanya jika berguna").
 */
export function UlosCatalog({ items }: { items: Ulos[] }) {
  return <FloatingCarousel items={items} />;
}
