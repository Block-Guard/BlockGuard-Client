import Header from "../../../components/Header/Header";
import { getInProgressReportApi } from "../../../apis/emergency";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import Step1Img from "@/assets/report-guide/step1.png";
import Step2Img from "@/assets/report-guide/step2.png";
import Step3Img from "@/assets/report-guide/step3.png";
import Step4Img from "@/assets/report-guide/step4.png";
import ReportStepCard from "./components/ReportStepCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EmergencyReportOverviewPage = () => {
  const navigate = useNavigate();

  const [isLogined, setIsLogined] = useState(false);

  const [stepState, setStepState] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [inProgressStepData, setInProgressStepData] = useState({
    reportId: 0,
    step: 0,
  });

  const getInProgressReportState = async () => {
    try {
      const response = await getInProgressReportApi();
      console.log(response);
      if (response === null) {
        setInProgressStepData({ reportId: 0, step: 0 });
        setIsLogined(true);
      } else {
        setInProgressStepData({
          reportId: response!.reportId,
          step: response!.step,
        });
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

  useEffect(() => {
    switch (inProgressStepData.step) {
      case 1:
        setStepState({
          first: "진행 중",
          second: "미완료",
          third: "미완료",
          fourth: "미완료",
        });
        break;
      case 2:
        setStepState({
          first: "완료",
          second: "진행 중",
          third: "미완료",
          fourth: "미완료",
        });
        break;
      case 3:
        setStepState({
          first: "완료",
          second: "완료",
          third: "진행 중",
          fourth: "미완료",
        });
        break;
      case 4:
        setStepState({
          first: "완료",
          second: "완료",
          third: "완료",
          fourth: "진행 중",
        });
        break;
      default:
        setStepState({
          first: "미완료",
          second: "미완료",
          third: "미완료",
          fourth: "미완료",
        });
    }
  }, [inProgressStepData.reportId]);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate("/home")}
          />
        }
      />
      <div className="overflow-y-scroll pb-10 flex flex-col gap-8 px-6 mt-[72px]">
        <div className="relative">
          <h1
            className="text-monochrome-700 text-2xl font-bold leading-9"
            style={{
              wordBreak: "keep-all",
            }}
          >
            다음과 같은 순서대로 진행해주세요!
          </h1>
          {!isLogined && (
            <span className="absolute -bottom-5 left-0 text-sm text-[#A1A1A1]">
              *비회원은 신고기록이 자동 저장되지 않아요
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ReportStepCard
            reportId={inProgressStepData.reportId}
            step={1}
            title="신고 접수"
            desc="경찰청/금융감독원에 피해상황을 즉시 신고해주세요."
            img={Step1Img}
            progressState={stepState.first}
          />
          <ReportStepCard
            reportId={inProgressStepData.reportId}
            step={2}
            title="계좌 지급정지 요청"
            desc="경찰청/금융감독원에 피해상황을 즉시 신고해주세요."
            img={Step2Img}
            progressState={stepState.second}
          />
          <ReportStepCard
            reportId={inProgressStepData.reportId}
            step={3}
            title="추가 피해 방지하기"
            desc="명의도용 등 2차 피해를 방지하기 위해 개인정보 보호 조치를 취하세요"
            img={Step3Img}
            progressState={stepState.third}
          />
          <ReportStepCard
            reportId={inProgressStepData.reportId}
            step={4}
            title="피해 구제신청"
            desc="피해금 환급을 위한 피해구제신청을 요청하세요 "
            img={Step4Img}
            progressState={stepState.fourth}
          />
        </div>
      </div>
    </div>
  );
};

export default EmergencyReportOverviewPage;
