import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import Step1Img from "../../../assets/report-guide/step1.svg";
import Step2Img from "../../../assets/report-guide/step2.svg";
import Step3Img from "../../../assets/report-guide/step3.svg";
import Step4Img from "../../../assets/report-guide/step4.svg";
import ReportStepCard from "./components/ReportStepCard";
import { useNavigate } from "react-router-dom";

const EmergencyReportOverviewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate("/emergency")}
          />
        }
      />
      <div className="overflow-y-scroll pb-10 flex flex-col gap-7 px-6 mt-[72px]">
        <h1
          className="text-monochrome-700 text-2xl font-bold leading-9"
          style={{
            wordBreak: "keep-all",
          }}
        >
          다음과 같은 순서대로 진행해주세요!
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <ReportStepCard
            step={1}
            title="신고 접수"
            desc="경찰청/금융감독원에 피해상황을 즉시 신고해주세요."
            img={Step1Img}
            progressState="미완료"
          />
          <ReportStepCard
            step={2}
            title="계좌 지급정지 요청"
            desc="경찰청/금융감독원에 피해상황을 즉시 신고해주세요."
            img={Step2Img}
            progressState="완료"
          />
          <ReportStepCard
            step={3}
            title="추가 피해 방지하기"
            desc="명의도용 등 2차 피해를 방지하기 위해 개인정보 보호 조치를 취하세요"
            img={Step3Img}
            progressState="진행 중"
          />
          <ReportStepCard
            step={4}
            title="피해 구제신청"
            desc="피해금 환급을 위한 피해구제신청을 요청하세요 "
            img={Step4Img}
            progressState="미완료"
          />
        </div>
      </div>
    </div>
  );
};

export default EmergencyReportOverviewPage;
