const HomePage = () => {
  return (
    <div className="h-[800px] overflow-y-scroll no-scrollbar">
      <div className="bg-primary-300 font-pretendard font-extrabold">
        테스트용
      </div>
      <div className="w-full h-[718px] relative p-6 bg-blue-500 rounded-bl-[20px] rounded-br-[20px]">
        <div className="justify-start text-blue-50 text-base font-bold font-pretendard leading-loose">
          Block Guard
        </div>

        <div className="justify-start text-white text-3xl font-extrabold font-pretendard leading-loose">
          피싱 사기가 의심 되시나요?
        </div>

        <div className="justify-center text-gray-200 text-lg font-normal font-pretendard leading-normal">
          의심스러운 상황에 대해 설명해주시면
          <br />
          블락이가 피싱여부를 분석해드려요!
        </div>

        <img
          src="/public/homeBackgroundShield.svg"
          className="absolute right-0 top-33"
        />

        <div className="flex flex-col items-center">
          <div
            className="flex flex-col justify-between w-[344px] h-52 relative mt-39 mb-4 p-4
                 bg-white rounded-[20px] not-last-of-type:outline-2 outline-offset-[-2px] outline-white/60 backdrop-blur-sm"
          >
            <div>
              <div className="mb-1 justify-start text-slate-950 text-2xl font-bold font-pretendard leading-7">
                사기 의심 상황 분석
              </div>
              <div className="w-full justify-center text-blue-500 text-base font-medium font-pretendard leading-normal">
                AI 분석을 통해 다양한 상황에 따른
                <br />
                사기 가능성과 사기 유형에 대한 <br />
                레포트 제공
              </div>
            </div>
            <div>
              <div className="absolute left-53 bottom-6 z-[-1]">
                <img src="public/Blockee.svg" alt="캐릭터" />
              </div>
              <button
                className="w-[310px] h-11 py-1.5 z-10
                    bg-gradient-to-br from-blue-400 to-green-300 
                    rounded-[10px] justify-center items-center text-white text-lg font-semibold font-pretendard"
              >
                시작하기
              </button>
            </div>
          </div>

          <div
            className="w-[344px] h-28 p-4
                 bg-white/10 rounded-[20px] border-2 border-white/60"
          >
            <div className="justify-center text-white text-2xl font-bold font-pretendard leading-9">
              클릭 한 번으로 위험 확인
            </div>
            <img src="icons/Search-icon.svg" alt="돋보기 아이콘" />
            <input type="text" placeholder="URL / 전화번호를 검색해보세요" />
            <div className="w-80 h-0.5 bg-white rounded-[90px]" />
          </div>
        </div>
      </div>

      {/* 여기까지 상단 파란 영역 */}

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
