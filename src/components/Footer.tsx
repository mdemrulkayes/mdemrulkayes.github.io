import { links } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-faint">
        <p>© {new Date().getFullYear()} Emrul Kayes</p>
        <p>
          Open for opportunities — full-time, consulting &amp; freelance ·{' '}
          <a href={`mailto:${links.email}`} className="font-medium text-vio hover:underline">
            say hello
          </a>
        </p>
      </div>
    </footer>
  )
}
