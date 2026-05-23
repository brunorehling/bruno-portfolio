
export type MiniCardProps = {
    title: string;
    description: string;
}

export function MiniCard({ title, description }: MiniCardProps) {
    return (
        <div className="bg-bg2 border border-bg2 w-auto rounded-lg p-6 flex items-start gap-4">
            <div>
                <h1 className=" text-4xl font-bold text-green mb-2">{title}</h1>
                <p className="text-dim text-sm">{description}</p>
            </div>
        </div>
    )
}