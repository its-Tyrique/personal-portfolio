import { projects, type Project } from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";
import { Tag } from "@/components/ui/tag";
import { ArrowUpRight, Github } from "@/components/ui/icons";
import { cx } from "@/lib/utils";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="label-mono text-faint">
        {project.index} / {project.status}
      </span>
      <span className="bg-accent h-1.5 w-1.5 rounded-full" aria-hidden="true" />
    </div>
  );
}

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cx("flex flex-wrap items-center gap-x-6 gap-y-2", className)}>
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-fg hover:text-accent inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors"
        >
          <Github className="size-3.5" />
          Repository
          <ArrowUpRight className="size-3" />
        </a>
      ) : (
        <span className="text-faint inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase">
          Repository private
        </span>
      )}
      <span className="text-faint font-mono text-[10px] tracking-[0.14em] uppercase">
        Deep dive in V2
      </span>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="group border-line bg-ink-raised hover:border-line-strong grid border transition-colors duration-300 lg:grid-cols-[1.15fr_1fr]">
      <div className="border-line relative min-h-[260px] overflow-hidden border-b lg:min-h-[380px] lg:border-r lg:border-b-0">
        <ProjectVisual slug={project.slug} />
        <div className="absolute top-4 left-4">
          <span className="border-accent bg-ink/80 text-accent inline-flex items-center border px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur-sm">
            Featured build
          </span>
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <ProjectMeta project={project} />
        <h3 className="font-display mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
          {project.title}
        </h3>
        <p className="text-accent mt-2 font-mono text-[10px] tracking-[0.12em] uppercase">
          {project.eyebrow}
        </p>
        <p className="text-muted mt-5 max-w-xl text-sm leading-relaxed md:text-base">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <ProjectLinks project={project} className="mt-auto pt-8" />
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-line bg-ink-raised hover:border-line-strong flex flex-col border transition-colors duration-300">
      <div className="border-line relative aspect-[16/8] overflow-hidden border-b">
        <ProjectVisual slug={project.slug} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ProjectMeta project={project} />
        <h3 className="font-display mt-4 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
          {project.title}
        </h3>
        <p className="text-accent mt-2 font-mono text-[10px] tracking-[0.12em] uppercase">
          {project.eyebrow}
        </p>
        <p className="text-muted mt-4 text-sm leading-relaxed">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        <ProjectLinks project={project} className="mt-auto pt-7" />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-line border-b py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            index="04"
            label="Projects"
            title="Selected builds, honestly labelled."
            intro="Three projects that cover workflow automation, commerce and booking. Each card is a placeholder until the full case study is ready — no invented metrics, no template links."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:mt-20 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <FeaturedProject project={projects[0]} />
          </Reveal>
          {projects.slice(1).map((project, index) => (
            <Reveal key={project.slug} delay={0.05 * (index + 1)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
