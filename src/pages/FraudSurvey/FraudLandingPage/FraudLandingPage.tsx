import { useNavigate } from "react-router-dom";
import HomeBgShieild from "../../../assets/home-background-shield-image.svg";
import Blockee from "../../../assets/character-cropped-fit-image.svg";
import LeftArrowWhiteIcon from "../../../assets/icons/arrow-left-white-icon.svg";
import Header from "../../../components/Header/Header";

const FraudLandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fraud-analysis/survey/1-6");
  };
  return (
    <div className="w-full h-full flex bg-primary-400 box-border">
      <Header
        leftChild={
          <button onClick={() => navigate("/home")}>
            <img src={LeftArrowWhiteIcon} alt="뒤로가기" />
          </button>
        }
        bgColor="#437efc"
      />
      <div
        className="flex flex-col justify-between h-[calc(100vh-57px)] border-box p-6 mt-[57px]"
        onClick={handleClick}
      >
        <div>
          <div className="text-white text-3xl font-extrabold leading-loose">
            AI 사기유형 진단 서비스
          </div>

          <div className="text-gray-200 text-lg font-normal leading-relaxed">
            의심스러운 연락을 받았다면 <br /> 지금 피싱여부를 진단해보세요!
          </div>

          <img src={HomeBgShieild} className="absolute right-0 top-33" />
        </div>

        <div>
          <div className="w-full mb-5 text-white text-xl font-medium leading-normal">
            ‘AI 사기유형 진단 서비스’는 피싱 상황이 의심될 때 대화 내용 분석을
            통해 위험 상황을 판단해 주는 서비스예요.
          </div>
          <div className="w-full text-white text-xl font-medium leading-normal">
            분석을 위해 진행되는 사전 설문을 꼼꼼히 입력해 주실수록 진단의
            정확도가 올라가요.
          </div>

          <div className="flex justify-end z-0 my-10">
            <img src={Blockee} width="144px" height="126px" />
          </div>
          <div className="flex justify-center text-white/50 text-xl font-semibold leading-loose">
            화면을 터치하여 시작하세요!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudLandingPage;
