import React from "react";
import InputBar from "../../../components/InputBar/InputBar";

type Props = {
  inputEmail: string;
  isEmailChecked: boolean;
  emailErrorMsg: string;
  inputPw: string;
  pwErrorMsg: string;
  inputCheckPw: string;
  checkPwErrorMsg: string;
  onChangeInputEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckIsEmailDuplicated: () => void;
  onChangeInputPw: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInputCheckPw: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignupStep1 = ({
  inputEmail,
  isEmailChecked,
  emailErrorMsg,
  inputPw,
  pwErrorMsg,
  inputCheckPw,
  checkPwErrorMsg,
  onChangeInputEmail,
  handleCheckIsEmailDuplicated,
  onChangeInputPw,
  onChangeInputCheckPw,
}: Props) => {
  return (
    <main className="flex flex-col gap-12 mt-25 px-4">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[18px] font-semibold leading-[27px]">
          아이디
          <span className="text-[16px] font-normal ml-1">(이메일)</span>
        </h2>
        <InputBar
          type="email"
          input={inputEmail}
          onChangeInput={onChangeInputEmail}
          placeholder="아이디 (이메일)"
          rightChild={
            <span
              className="absolute top-[50%] right-5 translate-y-[-50%] text-primary-400 font-normal text-lg"
              onClick={handleCheckIsEmailDuplicated}
              style={{ color: isEmailChecked ? "#b2b2b2" : "#437EFC" }}
            >
              중복 확인
            </span>
          }
          isError={emailErrorMsg}
        />
        <span className="text-highlight-1 text-sm font-semibold h-[21px]">
          {emailErrorMsg}
        </span>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[18px] font-semibold leading-[27px]">
          비밀번호
          <span className="text-[16px] font-normal ml-1">
            (영문, 숫자, 특수문자를 포함한 8~20자)
          </span>
        </h2>
        <div className="flex flex-col gap-1">
          <InputBar
            type="password"
            input={inputPw}
            onChangeInput={onChangeInputPw}
            placeholder="비밀번호"
            isError={pwErrorMsg}
          />
          <span className="text-highlight-1 text-sm font-semibold h-[21px]">
            {pwErrorMsg}
          </span>
          <InputBar
            type="password"
            input={inputCheckPw}
            onChangeInput={onChangeInputCheckPw}
            placeholder="비밀번호 재확인"
            isError={checkPwErrorMsg}
          />
          <span className="text-highlight-1 text-sm font-semibold h-[21px]">
            {checkPwErrorMsg}
          </span>
        </div>
      </div>
    </main>
  );
};

export default SignupStep1;
