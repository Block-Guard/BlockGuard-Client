interface ReactingCardProps {
    icon: React.ReactNode;
    title: React.ReactNode;
    btnText: string;
    handleBtn: () => void;
}

const ReactingCard = ({ icon, title, btnText, handleBtn }: ReactingCardProps) => {

    return (
        <div className="flex flex-col justify-between items-center h-44 bg-white/50 rounded-xl border-[0.81px] border-white/60 px-2.5 pt-5.5 pb-2">

            <div>
                <div className="w-11 h-11 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(255,_255,_255,_0.73)_0%,_rgba(255,_255,_255,_0)_100%)] rounded-full">
                    {icon}
                </div>
            </div>

            <div className="text-center text-slate-950 text-base font-bold leading-tight">
                {title}
            </div>

            <button className="h-8 px-5 py-1.5 bg-blue-500 rounded-lg inline-flex justify-center items-center gap-2.5"
                onClick={handleBtn}>
                <div className="text-center text-white text-sm font-medium leading-tight">
                    {btnText}
                </div>
            </button>
        </div>
    )
}

export default ReactingCard;