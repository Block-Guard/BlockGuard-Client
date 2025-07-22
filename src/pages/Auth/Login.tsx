import { useEffect, useState } from "react";
import BlockeeIcon from "../../assets/characters/blockee-login.svg";
import Button from "../../components/Button/Button";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
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
  const handleLogin = () => {
    if (isIdSaved) {
      localStorage.setItem("savedId", loginId);
    } else {
      localStorage.removeItem("savedId");
    }
    // 서버에 로그인 요청. 실패하면 setIsFailedLogin을 true로
    console.log("로그인 요청");
    setIsFailedLogin(true);
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
          <input
            className="border border-[#b2b2b2] px-7 py-5 rounded-xl text-[20px] placeholder:text-[#b2b2b2]"
            type="email"
            value={loginId}
            onChange={onChangeInputId}
            placeholder="아이디 (이메일)"
          />
          <div className="w-full">
            <input
              className="w-full border border-[#b2b2b2] px-7 py-5 rounded-xl text-[20px] placeholder:text-[#b2b2b2]"
              type="password"
              value={password}
              onChange={onChangeInputPassword}
              placeholder="비밀번호"
            />
          </div>
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
              <span>아이디 찾기</span>
              <span>비밀번호 찾기</span>
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
        <Button onClick={() => console.log("회원가입 하러가기")} isWhite>
          회원가입하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
