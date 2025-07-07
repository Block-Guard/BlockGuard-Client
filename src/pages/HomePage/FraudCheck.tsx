const FraudCheck = () => {
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
        <div className="absolute right-1 bottom-3.5 z-[-1]">
          <img src="public/Blockee.svg" alt="캐릭터" />
        </div>
        <button
          className="w-full h-11 py-1.5 z-10 
                    bg-gradient-to-br from-blue-400 to-green-300 
                    rounded-[10px] justify-center items-center text-white text-lg font-semibold font-pretendard"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default FraudCheck;
