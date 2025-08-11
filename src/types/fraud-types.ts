export type AnswerValue = string | string[] | File[];

export type SurveyAnswers = {
  [key: string]: AnswerValue | undefined;
};

export type FraudSurveyContextType = {
  allAnswers: SurveyAnswers;
  updateAnswers: (newAnswer: Partial<SurveyAnswers>) => void;
  progress: number;
};

/** 사기 분석 api가 문자열 + 이미지(옵션)으로 변경 */
export interface stringSurveyData {
    contactMethod: string;
    counterpart: string;
    requestedAction: string[];
    requestedInfo: string[];

    // 추가, 변경된 설문
    LinkType: string;
    pressuredInfo: boolean;
    appOrLinkRequest: boolean;
    thirdPartyConnect: boolean;
    authorityPressure: boolean;
    accountOrLinkRequest: boolean;

    suspiciousLinks: string;
    suspiciousPhoneNumbers: string;
    messageContent: string;
    additionalDescription: string;
}

export interface FraudResultData {
    riskLevel: string;
    score: number;
    estimatedFraudType: string;
    keywords: string[];
    explanation: string;
    // recommendedAction: string;
}