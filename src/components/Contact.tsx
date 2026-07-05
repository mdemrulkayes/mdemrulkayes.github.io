import Section from './Section'
import { links } from '../data/profile'

const channels = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Upwork', href: links.upwork },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something reliable." className="pb-28">
      <div className="glow-card reveal rounded-2xl border border-line bg-panel p-8 sm:p-10">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel-2 px-4 py-1.5 text-xs font-medium text-mut">
          <span className="pulse-dot size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Currently available
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-mut">
          I am open to new opportunities — senior/staff backend roles, <b className="text-fg">consulting
          engagements</b> (architecture reviews, .NET modernization, API design), and freelance
          projects. If you have a system that needs to be faster, safer, or simply finished, let's
          talk.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${links.email}`}
            className="bg-grad rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color-mix(in_srgb,var(--g2)_35%,transparent)] transition-transform hover:-translate-y-0.5"
          >
            {links.email}
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {channels.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-mut transition-colors hover:text-vio"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
