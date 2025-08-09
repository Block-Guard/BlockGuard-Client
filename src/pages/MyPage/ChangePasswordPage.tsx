import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import ToVisiblePwIcon from "@/assets/icons/to-visible-pw-icon.svg";
import ToInvisiblePwIcon from "@/assets/icons/to-invisible-pw-icon.svg";
import { toast } from "sonner";
import { isPasswordFormRight } from "../../utils/authUtils";
import { updatePasswordApi } from "../../apis/mypage";

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

  const handleUpdatePassword = async () => {
    if (!isPasswordFormRight(inputPassword.newPassword)) {
      toast("새 비밀번호를 조건에 맞게 입력해주세요.");
      return;
    }
    if (inputPassword.newPassword !== inputPassword.checkPassword) {
      toast("새 비밀번호와 확인이 일치해야 합니다.");
      return;
    }
    try {
      const response = await updatePasswordApi(
        inputPassword.currentPassword,
        inputPassword.newPassword
      );
      if (response === undefined) {
        toast("현재 비밀번호 값이 일치하지 않습니다.");
      } else {
        toast(
          <>
            비밀번호가 변경되었습니다.
            <br />
            다시 로그인해주세요.
          </>
        );
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.error("비밀번호 변경 api 클라이언트 측 오류메시지", error);
    }
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
          <LabeledInput
            label="현재 비밀번호"
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
          <LabeledInput
            label="새 비밀번호"
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
          <LabeledInput
            label="새 비밀번호 확인"
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
        <Button
          onClick={handleUpdatePassword}
          disabled={
            !(
              inputPassword.currentPassword &&
              inputPassword.newPassword &&
              inputPassword.checkPassword
            )
          }
        >
          변경사항 저장
        </Button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
