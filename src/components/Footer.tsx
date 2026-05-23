export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-4xl mx-auto px-10 flex flex-col items-center justify-between sm:flex-row gap-4">

        <p className="text-dim text-xs">
          Feito com <span className="text-green">♥</span> e muito{' '}
          <span className="text-green">TypeScript</span> — Bruno, Pelotas RS
        </p>

        <div className="flex gap-6">
          {[
            { label: 'sobre',    href: '#sobre' },
            { label: 'skills',   href: '#skills' },
            { label: 'projetos', href: '#projetos' },
            { label: 'contato',  href: '#contato' },
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