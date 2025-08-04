import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { getStepFromUrl, getTitleFromUrl } from "../utils/emergencyReport";
import LeftArrowIcon from "../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../assets/icons/close-darkblue-icon.svg";
import UpArrowIcon from "../assets/icons/arrow-up-darkblue-icon.svg";
import Button from "../components/Button/Button";
import {
  getEachReportStepApi,
  updateEachReportStepApi,
} from "../apis/emergency";

const ReportStepLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reportId = location.state.reportId;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepTitle, setStepTitle] = useState<string>("");
  const [currentStepCompleted, setCurrentStepCompleted] =
    useState<boolean>(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isReportCompleted, setIsReportCompleted] = useState(false);

  // Step 1 상태들
  const [reportReceived, setReportReceived] = useState(false);
  const [secureEvidence, setSecureEvidence] = useState(false);
  const [caseFiled, setCaseFiled] = useState(false);
  const [isEvidenceChecked, setIsEvidenceChecked] = useState(false);
  const [haveIdChecked, setHaveIdChecked] = useState(false);

  // Step 2 상태들
  const [isRequestedToStopPayment, setIsRequestedToStopPayment] =
    useState(false);

  // Step 3 상태들
  const [isBlockedBadApp, setIsBlockedBadApp] = useState(false);
  const [
    isRegisteredPersonalInformExposed,
    setIsRegisteredPersonalInformExposed,
  ] = useState(false);

  // Step 4 상태들
  const [isIssuedAccidentFactsConf, setIsIssuedAccidentFactsConf] =
    useState(false);
  const [didWrittenSubmission, setDidWrittenSubmission] = useState(false);
  const [isIssuedAccidentFactsConfList, setIsIssuedAccidentFactsConfList] =
    useState(false);
  const [didClaimForRelief, setDidClaimForRelief] = useState(false);
  const [hasBringRequiredDocs, setHasBringRequiredDocs] = useState(false);

  useEffect(() => {
    const step = getStepFromUrl(location.pathname);
    const title = getTitleFromUrl(location.pathname);
    setCurrentStep(step);
    setStepTitle(title);
  }, [location]);

  // 각 step 데이터 로드
  useEffect(() => {
    if (currentStep > 0) {
      loadStepData(currentStep);
    }
  }, [currentStep, reportId]);

  // 각 step별 완료 상태 계산
  useEffect(() => {
    switch (currentStep) {
      case 1:
        setCurrentStepCompleted(reportReceived && secureEvidence && caseFiled);
        break;
      case 2:
        setCurrentStepCompleted(isRequestedToStopPayment);
        break;
      case 3:
        setCurrentStepCompleted(
          isBlockedBadApp && isRegisteredPersonalInformExposed
        );
        break;
      case 4:
        setCurrentStepCompleted(
          isIssuedAccidentFactsConf && didWrittenSubmission
        );
        break;
      default:
        setCurrentStepCompleted(false);
    }
  }, [
    currentStep,
    reportReceived,
    secureEvidence,
    caseFiled,
    isRequestedToStopPayment,
    isBlockedBadApp,
    isRegisteredPersonalInformExposed,
    isIssuedAccidentFactsConf,
    didWrittenSubmission,
  ]);

  // step 데이터 로드 함수
  const loadStepData = async (step: number) => {
    try {
      const response = await getEachReportStepApi(reportId, step);
      if (!response) return;
      switch (step) {
        case 1:
          setReportReceived(response.checkBoxes[0] || false);
          setSecureEvidence(response.checkBoxes[1] || false);
          setCaseFiled(response.checkBoxes[2] || false);
          if (response.recommendedCheckBoxes) {
            setIsEvidenceChecked(response.recommendedCheckBoxes[0] || false);
            setHaveIdChecked(response.recommendedCheckBoxes[1] || false);
          }
          break;
        case 2:
          setIsRequestedToStopPayment(response.checkBoxes[0] || false);
          break;
        case 3:
          setIsBlockedBadApp(response.checkBoxes[0] || false);
          setIsRegisteredPersonalInformExposed(response.checkBoxes[1] || false);
          break;
        case 4:
          setIsIssuedAccidentFactsConf(response.checkBoxes[0] || false);
          setDidWrittenSubmission(response.checkBoxes[1] || false);
          if (response.recommendedCheckBoxes) {
            setIsIssuedAccidentFactsConfList(
              response.recommendedCheckBoxes[0] || false
            );
            setDidClaimForRelief(response.recommendedCheckBoxes[1] || false);
            setHasBringRequiredDocs(response.recommendedCheckBoxes[2] || false);
          }
          break;
      }
    } catch (error) {
      console.error(`Step ${step} 데이터 로딩 실패:`, error);
    }
  };

  // 현재 step 데이터를 API 형식으로 구성하는 함수
  const getCurrentStepData = (step: number) => {
    switch (step) {
      case 1:
        return {
          checkBoxes: [reportReceived, secureEvidence, caseFiled],
          recommendedCheckBoxes: [isEvidenceChecked, haveIdChecked],
          isCompleted: reportReceived && secureEvidence && caseFiled,
        };
      case 2:
        return {
          checkBoxes: [isRequestedToStopPayment],
          recommendedCheckBoxes: [],
          isCompleted: isRequestedToStopPayment,
        };
      case 3:
        return {
          checkBoxes: [isBlockedBadApp, isRegisteredPersonalInformExposed],
          recommendedCheckBoxes: [],
          isCompleted: isBlockedBadApp && isRegisteredPersonalInformExposed,
        };
      case 4:
        return {
          checkBoxes: [isIssuedAccidentFactsConf, didWrittenSubmission],
          recommendedCheckBoxes: [
            isIssuedAccidentFactsConfList,
            didClaimForRelief,
            hasBringRequiredDocs,
          ],
          isCompleted: isIssuedAccidentFactsConf && didWrittenSubmission,
        };
      default:
        return {
          checkBoxes: [],
          recommendedCheckBoxes: [],
          isCompleted: false,
        };
    }
  };

  const onClickScrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onClickPreviousButton = async () => {
    try {
      // 현재 step 데이터 저장 (미완료 상태로)
      const stepData = getCurrentStepData(currentStep);
      await updateEachReportStepApi(
        reportId,
        currentStep,
        stepData.checkBoxes,
        stepData.recommendedCheckBoxes,
        stepData.isCompleted
      );
      if (currentStep === 1) {
        navigate("/emergency/report-overview");
      } else {
        navigate(`/emergency/report-step/${currentStep - 1}`, {
          state: { reportId: reportId },
        });
      }

      setCurrentStepCompleted(false);
    } catch (error) {
      console.error("이전 단계 이동 중 데이터 저장 실패:", error);
      // 에러가 발생해도 이전 단계로 이동
      if (currentStep === 1) {
        navigate("/emergency/report-overview");
      } else {
        navigate(`/emergency/report-step/${currentStep - 1}`, {
          state: { reportId: reportId },
        });
      }

      setCurrentStepCompleted(false);
    }
  };

  const onClickCloseButton = async () => {
    try {
      // 현재 step 데이터 저장 (미완료 상태로)
      const stepData = getCurrentStepData(currentStep);
      await updateEachReportStepApi(
        reportId,
        currentStep,
        stepData.checkBoxes,
        stepData.recommendedCheckBoxes,
        stepData.isCompleted
      );
      navigate("/emergency/report-overview");
    } catch (error) {
      console.error("신고 가이드 닫기 중 데이터 저장 실패:", error);
      // 에러가 발생해도 페이지 이동
      navigate("/emergency/report-overview");
    }
  };

  const onClickNextButton = async () => {
    try {
      // 현재 step 데이터 저장
      const stepData = getCurrentStepData(currentStep);
      await updateEachReportStepApi(
        reportId,
        currentStep,
        stepData.checkBoxes,
        stepData.recommendedCheckBoxes,
        stepData.isCompleted
      );

      if (currentStep === 4) {
        setIsReportCompleted(true);
        const timer = setTimeout(() => {
          navigate("/emergency/report-completion");
        }, 500);
        return () => clearTimeout(timer);
      } else {
        navigate(`/emergency/report-step/${currentStep + 1}`, {
          state: { reportId: reportId },
        });
        setCurrentStepCompleted(false);
      }
    } catch (error) {
      console.error("현재 단계 데이터 저장 실패:", error);
      if (currentStep === 4) {
        setIsReportCompleted(true);
        setTimeout(() => {
          navigate("/emergency/report-completion");
        }, 500);
      } else {
        navigate(`/emergency/report-step/${currentStep + 1}`, {
          state: { reportId: reportId },
        });
        setCurrentStepCompleted(false);
      }
    }
  };

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
            // Step 1 상태들
            reportReceived,
            setReportReceived,
            secureEvidence,
            setSecureEvidence,
            caseFiled,
            setCaseFiled,
            isEvidenceChecked,
            setIsEvidenceChecked,
            haveIdChecked,
            setHaveIdChecked,
            // Step 2 상태들
            isRequestedToStopPayment,
            setIsRequestedToStopPayment,
            // Step 3 상태들
            isBlockedBadApp,
            setIsBlockedBadApp,
            isRegisteredPersonalInformExposed,
            setIsRegisteredPersonalInformExposed,
            // Step 4 상태들
            isIssuedAccidentFactsConf,
            setIsIssuedAccidentFactsConf,
            isIssuedAccidentFactsConfList,
            setIsIssuedAccidentFactsConfList,
            didWrittenSubmission,
            setDidWrittenSubmission,
            didClaimForRelief,
            setDidClaimForRelief,
            hasBringRequiredDocs,
            setHasBringRequiredDocs,
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
          <Button onClick={onClickNextButton} disabled={!currentStepCompleted}>
            {currentStep === 4 ? "완료" : "다음 단계"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportStepLayout;
