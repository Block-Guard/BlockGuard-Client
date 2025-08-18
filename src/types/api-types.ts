import type { NOKInfoType } from "./nok-info-types";

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

// 아이디 찾기 api 응답
export interface FindIdResponse extends ApiBaseResponse {
  data: {
    email: string;
  };
}

// 진행중인 신고 현황 조회 api 응답
export interface InProgressReportResponse extends ApiBaseResponse {
  data: {
    reportId: number;
    step: number;
    updatedAt: string;
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

/** 사기 분석 api 응답  */
export interface FruadAnalysisResponse extends ApiBaseResponse {
  data: {
    riskLevel: string;
    score: number;
    estimatedFraudType: string;
    keywords: string[];
    explanation: string;
  };
}

/** 홈페이지 전화번호, url 분석 api 응답 */
export interface UrlNumAnalysisResponse extends ApiBaseResponse {
  data: {
    riskLevel: string;
  };
}

// 마이페이지 유저 정보 조회
export interface GetUserInfoResponse extends ApiBaseResponse {
  data: {
    email: string;
    name: string;
    birthDate: string;
    phoneNumber: string;
    profileImageUrl: string | null;
  };
}

// 유저 정보 / 비밀번호 변경 수정
export interface EditUserInfoResponse extends ApiBaseResponse {
  data: null;
}

interface FraudRecordItem {
  fraudAnalysisRecordId :number;
	estimatedFraudType:string;
	riskLevel:string;
	analyzedAt: string;
}

export interface GetFraudRecordResponse extends ApiBaseResponse {
  data: FraudRecordItem [];
}

/** 뉴스 목록 조회 API 응답 중 뉴스 데이터 타입*/
export interface NewsItem {
  id: number;
  title: string;
  publishedAt: string;
  url: string;
  newspaper: string;
  imageUrl: string | null;
}

/** 뉴스 목록 조회 API 응답 */
export interface NewsListResponse extends ApiBaseResponse {
  data: {
    news: NewsItem[];
    pageableInfo: {
      page: number;
      size: number;
      totalElements: number;
      totalPages: number;
    };
    sort: string;
  };
}

/** 뉴스 목록 조회 API 응답 */
export interface SelectedNewsResponse extends ApiBaseResponse {
  data: NewsItem[];
  // data: {
  //   news: NewsItem[]
  // }
}

// 보호자 등록 api 응답
export interface CreateNewGuardianResponse extends ApiBaseResponse {
  data: NOKInfoType & { createdAt: string };
}

// 보호자 조회 api 응답
export interface GetGuardiansListResponse extends ApiBaseResponse {
  data: { guardians: NOKInfoType[] };
}
