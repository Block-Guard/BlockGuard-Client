import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cn 함수: 조건부 클래스 병합 + tailwind 중복 제거
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const maskPhoneNumber = (phone: string): string => {
  // 전화번호 형식이 010-1234-1234 형태라고 가정
  return phone.replace(/(\d{3})-(\d{2})\d{2}-(\d{2})\d{2}/, "$1-$2**-**$3");
};
