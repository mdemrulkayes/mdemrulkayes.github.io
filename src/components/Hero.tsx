import avatar from '../assets/avatar.webp'
import { links } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

/* syntax-highlight helpers for the C# card */
import type { ReactNode } from 'react'
const K = ({ children }: { children: ReactNode }) => <span className="text-[#c0a8ff]">{children}</span>
const T = ({ children }: { children: ReactNode }) => <span className="text-[#7dd3fc]">{children}</span>
const S = ({ children }: { children: ReactNode }) => <span className="text-[#86efac]">{children}</span>
const N = ({ children }: { children: ReactNode }) => <span className="text-[#f4bf75]">{children}</span>
const P = ({ children }: { children: ReactNode }) => <span className="text-mut">{children}</span>

const stats = [
  { value: '10+', label: 'years shipping .NET' },
  { value: '6', label: 'fintech & payment systems' },
  { value: '6M+', label: 'yearly users, current platform' },
]

export default function Hero() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-40 lg:pb-28">
        <div className="reveal">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Emrul Kayes"
              width={88}
              height={88}
              className="size-20 rounded-full border-2 border-vio/60 object-cover shadow-[0_0_40px_-8px] shadow-vio/40 sm:size-22"
            />
            <p className="font-mono text-sm text-vio">// Hi, I&apos;m</p>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">Emrul Kayes</h1>
          <p className="mt-3 text-xl font-semibold text-mut sm:text-2xl">
            Staff Software Engineer — <span className="text-fg">C# / .NET backend</span>,
            architecture &amp; DevOps
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-mut">
            Ten years designing and running the systems behind banking, payments, and trading —
            APIs, microservices, and the databases that keep them honest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-vio px-5 py-2.5 font-mono text-sm font-semibold text-ink transition-colors hover:bg-vio/85"
            >
              view projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-fg transition-colors hover:border-vio/60 hover:text-vio"
            >
              get in touch
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-2.5 font-mono text-sm text-mut transition-colors hover:text-vio"
            >
              github ↗
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-mono text-2xl font-bold text-vio">{value}</dd>
                <dd className="mt-0.5 text-xs text-mut">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <div className="glow-card rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-mut">Engineer.cs</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
              <code>
                <K>var</K> engineer <P>=</P> <K>new</K> <T>StaffEngineer</T>
                {'\n'}
                <P>{'{'}</P>
                {'\n'}
                {'    '}Name         <P>=</P> <S>"Emrul Kayes"</S>
                <P>,</P>
                {'\n'}
                {'    '}Based        <P>=</P> <S>"Dhaka, Bangladesh"</S>
                <P>,</P>
                {'\n'}
                {'    '}Years        <P>=</P> <N>10</N>
                <P>,</P>
                {'\n'}
                {'    '}Core         <P>=</P> <P>[</P>
                <S>".NET"</S>
                <P>,</P> <S>"C#"</S>
                <P>,</P> <S>"ASP.NET Core"</S>
                <P>],</P>
                {'\n'}
                {'    '}Databases    <P>=</P> <P>[</P>
                <S>"PostgreSQL"</S>
                <P>,</P> <S>"MSSQL"</S>
                <P>,</P> <S>"Redis"</S>
                <P>],</P>
                {'\n'}
                {'    '}Architecture <P>=</P> <T>Microservices</T> <P>|</P> <T>EventDriven</T>{' '}
                <P>|</P> <T>DDD</T>
                <P>,</P>
                {'\n'}
                {'    '}Contact      <P>=</P> <S>"{links.email}"</S>
                {'\n'}
                <P>{'};'}</P>
                <span className="caret" aria-hidden="true" />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
