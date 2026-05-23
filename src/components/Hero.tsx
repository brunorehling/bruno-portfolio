export function Hero() {

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">

      <div className="flex items-center justify-center max-w-70 rounded-4xl text-green bg-green/8 border border-green/20">
        <div className="bg-green w-2 h-2 rounded-full mr-2 blink" />
        <h1>
            Disponível para oportunidades
        </h1>
      </div>
      <p className=" text-dim mt-5 mb-5">
        Desenvolvedor Full Stack · Pelotas - RS
      </p>

      <p className="text-6xl mb-10">
        Olá, <br /> sou <span className="font-bold text-green">Bruno</span> —<br /> dev fullstack.
      </p>
      
      <p className="text-xl text-muted max-w-2xl">
        Estudante de <span className="font-bold text-green">ADS na UniSenac</span>, construo aplicações web e mobile com foco em código limpo,
        arquitetura escalável e interfaces que as pessoas realmente gostam de usar.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projetos"
          className="flex items-center justify-center bg-green text-black font-bold py-3 px-6 rounded-xl hover:bg-green/80 transition-colors duration-200 text-sm"
        > 
        &lt;&gt; Ver projetos
      </a>
      <a
        href="#contato"
        className="flex items-center justify-center bg-bg3 text-muted border border-white/10 font-bold py-3 px-6 rounded-xl hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
      >
        Entrar em contato →
      </a>
    </div>

    </section>
  )
}