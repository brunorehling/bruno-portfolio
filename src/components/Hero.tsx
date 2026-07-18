import { useLanguage } from '../context/LenguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">

      <div className="flex items-center justify-center max-w-70 rounded-4xl text-green bg-green/8 border border-green/20">
        <div className="bg-green w-2 h-2 rounded-full mr-2 blink" />
        <h1>
            {t.hero.status}
        </h1>
      </div>
      <p className=" text-dim mt-5 mb-5">
        {t.hero.badge}
      </p>

      <p className="text-6xl mb-10">
        {t.hero.saudacao} <br /> {t.hero.sou} <span className="font-bold text-green">Bruno</span> —<br /> {t.hero.titulo}
      </p>
      
      <p className="text-xl text-muted max-w-2xl">
        {t.hero.descricao} <span className="font-bold text-green">{t.hero.descricao2}</span> {t.hero.descricao3}
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projetos"
          className="flex items-center justify-center bg-green text-black font-bold py-3 px-6 rounded-xl hover:bg-green/80 transition-colors duration-200 text-sm"
        > 
        &lt;&gt; {t.hero.btn1}
      </a>
      <a
        href="#contato"
        className="flex items-center justify-center bg-bg3 text-muted border border-white/10 font-bold py-3 px-6 rounded-xl hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
      >
        {t.hero.btn2}
      </a>
    </div>

    </section>
  )
}