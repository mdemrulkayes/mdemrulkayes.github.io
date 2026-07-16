import Section from './Section'
import { skillGroups } from '../data/profile'
import { noteStyle } from '../utils/stickyNote'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Tools of the trade">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="whiteboard reveal flex flex-col p-5 sm:p-6">
            <h3 className="board-label text-sm font-bold tracking-wide text-vio">
              {group.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  style={noteStyle(skill)}
                  className="sticky-note px-3 py-2 font-mono text-xs leading-snug font-medium"
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
