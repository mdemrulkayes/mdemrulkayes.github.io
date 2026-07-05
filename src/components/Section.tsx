import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, eyebrow, title, children, className = '' }: Props) {
  const ref = useReveal<HTMLElement>()
  return (
    <section id={id} ref={ref} className={`mx-auto max-w-5xl px-6 py-20 sm:py-24 ${className}`}>
      <div className="reveal">
        <p className="font-mono text-sm font-medium text-vio">{`// ${eyebrow}`}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="line-grad mt-4 h-1 w-16 rounded-full" aria-hidden="true" />
      </div>
      <div className="mt-10">{children}</div>
    </section>
  )
}
