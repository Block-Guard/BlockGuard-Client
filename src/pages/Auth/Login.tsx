import { useEffect, useState } from "react";
import BlockeeIcon from "../../assets/characters/blockee-login.svg";
import ToVisiblePwIcon from "../../assets/icons/to-visible-pw-icon.svg";
import ToInvisiblePwIcon from "../../assets/icons/to-invisible-pw-icon.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import InputBar from "../../components/InputBar/InputBar";
import { loginApi } from "../../apis/auth";

const Login = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isIdSaved, setIsIdSaved] = useState(false);
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  useEffect(() => {
    let savedId = localStorage.getItem("savedId");
    if (savedId) {
      setLoginId(savedId);
      setIsIdSaved(true);
    }
  }, []);

  const onChangeInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
    setIsFailedLogin(false);
  };
  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsFailedLogin(false);
  };
  const handleLogin = async () => {
    try {
      const loginData = { email: loginId, password: password };
      const response = await loginApi(loginData);
      console.log(response);
      if (isIdSaved) {
        localStorage.setItem("savedId", loginId);
      } else {
        localStorage.removeItem("savedId");
      }
      navigate("/");
    } catch (error) {
      setIsFailedLogin(true);
      console.error("로그인 실패 : ", error);
    }
  };

  useEffect(() => {
    if (isFailedLogin) {
      const timer = setTimeout(() => {
        setIsFailedLogin(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isFailedLogin]);
  return (
    <div className="flex flex-col">
      <img className="w-25 mt-4 mb-2" src={BlockeeIcon} alt="블록이사진" />
      <main className="flex flex-col px-4 gap-8">
        <h1 className="text-primary-400 text-[54px] font-ncs-radhiumz leading-[57px]">
          Block
          <br />
          Guard
        </h1>
        <div className="flex flex-col gap-3">
          <InputBar
            type="email"
            input={loginId}
            onChangeInput={onChangeInputId}
            placeholder="아이디 (이메일)"
          />
          <InputBar
            type={isPwVisible ? "text" : "password"}
            input={password}
            onChangeInput={onChangeInputPassword}
            placeholder="비밀번호"
            rightChild={
              <img
                className="absolute top-[50%] right-3 translate-[-50%]"
                src={isPwVisible ? ToInvisiblePwIcon : ToVisiblePwIcon}
                onClick={() => setIsPwVisible(!isPwVisible)}
              />
            }
          />
          <div className="flex flex-row justify-between">
            <label className="flex items-center gap-[10px] cursor-pointer">
              <input
                type="checkbox"
                checked={isIdSaved}
                onChange={(e) => setIsIdSaved(e.target.checked)}
                className="hidden"
              />
              <span
                className={`w-[22px] h-[22px] flex items-center justify-center rounded-full border border-[#437efc] ${
                  isIdSaved ? "bg-[#437efc] text-white" : "bg-white"
                }`}
              >
                {isIdSaved && "✔"}
              </span>
              <span className="text-[16px] text-primary-400">아이디 저장</span>
            </label>
            <div className="flex flex-row gap-[10px] text-monochrome-500 text-[16px]">
              <span onClick={() => navigate("/auth/find-id")}>아이디 찾기</span>
              <span onClick={() => navigate("/auth/find-password")}>
                비밀번호 찾기
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className="absolute bottom-16 w-full flex flex-col gap-4 px-4">
        {isFailedLogin && (
          <p className="text-[#F24E4E] text-sm text-center font-semibold leading-[21px] mb-1">
            아이디 또는 비밀번호를 다시 확인하세요.
            <br />
            등록되지 않은 아이디이거나, 비밀번호를 잘못 입력하셨습니다.
          </p>
        )}
        <Button onClick={handleLogin} disabled={isFailedLogin}>
          로그인
        </Button>
        <Button onClick={() => navigate("/auth/signup")} isWhite>
          회원가입하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
