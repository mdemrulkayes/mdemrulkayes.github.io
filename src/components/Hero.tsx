import type { ReactNode } from 'react'
import avatar from '../assets/avatar.webp'
import { useReveal } from '../hooks/useReveal'

/* syntax-highlight helpers for the C# card (card stays dark in both themes) */
const K = ({ children }: { children: ReactNode }) => <span className="text-[#c0a8ff]">{children}</span>
const T = ({ children }: { children: ReactNode }) => <span className="text-[#7dd3fc]">{children}</span>
const S = ({ children }: { children: ReactNode }) => <span className="text-[#86efac]">{children}</span>
const N = ({ children }: { children: ReactNode }) => <span className="text-[#f4bf75]">{children}</span>
const P = ({ children }: { children: ReactNode }) => <span className="text-[#8a8aa3]">{children}</span>

const stats = [
  { value: '10+', label: 'years shipping .NET' },
  { value: '6', label: 'fintech & payment systems' },
  { value: '5', label: 'finance domains served' },
]

export default function Hero() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="blob top-[-80px] left-[-120px] h-96 w-96 bg-[var(--g1)]" aria-hidden="true" />
      <div className="blob top-40 right-[-140px] h-[26rem] w-[26rem] bg-[var(--g3)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-40 lg:pb-28">
        <div className="reveal">
          <div className="flex items-center gap-5">
            <span className="bg-grad inline-block shrink-0 rounded-full p-[3px] shadow-lg shadow-[color-mix(in_srgb,var(--g2)_30%,transparent)]">
              <img
                src={avatar}
                alt="Emrul Kayes"
                width={96}
                height={96}
                className="size-20 rounded-full object-cover sm:size-24"
              />
            </span>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                <span className="text-grad">Emrul Kayes</span>
              </h1>
              <p className="mt-2 text-lg font-semibold text-mut sm:text-xl">Staff Software Engineer</p>
            </div>
          </div>

          <p className="mt-6 text-xl font-semibold sm:text-2xl">
            C# / .NET backend, <span className="text-grad">architecture</span> &amp; DevOps
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-mut">
            Ten years designing and running the systems behind banking, payments, and trading —
            APIs, microservices, and the databases that keep them honest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-grad rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color-mix(in_srgb,var(--g2)_35%,transparent)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line bg-panel px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-vio/60 hover:text-vio"
            >
              Get in Touch
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-grad font-mono text-2xl font-bold">{value}</dd>
                <dd className="mt-0.5 text-xs text-mut">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <div className="glow-card rounded-2xl border border-[#252538] bg-[#13131e] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-[#252538] px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-[#8a8aa3]">Engineer.cs</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-[#e8e8f4]">
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
                {'    '}OpenTo       <P>=</P> <T>FullTime</T> <P>|</P> <T>Consulting</T>
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
