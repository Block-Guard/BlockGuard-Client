import { useRef, useState } from "react";
import type { NOKFormType } from "../../../types/nok-info-types";
import BlockeeProfile from "@/assets/characters/default-profile-img.png";
import EditProfileImgIcon from "@/assets/icons/edit-profilte-img-icon.svg";
import NokInfoInput from "./NokInfoInput";
import {
  checkNicknameFormRight,
  formatPhoneNumber,
} from "../../../utils/authUtils";
import { toast } from "sonner";
import { createNewNokApi } from "../../../apis/guardians";

type Props = {
  setAddNokMode: (value: boolean) => void;
  setIsChangedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};
const RegisterNewNokCard = ({ setAddNokMode, setIsChangedFlag }: Props) => {
  const [newNokInfo, setNewNokInfo] = useState<NOKFormType>({
    name: "",
    phoneNumber: "",
    profileImage: null,
    isDefaultImage: false,
  });
  const [nokProfileImg, setNokProfileImg] = useState<File | null>(null);

  const profileImgInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => profileImgInputRef.current?.click();
  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
      const ext = file.name.split(".").pop()?.toLowerCase();

      if (!ext || !allowedExtensions.includes(ext)) {
        toast("jpg, jpeg, png, webp 형식의 이미지만 업로드할 수 있습니다.");
        return;
      }

      setNokProfileImg(file);
    }
  };

  const handleChangeInput = (key: keyof NOKFormType, value: string) => {
    if (value.length >= 14) return;
    setNewNokInfo((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitRegisterNewNok = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nokProfileImg);

    if (
      !checkNicknameFormRight(newNokInfo.name) ||
      newNokInfo.phoneNumber.length !== 13
    ) {
      toast("닉네임 또는 전화번호를 형식에 맞춰 입력해주세요.");
      return;
    }
    const formData = {
      name: newNokInfo.name,
      phoneNumber: newNokInfo.phoneNumber,
      profileImage: nokProfileImg || null,
      isDefaultImage: false,
    };
    try {
      const response = await createNewNokApi(formData);
      console.log(response);
      toast("새로운 보호자가 등록되었습니다.");
      setAddNokMode(false);
      setIsChangedFlag((prev) => !prev);
    } catch (error) {
      console.error("보호자 등록 클라이언트 측 에러 메시지", error);
    }
  };
  return (
    <form
      id="register-nok-form"
      className="flex flex-col p-4 pb-10 gap-7.5 bg-white rounded-[12px] shadow-[0_2px_19px_rgba(0,0,0,0.25)]"
      onSubmit={submitRegisterNewNok}
    >
      <div className="flex flex-row items-center justify-start gap-6 ml-1">
        <div className="relative" onClick={openFilePicker}>
          <img
            className="w-25 h-25 rounded-full object-cover object-center bg-[#B7D1FF]"
            src={
              nokProfileImg
                ? URL.createObjectURL(nokProfileImg)
                : BlockeeProfile
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
            {newNokInfo.name}
          </span>
          <span className="text-[15px] text-[#79818A] leading-[22.5px]">
            {newNokInfo.phoneNumber}
          </span>
        </div>
      </div>
      <NokInfoInput
        input={newNokInfo.name}
        onChangeInput={(e) =>
          handleChangeInput("name", e.target.value.replace(/\s/g, ""))
        }
        placeholder="닉네임 입력"
        desc="영문, 한글, 숫자 조합으로 최소 1자에서 최대 12자까지 입력"
      />
      <NokInfoInput
        input={formatPhoneNumber(newNokInfo.phoneNumber)}
        onChangeInput={(e) => handleChangeInput("phoneNumber", e.target.value)}
        placeholder="010-1234-1234"
        desc="전화번호 입력 (010-XXXX-XXXX)"
      />
    </form>
  );
};

export default RegisterNewNokCard;
