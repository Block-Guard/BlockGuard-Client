import axiosInstance from "./axiosInstance";
import {
  type EditUserInfoResponse,
  type GetFraudRecordResponse,
  type GetUserInfoResponse,
} from "../types/api-types";
import type { EditUserInfoPayload } from "../types/user-info-types";
import { toast } from "sonner";

const USER_INFO_API = "users/me";
const UPDATE_USER_PW_API = "users/me/password";
const WITHDRAW_USER_API = "users/withdraw";
const FRAUD_RECORD_API = "/fraud-analysis"
// 회원정보 조회 api
export const getUserInfoApi = async () => {
  try {
    const response = await axiosInstance.get<GetUserInfoResponse>(
      USER_INFO_API,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      "마이페이지 진입 시 유저 정보 조회 실패:",
      error.response?.data || error.message
    );
  }
};

// 회원정보 수정 api
export const editUserInfoApi = async (payload: EditUserInfoPayload) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("birthDate", payload.birthDate);
  formData.append("phoneNumber", payload.phoneNumber);
  if (payload.profileImage)
    formData.append("profileImage", payload.profileImage);
  formData.append("isDefaultImage", String(payload.isDefaultImage));

  try {
    const response = await axiosInstance.put<EditUserInfoResponse>(
      USER_INFO_API,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data.message);
    return response.data.message;
  } catch (error: any) {
    console.error(
      "유저 정보 수정 실패:",
      error.response?.data || error.message
    );
  }
};

// 비밀번호 변경 api
export const updatePasswordApi = async (currentPwd: string, newPwd: string) => {
  try {
    const response = await axiosInstance.put<EditUserInfoResponse>(
      UPDATE_USER_PW_API,
      { currentPwd: currentPwd, newPwd: newPwd },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "유저 비밀번호 수정 실패:",
      error.response?.data || error.message
    );
  }
};

// 회원 탈퇴하기
export const withdrawUserApi = async () => {
  try {
    await axiosInstance.delete(WITHDRAW_USER_API);
    localStorage.clear();
    toast("계정 탈퇴 처리되었습니다.");
  } catch (error: any) {
    console.error("회원 탙퇴 실패:", error.response?.data || error.message);
  }
};

/** 사기분석 기록 리스트 조회 api */ 
export const getFraudRecordApi = async () => {
  try {
    const response = await axiosInstance.get<GetFraudRecordResponse>(
      FRAUD_RECORD_API,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      "사기분석 결과 리스트 조회 실패:",
      error.response?.data || error.message
    );
  }
};