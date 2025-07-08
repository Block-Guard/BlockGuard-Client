const currentProgress = 3;

const ReportResponse = () => {
  return (
    <div className="px-4">
      <div className="justify-center text-slate-950 text-xl font-bold leading-loose">
        긴급 신고 및 대응 현황
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col justify-start items-start w-full px-5 py-4 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1">
              <div className="text-slate-950 text-xl font-bold leading-8">
                긴급 신고/대응 바로가기
              </div>
              <img src="icons/Emergency-icon.svg" alt="긴급 신고 아이콘" />
            </div>

            <button type="button" aria-label="다음으로 이동">
              <img src="icons/RightArrow-icon.svg" alt="오른쪽 화살표" />
            </button>
          </div>

          <div className="justify-center text-gray-400 text-base font-normal leading-6">
            이미 사기를 당하셨나요?
            <br />
            버튼을 눌러 바로 신고 조치를 취할 수 있어요
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full px-5 py-4 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-slate-950 text-xl font-bold leading-8">
              진행 중인 신고현황
            </div>
            <button type="button" aria-label="다음으로 이동">
              <img src="icons/RightArrow-icon.svg" alt="오른쪽 화살표" />
            </button>
          </div>
          <div className="flex flex-row gap-2 leading-6 items-center">
            <span className="text-monochrome-500 font-normal">25.07.07</span>
            <div className="w-[1px] h-[16px] bg-monochrome-400" />
            <span className="text-monochrome-500 font-normal">16:22</span>
          </div>
          <div className="w-full relative my-[10px]">
            <div className="h-[5px] rounded-[90px] bg-monochrome-300" />
            <div
              className={`absolute left-0 top-0 w-${currentProgress}/4 h-[5px] bg-primary-400 rounded-[90px] z-10`}
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="bg-primary-400 rounded-3xl text-monochrome-100 py-[5px] px-[14px]">
              추가 피해 방지하기
            </div>
            <span className="font-bold text-[16px] text-monochrome-700">
              <span className="text-highlight-1">{currentProgress}</span>
              /4단계
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportResponse;
