const ReportResponse = () => {

    return (
        <div className="p-4">
            <div className="justify-center text-slate-950 text-xl font-bold leading-loose">
                바로 신고 및 대응
            </div>

            <div className="flex flex-col justify-start items-start w-full px-5 py-3.5 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60">
                <div className="w-full flex flex-row justify-between items-center">
                    <div className="text-slate-950 text-xl font-bold leading-loose">
                        상활별 가이드 바로가기
                    </div>
                    <button type="button"
                        aria-label="다음으로 이동">
                        <img src="icons/RightArrow-icon.svg" alt="오른쪽 화살표" />
                    </button>
                </div>

                <div className="justify-center text-gray-400 text-base font-normal leading-tight">
                    이미 사기를 당하셨나요?
                    <br />
                    버튼을 눌러 바로 신고 조치를 취할 수 있어요
                </div>
            </div>
        </div>
    )
}

export default ReportResponse;