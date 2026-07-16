import Section from './Section'
import { projects } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'
import { noteStyle } from '../utils/stickyNote'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Featured work">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            onMouseMove={cardGlow}
            className="glow-card whiteboard reveal flex flex-col p-6 transition-transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="mt-1 font-mono text-xs font-medium text-vio">{project.context}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-x-2.5 gap-y-4">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  style={noteStyle(tech)}
                  className="sticky-note px-2.5 py-1.5 font-mono text-[11px] font-medium"
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
