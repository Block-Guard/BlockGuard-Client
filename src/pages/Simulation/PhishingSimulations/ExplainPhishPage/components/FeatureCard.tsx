interface FeatureCardProps{
    title: string;
    description: string[];
}

export const FeatureCard = ({title, description}:FeatureCardProps) => {
    return (
        <div className="w-full p-3.5 bg-gray-100 rounded-[10px] inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="text-center justify-start text-blue-500 text-lg font-bold leading-relaxed">
                {title}
            </div>
            <div className="text-slate-950 text-base font-medium leading-normal space-y-1">
                {description.map((desc)=> <p>{desc}</p>)}
            </div>
        </div>
    )
}