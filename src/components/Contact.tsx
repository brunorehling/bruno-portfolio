export function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 bg-bg2 border border-white/5 p-16 rounded-2xl overflow-hidden text-center">

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-green to-transparent" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-green/5 blur-3xl rounded-full pointer-events-none" />

      <p className="text-green text-xs tracking-[3px] uppercase">Vamos conversar</p>

      <h2 className="text-5xl font-bold tracking-tight">
        Pronto para o{' '}
        <em className="font-light text-muted not-italic">próximo nível</em>
      </h2>

      <p className="text-muted text-sm font-light max-w-sm">
        Aberto para estágio, freela ou primeiro emprego como dev. Respondo rápido.
      </p>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <a
          href="mailto:brunorehling91@gmail.com"
          className="flex items-center gap-2 bg-green text-black text-sm font-bold px-6 py-3 rounded-xl hover:bg-green/80 transition-colors duration-200"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Enviar email
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-rehling-723061371?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          className="flex items-center gap-2 bg-bg3 text-muted text-sm font-bold px-6 py-3 rounded-xl border border-white/10 hover:text-text hover:border-white/20 transition-all duration-200"
        >
          LinkedIn →
        </a>
        <a
          href="https://github.com/brunorehling"
          className="flex items-center gap-2 bg-bg3 text-muted text-sm font-bold px-6 py-3 rounded-xl border border-white/10 hover:text-text hover:border-white/20 transition-all duration-200"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}