import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn 함수: 조건부 클래스 병합 + tailwind 중복 제거
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}