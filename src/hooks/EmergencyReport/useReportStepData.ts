import { useState, useEffect } from "react";
import {
  getEachReportStepApi,
  updateEachReportStepApi,
} from "../../apis/emergency";

export interface StepData {
  // Step 1
  reportReceived: boolean;
  secureEvidence: boolean;
  caseFiled: boolean;
  isEvidenceChecked: boolean;
  haveIdChecked: boolean;

  // Step 2
  isRequestedToStopPayment: boolean;

  // Step 3
  isBlockedBadApp: boolean;
  isRegisteredPersonalInformExposed: boolean;

  // Step 4
  isIssuedAccidentFactsConf: boolean;
  didWrittenSubmission: boolean;
  isIssuedAccidentFactsConfList: boolean;
  didClaimForRelief: boolean;
  hasBringRequiredDocs: boolean;
}

export interface StepActions {
  // Step 1
  setReportReceived: (value: boolean) => void;
  setSecureEvidence: (value: boolean) => void;
  setCaseFiled: (value: boolean) => void;
  setIsEvidenceChecked: (value: boolean) => void;
  setHaveIdChecked: (value: boolean) => void;

  // Step 2
  setIsRequestedToStopPayment: (value: boolean) => void;

  // Step 3
  setIsBlockedBadApp: (value: boolean) => void;
  setIsRegisteredPersonalInformExposed: (value: boolean) => void;

  // Step 4
  setIsIssuedAccidentFactsConf: (value: boolean) => void;
  setDidWrittenSubmission: (value: boolean) => void;
  setIsIssuedAccidentFactsConfList: (value: boolean) => void;
  setDidClaimForRelief: (value: boolean) => void;
  setHasBringRequiredDocs: (value: boolean) => void;
}

export const useReportStepData = (reportId: number, currentStep: number) => {
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

  // 서버에서 받아온 각 step의 완료 상태 추적
  const [serverCompletedSteps, setServerCompletedSteps] = useState<{
    [key: number]: boolean;
  }>({});

  // step 데이터 로드 함수
  const loadStepData = async (step: number) => {
    try {
      const response = await getEachReportStepApi(reportId, step);
      if (!response) return;

      // 서버에서 받아온 완료 상태 저장
      setServerCompletedSteps((prev) => ({
        ...prev,
        [step]: response.isCompleted || false,
      }));

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

  // 각 step 데이터 로드
  useEffect(() => {
    if (currentStep > 0) {
      loadStepData(currentStep);
    }
  }, [currentStep, reportId]);

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

  // step 데이터 저장 함수
  const saveStepData = async (step: number) => {
    const stepData = getCurrentStepData(step);
    await updateEachReportStepApi(
      reportId,
      step,
      stepData.checkBoxes,
      stepData.recommendedCheckBoxes,
      stepData.isCompleted
    );

    // 완료 상태를 서버에 저장했으므로 서버 완료 상태로 업데이트
    if (stepData.isCompleted) {
      setServerCompletedSteps((prev) => ({
        ...prev,
        [step]: true,
      }));
    }

    return stepData;
  };

  const stepData: StepData = {
    // Step 1
    reportReceived,
    secureEvidence,
    caseFiled,
    isEvidenceChecked,
    haveIdChecked,

    // Step 2
    isRequestedToStopPayment,

    // Step 3
    isBlockedBadApp,
    isRegisteredPersonalInformExposed,

    // Step 4
    isIssuedAccidentFactsConf,
    didWrittenSubmission,
    isIssuedAccidentFactsConfList,
    didClaimForRelief,
    hasBringRequiredDocs,
  };

  const stepActions: StepActions = {
    // Step 1
    setReportReceived,
    setSecureEvidence,
    setCaseFiled,
    setIsEvidenceChecked,
    setHaveIdChecked,

    // Step 2
    setIsRequestedToStopPayment,

    // Step 3
    setIsBlockedBadApp,
    setIsRegisteredPersonalInformExposed,

    // Step 4
    setIsIssuedAccidentFactsConf,
    setDidWrittenSubmission,
    setIsIssuedAccidentFactsConfList,
    setDidClaimForRelief,
    setHasBringRequiredDocs,
  };

  return {
    stepData,
    stepActions,
    serverCompletedSteps,
    getCurrentStepData,
    saveStepData,
  };
};
