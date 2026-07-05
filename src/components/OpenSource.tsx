import Section from './Section'
import { openSource } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

export default function OpenSource() {
  return (
    <Section id="open-source" eyebrow="open source" title="Public experiments" fx="orbit">
      <div className="grid gap-4 sm:grid-cols-3">
        {openSource.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            onMouseMove={cardGlow}
            className="glow-card reveal group flex flex-col rounded-2xl border border-line bg-panel p-5 transition-all hover:-translate-y-1 hover:border-vio/40 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--g2)_12%,transparent)]"
          >
            <h3 className="font-mono text-sm font-bold text-fg transition-colors group-hover:text-vio">
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
