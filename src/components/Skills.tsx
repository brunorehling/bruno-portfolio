import { SkillCard } from "./cards/SkillCard";
import { useLanguage } from '../context/LenguageContext'


export function Skills() {
    const { t } = useLanguage()

    const techs = [
        ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        ["Node.js", "Python", "Express.js", "Drizzle"],
        ["MySQL", "PostgreSQL", "NEON"],
        ["Git", "GitHub", "GitLab", "AWS"],
        ]

        return ( 
            <>
                <h1 className="font-bold mb-4 text-dim">02 <span className="text-green ml-2">skills</span></h1>

                <h1 className="text-5xl font-bold mb-4 text-white">Stack  <span className="text-muted font-normal">&</span> < br/> {t.skills.heading}</h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {t.skills.cards.map((card, i) => (
                    <SkillCard
                        key={card.role}
                        role={card.role}
                        tecnologies={techs[i]}
                    />
                ))}
                </div>
            </>

        )     
    }
    