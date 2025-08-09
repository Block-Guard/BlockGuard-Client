import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import { useState } from "react";
import InputBar from "../../components/InputBar/InputBar";
import ToVisiblePwIcon from "@/assets/icons/to-visible-pw-icon.svg";
import ToInvisiblePwIcon from "@/assets/icons/to-invisible-pw-icon.svg";
import Button from "../../components/Button/Button";

type InputPassword = {
  currentPassword: string;
  newPassword: string;
  checkPassword: string;
};
type IsVisiblePassword = {
  isCurrentVisible: boolean;
  isNewVisible: boolean;
  isCheckVisible: boolean;
};

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState<InputPassword>({
    currentPassword: "",
    newPassword: "",
    checkPassword: "",
  });

  const [isPwVisible, setIsPwVisible] = useState<IsVisiblePassword>({
    isCurrentVisible: false,
    isNewVisible: false,
    isCheckVisible: false,
  });

  const handleChangeInput = (key: keyof InputPassword, value: string) => {
    setInputPassword((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const handlePwVisible = (key: keyof IsVisiblePassword, value: boolean) => {
    setIsPwVisible((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [key]: value,
      };
    });
  };
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
            비밀번호 수정
          </h1>
        }
        bgColor="#F1F4FF"
      />
      <div className="flex flex-col gap-4 px-6 pb-14">
        <div className="flex flex-col gap-[6px] mt-24">
          <h2 className="text-[18px] font-semibold leading-[27px]">
            현재 비밀번호
          </h2>
          <InputBar
            type={isPwVisible.isCurrentVisible ? "text" : "password"}
            input={inputPassword.currentPassword}
            onChangeInput={(e) =>
              handleChangeInput("currentPassword", e.target.value)
            }
            placeholder="현재 비밀번호를 입력하세요."
            rightChild={
              <img
                className="absolute top-[50%] right-3 translate-[-50%]"
                src={
                  isPwVisible.isCurrentVisible
                    ? ToInvisiblePwIcon
                    : ToVisiblePwIcon
                }
                onClick={() =>
                  handlePwVisible(
                    "isCurrentVisible",
                    !isPwVisible.isCurrentVisible
                  )
                }
              />
            }
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[18px] font-semibold leading-[27px]">
            새 비밀번호
          </h2>
          <InputBar
            type={isPwVisible.isNewVisible ? "text" : "password"}
            input={inputPassword.newPassword}
            onChangeInput={(e) =>
              handleChangeInput("newPassword", e.target.value)
            }
            placeholder="새 비밀번호를 입력하세요."
            rightChild={
              <img
                className="absolute top-[50%] right-3 translate-[-50%]"
                src={
                  isPwVisible.isNewVisible ? ToInvisiblePwIcon : ToVisiblePwIcon
                }
                onClick={() =>
                  handlePwVisible("isNewVisible", !isPwVisible.isNewVisible)
                }
              />
            }
          />
        </div>
        <div className="flex flex-col gap-[6px] mb-20">
          <h2 className="text-[18px] font-semibold leading-[27px]">
            새 비밀번호 확인
          </h2>
          <InputBar
            type={isPwVisible.isCheckVisible ? "text" : "password"}
            input={inputPassword.checkPassword}
            onChangeInput={(e) =>
              handleChangeInput("checkPassword", e.target.value)
            }
            placeholder="새 비밀번호를 한번 더 입력하세요."
            rightChild={
              <img
                className="absolute top-[50%] right-3 translate-[-50%]"
                src={
                  isPwVisible.isCheckVisible
                    ? ToInvisiblePwIcon
                    : ToVisiblePwIcon
                }
                onClick={() =>
                  handlePwVisible("isCheckVisible", !isPwVisible.isCheckVisible)
                }
              />
            }
          />
        </div>
        <Button onClick={() => {}}>변경사항 저장</Button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
