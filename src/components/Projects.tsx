import { ProjectCard } from "./cards/ProjectCard";


export function Projects() {
    return (
        <>
            <h1 className="font-bold mb-4 text-dim">03 <span className="text-green ml-2">projetos</span></h1>

            <div className="grid grid-cols-1 gap-6 mb-6">
                <ProjectCard 
                    title="AlertaMei" 
                    description="Aplicação financeira completa para Microempreendedores Individuais. Dashboard com DRE simplificado, controle de transações com separação PF/PJ, alertas do limite anual de R$81k e autenticação via Supabase. Mobile-first com migração planejada para React Native/Expo na segunda fase." 
                    link="https://gitlab.com/senac-projetos-de-desenvolvimento/2026-1-bruno-juan/alertamei-frontend"
                    area="TCC · Em desenvolvimento · 2026"
                    tech={['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Supabase']}
                    index={1}
                />
            </div>


            <div className="grid grid-cols-2 gap-6">
                <div>
                    <ProjectCard
                        title="Glasses CNN"
                        description="Rede neural convolucional treinada para classificar óculos por formato e material. O modelo analisa a imagem e identifica o estilo do frame automaticamente."
                        link="https://github.com/..."
                        area="Machine Learning · Acadêmico"
                        tech={['Python', 'PyTorch', 'CNN', 'Node.js']}
                        index={2}
                    />
                </div>
                <div>
                    <ProjectCard 
                        area="Desenvolvimento FullStack · Acadêmico"
                        title="COOP" 
                        description="Plataforma de treinamento colaborativo para profissionais de TI. Usuários criam e participam de projetos práticos em equipe, simulando o ambiente real de desenvolvimento." 
                        link="https://github.com/brunorehling/COOP"
                        index={3}
                        tech={['React', 'TypeScript', 'Tailwind', 'Node.js', "orval"]}
                    />
                </div>
            </div>
        </>
    )
}