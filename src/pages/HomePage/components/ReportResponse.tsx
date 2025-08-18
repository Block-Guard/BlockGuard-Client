import ReportProgressCard from "../../../components/ReportProgressCard/ReportProgressCard";
import SirenIcon from "../../../assets/icons/siren-icon.svg";
import RightArrowIcon from "../../../assets/icons/arrow-right-darkblue-icon.svg";
import { getInProgressReportApi } from "../../../apis/emergency";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { InProgressStepData } from "../../../types/reportTypes";

const ReportResponse = () => {
  const navigate = useNavigate();
  const [inProgressStepData, setInProgressStepData] =
    useState<InProgressStepData | null>(null);
  const [isLogined, setIsLogined] = useState(false);
  const getInProgressReportState = async () => {
    try {
      const response = await getInProgressReportApi();
      if (response !== undefined) {
        setInProgressStepData(response);
        setIsLogined(true);
      }
    } catch (error) {
      console.error("진행중인 신고 조회 실패 : ", error);
      setIsLogined(false);
    }
  };

  useEffect(() => {
    getInProgressReportState();
  }, []);

  return (
    <div className="mx-6">
      <div className="justify-center text-slate-950 text-xl font-bold leading-loose">
        긴급 신고 및 대응 현황
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col justify-start items-start w-full px-5 py-4 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60">
          <div
            className="w-full flex flex-row justify-between items-center"
            onClick={() => navigate("/emergency")}
          >
            <div className="flex flex-row gap-1">
              <img src={SirenIcon} alt="긴급 신고 아이콘" />
              <div className="text-slate-950 text-xl font-bold leading-8">
                긴급 신고/대응 바로가기
              </div>
            </div>

            <button type="button" aria-label="다음으로 이동">
              <img src={RightArrowIcon} alt="오른쪽 화살표" />
            </button>
          </div>

          <div className="justify-center text-gray-400 text-base font-normal leading-6">
            이미 사기를 당하셨나요?
            <br />
            버튼을 눌러 바로 신고 조치를 취할 수 있어요
          </div>
        </div>
        {isLogined && (
          <ReportProgressCard inProgressStepData={inProgressStepData} />
        )}
      </div>
    </div>
  );
};

export default ReportResponse;
