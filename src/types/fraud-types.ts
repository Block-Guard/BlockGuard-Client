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

export type ScamType =
  | "기관 사칭형"
  | "대출 사기형"
  | "카드사 사칭형"
  | "가족/지인 사칭형"
  | "돌잔치 초대장형"
  | "모바일 청첩장형"
  | "부고 문자형"
  | "벌칙금/과태료 부과형"
  | "건강보험공단 사칭형"
  | "경찰 출석 요구형"
  | "국세청 사칭형"
  | "알바/부업 사기형"
  | "정부 지원금 위장형"
  | "택배 사기형"
  | "가상화폐 사기형"
  | "주식투자 사기형"
  | "청약 공모주 사기형"
  | "허위결제 사기형";

export interface FraudFeature {
  title: string;
  content: string;
}