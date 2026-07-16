import Nav from './components/Nav'
import GlobalFX from './components/GlobalFX'
import ScrollIdentity from './components/ScrollIdentity'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import UpworkReviews from './components/UpworkReviews'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Nav />
      <GlobalFX />
      {/* readability scrim: calms the 3D background under the central text column, stays clear at the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5]"
        style={{
          background:
            'radial-gradient(ellipse 58% 92% at 50% 45%, color-mix(in srgb, var(--color-ink) 78%, transparent), transparent 72%)',
        }}
      />
      <ScrollIdentity />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <UpworkReviews />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
