import Section from './Section'
import { openSource } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'
import { noteStyle } from '../utils/stickyNote'

export default function OpenSource() {
  return (
    <Section id="open-source" eyebrow="open source" title="Public experiments">
      <div className="grid gap-4 sm:grid-cols-3">
        {openSource.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            onMouseMove={cardGlow}
            className="glow-card whiteboard reveal group flex flex-col p-5 transition-transform hover:-translate-y-1"
          >
            <h3 className="font-mono text-sm font-bold text-fg transition-colors group-hover:text-vio">
              {repo.name} <span aria-hidden="true">↗</span>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">{repo.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-2.5 gap-y-4">
              {repo.stack.map((tech) => (
                <li
                  key={tech}
                  style={noteStyle(tech)}
                  className="sticky-note px-2.5 py-1.5 font-mono text-[11px] font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-center gap-1.5 font-mono text-xs text-mut">
              <span className="size-2.5 rounded-full bg-[#178600]" aria-hidden="true" />
              {repo.language}
            </p>
          </a>
        ))}
      </div>
    </Section>
  )
}
