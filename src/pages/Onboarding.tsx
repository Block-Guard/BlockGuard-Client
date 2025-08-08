import { useNavigate } from "react-router-dom";
import OnboardingIcon from "../assets/onboarding-icon.png";
import Button from "../components/Button/Button";
import { useEffect } from "react";

const Onboarding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("first-use", "false");
  }, []);

  return (
    <div className="w-full h-[100vh] bg-primary-400 flex flex-col gap-13 justify-center items-center px-4">
      <div className="flex flex-col gap-5">
        <h3 className="font-medium text-[20px] text-white text-center">
          AI를 활용한 보이스피싱
          <br />
          사전예방 통합 서비스
        </h3>
        <h1 className="font-ncs-radhiumz text-[54px] text-center text-white leading-14">
          Block
          <br />
          Gaurd
        </h1>
      </div>
      <img className="w-35" src={OnboardingIcon} alt="온보딩 아이콘" />
      <div className="w-full flex flex-col gap-4 items-center mt-13">
        <Button isWhite={true} onClick={() => navigate("/login")}>
          로그인
        </Button>
        <Button isWhite={true} onClick={() => navigate("/auth/signup")}>
          회원가입하기
        </Button>
        <span className="text-white" onClick={() => navigate("/")}>
          비회원으로 이용하기
        </span>
      </div>
    </div>
  );
};

export default Onboarding;
