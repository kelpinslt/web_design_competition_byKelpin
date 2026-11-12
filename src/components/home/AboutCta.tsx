import { homeCopy } from "@/data/home";
import { ButtonLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

/** Beranda 8 — closing invitation to Tentang Platform (v3 §7.1). No impact claims. */
export function AboutCta() {
  const { heading, body, sdg } = homeCopy.about;

  return (
    <Section tone="brown" warp spacing="tight" aria-labelledby="tentang-beranda-judul">
      <Container grid className="items-end gap-y-10">
        <div className="col-span-full lg:col-span-7">
          <Heading level={2} id="tentang-beranda-judul" size="h1">
            {heading}
          </Heading>
          <p className="prose-measure mt-8 text-lead text-(--fg)">{body}</p>
        </div>
        <div className="col-span-full flex flex-col items-start gap-6 lg:col-span-4 lg:col-start-9">
          <p className="text-small text-(--fg-muted)">{sdg}</p>
          <ButtonLink href="/tentang-platform">Tentang Platform</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
