import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import BlockeeGlitered from "../../../assets/characters/blockee-glitering.svg"
const AnalysisLoadingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full px-6 justify-center items-center">
      <div className="w-full h-12 flex justify-start">
        <button onClick={() => navigate(-1)}>
          <img src={LeftArrowIcon} alt="뒤로가기" />
        </button>
      </div>
      <div className="mt-40 text-center text-black text-2xl font-bold font-['Pretendard'] leading-9">
        결과 진단 중
      </div>
      <div className="mb-25 text-center text-blue-300 text-lg font-medium font-['Pretendard'] leading-relaxed">
        잠시만 기다려주세요
      </div>

      <img src={BlockeeGlitered} alt="캐릭터" className="w-144 h-128 mt-27" />
      {/* <img src={BlockeeGlitered} alt="캐릭터" className="w-44 h-28 mt-27" /> */}
    </div >
  );
};

export default AnalysisLoadingPage;
