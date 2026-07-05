import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { usePointerGlow } from './hooks/usePointerGlow'

export default function App() {
  usePointerGlow('#glow-layer')

  return (
    <>
      {/* page-wide cursor glow */}
      <div
        id="glow-layer"
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(560px circle at var(--mx, 50%) var(--my, 30%), rgba(160, 140, 255, 0.06), transparent 65%)',
        }}
      />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
