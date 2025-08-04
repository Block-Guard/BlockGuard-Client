import {
  type CheckEmailResponse,
  type LoginResponse,
  type SignUpResponse,
} from "../types/api-types";
import axiosInstance from "./axiosInstance";

const CHECK_EMAIL_API = "auth/register/check-email";
const SIGNUP_API = "auth/register";
const LOGIN_API = "auth/login";

// 이메일 중복 확인 api
export const checkEmailApi = async (email: string) => {
  try {
    const response = await axiosInstance.post<CheckEmailResponse>(
      CHECK_EMAIL_API,
      { email: email },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data.data.duplicated;
  } catch (error: any) {
    console.error(
      "이메일 중복 확인 실패:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "이메일 중복 확인 중 오류 발생"
    );
  }
};

// 회원가입 api
export const signupApi = async (userData: {
  email: string;
  name: string;
  password: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
}) => {
  try {
    const response = await axiosInstance.post<SignUpResponse>(
      SIGNUP_API,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data.data;
  } catch (error: any) {
    console.error("회원가입 실패:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "회원가입 중 오류 발생"); // 서버 문제(500 등)만 throw
  }
};

// 로그인 api
export const loginApi = async (loginData: {
  email: string;
  password: string;
}) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  try {
    const response = await axiosInstance.post<LoginResponse>(
      LOGIN_API,
      loginData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(response.data.data);
    localStorage.setItem(
      "accessToken",
      response.data.data.jwtToken.accessToken
    );
    localStorage.setItem(
      "refreshToken",
      response.data.data.jwtToken.refreshToken
    );

    return response.data.data;
  } catch (error: any) {
    console.error("로그인 실패:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "로그인 중 오류 발생"); // 서버 문제(500 등)만 throw
  }
};
