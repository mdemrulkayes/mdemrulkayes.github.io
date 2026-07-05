import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur">
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-vio-deep to-vio"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold text-fg">
          <span className="text-vio">~/</span>emrul-kayes
        </a>
        <ul className="flex items-center gap-1 overflow-x-auto font-mono text-xs sm:gap-2 sm:text-sm">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded px-2 py-1 transition-colors sm:px-3 ${
                  active === id ? 'text-vio' : 'text-mut hover:text-fg'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
