const NewsLinesItem = () => {

    return (
        <div className="flex flex-col min-w-60 min-h-40 bg-gray-100 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 justify-start items-center overflow-hidden">
            <img className="self-stretch h-40 rounded-tl-[20px] rounded-tr-[20px]" src="https://placehold.co/400x256" />

            <div className="flex flex-col justify-between items-start pt-2.5 pl-3 pr-3 pb-4">
                <div className="h-11 text-slate-950 text-base font-bold leading-snug">
                    고령층 보이스피싱에 16억 피해사례 드러나…KB, 보안체계 허점
                </div>

                <div className="text-gray-500 text-[10px] font-normal">
                    시간 정보 | 신문사 | 조회수
                </div>
            </div>
        </div>
    )
}

export default NewsLinesItem;