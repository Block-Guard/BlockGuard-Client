import axios from "axios";
import type { UrlNumAnalysisResponse } from "../types/api-types";

/** 전화 번호 분석 설문 전송, 결과 수신 api */
export const numberAnalysisApi = async (targetNumber: string) => {
    try {
        const response = await axios.post<UrlNumAnalysisResponse>(
            "https://www.blockguard.shop/api/fraud/number", targetNumber
        );
        return response.data.data;

    }
    catch (error: any) {
        console.error("전화번호 분석 요청 실패:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "전화번호 분석 요청 진행 중 오류 발생"); // 서버 문제(500 등)만 throw
    }
}

/** url 분석 설문 전송, 결과 수신 api */
export const urlAnalysisApi = async (targetUrl: string) => {
    try {
        const response = await axios.post<UrlNumAnalysisResponse>(
            "https://www.blockguard.shop/api/fraud/url", targetUrl
        );
        return response.data.data;

    }
    catch (error: any) {
        console.error("url 분석 요청 실패:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "url 분석 요청 진행 중 오류 발생"); // 서버 문제(500 등)만 throw
    }
}