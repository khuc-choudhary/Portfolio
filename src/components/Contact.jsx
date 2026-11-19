import { useState } from 'react'
import { Mail, MapPin, Send, Info } from 'lucide-react'
import { contact, profile } from '../data/content'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons'
import Reveal, { SectionHeading } from './Reveal'

const socials = [
  { label: 'Email', href: `mailto:${contact.email}`, Icon: Mail },
  { label: 'LinkedIn', href: contact.linkedin.url, Icon: LinkedinIcon },
  { label: 'GitHub', href: contact.github.url, Icon: GithubIcon },
  { label: 'Instagram', href: contact.instagram.url, Icon: InstagramIcon },
]

const pendingSocials = [
  contact.linkedin.placeholder && 'LinkedIn',
  contact.github.placeholder && 'GitHub',
  contact.instagram.placeholder && 'Instagram',
].filter(Boolean)

const field =
  'w-full rounded-2xl border border-lav-soft bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${d.get('name')}`)
    const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="06 — Contact"
        title="Let’s connect"
        subtitle="Open to internships, entry-level roles and collaboration. Drop me a message."
      />
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          <div className="card p-5">
            <p className="flex items-center gap-3 text-sm text-ink/70"><Mail size={18} className="text-primary" /> {contact.email}</p>
            <p className="mt-3 flex items-center gap-3 text-sm text-ink/70"><MapPin size={18} className="text-primary" /> {profile.location}</p>
          </div>
          <div className="card p-5">
            <p className="mb-4 text-sm font-semibold text-ink">Find me online</p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} title={label}
                   target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                   className="grid h-11 w-11 place-items-center rounded-xl border border-lav-soft bg-lav-light text-primary transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-glow">
                  <Icon width={18} height={18} size={18} />
                </a>
              ))}
            </div>
            {pendingSocials.length > 0 && (
              <p className="mt-4 flex items-center gap-1.5 text-xs text-amber-600">
                <Info size={12} /> {pendingSocials.join(' & ')} link{pendingSocials.length > 1 ? 's are' : ' is a'} placeholder{pendingSocials.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-ink/70">Name
                <input name="name" required autoComplete="name" placeholder="Your name" className={`${field} mt-1.5`} />
              </label>
              <label className="block text-sm text-ink/70">Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${field} mt-1.5`} />
              </label>
            </div>
            <label className="block text-sm text-ink/70">Message
              <textarea name="message" required rows={5} placeholder="Say hello…" className={`${field} mt-1.5 resize-none`} />
            </label>
            <button type="submit" className="btn-primary group w-full sm:w-auto"><Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" /> Send Message</button>
            {sent && <p role="status" className="text-sm text-primary">Opening your email app… if nothing happens, write to {contact.email}.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
