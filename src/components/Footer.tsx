export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-faint">
        <p>© {new Date().getFullYear()} Emrul Kayes</p>
        <p>React + Vite + Tailwind · deployed by GitHub Actions</p>
      </div>
    </footer>
  )
}
