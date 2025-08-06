import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStepFromUrl, getTitleFromUrl } from "../../utils/emergencyReport";

// URL에서 step 정보만 추출하는 훅
export const useReportStepInfo = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepTitle, setStepTitle] = useState<string>("");

  useEffect(() => {
    const step = getStepFromUrl(location.pathname);
    const title = getTitleFromUrl(location.pathname);
    setCurrentStep(step);
    setStepTitle(title);
  }, [location]);

  return { currentStep, stepTitle };
};

// 완료 상태만 계산하는 훅
export const useReportStepCompletion = (stepData: any, currentStep: number) => {
  const [currentStepCompleted, setCurrentStepCompleted] =
    useState<boolean>(false);

  // 각 step별 완료 상태 계산
  useEffect(() => {
    switch (currentStep) {
      case 1:
        setCurrentStepCompleted(
          stepData.reportReceived &&
            stepData.secureEvidence &&
            stepData.caseFiled
        );
        break;
      case 2:
        setCurrentStepCompleted(stepData.isRequestedToStopPayment);
        break;
      case 3:
        setCurrentStepCompleted(
          stepData.isBlockedBadApp && stepData.isRegisteredPersonalInformExposed
        );
        break;
      case 4:
        setCurrentStepCompleted(
          stepData.isIssuedAccidentFactsConf && stepData.didWrittenSubmission
        );
        break;
      default:
        setCurrentStepCompleted(false);
    }
  }, [
    currentStep,
    stepData.reportReceived,
    stepData.secureEvidence,
    stepData.caseFiled,
    stepData.isRequestedToStopPayment,
    stepData.isBlockedBadApp,
    stepData.isRegisteredPersonalInformExposed,
    stepData.isIssuedAccidentFactsConf,
    stepData.didWrittenSubmission,
  ]);

  return {
    currentStepCompleted,
    setCurrentStepCompleted,
  };
};
