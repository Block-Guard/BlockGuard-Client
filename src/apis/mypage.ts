import axiosInstance from "./axiosInstance";
import type { GetUserInfoResponse } from "../types/api-types";

const GET_USER_INFO_API = "users/me";

export const getUserInfoApi = async () => {
  try {
    const response = await axiosInstance.get<GetUserInfoResponse>(
      GET_USER_INFO_API,
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
