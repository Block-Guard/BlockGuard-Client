import HomeCheck from "./HomeCheck";

const HomePage = () => {
  return (
    <div className="h-[800px] overflow-y-scroll no-scrollbar">
     
    <HomeCheck/>
      <div className="justify-center text-slate-950 text-xl font-bold font-pretendard leading-loose">
        바로 신고 및 대응
      </div>

      <div className="w-80 px-5 py-3.5 bg-[#EEF1F3] rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2">
        <div className="flex flex-row">
          <div className="flex flex-row">
            <div className="justify-center text-slate-950 text-xl font-bold font-pretendard leading-loose">
              상활별 가이드 바로가기
            </div>
            <img src="icons/Siren-icon.svg" alt="사이렌 아이콘" />
          </div>

          <img src="icons/RightArrow-icon.svg" alt="오른쪽 화살표" />
        </div>

        <div className="justify-center text-gray-400 text-base font-normal font-pretendard leading-tight">
          이미 사기를 당하셨나요?
          <br />
          버튼을 눌러 바로 신고 조치를 취할 수 있어요
        </div>
      </div>

      <div className="justify-center text-slate-950 text-xl font-bold font-pretendard leading-loose">
        최신 뉴스
      </div>

      <div className="w-60 pb-3.5 bg-gray-100 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        기사 이미지 기사 제목 기사 메타 정보 가로로 리스트 반복
      </div>
    </div>
  );
};

export default HomePage;
