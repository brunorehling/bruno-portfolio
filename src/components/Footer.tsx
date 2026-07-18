import { useLanguage } from '../context/LenguageContext'


export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-4xl mx-auto px-10 flex flex-col items-center justify-between sm:flex-row gap-4">

        <p className="text-dim text-xs">
          {t.footer.feito} <span className="text-green">♥</span> {t.footer.e}{' '}
          <span className="text-green">TypeScript</span> — Bruno, Pelotas RS
        </p>

        <div className="flex gap-6">
          {[
            { label: t.nav.sobre,    href: '#sobre' },
            { label: t.nav.skills,   href: '#skills' },
            { label: t.nav.projetos, href: '#projetos' },
            { label: t.nav.contato,  href: '#contato' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-dim hover:text-green transition-colors duration-200 text-xs tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}