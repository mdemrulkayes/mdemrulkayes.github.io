import { useEffect, useState } from 'react'

/** Gradient paper plane that flies you back to the top. */
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`group fixed right-6 bottom-6 z-40 transition-all duration-500 [perspective:400px] ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <span
        className="bg-grad float-bob flex size-13 items-center justify-center rounded-2xl text-white shadow-lg shadow-[color-mix(in_srgb,var(--g2)_45%,transparent)] transition-transform duration-300 group-hover:[transform:translateY(-5px)_rotateX(18deg)] group-hover:shadow-xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* paper plane pointing up */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5 19.5 21l-7.14-4.2a.7.7 0 0 0-.72 0L4.5 21 12 2.5z" opacity="0.95" />
          <path d="M12 2.5v14.2l7.5 4.3L12 2.5z" opacity="0.55" />
        </svg>
      </span>
    </button>
  )
}
