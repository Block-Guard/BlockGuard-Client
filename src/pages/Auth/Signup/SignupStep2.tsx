import React from "react";
import InputBar from "../../../components/InputBar/InputBar";
import { formatPhoneNumber } from "../../../utils/authUtils";

type Props = {
  name: string;
  gender: "MALE" | "FEMALE";
  birthDate: string;
  birthDateErrorMsg: string;
  phoneNumber: string;
  phoneNumberErrorMsg: string;
  setGender: (value: "MALE" | "FEMALE") => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBirthDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SignupStep2 = ({
  name,
  gender,
  birthDate,
  birthDateErrorMsg,
  phoneNumber,
  phoneNumberErrorMsg,
  setGender,
  onChangeName,
  onChangeBirthDate,
  onChangePhoneNumber,
}: Props) => {
  return (
    <main className="flex flex-col mt-25 px-4 gap-3">
      <div className="flex flex-row gap-2 mb-5">
        <div className="flex-1/2 flex flex-col gap-[10px]">
          <h2 className="text-[18px] font-semibold leading-[27px]">이름</h2>
          <InputBar
            type="text"
            input={name}
            onChangeInput={onChangeName}
            placeholder="ex) 홍길동"
          />
        </div>
        <div className="flex-1/2 flex flex-col gap-[10px]">
          <h2 className="text-[18px] font-semibold leading-[27px]">성별</h2>
          <div className="flex flex-row gap-2">
            <div
              className="flex-1/2 py-5 flex justify-center items-center rounded-[12px] text-[20px]"
              style={
                gender === "MALE"
                  ? { color: "#fff", background: "#437EFC" }
                  : { color: "#B2B2B2", border: "1px solid #B2B2B2" }
              }
              onClick={() => setGender("MALE")}
            >
              남성
            </div>
            <div
              className="flex-1/2 py-5 flex justify-center items-center rounded-[12px] text-[20px]"
              style={
                gender === "FEMALE"
                  ? { color: "#fff", background: "#437EFC" }
                  : { color: "#B2B2B2", border: "1px solid #B2B2B2" }
              }
              onClick={() => setGender("FEMALE")}
            >
              여성
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[18px] font-semibold leading-[27px]">생년월일</h2>
        <div className="flex flex-col gap-1">
          <InputBar
            type="text"
            input={birthDate}
            onChangeInput={onChangeBirthDate}
            placeholder="ex) 20010101"
            isError={birthDateErrorMsg}
          />
          <span className="text-highlight-1 text-sm font-semibold h-[21px]">
            {birthDateErrorMsg}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[18px] font-semibold leading-[27px]">
          휴대폰 번호
        </h2>
        <div className="flex flex-col gap-1">
          <InputBar
            type="text"
            input={formatPhoneNumber(phoneNumber)}
            onChangeInput={onChangePhoneNumber}
            placeholder="ex) 010-XXXX-XXXX"
            isError={phoneNumberErrorMsg}
          />
          <span className="text-highlight-1 text-sm font-semibold h-[21px]">
            {phoneNumberErrorMsg}
          </span>
        </div>
      </div>
    </main>
  );
};

export default SignupStep2;
