import Section from './Section'
import { openSource } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

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
            className="glow-card reveal group flex flex-col rounded-xl border border-line bg-panel p-5 transition-colors hover:border-vio/40"
          >
            <h3 className="font-mono text-sm font-semibold text-fg group-hover:text-vio">
              {repo.name} <span aria-hidden="true">↗</span>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mut">{repo.description}</p>
            <p className="mt-4 flex items-center gap-1.5 font-mono text-xs text-mut">
              <span className="size-2.5 rounded-full bg-[#178600]" aria-hidden="true" />
              {repo.language}
            </p>
          </a>
        ))}
      </div>
    </Section>
  )
}
