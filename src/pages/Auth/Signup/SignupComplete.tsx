import { useNavigate } from "react-router-dom";
import BlockeeCompletionIcon from "../../../assets/characters/blockee-glitering.png";
import { useEffect } from "react";

const SignupComplete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="h-[100vh] flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-2xl leading-9">회원가입 완료!</h1>
          <p className="font-semibold text-sm">로그인 창으로 이동합니다</p>
        </div>
        <img src={BlockeeCompletionIcon} alt="완료 이미지" />
      </div>
    </div>
  );
};

export default SignupComplete;
