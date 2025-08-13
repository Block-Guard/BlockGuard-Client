import { useNavigate } from "react-router-dom";
import RightArrowIcon from "../../assets/icons/arrow-right-darkblue-icon.svg";
import { createNewReportApi } from "../../apis/emergency";
import type { InProgressStepData } from "../../types/reportTypes";
import { formatDate, formatTime } from "../../utils/utils";

type Props = {
  inProgressStepData: InProgressStepData | null;
};

const ReportProgressCard = ({ inProgressStepData }: Props) => {
  const navigate = useNavigate();
  const progressPercentage =
    inProgressStepData && (inProgressStepData.step / 5) * 100;

  const inProgressDate = formatDate(inProgressStepData?.createdAt);
  const inProgressTime = formatTime(inProgressStepData?.createdAt);

  let currentStepTitle = "";

  switch (inProgressStepData?.step) {
    case 1:
      currentStepTitle = "신고접수";
      break;
    case 2:
      currentStepTitle = "계좌 지급정지 요청";
      break;
    case 3:
      currentStepTitle = "추가피해 방지";
      break;
    case 4:
      currentStepTitle = "피해구제 신청하기";
      break;
  }

  const onClickButton = async () => {
    if (!inProgressStepData) {
      try {
        const response = await createNewReportApi();
        console.log(response);
        navigate("/emergency/report-overview");
      } catch (error) {
        console.error("신고 현황 생성 실패 : ", error);
      }
    } else {
      navigate("/emergency/report-overview");
    }
  };

  return (
    <div
      className="flex flex-col justify-start items-start w-full px-5 py-4 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60"
      onClick={onClickButton}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-slate-950 text-xl font-bold leading-8">
          진행 중인 신고현황
        </div>
        <button type="button" aria-label="다음으로 이동">
          <img src={RightArrowIcon} alt="오른쪽 화살표" />
        </button>
      </div>
      {inProgressStepData ? (
        <>
          <div className="flex flex-row gap-2 leading-6 items-center">
            <span className="text-monochrome-500 font-normal">
              {inProgressDate}
            </span>
            <div className="w-[1px] h-[16px] bg-monochrome-400" />
            <span className="text-monochrome-500 font-normal">
              {inProgressTime}
            </span>
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
              {currentStepTitle}
            </div>
            <span className="font-bold text-[16px] text-monochrome-700">
              <span className="text-highlight-1">
                {inProgressStepData.step}
              </span>
              / 4단계
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
