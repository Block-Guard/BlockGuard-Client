interface ApiBaseResponse {
  code: number;
  message: string;
}

// 이메일 중복 확인 api 응답
export interface CheckEmailResponse extends ApiBaseResponse {
  data: {
    duplicated: boolean;
  };
}

// 회원가입 api 응답
export interface SignUpResponse extends ApiBaseResponse {
  data: {
    userId: number;
  };
}

// 로그인 api 응답
export interface LoginResponse extends ApiBaseResponse {
  data: {
    userId: number;
    jwtToken: {
      grantType: string;
      accessToken: string;
      refreshToken: string;
    };
  };
}

// 진행중인 신고 현황 조회 api 응답
export interface InProgressReportResponse extends ApiBaseResponse {
  data: {
    reportId: number;
    step: number;
    createdAt: string;
  } | null;
}

// 신고현황 생성 api 응답
export interface CreateNewReportResponse extends ApiBaseResponse {
  data: {
    reportId: number;
    step: number;
    isCompleted: boolean;
    createdAt: string;
  };
}

// 특정 단계 정보 조회 및 수정 api 응답
export interface EachReportStepResponse extends ApiBaseResponse {
  data: {
    reportId: number;
    step: number;
    checkBoxes: boolean[];
    recommendedCheckBoxes: boolean[] | null;
    isCompleted: boolean;
    createdAt: string;
  };
}

export interface FruadAnalysisResponse extends ApiBaseResponse {
  data: {
    riskLevel: string;
    score: number;
    estimatedFraudType: string;
    keywords: string[];
    explanation: string;
  };
}
