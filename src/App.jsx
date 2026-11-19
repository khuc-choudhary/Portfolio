import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Education, Certifications } from './components/EducationCerts'
import Contact from './components/Contact'
import Loader from './components/Loader'
import Background from './components/Background'

export default function App() {
  return (
    <>
      <Loader />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-lav-soft/60 bg-white/50 py-8 text-center text-sm text-ink/50">
        © {new Date().getFullYear()} Khushi Mangal Singh · Built with React, Tailwind &amp; Framer Motion
      </footer>
    </>
  )
}
