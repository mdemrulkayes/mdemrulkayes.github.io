import Section from './Section'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="experience" title="A decade in production">
      <ol className="relative space-y-12 pl-8">
        <div
          className="absolute top-1 bottom-1 left-[5px] w-px bg-gradient-to-b from-[var(--g1)] via-[var(--g2)] to-transparent"
          aria-hidden="true"
        />
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="reveal relative">
            <span
              className="bg-grad absolute top-1.5 -left-[32px] size-3 rounded-full ring-4 ring-ink"
              aria-hidden="true"
            />
            <p className="font-mono text-xs font-medium text-vio">{job.period}</p>
            <h3 className="mt-1.5 text-lg font-semibold">
              {job.role} <span className="font-normal text-mut">· {job.company}</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed font-medium text-fg/80">{job.summary}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mut">
              {job.points.map((point) => (
                <li key={point.slice(0, 24)} className="flex gap-2.5">
                  <span className="bg-grad mt-[7px] size-1.5 shrink-0 rounded-full" aria-hidden="true" />
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
