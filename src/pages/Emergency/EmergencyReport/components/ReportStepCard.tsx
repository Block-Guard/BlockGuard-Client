import { useEffect, useState } from "react";
import RightArrowIcon from "../../../../assets/icons/arrow-right-darkblue-sm-icon.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  step: number;
  title: string;
  desc: string;
  img: string;
  progressState: string;
};

const ReportStepCard = ({ step, title, desc, img, progressState }: Props) => {
  const navigate = useNavigate();
  const [progressStateBg, setProgressStateBg] = useState(progressState);
  useEffect(() => {
    switch (progressState) {
      case "미완료":
        setProgressStateBg("#D9D9D9");
        break;
      case "완료":
        setProgressStateBg("#437EFC");
        break;
      case "진행 중":
        setProgressStateBg("#40D479");
        break;
      default:
        return;
    }
  }, [progressState]);

  // 진행상태는 로직 만들 예정
  const onClickToReportStep = () => {
    if (step !== 1 && progressState === "미완료") return;
    navigate(`/emergency/report-step/${step}`);
  };
  return (
    <div
      className="relative flex flex-col justify-between w-full min-h-60 max-w-80 bg-primary-100 rounded-2xl p-[11px] pt-[14px]"
      onClick={onClickToReportStep}
    >
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
      <span
        className="w-fit py-[3px] px-[9px] text-[12px] font-semibold text-monochrome-100 rounded-[90px] z-10 text-center "
        style={{ background: `${progressStateBg}` }}
      >
        {progressState}
      </span>
      <img
        className="absolute w-[125px] right-0 bottom-0"
        src={img}
        alt="단계별 이미지"
      />
    </div>
  );
};

export default ReportStepCard;
