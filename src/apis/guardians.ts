import type { GuardiansListResponse, ApiBaseResponse  } from "../types/api-types";
import axiosInstance from "./axiosInstance";
import axios from "axios";

const GUARDIANS_API = "guardians";

/**  등록된 보호자 리스트 조회 api */
export const getGuardiansListApi = async () => {
  try {
    const response = await axiosInstance.get<GuardiansListResponse>(
      GUARDIANS_API,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
     if (axios.isAxiosError(error)) {
            console.error("등록된 보호자 정보 조회 실패:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "등록된 보호자 정보 조회 중 오류 발생:"); // 서버 문제(500 등)만 throw
        }
        throw error;
  }
};

/**  보호자 등록 api */
export const postGuardianApi = async (formdata: FormData) => {
  try {
    const response = await axiosInstance.post<ApiBaseResponse>(
      GUARDIANS_API, formdata
    );
    console.log(response.data.message);
    return response.data.code;
  } catch (error) {
     if (axios.isAxiosError(error)) {
            console.error("보호자 정보 등록 실패:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "보호자 정보 등록 중 오류 발생:"); // 서버 문제(500 등)만 throw
        }
        throw error;
  }
};