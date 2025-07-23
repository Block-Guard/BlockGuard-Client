import {
  type CreateNewReportResponse,
  type EachReportStepResponse,
  type InProgressReportResponse,
} from "../types/api-types";
import axiosInstance from "./axiosInstance";

const GET_IN_PROGRESS_REPORT_API = "report-records/current";
const REPORT_API = "report-records";

// 진행중인 신고 현황 조회 api
export const getInProgressReportApi = async () => {
  try {
    const response = await axiosInstance.get<InProgressReportResponse>(
      GET_IN_PROGRESS_REPORT_API
    );
    return response.data.data;
  } catch (error: any) {
    console.error(
      "진행중인 신고 현황 조회 실패:",
      error.response?.data || error.message
    );
  }
};

// 신고 현황 생성 api
export const createNewReportApi = async () => {
  try {
    const response = await axiosInstance.post<CreateNewReportResponse>(
      REPORT_API,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data.message;
  } catch (error: any) {
    console.error(
      "신고 현황 생성 실패:",
      error.response?.data || error.message
    );
  }
};

// 신고 현황의 특정 단계 정보 조회 api
export const getEachReportStepApi = async (
  reportId: number,
  stepNumber: number
) => {
  try {
    const response = await axiosInstance.get<EachReportStepResponse>(
      REPORT_API + reportId + "/steps/" + stepNumber
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      "특정 단계 신고 현황 조회 실패:",
      error.response?.data || error.message
    );
  }
};

// 특정 단계 신고 현황 수정 api
export const updateEachReportStepApi = async (
  reportId: number,
  stepNumber: number,
  checkBoxes: boolean[],
  isCompleted: boolean
) => {
  try {
    const response = await axiosInstance.put<EachReportStepResponse>(
      REPORT_API + reportId + "/steps/" + stepNumber,
      {
        checkBoxes,
        isCompleted,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    console.error(
      "특정 단계 신고 현황 업데이트 실패:",
      error.response?.data || error.message
    );
  }
};
