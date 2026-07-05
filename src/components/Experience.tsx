import Section from './Section'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="A decade in production">
      <ol className="relative space-y-12 border-l border-line pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="reveal relative">
            <span
              className="absolute top-1.5 -left-[38.5px] size-3 rounded-full border-2 border-vio bg-ink"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-vio">{job.period}</p>
            <h3 className="mt-1.5 text-lg font-semibold">
              {job.role} <span className="font-normal text-mut">· {job.company}</span>
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mut">
              {job.points.map((point) => (
                <li key={point.slice(0, 24)} className="flex gap-2.5">
                  <span className="mt-[7px] size-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
