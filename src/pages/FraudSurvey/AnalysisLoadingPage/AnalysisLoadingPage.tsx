import Blockee from "../../../assets/Blockee-cropped-fit.svg";

const AnalysisLoadingPage = () => {
  return (
    <div className="flex flex-col w-full h-full px-6 justify-center items-center">
      <div className="self-stretch text-center justify-start text-black text-2xl font-bold font-['Pretendard'] leading-9">
        결과 진단 중
      </div>
      <div className="self-stretch text-center justify-start text-blue-300 text-lg font-medium font-['Pretendard'] leading-relaxed">
        잠시만 기다려주세요
      </div>

      <img src={Blockee} alt="캐릭터" className="w-32 h-28 mt-27" />
    </div>
  );
};

export default AnalysisLoadingPage;
