import { useEffect, useState } from 'react'
import avatar from '../assets/avatar.webp'
import { links } from '../data/profile'

/** Identity card that docks into the free left margin (2xl+) once the hero scrolls away. */
export default function ScrollIdentity() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: '-64px 0px 0px 0px' },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      aria-hidden={!show}
      className={`fixed top-28 left-6 z-30 hidden transition-all duration-500 motion-reduce:transition-none 2xl:block ${
        show ? 'translate-x-0 opacity-100' : 'pointer-events-none -translate-x-6 opacity-0'
      }`}
    >
      <div className="w-52 rounded-2xl border border-line bg-panel/80 p-5 text-center shadow-xl shadow-[color-mix(in_srgb,var(--g2)_10%,transparent)] backdrop-blur">
        <span className="bg-grad mx-auto inline-block rounded-full p-[3px]">
          <img src={avatar} alt="Emrul Kayes" width={72} height={72} className="size-18 rounded-full object-cover" />
        </span>
        <p className="text-grad mt-3 text-base font-bold tracking-tight">Emrul Kayes</p>
        <p className="mt-0.5 text-[11px] font-medium text-mut">Staff Software Engineer</p>
        <div className="line-grad mx-auto mt-3 h-px w-10 opacity-60" aria-hidden="true" />
        <a
          href={`mailto:${links.email}`}
          className="mt-3 block font-mono text-[11px] leading-relaxed break-all text-mut transition-colors hover:text-vio"
        >
          {links.email}
        </a>
      </div>
    </aside>
  )
}
