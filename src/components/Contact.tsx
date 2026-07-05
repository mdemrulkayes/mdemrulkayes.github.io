import Section from './Section'
import { links } from '../data/profile'

const channels = [
  { label: 'github', href: links.github },
  { label: 'linkedin', href: links.linkedin },
  { label: 'upwork', href: links.upwork },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Let's build something reliable." className="pb-28">
      <div className="reveal max-w-2xl">
        <p className="leading-relaxed text-mut">
          Open to interesting backend problems — architecture reviews, .NET systems, or a team that
          needs a steady pair of hands in production. The fastest way to reach me:
        </p>
        <a
          href={`mailto:${links.email}`}
          className="mt-6 inline-block rounded-md bg-vio px-6 py-3 font-mono text-sm font-semibold text-ink transition-colors hover:bg-vio/85"
        >
          {links.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
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
    </Section>
  )
}
