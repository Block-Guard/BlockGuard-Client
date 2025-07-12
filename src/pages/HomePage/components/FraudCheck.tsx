import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import Blockee from "../../../assets/character-image.svg";

const FraudCheck = () => {
  const navigate = useNavigate();
  const onClickCheckStart = () => {
    console.log("사기 의심 상황 분석 시작하기 클릭");
    navigate("/fraud-analysis");
  };
  return (
    <div
      className="flex flex-col gap-16 w-full relative mt-35 mb-6 p-4 pt-3 
                 bg-white rounded-[20px] not-last-of-type:outline-2 outline-offset-[-2px] outline-white/60 backdrop-blur-sm"
    >
      <div>
        <span className="mb-1 justify-start text-slate-950 text-2xl font-bold leading-9 line">
          사기 의심 상황 분석
        </span>
        <div className="w-full justify-center text-blue-500 text-base font-normal leading-normal">
          AI 분석을 통해 다양한 상황에 따른
          <br />
          사기 가능성과 사기 유형에 대한 레포트 제공
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-1 bottom-5 z-[-1]">
          <img src={Blockee} alt="캐릭터" />
        </div>
        <Button onClick={onClickCheckStart} isHighlight={true}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default FraudCheck;
