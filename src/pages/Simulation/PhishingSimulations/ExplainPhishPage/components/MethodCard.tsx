interface MethodUpCardProps {
    text: string;
    id: number;
}

export const MethodCard = ({ text, id }: MethodUpCardProps) => {
    const isFirst = id === 0;
    const isLast = id === -1;
    
    return (
        <div className="relative">
            {isFirst ? (
                null
            ) : (
                <div className="absolute top-0 left-1/2 -translate-x-1/2
                w-0 h-0 border-x-[15px] border-x-transparent border-t-[13px] border-t-white"></div>
            )}
            <div className="flex justify-center items-center text-center w-full h-14 bg-primary-400 rounded-[10px]">
                <span className="text-white text-lg font-semibold leading-relaxed">
                    {text}
                </span>
            </div>
            {isLast ? (
                null
            ) : (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2
                w-0 h-0 border-x-[15px] border-x-transparent border-t-[13px] border-t-primary-400 z-10"></div>
            )}
        </div>
    )
}