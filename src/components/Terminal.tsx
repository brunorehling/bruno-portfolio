

export function Terminal() {
  return (
    <div className="flex flex-col mx-auto">
        <div className="flex items-center bg-bg3 rounded-tl rounded-tr px-4 py-2 border border-bg2">
            <div className="flex items-center mr-4">
                <div className="bg-[#FF5F56] w-4 h-4 rounded-full mr-2" />
                <div className="bg-[#FFBD2E] w-4 h-4 rounded-full mr-2" />
                <div className="bg-green w-4 h-4 rounded-full mr-2" />
            </div>
            <span className="text-dim font-mono text-sm">~/bruno/portfolio — zsh — 80×24</span>
        </div>
        <div className="bg-bg2 text-muted font-mono rounded-bl rounded-br px-4 py-6 border border-bg2">
            <p><span className="text-green">bruno@dev</span><span className="text-muted">:</span><span className="text-blue">~/</span><span className="text-muted">$ </span><span className="text-text">node --eval "require('./me').print()"</span></p>

            <p className="text-muted">▸ <span className="text-green">Carregando perfil...</span></p>

            <br />

            <p><span className="text-muted pl-6">  <span className="text-blue">nome</span>       <span className="text-muted">→</span>  <span className="text-green">"Bruno"</span></span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">cargo</span>      <span className="text-muted">→</span>  <span className="text-green">"Full Stack Developer (em ascensão)"</span></span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">cidade</span>     <span className="text-muted">→</span>  <span className="text-green">"Pelotas, RS — Brasil 🇧🇷"</span></span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">formação</span>   <span className="text-muted">→</span>  <span className="text-green">"ADS · UniSenac · 3º ano"</span></span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">stack</span>      <span className="text-muted">→</span>  [<span className="text-green">"TypeScript"</span>, <span className="text-green">"React"</span>, <span className="text-green">"NestJS"</span>, <span className="text-green">"PostgreSQL"</span>]</span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">buscando</span>   <span className="text-muted">→</span>  <span className="text-green">"Primeiro emprego ou freela como dev"</span></span></p>
            <p><span className="text-muted pl-6">  <span className="text-blue">disponível</span> <span className="text-muted">→</span>  <span className="text-yellow-400">true</span></span></p>

            <br />

            <p><span className="text-muted">✓ </span><span className="text-purple">Pronto para novos desafios.</span></p>

            <br />

            <p><span className="text-green">bruno@dev</span><span className="text-muted">:</span><span className="text-blue">~/</span><span className="text-muted">$ </span><span className="inline-block w-2 h-4 bg-green blink align-middle" /></p>
        </div>
    </div>
  )
}