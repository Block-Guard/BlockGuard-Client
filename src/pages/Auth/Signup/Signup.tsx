import Header from "../../../components/Header/Header";
import ArrowBackIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../../../assets/icons/close-darkblue-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import {
  isBirthDateFormRight,
  isEmailFormRight,
  isPasswordFormRight,
} from "../../../utils/authUtils";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import { checkEmailApi, signupApi } from "../../../apis/auth";

const Signup = () => {
  const navigate = useNavigate();

  const [signupStep, setSignupStep] = useState(1);

  const [inputEmail, setInputEmail] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [inputPw, setInputPw] = useState("");
  const [pwErrorMsg, setPwErrorMsg] = useState("");

  const [inputCheckPw, setInputCheckPw] = useState("");
  const [checkPwErrorMsg, setCheckPwErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [gender, setGender] = useState<"MALE" | "FEMALE">("MALE");

  const [birthDate, setBirthDate] = useState("");
  const [birthDateErrorMsg, setBirthDateErrorMsg] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState("");

  // 이메일 중복 확인 api
  const checkIsEmailDuplicated = async () => {
    try {
      const response = await checkEmailApi(inputEmail);
      console.log(response, "이메일 중복 확인 응답");
      return response;
    } catch (error) {
      console.error("이메일 중복 확인 클라이언트 쪽 실패 : ", error);
    }
  };

  // 회원가입 요청 api
  const signupRequest = async () => {
    try {
      const userData = {
        email: inputEmail,
        name: name,
        password: inputPw,
        birthDate,
        gender,
        phoneNumber,
      };
      const response = await signupApi(userData);
      console.log(response, "번 회원 가입 성공");
      navigate("/auth/signup/complete");
    } catch (error) {
      console.error("회원가입 실패 : ", error);
    }
  };

  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
    setIsEmailChecked(false);
    setEmailErrorMsg("");
  };
  const onChangeInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);
    setPwErrorMsg("");
  };
  const onChangeInputCheckPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCheckPw(e.target.value);
    setCheckPwErrorMsg("");
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeBirthDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) return;
    setBirthDate(e.target.value);
    setBirthDateErrorMsg("");
  };
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberErrorMsg("");
  };

  const handleCheckIsEmailDuplicated = async () => {
    const response = await checkIsEmailDuplicated();
    // 만약 중복이 되었다면
    if (response) {
      setIsEmailChecked(true);
      setIsEmailDuplicated(true);
      setEmailErrorMsg("이미 등록된 아이디입니다.");
    } else {
      setIsEmailChecked(true);
      setIsEmailDuplicated(false);
      setEmailErrorMsg("");
    }
  };

  const handleToNextButton = () => {
    let isValid = true;

    if (!isEmailChecked) {
      setEmailErrorMsg("이메일 중복 확인이 필요합니다.");
      isValid = false;
    } else if (!isEmailFormRight(inputEmail)) {
      setEmailErrorMsg("조건에 맞게 입력해주세요.");
      isValid = false;
    } else {
      setEmailErrorMsg("");
    }

    if (!isPasswordFormRight(inputPw)) {
      setPwErrorMsg("조건에 맞게 입력해주세요.");
      isValid = false;
    }
    if (inputPw !== inputCheckPw) {
      setCheckPwErrorMsg("비밀번호가 일치하지 않습니다.");
      isValid = false;
    }
    if (isValid) {
      setSignupStep(2);
    }
  };

  // 회원가입 완료하는 버튼 클릭 시
  const handleToCompleteButton = () => {
    let isValid = true;

    if (!isBirthDateFormRight(birthDate)) {
      setBirthDateErrorMsg("형식에 맞게 입력해주세요.");
      isValid = false;
    }
    if (phoneNumber.length < 13 || !phoneNumber.startsWith("010")) {
      console.log(phoneNumber);
      setPhoneNumberErrorMsg("형식에 맞게 입력해주세요.");
      isValid = false;
    }
    if (isValid) {
      signupRequest();
    }
  };

  return (
    <div className="flex flex-col">
      <Header
        title={
          <span className="font-bold text-xl leading-[30px]">회원가입</span>
        }
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={ArrowBackIcon}
            onClick={() => {
              if (signupStep === 1) navigate(-1);
              else setSignupStep(1);
            }}
          />
        }
        rightChild={
          <img
            src={CloseIcon}
            alt="회원가입 닫기"
            onClick={() => navigate("/login")}
          />
        }
      />
      {signupStep === 1 ? (
        <>
          <SignupStep1
            inputEmail={inputEmail}
            isEmailChecked={isEmailChecked}
            emailErrorMsg={emailErrorMsg}
            inputPw={inputPw}
            pwErrorMsg={pwErrorMsg}
            inputCheckPw={inputCheckPw}
            checkPwErrorMsg={checkPwErrorMsg}
            onChangeInputEmail={onChangeInputEmail}
            handleCheckIsEmailDuplicated={handleCheckIsEmailDuplicated}
            onChangeInputPw={onChangeInputPw}
            onChangeInputCheckPw={onChangeInputCheckPw}
          />
          <div className="absolute bottom-16 w-full px-4">
            <Button
              onClick={handleToNextButton}
              disabled={
                !inputEmail || !inputPw || !inputCheckPw || isEmailDuplicated
              }
            >
              다음
            </Button>
          </div>
        </>
      ) : (
        <>
          <SignupStep2
            name={name}
            gender={gender}
            birthDate={birthDate}
            birthDateErrorMsg={birthDateErrorMsg}
            phoneNumber={phoneNumber}
            phoneNumberErrorMsg={phoneNumberErrorMsg}
            setGender={setGender}
            onChangeName={onChangeName}
            onChangeBirthDate={onChangeBirthDate}
            onChangePhoneNumber={onChangePhoneNumber}
          />
          <div className="absolute bottom-16 w-full px-4">
            <Button
              onClick={handleToCompleteButton}
              disabled={!name || !birthDate || !phoneNumber}
            >
              완료
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
