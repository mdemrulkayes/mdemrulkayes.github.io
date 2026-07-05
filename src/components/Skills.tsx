import Section from './Section'
import { skillGroups } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Tools of the trade" fx="cubes">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            onMouseMove={cardGlow}
            className="glow-card reveal rounded-2xl border border-line bg-panel p-5 transition-all hover:-translate-y-1 hover:border-vio/40 hover:shadow-lg hover:shadow-[color-mix(in_srgb,var(--g2)_12%,transparent)]"
          >
            <h3 className="text-sm font-bold tracking-wide text-vio">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-panel-2 px-3 py-1 font-mono text-xs text-mut"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
