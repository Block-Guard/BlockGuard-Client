import RightArrowIcon from "../../../../assets/icons/arrow-right-darkblue-sm-icon.svg";

type Props = {
  step: number;
  title: string;
  desc: string;
  img: string;
  progressState: string;
};

const ReportStepCard = ({ step, title, desc, img, progressState }: Props) => {
  // 진행상태는 로직 만들 예정
  return (
    <div className="relative flex flex-col justify-between w-full min-h-60 max-w-80 bg-primary-100 rounded-2xl p-[11px] pt-[14px]">
      <div className="flex flex-col gap-[3px] z-10">
        <div className="flex flex-row items-center justify-between">
          <span className="text-primary-400 text-[12px] font-semibold">
            STEP {step}
          </span>
          <img className="w-[5px]" src={RightArrowIcon} alt="화살표" />
        </div>
        <h2 className="text-monochrome-700 text-[18px] font-bold leading-[30px]">
          {title}
        </h2>
        <span
          className="text-monochrome-500 font-medium text-[14px] leading-5"
          style={{ wordBreak: "keep-all" }}
        >
          {desc}
        </span>
      </div>
      <span className="w-fit py-[3px] px-2 bg-monochrome-400 text-monochrome-100 rounded-[90px] z-10">
        {progressState}
      </span>
      <img
        className="absolute w-[125px] right-0 bottom-0"
        src={img}
        alt="첫 번째 단계"
      />
    </div>
  );
};

export default ReportStepCard;
