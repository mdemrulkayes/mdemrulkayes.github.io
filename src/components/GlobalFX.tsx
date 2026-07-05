import { lazy, Suspense, useEffect, useState } from 'react'

const SectionFX = lazy(() => import('./fx/SectionFX'))

/** Fixed full-page particle stream behind every section below the hero. */
export default function GlobalFX() {
  const [past, setPast] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (reduced) return
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => {
      const isPast = !entry.isIntersecting
      setPast(isPast)
      if (isPast) setMounted(true)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ${
        past ? 'opacity-60 dark:opacity-70' : 'opacity-0'
      }`}
    >
      {mounted && !reduced && (
        <Suspense fallback={null}>
          <SectionFX variant="planeStream" />
        </Suspense>
      )}
    </div>
  )
}
