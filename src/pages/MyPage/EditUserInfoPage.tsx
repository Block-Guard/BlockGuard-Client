import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import type { UserInfoType } from "../../types/user-info-types";
import { getUserInfoApi } from "../../apis/mypage";
import SettingsLoading from "./SettingsLoading";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import { formatPhoneNumber } from "../../utils/authUtils";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import BlockeeProfileImg from "@/assets/characters/blockee-mypage.png";
import EditProfileImgIcon from "@/assets/icons/edit-profilte-img-icon.svg";
import EditPasswordIcon from "@/assets/icons/edit-pw-icon.svg";
import RightArrowIcon from "../../assets/icons/arrow-right-darkblue-icon.svg";
import Button from "../../components/Button/Button";

const EditUserInfoPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await getUserInfoApi();
      setUserInfo(response);
      setIsLoading(false);
    } catch (error) {
      console.error("유저 정보 조회 클라이언트 측 오류 메시지", error);
    }
  };

  const handleChangeInput = (key: keyof UserInfoType, value: string) => {
    setUserInfo((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  if (isLoading) {
    return <SettingsLoading title="회원정보 수정으로" />;
  }
  return (
    <div className="bg-[#f1f4ff] min-h-[calc(100vh-85px)]">
      <Header
        leftChild={
          <img
            src={LeftArrowIcon}
            className="py-[5.5px] pr-1"
            onClick={() => navigate(-1)}
          />
        }
        title={
          <h1 className="text-xl text-monochrome-700 font-bold leading-8">
            회원정보 수정
          </h1>
        }
        bgColor="#F1F4FF"
      />
      {userInfo && (
        <form className="flex flex-col px-6 py-18">
          <div className="relative w-50 self-center">
            <img src={BlockeeProfileImg} />
            <img
              className="absolute bottom-4 right-8"
              src={EditProfileImgIcon}
            />
          </div>
          <div className="flex flex-col gap-4 mt-4 mb-14">
            <LabeledInput
              label="이름"
              type="text"
              input={userInfo.name}
              onChangeInput={(e) => handleChangeInput("name", e.target.value)}
              placeholder="ex) 홍길동"
            />
            <LabeledInput
              label="아이디(수정 불가)"
              type="text"
              input={userInfo.email}
              onChangeInput={(e) => handleChangeInput("email", e.target.value)}
              placeholder="ex) example@konkuk.ac.kr"
              disabled={true}
            />
            <LabeledInput
              label="전화번호"
              type="text"
              input={formatPhoneNumber(userInfo.phoneNumber)}
              onChangeInput={(e) =>
                handleChangeInput("phoneNumber", e.target.value)
              }
              placeholder="ex) 010-XXXX-XXXX"
            />
            <LabeledInput
              label="생년월일"
              type="number"
              input={userInfo.birthDate}
              onChangeInput={(e) =>
                handleChangeInput("birthDate", e.target.value)
              }
              placeholder="ex) 20010101"
            />
          </div>
          <div
            className="w-full border px-7 py-3 rounded-xl text-[20px] border-[#b2b2b2] bg-white flex flex-row justify-between mb-7"
            onClick={() => navigate("/mypage/change-password")}
          >
            <div className="flex flex-row gap-3 items-center">
              <img src={EditPasswordIcon} />
              <span className="text-lg font-medium text-[#565656]">
                비밀번호 변경
              </span>
            </div>
            <img src={RightArrowIcon} />
          </div>
          <Button
            onClick={() => {
              onsubmit;
            }}
          >
            변경사항 저장
          </Button>
        </form>
      )}
    </div>
  );
};

export default EditUserInfoPage;
