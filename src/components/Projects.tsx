import { ProjectCard } from "./cards/ProjectCard";
import { useLanguage } from '../context/LenguageContext'


export function Projects() {
    const { t } = useLanguage()

    const techs = [
        ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Supabase'],
        ['Python', 'PyTorch', 'CNN', 'Node.js'],
        ['React', 'TypeScript', 'Tailwind', 'Node.js', "orval"],
    ]
    const links = [
        "https://gitlab.com/senac-projetos-de-desenvolvimento/2026-1-bruno-juan/alertamei-frontend",
        "https://github.com/brunorehling/API_CNN",
        "https://github.com/brunorehling/COOP"
    ]
    return (
        <>
            <h1 className="font-bold mb-4 text-dim">03 <span className="text-green ml-2">{t.projetos.titulo}</span></h1>

            <div className="grid grid-cols-1 gap-6 mb-6">
                <ProjectCard
                title={t.projetos.cards[0].title}
                description={t.projetos.cards[0].description}
                area={t.projetos.cards[0].area}
                link={links[0]}
                tech={techs[0]}
                index={1}
                />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {t.projetos.cards.slice(1).map((card, i) => (
                <ProjectCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    area={card.area}
                    link={links[i + 1]}
                    tech={techs[i + 1]}
                    index={i + 2}
                />
                ))}
            </div>
            </>
        )
    }