interface FeatureCardProps{
    title: string;
    description: string;
}

export const FeatureCard = ({title, description}:FeatureCardProps) => {
    return (
        <div className="w-full p-3.5 bg-gray-100 rounded-[10px] inline-flex flex-col justify-start items-start gap-[5px]">
            <div className="text-center justify-start text-blue-500 text-lg font-bold leading-relaxed">
                개인정보 및 금전이체 요구
                {title}
            </div>
            <div className="text-slate-950 text-base font-medium leading-normal">
                휴대폰 고장, 카드분실 등의 긴급한 사정을 이유로 <br />
                급전 요청이나 개인정보를 요구해요
                {description}
            </div>
        </div>
    )
}