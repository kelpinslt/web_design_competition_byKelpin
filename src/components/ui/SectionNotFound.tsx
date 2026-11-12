import { ButtonLink } from "@/components/ui/Links";
import { Container, Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

type SectionNotFoundProps = {
  title: string;
  message: string;
  backHref: string;
  backLabel: string;
};

/** Not-found content for an unknown detail slug in one section (PRD H5). */
export function SectionNotFound({ title, message, backHref, backLabel }: SectionNotFoundProps) {
  return (
    <Section
      tone="obsidian"
      warp
      spacing="none"
      className="flex min-h-[70svh] flex-col justify-end pb-20 pt-[calc(var(--spacing-header)+5rem)]"
    >
      <Container grid className="gap-y-8">
        <Heading level={1} size="h1" className="col-span-full lg:col-span-8">
          {title}
        </Heading>
        <div className="col-span-full space-y-8 md:col-span-4 lg:col-span-5 lg:col-start-8">
          <p className="text-lead text-(--fg-muted)">{message}</p>
          <ButtonLink href={backHref}>{backLabel}</ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
