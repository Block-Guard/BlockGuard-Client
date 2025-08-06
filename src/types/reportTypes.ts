export interface ReportPageProps {
  reportId: number;
  setCurrentStepCompleted: (value: boolean) => void;

  // 서버 완료 상태
  serverCompletedSteps: { [key: number]: boolean };
  currentStep: number;

  // Step 1 상태들
  reportReceived: boolean;
  setReportReceived: (value: boolean) => void;
  secureEvidence: boolean;
  setSecureEvidence: (value: boolean) => void;
  caseFiled: boolean;
  setCaseFiled: (value: boolean) => void;
  isEvidenceChecked: boolean;
  setIsEvidenceChecked: (value: boolean) => void;
  haveIdChecked: boolean;
  setHaveIdChecked: (value: boolean) => void;

  // Step 2 상태들
  isRequestedToStopPayment: boolean;
  setIsRequestedToStopPayment: (value: boolean) => void;

  // Step 3 상태들
  isBlockedBadApp: boolean;
  setIsBlockedBadApp: (value: boolean) => void;
  isRegisteredPersonalInformExposed: boolean;
  setIsRegisteredPersonalInformExposed: (value: boolean) => void;

  // Step 4 상태들
  isIssuedAccidentFactsConf: boolean;
  setIsIssuedAccidentFactsConf: (value: boolean) => void;
  isIssuedAccidentFactsConfList: boolean;
  setIsIssuedAccidentFactsConfList: (value: boolean) => void;
  didWrittenSubmission: boolean;
  setDidWrittenSubmission: (value: boolean) => void;
  didClaimForRelief: boolean;
  setDidClaimForRelief: (value: boolean) => void;
  hasBringRequiredDocs: boolean;
  setHasBringRequiredDocs: (value: boolean) => void;
}
