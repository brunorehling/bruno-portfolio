import { SkillCard } from "./cards/SkillCard";


export function Skills() {
        return (
            <>
                <h1 className="font-bold mb-4 text-dim">02 <span className="text-green ml-2">skills</span></h1>

                <h1 className="text-5xl font-bold mb-4 text-white">Stack  <span className="text-muted font-normal">&</span> < br/> Ferramentas</h1>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <SkillCard role="frontend" tecnologies={["React", "TypeScript", "Tailwind CSS", "Next.js"]} />
                    </div>
                    <div>
                        <SkillCard role="backend" tecnologies={["Node.js", "Python", "Express.js", "Drizzle"]} />
                    </div>
                    <div>
                        <SkillCard role="banco de dados" tecnologies={["MySQL", "PostgreSQL", "NEON"]} />
                    </div>
                    <div>
                        <SkillCard role="devops & infraestrutura" tecnologies={["Git", "GitHub","GitLab", "AWS"]} />
                    </div>
                </div>
            </>

        )     
    }