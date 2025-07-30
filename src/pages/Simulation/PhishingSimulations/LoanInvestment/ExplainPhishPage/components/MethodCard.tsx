interface MethodUpCardProps {
    text: string;
    isFirst: boolean;
    isLast: boolean;
}

export const MethodCard = ({ text, isFirst, isLast }: MethodUpCardProps) => {
    return (
        <div className="relative">
            {isFirst ? (
                null
            ) : (
                <div className="absolute top-0 left-1/2 -translate-x-1/2
                w-0 h-0 border-x-[31px] border-x-transparent border-t-[17px] border-t-white"></div>
            )}
            <div className="flex justify-center items-center text-center w-full h-14 bg-primary-400 rounded-[10px]">
                <span className="text-white text-lg font-semibold leading-relaxed">
                    {text}
                </span>
            </div>
            {isLast ? (
                null
            ) : (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2
                w-0 h-0 border-x-[31px] border-x-transparent border-t-[17px] border-t-primary-400 z-10"></div>
            )}
        </div>
    )
}