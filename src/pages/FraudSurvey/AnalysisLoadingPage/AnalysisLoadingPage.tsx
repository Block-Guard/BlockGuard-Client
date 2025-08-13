import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import BlockeeGlitered from "../../../assets/characters/blockee-glitering.png";
import Header from "../../../components/Header/Header";
const AnalysisLoadingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        leftChild={
          <button onClick={() => navigate(-1)}>
            <img src={LeftArrowIcon} alt="뒤로가기" />
          </button>
        }
      />
      <div className="relative h-[calc(100vh-70px)] pb-10 flex flex-col px-6 mt-[70px] justify-center items-center gap-4">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-bold text-2xl leading-9">결과 진단 중</h1>
          <p className="text-primary-300 font-medium text-lg leading-7">
            잠시만 기다려주세요
          </p>
        </div>
        <img src={BlockeeGlitered} alt="캐릭터" className="animate-floating" />
      </div>
    </div>
  );
};

export default AnalysisLoadingPage;
