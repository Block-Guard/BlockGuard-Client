import axios from "axios";
import type { FruadAnalysisResponse } from "../types/api-types";

// https://460b25b3-b735-4bd2-9e8c-00e88f644e33.mock.pstmn.io

/** 사기분석 설문 전송, 결과 수신 api */
export const fraudAnalysisApi = async (formdata: FormData) => {
    try {
        const response = await axios.post<FruadAnalysisResponse>(
            "https://www.blockguard.shop/api/fraud-analysis", formdata,
            // "https://460b25b3-b735-4bd2-9e8c-00e88f644e33.mock.pstmn.io/api/fraud-analysis", formdata,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return response.data.data;

    }
    catch (error: any) {
        console.error("사기분석 요청 실패:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "사기 분석 진행 중 오류 발생"); // 서버 문제(500 등)만 throw
    }
}