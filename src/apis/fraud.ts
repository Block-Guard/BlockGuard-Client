import axios from "axios";
import type { FruadAnalysisResponse } from "../types/api-types";

const FRAUD_RESULT_API = "https://www.blockguard.shop/api/fraud-analysis";
/** 사기분석 설문 전송, 결과 수신 api */
export const fraudAnalysisApi = async (formdata: FormData) => {
    try {
        console.log("사기 분석 api 요청 시작")
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
