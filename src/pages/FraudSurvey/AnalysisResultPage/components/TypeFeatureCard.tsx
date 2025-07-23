interface TypeFeatureCardProps {
    title: string,
    content: React.ReactNode
}

const TypeFeatureCard = ({ title, content }: TypeFeatureCardProps) => {

    return (
        <div className="w-full px-4 py-3.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="text-blue-500 text-lg font-bold leading-snug">
                {title}
            </div>
            <div className="text-slate-950 text-base font-medium leading-normal">
                {content}
            </div>
        </div>
    )
}

export default TypeFeatureCard;

