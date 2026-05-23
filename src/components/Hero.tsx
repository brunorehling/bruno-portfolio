export function Hero() {

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">

      <div className="flex items-center justify-center max-w-70 rounded-4xl border border-green">
        <div className="bg-green w-4 h-4 rounded-full mr-2 blink" />
        <h1>
            Disponível para oportunidades
        </h1>
      </div>
      <h2 className="text-2xl font-bold text-dim">
        Desenvolvedor Full Stack · Pelotas - RS
      </h2>

      <p className="text-6xl">
        Olá, <br /> sou <span className="font-bold text-green">Bruno</span> —<br /> dev fullstack.
      </p>
      
      <p className="text-xl text-muted max-w-2xl">
        Estudante de <span className="font-bold text-green">ADS na UniSenac</span>, construo aplicações web e mobile com foco em código limpo,
        arquitetura escalável e interfaces que as pessoas realmente gostam de usar.
      </p>

      <div className="flex justify-between w-[30vw] gap-4 mt-8">
        <a href="#projetos" className="w-[12vw] h-[5vh] bg-green text-black font-bold py-2 px-4 rounded-xl hover:bg-green/80 transition-colors duration-200">
          &lt;&gt; Ver projetos
        </a>
        <a href="#contato" className="w-[15vw] h-[5vh] bg-bg3 text-muted border border-bg2 font-bold py-2 px-4 rounded-xl hover:text-white transition-colors duration-200">
          Entrar em contato
        </a>
      </div>

    </section>
  )
}