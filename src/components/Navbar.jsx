import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-4 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? 'border-lav-soft/80 bg-white/80 shadow-soft'
            : 'border-white/60 bg-white/50'
        }`}
      >
        <a href="#home" className="font-display text-lg font-extrabold text-ink" onClick={() => setOpen(false)}>
          Khushi<span className="gradient-text">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map(([id, label]) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`relative z-10 block rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 hover:text-primary ${active === id ? 'text-primary' : 'text-ink/60'}`}
              >
                {label}
              </a>
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-lav-light"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <Magnetic className="hidden lg:inline-block" strength={0.2}>
          <a href="#contact" className="btn-primary group !py-2 !text-[13px]">
            Let’s talk
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Magnetic>

        <button
          className="rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-lav-soft/80 bg-white/95 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {links.map(([id, label], i) => (
                <motion.li key={id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)}
                     className={`block rounded-2xl px-4 py-3 text-base font-medium ${active === id ? 'bg-lav-light text-primary' : 'text-ink/70'}`}>
                    {label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">Let’s talk</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
