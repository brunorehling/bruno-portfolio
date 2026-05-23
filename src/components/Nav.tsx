
const links = [
  { label: 'sobre',    href: '#sobre' },
  { label: 'skills',   href: '#skills' },
  { label: 'projetos', href: '#projetos' },
  { label: 'contato',  href: '#contato' },
]

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-white/10 backdrop-blur-md z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-10 h-16">

        <div className="flex items-center gap-1">
          <span className="text-green font-bold">/bruno</span>
          <span className="text-muted">.dev</span>
        </div>

        <ul className="flex gap-8 list-none">
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

      </div>
    </nav>
  )
}