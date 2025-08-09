import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import RightArrowIcon from "@/assets/icons/arrow-right-darkblue-icon.svg";
import BlockeeMyPage from "@/assets/characters/blockee-mypage.png";

const NotLoginedUserInfoSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-9.5 px-2 pb-5.5 border-b-8 border-b-monochrome-100">
      <div className="flex flex-row items-center justify-between pl-5">
        <div className="flex flex-col gap-5.5">
          <div
            className="flex flex-row gap-4"
            onClick={() => navigate("/login")}
          >
            <h1 className="font-semibold text-[26px]">로그인 하세요</h1>
            <img className="w-2.5" src={RightArrowIcon} />
          </div>
          <span className="text-sm">
            로그인하고 맞춤형
            <br />
            피싱예방 서비스를 이용해보세요
          </span>
        </div>
        <img className="w-38" src={BlockeeMyPage} />
      </div>
      <div className="flex flex-col gap-[15px] items-center px-11">
        <Button onClick={() => navigate("/login")}>로그인하기</Button>
        <span
          className="font-medium text-sm text-primary-400"
          onClick={() => navigate("/auth/signup")}
        >
          회원가입하기
        </span>
      </div>
    </div>
  );
};

export default NotLoginedUserInfoSection;
