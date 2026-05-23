export type SkillCardProps = {
    role: "frontend" | "backend" | "devops & infraestrutura" | "banco de dados" | "outras";
    tecnologies: string[];
}

export function SkillCard({role, tecnologies }: SkillCardProps) {
    return (
        <div className="bg-bg2 border border-bg2 w-auto rounded-lg p-6 flex items-start gap-4">
            <div>
                <p className=" font-bold text-green mb-2">{role}</p>
                <p className="text-dim text-sm">tecnologias</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tecnologies.map((tech, index) => (
                        <span key={index} className="bg-bg3 text-muted text-xs font-bold px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}