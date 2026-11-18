import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['education', 'Education'], ['certifications', 'Certifications'], ['contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  // lock scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-white/10 bg-ink/80 backdrop-blur-lg' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-white" onClick={() => setOpen(false)}>
          Khushi<span className="gradient-text">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`rounded-full px-3 py-1.5 text-sm transition hover:text-white ${active === id ? 'bg-white/10 text-white' : 'text-slate-400'}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !py-2 lg:inline-flex">Let’s talk</a>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-ink/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {links.map(([id, label], i) => (
                <motion.li key={id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)}
                     className={`block rounded-xl px-4 py-3 text-lg font-medium ${active === id ? 'bg-white/10 text-white' : 'text-slate-300'}`}>
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
