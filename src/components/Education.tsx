import Section from './Section'
import { education } from '../data/profile'
import { cardGlow } from '../hooks/usePointerGlow'

export default function Education() {
  return (
    <Section id="education" eyebrow="education" title="Academic background">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            onMouseMove={cardGlow}
            className="glow-card whiteboard reveal flex items-start gap-4 p-6 transition-transform hover:-translate-y-1"
          >
            <span className="bg-grad flex size-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5" />
              </svg>
            </span>
            <div>
              <h3 className="font-bold">{item.degree}</h3>
              <p className="mt-1 text-sm text-mut">{item.institution}</p>
              <p className="mt-0.5 font-mono text-xs text-faint">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
