
interface ReportCallItemProps {
    icon: string;
    text: string;
    phoneNumber:string;
}

export const ReportCallItem = ({ icon, text, phoneNumber }: ReportCallItemProps) => {
    return (
        <div className="w-full px-3 py-3 bg-blue-100 rounded-2xl outline-1 outline-offset-[-1px] outline-white/60 inline-flex justify-between items-center">
            <div className="w-9 h-9 mr-1.5 flex justify-center items-center bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(255,_255,_255,_0.70)_0%,_rgba(255,_255,_255,_0)_100%)] rounded-full">
                <img src={icon} alt="아이콘" className="w-7 h-7" />
            </div>

            <span className="w-[55%] inline-flex justify-start items-start text-slate-950 text-base font-bold leading-tight whitespace-nowrap text-ellipsis overflow-x-clip">
                {text}
            </span>

            <button className="px-2.5 py-2 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-2.5">
                <a href={`tel:${phoneNumber}`} className="text-center justify-center text-white text-sm font-medium leading-tight">
                    바로 걸기
                </a>
            </button>
        </div>
    )
}