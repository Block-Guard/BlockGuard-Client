export interface UserInfoType {
  email: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
  profileImageUrl: string | null;
}

// 회원 정보 수정 form data 타입
export interface EditUserInfoPayload {
  name: string;
  birthDate: string;
  phoneNumber: string;
  profileImage?: File | null; // 선택
}
