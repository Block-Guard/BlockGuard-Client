import axios from "axios";
import type { FruadAnalysisResponse } from "../types/api-types";
import axiosInstance from "./axiosInstance";

const FRAUD_RESULT_API = "https://www.blockguard.shop/api/fraud-analysis";
const GET_GUARDIAN_LIST_API = "https://www.blockguard.shop/api/guardians";
/** 사기분석 설문 전송, 결과 수신 api */
export const fraudAnalysisApi = async (formdata: FormData) => {
    try {
        const response = await axios.post<FruadAnalysisResponse>(
            FRAUD_RESULT_API, formdata,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return response.data.data;

    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("사기분석 요청 실패:", error.response?.data || error.message);
            throw new Error(error.response?.data?.message || "사기 분석 진행 중 오류 발생"); // 서버 문제(500 등)만 throw
        }
        throw error;
    }
}

export const getGuardianListApi = async () => {
  try {
    const response = await axiosInstance.get<string>(
      GET_GUARDIAN_LIST_API
    );
    
    // return response.data.data;
  } catch (error: any) {
    console.error(
      "진행중인 신고 현황 조회 실패:",
      error.response?.data || error.message
    );
  }
};
