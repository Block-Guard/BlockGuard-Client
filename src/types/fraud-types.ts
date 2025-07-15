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

export interface StepConfig {
    key: keyof SurveyAnswers;
    isMultiple: boolean;
    isRequired: boolean;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';