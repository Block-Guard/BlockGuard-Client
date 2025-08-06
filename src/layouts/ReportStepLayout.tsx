import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftArrowIcon from "../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../assets/icons/close-darkblue-icon.svg";
import UpArrowIcon from "../assets/icons/arrow-up-darkblue-icon.svg";
import Button from "../components/Button/Button";
import { useReportStepData } from "../hooks/EmergencyReport/useReportStepData";
import { useReportStepNavigation } from "../hooks/EmergencyReport/useReportStepNavigation";
import {
  useReportStepInfo,
  useReportStepCompletion,
} from "../hooks/EmergencyReport/useReportStepCompletion";

const ReportStepLayout = () => {
  const location = useLocation();
  const reportId = location.state.reportId;

  // URL에서 currentStep 정보 추출
  const { currentStep, stepTitle } = useReportStepInfo();

  // currentStep을 사용하여 데이터 로드
  const { stepData, stepActions, serverCompletedSteps, saveStepData } =
    useReportStepData(reportId, currentStep);

  // stepData를 포함하여 완료 상태 계산
  const { currentStepCompleted, setCurrentStepCompleted } =
    useReportStepCompletion(stepData, currentStep);

  const {
    mainRef,
    isReportCompleted,
    onClickScrollToTop,
    onClickPreviousButton,
    onClickCloseButton,
    onClickNextButton,
  } = useReportStepNavigation(reportId, currentStep, saveStepData);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Header
        title={
          <h1 className="flex flex-row gap-1 text-xl font-bold leading-[30px]">
            <div className="text-primary-400">STEP {currentStep}</div>
            {stepTitle}
          </h1>
        }
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={onClickPreviousButton}
          />
        }
        rightChild={
          <img
            src={CloseIcon}
            alt="긴급 신고 가이드 닫기"
            onClick={onClickCloseButton}
          />
        }
        bgColor="#fff"
      />
      <div className="fixed w-full mt-[65px] z-51">
        <div className="h-[5px] bg-monochrome-300" />
        <div
          className="absolute left-0 top-0 rounded-r-[90px] h-[5px] bg-primary-400 z-10 transition-all duration-300"
          style={{
            width: isReportCompleted ? "100%" : `${(currentStep / 5) * 100}%`,
          }}
        />
      </div>
      <main
        ref={mainRef}
        className="relative h-[calc(100vh-71px)] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar mt-[71px]"
      >
        <Outlet
          context={{
            reportId,
            setCurrentStepCompleted,
            // 서버 완료 상태
            serverCompletedSteps,
            currentStep,
            // Step 데이터와 액션들
            ...stepData,
            ...stepActions,
          }}
        />
      </main>
      <div
        className="absolute bottom-0 w-full px-6 pt-6 pb-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      >
        <div className="flex flex-col gap-5">
          <div
            className="w-fit p-2 self-end bg-monochrome-100 rounded-[50%]"
            style={{ boxShadow: "0px 0px 5.714px 0px rgba(0, 0, 0, 0.25)" }}
            onClick={onClickScrollToTop}
          >
            <img src={UpArrowIcon} alt="맨위로" />
          </div>
          <Button
            onClick={() => onClickNextButton(currentStepCompleted)}
            disabled={!currentStepCompleted}
          >
            {currentStep === 4 ? "완료" : "다음 단계"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportStepLayout;
