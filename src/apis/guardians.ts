import axiosInstance from "./axiosInstance";
import type { NOKFormType } from "../types/nok-info-types";
import type {
  CreateNewGuardianResponse,
  GetGuardiansListResponse,
} from "../types/api-types";
import { toast } from "sonner";

const GUARDIANS_BASE_API = "guardians";

export const createNewNokApi = async (payload: NOKFormType) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("phoneNumber", payload.phoneNumber);
  if (payload.profileImage)
    formData.append("profileImage", payload.profileImage);

  try {
    const response = await axiosInstance.post<CreateNewGuardianResponse>(
      GUARDIANS_BASE_API,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    if (error.response.data.code === 4024) {
      toast("이미 등록된 보호자입니다!");
    }
    throw Error(error.response.data.code);
  }
};

// 보호자 목록 조회 api
export const getGuardiansListApi = async () => {
  try {
    const response = await axiosInstance.get<GetGuardiansListResponse>(
      GUARDIANS_BASE_API,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data.data.guardians);
    return response.data.data.guardians;
  } catch (error: any) {
    console.error(
      "보호자 목록 조회 실패:",
      error.response?.data || error.message
    );
  }
};

// 보호자 대표 여부 수정 api
export const updateIsGuardianPrimary = async (
  id: number,
  isPrimary: boolean
) => {
  try {
    await axiosInstance.patch<CreateNewGuardianResponse>(
      GUARDIANS_BASE_API + `/${id}/primary`,
      {
        isPrimary: isPrimary,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error(
      "보호자 대표 여부 수정 실패:",
      error.response?.data || error.message
    );
  }
};

// 보호자 삭제 api
export const deleteGuardianApi = async (id: number) => {
  try {
    await axiosInstance.delete(GUARDIANS_BASE_API + `/${id}`);
  } catch (error: any) {
    console.error("보호자 삭제 실패:", error.response?.data || error.message);
  }
};

// 보호자 수정 api
export const updateGuardinaInfoApi = async (
  id: number,
  payload: NOKFormType
) => {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("phoneNumber", payload.phoneNumber);
  if (payload.profileImage)
    formData.append("profileImage", payload.profileImage);

  try {
    const response = await axiosInstance.put<CreateNewGuardianResponse>(
      GUARDIANS_BASE_API + `/${id}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error: any) {
    if (error.response.data.code === 4024) {
      toast("이미 등록된 보호자입니다!");
    }
    throw Error(error.response.data.code);
  }
};
