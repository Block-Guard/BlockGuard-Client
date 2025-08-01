
//추후 api 연결 시, boolean 설문 별도 처리를 위해서 사용 예정
export type SurveyAnswersSendingFormat = Omit<SurveyAnswers, 'atmGuided'> & {
    atmGuided: boolean;
};

export interface StepConfig {
    key: keyof SurveyAnswers;
    isMultiple: boolean;
    isRequired: boolean;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

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
    appType: string;
    atmGuided: string;
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
