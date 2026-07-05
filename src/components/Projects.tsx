import Section from './Section'
import { projects } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Featured work" fx="terrain">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            onMouseMove={cardGlow}
            className="glow-card reveal flex flex-col rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-vio/40 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--g2)_12%,transparent)]"
          >
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="mt-1 font-mono text-xs font-medium text-vio">{project.context}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-panel-2 px-2.5 py-0.5 font-mono text-[11px] text-mut"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
