import { homeCopy } from "@/data/home";
import { illustrations } from "@/data/media";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Container, Section } from "@/components/ui/Section";
import { SourceNote } from "@/components/ui/SourceNote";
import { Heading } from "@/components/ui/Typography";

/**
 * Beranda 3 — the main issues and why the sustainability of weavers
 * matters (07 §A3 mandatory, §A4). Three numbered editorial statements,
 * each with its sources; then the cultural value, beside a sticky image.
 */
export function IssuesSection() {
  const { issues, culture } = homeCopy;

  return (
    <Section tone="obsidian" warp aria-labelledby="isu-judul">
      <Container grid className="gap-y-6">
        <Heading level={2} id="isu-judul" className="col-span-full lg:col-span-7">
          {issues.heading}
        </Heading>
      </Container>

      <Container grid className="mt-14 gap-y-12">
        {issues.items.map((issue, index) => (
          <Reveal key={issue.headline} index={index} className="col-span-full md:col-span-2 lg:col-span-4">
            <article className="border-t border-gold/60 pt-6">
              <p className="font-serif text-h3 text-gold tabular-nums">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-serif text-h3 text-ivory">{issue.headline}</h3>
              <p className="mt-4 text-body text-(--fg-muted)">{issue.text}</p>
              <SourceNote ids={issue.sourceIds} className="mt-4" />
            </article>
          </Reveal>
        ))}
      </Container>

      <Container grid className="mt-section-tight items-center gap-y-12">
        <div className="col-span-full md:col-span-3 lg:col-span-5">
          <MediaFrame media={illustrations.homeStoryHands} ratio="portrait" sizes="(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="col-span-full md:col-span-3 lg:col-span-6 lg:col-start-7">
          <h3 className="font-serif text-h2 text-ivory">{culture.heading}</h3>
          <p className="prose-measure mt-8 text-lead text-ivory">{culture.body}</p>
          <SourceNote ids={culture.bodySources} className="mt-3" />
          <p className="prose-measure mt-8 text-body text-(--fg-muted)">{culture.process}</p>
          <SourceNote ids={culture.processSources} className="mt-3" />
        </div>
      </Container>
    </Section>
  );
}
