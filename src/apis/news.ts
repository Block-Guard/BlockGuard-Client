import axios from "axios";
import type { NewsListResponse, SelectedNewsResponse} from "../types/api-types";

/** 뉴스 목록 조회 api */
export const getNewsListApi = async (page = 1, sort = "published_at_desc", category= "전체") => {
    try {
        const response = await axios.get<NewsListResponse>(
            "https://www.blockguard.shop/api/news",{
                params:{
                    page: page,
                    sort: sort,
                    category: category
                }
            }
        );
        return response.data.data;

    }
    catch (error: any) {
        console.error("뉴스 목록 요청 실패:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "뉴스 복록 요청 진행 중 오류 발생");
    }
}

/** 주요 뉴스 목록 조회 api */
export const getSelectedNewsApi = async () => {
    try {
        const response = await axios.get<SelectedNewsResponse>(
            "https://www.blockguard.shop/api/news/selected",
        );
        return response.data.data;

    }
    catch (error: any) {
        console.error("주요 뉴스 목록 요청 실패:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "주요 뉴스 복록 요청 진행 중 오류 발생");
    }
}

