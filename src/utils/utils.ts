import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// cn 함수: 조건부 클래스 병합 + tailwind 중복 제거
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const maskPhoneNumber = (phone: string): string => {
  // 전화번호 형식이 010-1234-1234 형태라고 가정
  return phone.replace(/(\d{3})-(\d{2})\d{2}-(\d{2})\d{2}/, "$1-$2**-**$3");
};

dayjs.extend(utc);
dayjs.extend(timezone);

const toMsIso = (iso?: string) =>
  iso ? iso.replace(/\.(\d{3})\d+$/, ".$1") : iso;

export const formatDate = (iso?: string) => {
  if (!iso) return "";
  const d = dayjs.utc(toMsIso(iso)).tz("Asia/Seoul");
  return d.isValid() ? d.format("YY.MM.DD") : "";
};

export const formatTime = (iso?: string) => {
  if (!iso) return "";
  const d = dayjs.utc(toMsIso(iso)).tz("Asia/Seoul");
  return d.isValid() ? d.format("HH:mm") : "";
};
