import React, { useRef, useState } from "react";
import { toast } from "sonner";
import type { NOKInfoType } from "../../../types/nok-info-types";
import NokInfoInput from "./NokInfoInput";
import {
  checkNicknameFormRight,
  formatPhoneNumber,
} from "../../../utils/authUtils";
import BlockeeProfile from "@/assets/characters/default-profile-img.png";
import EditProfileImgIcon from "@/assets/icons/edit-profilte-img-icon.svg";
import Button from "../../../components/Button/Button";
import { updateGuardinaInfoApi } from "../../../apis/guardians";

type Props = {
  nokInfoProps: NOKInfoType;
  setEditMode: (value: boolean) => void;
  setIsChangedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditNokInfoCard = ({
  nokInfoProps,
  setEditMode,
  setIsChangedFlag,
}: Props) => {
  const [nokInfo, setNokInfo] = useState({
    name: nokInfoProps.name,
    phoneNumber: nokInfoProps.phoneNumber,
  });
  const [nokProfileImg, setNokProfileImg] = useState<File | null>(null);

  const profileImgInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => profileImgInputRef.current?.click();
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.[0]) {
      setNokProfileImg(e.target.files?.[0]);
    }
  };

  const handleChangeInput = (key: keyof typeof nokInfo, value: string) => {
    if (value.length >= 14) return;
    setNokInfo((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitToEditNokInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nokProfileImg);

    if (
      !checkNicknameFormRight(nokInfo.name) ||
      nokInfo.phoneNumber.length !== 13
    ) {
      toast("닉네임 또는 전화번호를 형식에 맞춰 입력해주세요.");
      return;
    }
    const formData = {
      name: nokInfo.name,
      phoneNumber: nokInfo.phoneNumber,
      profileImage: nokProfileImg || null,
    };
    try {
      const response = await updateGuardinaInfoApi(
        nokInfoProps.guardiansId,
        formData
      );
      console.log(response);
      toast("보호자의 정보가 수정되었습니다.");
      setIsChangedFlag((prev) => !prev);
      setEditMode(false);
    } catch (error) {
      console.error("보호자 등록 클라이언트 측 에러 메시지", error);
    }
  };

  return (
    <>
      <form
        id="edit-nok-form"
        className="flex flex-col p-4 pb-10 gap-7.5 bg-white rounded-[12px] shadow-[0_2px_19px_rgba(0,0,0,0.25)]"
        onSubmit={submitToEditNokInfo}
      >
        <div className="flex flex-row items-center justify-start gap-6 ml-1">
          <div className="relative" onClick={openFilePicker}>
            <img
              className="w-25 h-25 rounded-full"
              src={
                nokProfileImg
                  ? URL.createObjectURL(nokProfileImg)
                  : nokInfoProps.profileImageUrl || BlockeeProfile
              }
            />
            <img
              className="absolute bottom-0 right-[3px] w-6 h-6"
              src={EditProfileImgIcon}
            />
            <input
              ref={profileImgInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#79818A] font-semibold leading-[22.5px]">
              {nokInfo.name}
            </span>
            <span className="text-[15px] text-[#79818A] leading-[22.5px]">
              {nokInfo.phoneNumber}
            </span>
          </div>
        </div>
        <NokInfoInput
          input={nokInfo.name}
          onChangeInput={(e) =>
            handleChangeInput("name", e.target.value.replace(/\s/g, ""))
          }
          placeholder="닉네임 입력"
          desc="영문, 한글, 숫자 조합으로 최소 1자에서 최대 12자까지 입력"
        />
        <NokInfoInput
          input={formatPhoneNumber(nokInfo.phoneNumber)}
          onChangeInput={(e) =>
            handleChangeInput("phoneNumber", e.target.value)
          }
          placeholder="010-1234-1234"
          desc="전화번호 입력 (010-XXXX-XXXX)"
        />
        <div className="w-[80%] self-center flex flex-row gap-4 mt-4">
          <Button size="sm" isWhite={true} onClick={() => setEditMode(false)}>
            취소
          </Button>
          <Button
            size="sm"
            onClick={() => {
              const form = document.getElementById(
                "edit-nok-form"
              ) as HTMLFormElement;
              if (form) form.requestSubmit();
            }}
          >
            저장
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditNokInfoCard;
