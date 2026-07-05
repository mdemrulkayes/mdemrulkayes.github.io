import Section from './Section'
import { about } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Backend problems, solved properly.">
      <div className="reveal max-w-3xl space-y-5 leading-relaxed text-mut">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
