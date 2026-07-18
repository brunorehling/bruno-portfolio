import { useLanguage } from '../../context/LenguageContext'

export type ProjectCardProps = {
    title: string
    description: string
    link: string
    tech?: string[]
    area?: string
    index?: number
}

export function ProjectCard({ title, description, link, tech, area, index }: ProjectCardProps) {
    const { t } = useLanguage()

    return (
        <div className="relative bg-bg2 border border-white/5 rounded-2xl p-8 flex flex-col gap-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-green/20 group">

            <div className="absolute top-0 left-0 w-0 h-0.5 bg-linear-to-r from-green to-transparent group-hover:w-full transition-all duration-500" />

            <span className="absolute bottom-4 right-6 font-serif text-7xl font-black text-bg3 transition-colors duration-300 group-hover:text-green/5 select-none">
                {index}
            </span>

            <div className="flex flex-col gap-3">
                {area && (
                    <span className="inline-block w-fit text-green bg-green/8 border border-green/20 text-xs tracking-widest uppercase py-1 px-3 rounded-md">
                        {area}
                    </span>
                )}

                <h2 className="text-2xl font-bold tracking-tight text-text transition-colors duration-200 group-hover:text-green">
                    {title}
                </h2>

                <p className="text-muted text-sm leading-relaxed font-light">
                    {description}
                </p>
            </div>

            {tech && (
                <div className="flex flex-wrap gap-2">
                    {tech.map(t => (
                        <span key={t} className="text-xs text-dim bg-bg3 border border-white/5 rounded-md py-1 px-2">
                            {t}
                        </span>
                    ))}
                </div>
            )}

            
               <a href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dim hover:text-green transition-colors duration-200 text-xs tracking-widest uppercase w-fit"
            >
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {t.projetos.cardbtn}
            </a>
        </div>
    )
}