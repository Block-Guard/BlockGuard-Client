import { useNavigate } from "react-router-dom";
import ReportProgressCard from "../../../components/ReportProgressCard/ReportProgressCard";
import EmergencyResponseStart from "./components/EmergencyResponseStart";
import OrganCard from "./components/OrganCard";
import QuickReportCard from "./components/QuickReportCard";
import { dummyOrgan } from "../organList";
import { useEffect, useState } from "react";
import { getInProgressReportApi } from "../../../apis/emergency";

const EmergencyMainPage = () => {
  const navigate = useNavigate();
  const [inProgressStepData, setInProgressStepData] = useState({
    reportId: 0,
    step: 0,
  });
  const [isLogined, setIsLogined] = useState(false);

  const getInProgressReportState = async () => {
    try {
      const response = await getInProgressReportApi();
      if (response === null) {
        setInProgressStepData({ reportId: 0, step: 0 });
      } else {
        setInProgressStepData({
          reportId: response!.reportId,
          step: response!.step,
        });
      }
      setIsLogined(true);
    } catch (error) {
      console.error("진행중인 신고 조회 실패 : ", error);
      setIsLogined(false);
    }
  };

  useEffect(() => {
    getInProgressReportState();
  }, []);

  const onClickToOrganList = () => {
    navigate("/emergency/organ-list");
  };
  return (
    <div className="px-6 mb-10">
      <h1 className="font-bold text-2xl leading-9 mt-1 mb-4">긴급대응</h1>
      <div className="flex flex-col gap-8">
        <EmergencyResponseStart inProgressStep={inProgressStepData.step} />
        {isLogined && (
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-bold text-xl leading-8">나의 신고 현황</h2>
            <ReportProgressCard
              hasProgress={Boolean(inProgressStepData.reportId)}
              currentStep={inProgressStepData.step}
            />
          </div>
        )}

        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-bold text-xl leading-8">바로 신고</h2>
            <p className="font-normal text-[16px] text-monochrome-500 leading-6">
              꼭 필요한 상황에만 걸어주세요!
            </p>
          </div>
          <QuickReportCard title="경찰서 (112)" />
          <QuickReportCard title="금융감독원 (1132)" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-bold text-xl leading-8">
              보이스피싱 대응기관들
            </h2>
            <p
              className="text-sm text-monochrome-400"
              onClick={onClickToOrganList}
            >
              전체보기
            </p>
          </div>
          <div className="grid grid-rows-2 grid-flow-col overflow-x-scroll gap-[10px] pb-3">
            {dummyOrgan.map((item, index) => {
              const bgColor = index % 2 === 0 ? "#EEF1F3" : "#F1F4FF";
              return (
                <OrganCard key={item.id} organData={item} bgColor={bgColor} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyMainPage;
