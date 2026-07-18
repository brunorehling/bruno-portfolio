import { MiniCard } from "./cards/MiniCards";
import { useLanguage } from '../context/LenguageContext'

export function About() {   
    const { t } = useLanguage()

    return (
        <>
            <h1 className="font-bold mb-4 text-dim">01 <span className="text-green ml-2">{t.sobre.titulo}</span></h1>

            <h1 className="text-5xl font-bold mb-4 text-white">{t.sobre.heading1} <span className="text-muted font-normal">{t.sobre.heading2}</span> < br/> {t.sobre.heading3}</h1>

            <div className="flex flex-col gap-10 mb-10 sm:flex-row">
                <div className="w-full sm:w-1/2">
                    <p className="text-dim mb-4">{t.sobre.p1} < br/>< br/>
                        {t.sobre.p2} </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:w-1/2">
                    {t.sobre.cards.map(card => (
                        <MiniCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>    
        </>
    )
}