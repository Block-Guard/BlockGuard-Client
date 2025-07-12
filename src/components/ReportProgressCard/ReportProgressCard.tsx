import RightArrowIcon from "../../assets/icons/arrow-right-darkblue-icon.svg";

type Props = {
  hasProgress: boolean;
  currentProgress: number;
  totalProgress: number;
};

const ReportProgressCard = ({
  hasProgress,
  currentProgress,
  totalProgress,
}: Props) => {
  const progressPercentage = (currentProgress / totalProgress) * 100;

  return (
    <div className="flex flex-col justify-start items-start w-full px-5 py-4 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-slate-950 text-xl font-bold leading-8">
          진행 중인 신고현황
        </div>
        <button type="button" aria-label="다음으로 이동">
          <img src={RightArrowIcon} alt="오른쪽 화살표" />
        </button>
      </div>
      {hasProgress ? (
        <>
          <div className="flex flex-row gap-2 leading-6 items-center">
            <span className="text-monochrome-500 font-normal">25.07.07</span>
            <div className="w-[1px] h-[16px] bg-monochrome-400" />
            <span className="text-monochrome-500 font-normal">16:22</span>
          </div>
          <div className="w-full relative my-[10px]">
            <div className="h-[5px] rounded-[90px] bg-monochrome-300" />
            <div
              className="absolute left-0 top-0 h-[5px] bg-primary-400 rounded-[90px] z-10"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="bg-primary-400 rounded-3xl text-monochrome-100 py-[5px] px-[14px]">
              추가 피해 방지하기
            </div>
            <span className="font-bold text-[16px] text-monochrome-700">
              <span className="text-highlight-1">{currentProgress}</span>/
              {totalProgress}단계
            </span>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col gap-[10px]">
          <span className="text-monochrome-500 font-normal text-[18px]">
            클릭하여 긴급 신고대응 시작하기
          </span>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="bg-monochrome-400 rounded-3xl text-monochrome-100 py-[5px] px-[14px]">
              현재 없음
            </div>
            <span className="font-bold text-[16px] text-monochrome-400">
              0/4단계
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportProgressCard;
