import Section from './Section'
import { skillGroups } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Tools of the trade">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            onMouseMove={cardGlow}
            className="glow-card reveal rounded-xl border border-line bg-panel p-5 transition-colors hover:border-vio/40"
          >
            <h3 className="font-mono text-sm font-semibold text-vio">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-line bg-panel-2 px-2.5 py-1 font-mono text-xs text-mut"
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
