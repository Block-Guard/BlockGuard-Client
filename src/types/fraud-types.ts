import type { NavigateFunction } from "react-router-dom";

export interface SurveyAnswers {
    contactMethod?: string;              // 설문1 - 단일 선택
    counterpart?: string;                // 설문2 - 단일 선택  
    requestedAction?: string[];          // 설문3 - 다중 선택
    requestedInfo?: string[];            // 설문4 - 다중 선택
    appType?: string;                    // 설문5 - 단일 선택 (선택사항)
    atmGuided?: string;                 // 설문6 - 단일 선택 (선택사항)
    suspiciousLinks?: string[];          // 설문7 - 다중 선택 (선택사항)
    suspiciousPhoneNumbers?: string[];   // 설문7 - 다중 선택 (선택사항)
    imageUrls?: string[];                // 설문8 - 다중 선택 (선택사항)
    messageContent?: string;             // 설문8 - 단일 선택 (선택사항)
    additionalDescription?: string;      // 설문9 - 단일 선택 (선택사항)
}

//추후 api 연결 시, boolean 설문 별도 처리를 위해서 사용 예정
export type SurveyAnswersSendingFormat = Omit<SurveyAnswers, 'atmGuided'> & {
    atmGuided: boolean;
};


export interface OutletContext {
  surveyInfo: FraudSurveyInfo;
}

export interface StepConfig {
    key: keyof SurveyAnswers;
    isMultiple: boolean;
    isRequired: boolean;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';


interface FraudSurveyState {
    currentStepAnswers: string[];
    status: Status;
    progress: number;
    answers: SurveyAnswers;
}

interface FraudSurveyActions {
    // 답변 선택 관련
    toggleAnswer: (answer: string) => void;
    setSingleAnswer: (answer: string) => void;
    setCurrentStepAnswers: (answers: string[]) => void; // 직접 설정 (텍스트 입력 등)
    
    // 진행 관련
    recordAnswerAndProceed: (navigate: NavigateFunction) => void;
    goToStep: (step: number) => void; // 특정 단계로 이동
    
    // 제출 관련
    submitAnswer: () => Promise<void>;
    
    // 유틸리티
    reset: () => void;
    validateCurrentStep: () => boolean; // 현재 단계 검증
    getAnswerForStep: (step: number) => string | string[] | undefined; // 특정 단계 답변 조회
}

export type FraudSurveyInfo = FraudSurveyState & FraudSurveyActions;
