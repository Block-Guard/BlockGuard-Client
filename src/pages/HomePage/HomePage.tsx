const HomePage = () => {

    return (
        <div className="overflow-y-scroll no-scrollbar">
            <div className="w-full h-[718px] relative p-6 bg-blue-500 rounded-bl-[20px] rounded-br-[20px] ">
                <div className="origin-top-left justify-start text-blue-50 text-base font-bold font-['Pretendard'] leading-loose">
                    Block Guard
                </div>

                <div className="origin-top-left justify-start text-white text-3xl font-extrabold font-['Pretendard'] leading-loose">
                    피싱 사기가 의심 되시나요?
                </div>

                <div className="origin-top-left justify-center text-gray-200 text-lg font-normal font-['Pretendard'] leading-normal">
                    의심스러운 상황에 대해 설명해주시면
                    <br />
                    블락이가 피싱여부를 분석해드려요!
                </div>

                <img src="/public/homeBackgroundShield.svg"
                    className="absolute right-0" />

                <div className="w-80 h-52 relative mt-50
                 bg-white rounded-[20px] not-last-of-type:outline-2 outline-offset-[-2px] outline-white/60 backdrop-blur-sm">
                    <div className="justify-start text-slate-950 text-2xl font-bold font-['Pretendard'] leading-7">사기 의심 상황 분석</div>
                    <div className="w-52 justify-center text-blue-500 text-base font-medium font-['Pretendard'] leading-normal">
                        AI 분석을 통해 다양한 상황에 따른<br />
                        사기 가능성과 사기 유형에 대한 <br />
                        레포트 제공
                    </div>

                    <button>시작하기</button>
                </div>

                <div className="w-80 h-28 bg-white/10 rounded-[20px] border-2 border-white/60">
                    <div className="justify-center text-white text-2xl font-bold font-['Pretendard'] leading-9">
                        클릭 한 번으로 위험 확인
                    </div>
                    <input type="text" placeholder="URL / 전화번호를 검색해보세요" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;