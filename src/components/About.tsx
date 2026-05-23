import { MiniCard } from "./cards/MiniCards";


export function About() {   
    return (
        <>
            <h1 className="font-bold mb-4 text-dim">01 <span className="text-green ml-2">sobre</span></h1>

            <h1 className="text-5xl font-bold mb-4 text-white">Quem está <span className="text-muted font-normal">por trás</span> < br/> do código</h1>

            <div className="flex gap-10 mb-10">
                <div className="w-1/2">
                    <p className="text-dim mb-4">Sou desenvolvedor full-stack em formação, apaixonado por
                        transformar ideias em produtos que resolvem problemas reais. Estou no 3º ano de ADS 
                        na UniSenac Pelotas, construindo meu portfólio com projetos que importam. < br/>< br/>
                        
                        Meu projeto atual é o AlertaMEI — uma aplicação financeira completa para 
                        microempreendedores, com DRE simplificado, controle de transações e alertas de limite..</p>
                </div>
                <div className="w-1/2 grid grid-cols-2 gap-4">
                    <MiniCard
                        title="3º"
                        description="ano de ADS"
                    />
                    <MiniCard
                        title="5+"
                        description="tecnologias no stack"
                    />
                    <MiniCard
                        title="2+"
                        description="projetos completos"
                    />
                    <MiniCard
                        title="∞"
                        description="café consumido"
                    />
                </div>
            </div>    
        </>
    )
}