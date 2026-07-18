import { useState } from 'react'
import { useLanguage } from '../context/LenguageContext'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { t, lang, toggle } = useLanguage()
  const isEn = lang === 'en'

  const links = [
  { label: t.nav.sobre,    href: '#sobre' },
  { label: t.nav.skills,   href: '#skills' },
  { label: t.nav.projetos, href: '#projetos' },
  { label: t.nav.contato,  href: '#contato' },
]


  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-white/10 backdrop-blur-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 h-16">

        <div className="flex items-center gap-1">
          <span className="text-green font-bold">/bruno</span>
          <span className="text-muted">.dev</span>
        </div>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-muted hover:text-green transition-colors duration-200 text-xs tracking-widest uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-green group-hover:w-full transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          className="flex items-center gap-2 group"
          aria-label="Toggle language"
        >
          <img
            src="./pt-br.webp"
            alt="PT"
            className={`w-5 h-5 rounded-full object-cover transition-opacity duration-300 ${isEn ? 'opacity-30' : 'opacity-100'}`}
          />

          <div className="relative w-10 h-5 bg-bg3 border border-white/10 rounded-full transition-colors duration-300">
            <div
              className={`absolute top-0.5 w-4 h-4 bg-green rounded-full shadow-md transition-all duration-300 ${isEn ? 'left-5' : 'left-0.5'}`}
            />
          </div>

          <img
            src="./eua.svg"
            alt="EN"
            className={`w-5 h-5 rounded-full object-cover transition-opacity duration-300 ${isEn ? 'opacity-100' : 'opacity-30'}`}
          />
        </button>

        <button
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden flex flex-col gap-1.25 p-1 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-5.5 h-[1.5px] bg-muted transition-all duration-250 origin-center
            ${open ? 'translate-y-[6.5px] rotate-45 bg-green' : ''}`} />
          <span className={`block w-5.5 h-[1.5px] bg-muted transition-all duration-250
            ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5.5 h-[1.5px] bg-muted transition-all duration-250 origin-center
            ${open ? 'translate-y-[-6.5px] -rotate-45 bg-green' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/6 flex flex-col py-2">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-muted hover:text-green text-xs tracking-widest uppercase 
                         border-l-2 border-transparent hover:border-green transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}