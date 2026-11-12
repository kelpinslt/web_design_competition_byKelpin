import Image from "next/image";
import Link from "next/link";
import type { Fact, HouseContact, HouseLocation, WeavingHouse } from "@/types/content";
import { weavingHouses } from "@/data/weaving-houses";
import { PortraitCircle } from "@/components/artisan/PortraitCircle";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FactTags } from "@/components/ui/FactBlock";
import { ButtonLink, TextLink } from "@/components/ui/Links";
import { creditLine, MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { SourceList, SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";
import { UlosTeaser } from "@/components/ulos/UlosTeaser";
import { artisanPath, getArtisansBySlugs, weavingHousePath } from "@/lib/artisans";
import { cn } from "@/lib/cn";
import { getUlosBySlugs } from "@/lib/ulos";

/**
 * Detail Rumah Tenun (/rumah-tenun/[slug]) — PRD V3.0 E4.D, v3 §7.6.
 * One design system, three characters: each house has its own hero and
 * section emphasis that follows what its sources actually document.
 */

const crumbs = (house: WeavingHouse) => [
  { label: "Penenun Hita", href: "/penenun-hita" },
  { label: "Rumah Tenun & Galeri", href: "/penenun-hita#rumah-judul" },
  { label: house.name },
];

/* --- Heroes ----------------------------------------------------------------- */

/** Dame Ulos: ivory, a tall portrait photograph beside the name. */
function PortraitHero({ house }: { house: WeavingHouse }) {
  return (
    <Section tone="ivory" spacing="none" aria-labelledby="rumah-nama" className="pb-section-tight pt-[calc(var(--spacing-header)+1.5rem)]">
      <Container>
        <Breadcrumb items={crumbs(house)} />
      </Container>
      <Container grid className="mt-8 items-end gap-y-10">
        <div className="col-span-full md:col-span-3 lg:col-span-4">
          <MediaFrame media={house.coverImage} ratio="portrait" priority unveil sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="col-span-full md:col-span-3 lg:col-span-7 lg:col-start-6 lg:pb-12">
          <p className="text-micro font-semibold uppercase text-ulos">{house.founded}</p>
          <h1 id="rumah-nama" className="mt-5 font-serif text-display text-(--fg) motion-safe:animate-rise">
            {house.name}
          </h1>
          <p className="mt-6 text-ui text-(--fg-muted)">{house.role}</p>
          <p className="prose-measure mt-8 text-lead text-(--fg)">{house.intro}</p>
        </div>
      </Container>
    </Section>
  );
}

/** Galeri Ulos Sianipar: dark, the name overlapping a tall photograph. */
function OverlapHero({ house }: { house: WeavingHouse }) {
  const position = `${house.coverImage.focal?.x ?? 50}% ${house.coverImage.focal?.y ?? 50}%`;
  return (
    <Section tone="brown" spacing="none" aria-labelledby="rumah-nama" className="overflow-hidden pb-section-tight pt-[calc(var(--spacing-header)+1.5rem)]">
      <Container>
        <Breadcrumb items={crumbs(house)} />
      </Container>
      <Container grid className="relative mt-8 gap-y-8">
        <figure className="col-span-full md:col-span-4 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xs motion-safe:animate-unveil">
            <Image src={house.coverImage.src} alt={house.coverImage.alt} fill priority sizes="(min-width: 1024px) 40vw, (min-width: 768px) 66vw, 100vw" className="object-cover" style={{ objectPosition: position }} />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-brown/70 to-transparent lg:from-brown/80" />
          </div>
          <figcaption className="mt-3 text-small text-(--fg-muted)">{creditLine(house.coverImage)}</figcaption>
        </figure>
        <div className="col-span-full lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:self-center">
          <p className="text-micro font-semibold uppercase text-gold">{house.region}</p>
          <h1 id="rumah-nama" className="relative mt-5 font-serif text-display text-ivory motion-safe:animate-rise">
            {house.name}
          </h1>
          <p className="mt-6 text-ui text-ivory">{house.role}</p>
          <p className="prose-measure mt-8 text-lead text-ivory lg:max-w-[30rem]">{house.intro}</p>
        </div>
      </Container>
    </Section>
  );
}

/** Tobatenun: dark, a landscape photograph with the ecosystem named beneath. */
function EcosystemHero({ house }: { house: WeavingHouse }) {
  return (
    <Section tone="obsidian" warp spacing="none" aria-labelledby="rumah-nama" className="pb-section-tight pt-[calc(var(--spacing-header)+1.5rem)]">
      <Container>
        <Breadcrumb items={crumbs(house)} />
      </Container>
      <Container grid className="mt-8 gap-y-10">
        <div className="col-span-full lg:col-span-5">
          <p className="text-micro font-semibold uppercase text-gold">{house.founded}</p>
          <h1 id="rumah-nama" className="mt-5 font-serif text-h1 text-ivory motion-safe:animate-rise">
            {house.name}
          </h1>
          {house.legalName ? <p className="mt-3 text-small text-(--fg-muted)">{house.legalName}</p> : null}
          <p className="mt-6 text-ui text-ivory">{house.role}</p>
        </div>
        <div className="col-span-full lg:col-span-7">
          <MediaFrame media={house.coverImage} ratio="landscape" priority unveil sizes="(min-width: 1440px) 760px, (min-width: 1024px) 56vw, 100vw" />
        </div>
        <p className="prose-measure col-span-full text-lead text-ivory lg:col-span-7 lg:col-start-6">{house.intro}</p>
      </Container>
    </Section>
  );
}

/* --- Shared sections -------------------------------------------------------- */

function StorySection({ house, tone }: { house: WeavingHouse; tone: "obsidian" | "ivory" | "brown" }) {
  return (
    <Section tone={tone} aria-labelledby="perjalanan-rumah-judul">
      <Container grid className="gap-y-12">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id="perjalanan-rumah-judul">
            Cerita dan perjalanan
          </Heading>
          {house.people.length > 0 ? (
            <dl className="mt-8 space-y-4">
              {house.people.map((person) => (
                <div key={person.name} className="border-t border-(--rule) pt-3">
                  <dt className="text-small text-(--fg-muted)">{person.role}</dt>
                  <dd className="mt-1 font-serif text-h3 text-(--fg)">{person.name}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <ol className="col-span-full lg:col-span-7 lg:col-start-6">
          {house.story.map((fact) => (
            <li key={fact.text} className="grid gap-x-(--gutter) gap-y-2 border-t border-(--rule) py-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
              <span className="font-serif text-h3 text-(--label)">{fact.headline ?? "·"}</span>
              <div>
                <p className="prose-measure text-body text-(--fg)">{fact.text}</p>
                <SourceNote ids={fact.sourceIds} className="mt-2" />
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function FactColumns({ heading, id, facts, tone, intro }: { heading: string; id: string; facts: Fact[]; tone: "obsidian" | "ivory" | "brown"; intro?: string }) {
  if (facts.length === 0) return null;
  return (
    <Section tone={tone} spacing="tight" aria-labelledby={id}>
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id={id}>
            {heading}
          </Heading>
          {intro ? <p className="prose-measure mt-6 text-body text-(--fg-muted)">{intro}</p> : null}
        </div>
        <div className={cn("col-span-full grid gap-x-(--gutter) gap-y-10 lg:col-span-7 lg:col-start-6", facts.length > 1 && "md:grid-cols-2")}>
          {facts.map((fact) => (
            <div key={fact.text} className="border-t border-gold/60 pt-5">
              {fact.headline ? <p className="font-serif text-h2 text-(--fg)">{fact.headline}</p> : null}
              <p className={cn("text-body", fact.headline ? "mt-3 text-(--fg-muted)" : "text-(--fg)")}>{fact.text}</p>
              <FactTags fact={fact} className="mt-3" />
              <SourceNote ids={fact.sourceIds} className="mt-3" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

const kindLabel: Record<HouseLocation["kind"], string> = {
  galeri: "Galeri",
  "rumah tenun": "Rumah tenun",
  studio: "Studio",
  "rumah komunitas": "Rumah komunitas",
  "rumah pewarnaan": "Rumah pewarnaan",
  gerai: "Gerai",
};

/** Tobatenun: places grouped by where they are, so the Jakarta studio is never read as a production house. */
function EcosystemMap({ house }: { house: WeavingHouse }) {
  const north = house.locations.filter((location) => ["rumah komunitas", "rumah pewarnaan"].includes(location.kind));
  const jakarta = house.locations.filter((location) => ["studio", "gerai"].includes(location.kind));
  const groups = [
    { title: "Sumatera Utara", note: "Tempat mitra penenun bekerja dan kain diwarnai.", items: north },
    { title: "Jakarta", note: "Studio dan gerai penjualan, bukan tempat produksi.", items: jakarta },
  ];
  return (
    <Section tone="brown" aria-labelledby="ekosistem-judul">
      <Container grid className="gap-y-10">
        <Heading level={2} id="ekosistem-judul" className="col-span-full lg:col-span-6">
          Ekosistem dan lokasi
        </Heading>
        <p className="col-span-full text-body text-(--fg-muted) lg:col-span-4 lg:col-start-9 lg:self-end">
          Setiap tempat punya peran sendiri. Alamatnya tidak digabung menjadi satu.
        </p>
        {groups.map((group) => (
          <div key={group.title} className="col-span-full md:col-span-3 lg:col-span-6">
            <p className="font-serif text-h2 text-gold">{group.title}</p>
            <p className="mt-2 text-small text-(--fg-muted)">{group.note}</p>
            <ul className="mt-6">
              {group.items.map((location) => (
                <li key={location.name} className="border-t border-(--rule) py-4">
                  <span className="block text-micro font-semibold uppercase text-(--fg-muted)">{kindLabel[location.kind]}</span>
                  <span className="mt-1 block font-serif text-h3 text-ivory">{location.name}</span>
                  {location.address ? <span className="mt-1 block text-body text-ivory">{location.address}</span> : null}
                  {location.note ? <span className="mt-1 block text-small text-(--fg-muted)">{location.note}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </Section>
  );
}

/** Galeri Ulos Sianipar: ATBM for ulos and gedogan for songket, side by side and never merged. */
function TechniqueSplit({ house }: { house: WeavingHouse }) {
  const [first, second, ...notes] = house.techniques;
  return (
    <Section tone="ivory" aria-labelledby="teknik-judul">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-5">
          <Heading level={2} id="teknik-judul">
            Dua alat, dua jenis kain
          </Heading>
          <p className="prose-measure mt-6 text-body text-(--fg-muted)">
            ATBM dan gedogan adalah alat yang berbeda. Di galeri ini keduanya dipakai untuk kain yang berbeda pula.
          </p>
        </div>
        <div className="col-span-full grid md:grid-cols-2 lg:col-span-12">
          {[first, second].filter(Boolean).map((fact, index) => (
            <div key={fact.text} className={cn("border-t-2 pt-6 md:px-8", index === 0 ? "border-ulos md:pl-0" : "border-charcoal md:border-l md:border-l-(--rule) md:pr-0")}>
              <p className="font-serif text-h1 text-(--fg)">{fact.headline}</p>
              <p className="prose-measure mt-4 text-lead text-(--fg)">{fact.text}</p>
              <SourceNote ids={fact.sourceIds} className="mt-3" />
            </div>
          ))}
        </div>
        {notes.map((fact) => (
          <div key={fact.text} className="col-span-full border-l-2 border-ulos pl-5 lg:col-span-8">
            <p className="text-body text-(--fg)">{fact.text}</p>
            <FactTags fact={fact} className="mt-3" />
            <SourceNote ids={fact.sourceIds} className="mt-2" />
          </div>
        ))}
      </Container>
    </Section>
  );
}

const contactLabel: Record<HouseContact["kind"], string> = {
  whatsapp: "WhatsApp",
  telepon: "Telepon",
  email: "Email",
  instagram: "Instagram",
  website: "Website",
};

function VisitSection({ house, showLocations }: { house: WeavingHouse; showLocations: boolean }) {
  return (
    <Section tone="obsidian" warp aria-labelledby="kontak-judul">
      <Container grid className="gap-y-12">
        <div className="col-span-full lg:col-span-5">
          <Heading level={2} id="kontak-judul">
            Lokasi dan kontak resmi
          </Heading>
          <p className="prose-measure mt-6 text-body text-(--fg-muted)">
            Informasi pada sumber, perlu konfirmasi. Nomor, alamat, dan jam dapat berubah; cek ulang lewat kanal resmi
            {` ${house.name}`} sebelum berkunjung. PARTONUN tidak melayani transaksi.
          </p>
          {showLocations ? (
            <ul className="mt-10">
              {house.locations.map((location) => (
                <li key={location.name} className="border-t border-(--rule) py-4">
                  <span className="block text-micro font-semibold uppercase text-gold">{kindLabel[location.kind]}</span>
                  <span className="mt-1 block font-serif text-h3 text-ivory">{location.name}</span>
                  {location.address ? <span className="mt-1 block text-body text-ivory">{location.address}</span> : null}
                  {location.note ? <span className="mt-1 block text-small text-(--fg-muted)">{location.note}</span> : null}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <ul className="col-span-full lg:col-span-6 lg:col-start-7">
          {house.contacts.map((contact) => (
            <li key={contact.href}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex min-h-16 items-center justify-between gap-6 border-t border-(--rule) py-4"
              >
                <span className="text-small font-semibold uppercase text-(--fg-muted)">{contactLabel[contact.kind]}</span>
                <span className="thread text-right font-serif text-h3 text-ivory group-hover:bg-size-[100%_1px] group-focus-visible:bg-size-[100%_1px]">
                  {contact.label}
                </span>
                {contact.href.startsWith("http") ? <span className="sr-only"> (membuka tab baru)</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function Related({ house }: { house: WeavingHouse }) {
  const people = getArtisansBySlugs(house.artisanSlugs);
  const ulos = getUlosBySlugs(house.ulosSlugs);
  if (people.length === 0 && ulos.length === 0) return null;
  return (
    <Section tone="brown" spacing="tight" aria-labelledby="terkait-rumah-judul">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-4">
          <Heading level={2} id="terkait-rumah-judul">
            Terhubung di PARTONUN
          </Heading>
          <p className="prose-measure mt-6 text-body text-(--fg-muted)">Hanya hubungan yang disebut sumber.</p>
        </div>
        <div className="col-span-full grid gap-10 md:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {people.map((artisan) => (
            <div key={artisan.slug} className="border-t border-(--rule) pt-6">
              <p className="text-small font-semibold text-(--fg-muted)">Penenun</p>
              {artisan.portrait ? (
                <PortraitCircle
                  href={artisanPath(artisan)}
                  name={artisan.name}
                  origin={artisan.origin}
                  portrait={artisan.portrait}
                  size="third"
                  labelPlacement="right"
                  className="mt-4"
                />
              ) : (
                <TextLink href={artisanPath(artisan)} className="mt-4 inline-block bg-origin-content py-2.5">
                  {artisan.name}
                </TextLink>
              )}
            </div>
          ))}
          {ulos.map((item) => (
            <div key={item.slug} className="border-t border-(--rule) pt-6">
              <p className="mb-4 text-small font-semibold text-(--fg-muted)">Contoh produk yang disebut sumber</p>
              <UlosTeaser ulos={item} ratio="square" sizes="(min-width: 1024px) 26vw, (min-width: 768px) 46vw, 100vw" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SourcesSection({ house }: { house: WeavingHouse }) {
  const index = weavingHouses.findIndex((item) => item.slug === house.slug);
  const next = weavingHouses[(index + 1) % weavingHouses.length];
  return (
    <Section tone="ivory" spacing="tight" aria-labelledby="sumber-rumah-judul">
      <Container grid className="gap-y-10">
        <div className="col-span-full lg:col-span-5">
          <Heading level={2} id="sumber-rumah-judul" size="h3">
            Sumber dan catatan verifikasi
          </Heading>
          <p className="prose-measure mt-4 text-body text-(--fg-muted)">
            Profil disusun dari dokumentasi publik yang ditelusuri pada 11 November 2026. Angka memiliki tahun sumber
            masing-masing dan tidak disebut sebagai kondisi terkini. {creditLine(house.coverImage)}.
          </p>
          <ul className="mt-6 space-y-3">
            {house.verificationNotes.map((note) => (
              <li key={note} className="border-l-2 border-ulos pl-4 text-small text-(--fg)">
                {note}
              </li>
            ))}
          </ul>
        </div>
        <SourceList ids={house.sourceIds} className="col-span-full lg:col-span-6 lg:col-start-7" />
        <div className="col-span-full flex flex-col gap-4 border-t border-(--rule) pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-micro font-semibold uppercase text-(--label)">Rumah tenun berikutnya</p>
            <Link href={weavingHousePath(next)} className="thread mt-3 inline-block py-2 font-serif text-h2 text-(--fg) hover:bg-size-[100%_1px] focus-visible:bg-size-[100%_1px]">
              {next.name}
            </Link>
          </div>
          <ButtonLink href="/penenun-hita">Kembali ke Penenun Hita</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}

/* --- Page compositions ------------------------------------------------------ */

export function HouseDetail({ house }: { house: WeavingHouse }) {
  switch (house.slug) {
    case "galeri-ulos-sianipar":
      return (
        <>
          <OverlapHero house={house} />
          <StorySection house={house} tone="obsidian" />
          <TechniqueSplit house={house} />
          <FactColumns heading="Skala dan komunitas" id="komunitas-judul" facts={[...house.products, ...house.community]} tone="brown" />
          <VisitSection house={house} showLocations />
          <Related house={house} />
          <SourcesSection house={house} />
        </>
      );
    case "tobatenun-jabu-bonang":
      return (
        <>
          <EcosystemHero house={house} />
          <StorySection house={house} tone="ivory" />
          <EcosystemMap house={house} />
          <FactColumns
            heading="Teknik"
            id="teknik-judul"
            facts={house.techniques}
            tone="obsidian"
            intro="Gedogan dan pewarna alami disebut untuk ekosistem produksi di Sumatera Utara, bukan untuk seluruh produk."
          />
          <FactColumns heading="Komunitas penenun" id="komunitas-judul" facts={house.community} tone="ivory" />
          <VisitSection house={house} showLocations={false} />
          <Related house={house} />
          <SourcesSection house={house} />
        </>
      );
    default:
      return (
        <>
          <PortraitHero house={house} />
          <StorySection house={house} tone="obsidian" />
          <FactColumns
            heading="Teknik dan pewarna"
            id="teknik-judul"
            facts={house.techniques}
            tone="brown"
            intro="Gedogan dan pewarna alam disebut sumber untuk produk premium. Teknik tidak digeneralisasi ke seluruh produk."
          />
          <FactColumns heading="Produk yang disebut sumber" id="produk-judul" facts={house.products} tone="ivory" />
          <Related house={house} />
          <VisitSection house={house} showLocations />
          <SourcesSection house={house} />
        </>
      );
  }
}
