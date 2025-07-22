import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import ReactingCard from "./components/ReactingCard";
import TypeFeatureCard from "./components/TypeFeatureCard";

import LeftArrowIcon from "../../../assets/icons/arrow-left-white-icon.svg";
import WhiteX from "../../../assets/icons/x-white-icon.svg"


import PhoneCall from "../../../assets/icons/phone-call-icon.png";
import Siren from "../../../assets/icons/siren-icon.svg";

import BlockeeWarning from "../../../assets/characters/blockee-warning.svg";
import BlockeeSafe from "../../../assets/characters/blockee-safe.svg";

import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import SmartPhone from "../../../assets/analysis-result/smartphone-icon.png";
import RiskRed from "../../../assets/analysis-result/risk-level-red.svg";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.svg";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.svg";
import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"
import FileIcon from "../../../assets/analysis-result/file-icon.png"


const riskState = [
    {
        state: "risk",
        bgColor: "#F24E4E",
        text: "사기 위험도가 높은 상황",
        bubbleChat: RiskChatBubble,
        character: BlockeeWarning,
        boardImg: RiskRed,
        degree: 135,
    },
    {
        state: "warn",
        bgColor: "#FFCD42",
        text: "사기 위험도 주의 상황",
        bubbleChat: WarnChatBubble,
        character: BlockeeWarning,
        boardImg: RiskYellow,
        degree: 90,
    },
    {
        state: "safe",
        bgColor: "#40D479",
        text: "사기 위험도가 낮은 상황",
        character: BlockeeSafe,
        bubbleChat: SafeChatBubble,
        boardImg: RiskGreen,
        degree: 45,
    },
];

const dummyResponse = {
    "code": 2014,
    "message": "사기 분석이 완료되었습니다.",
    "data": {
        "riskLevel": "위험", // "주의", "안전"
        "score": 94.2,
        "estimatedFraudType": "기관 사칭형",//"PROSECUTOR_IMPERSONATION",
        "keywords": ["검찰", "송금", "서민금융"],
        "explanation": "검찰을 사칭해 송금 및 개인정보를 요구하며, 서민금융을 사유로 앱 설치를 유도하는 전형적인 사기입니다.",
        "recommendedAction": "즉시 앱 삭제 및 112에 신고하세요."
    }
}

const AnalysisResultPage = () => {
    const navigate = useNavigate();

    const [resultTheme, setResultTheme] = useState(riskState[0]);
    const [overrideHeader, setOverrideHeader] = useState(false);

    const handleBackClick = () => {
        navigate(-1);
        // navigate("/fraud-analysis/survey/9");
    };
    const handleGuardianClick = () => {
        console.log("보호자 바텀시트");
    }
    const handleCallClick = () => {
        console.log("전화 태그 연결");
    }
    const handleReportClick = () => {
        navigate("/emergency/report-overview");
    }
    const handleHomeClick = () => {
        navigate("/home");
    }
    const handleNewsClick = () => {
        console.log("아마 뉴스로 이동일듯?")
    }

    const getTheme = () => {
        let flag = 0;
        if (dummyResponse.data.riskLevel === "위험")
            flag = 0;
        if (dummyResponse.data.riskLevel === "주의")
            flag = 1;
        if (dummyResponse.data.riskLevel === "안전")
            flag = 2;

        flag = 0; //테스트용

        return flag;
    }

    useEffect(() => {
        riskState[getTheme()].degree = dummyResponse.data.score * 180 / 100;
        setResultTheme(riskState[getTheme()]);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            // 일정 구간 스크롤이 내려가면 버튼을 보여준다.
            if (window.scrollY > window.outerHeight / 5) {
                setOverrideHeader(true)
            }
            else {
                console.log(resultTheme)
                setOverrideHeader(false)
            }
        };
        // window에 scroll 이벤트를 넣는다.
        window.addEventListener('scroll', handleScroll);
        // 페이지를 벗어날 때 이벤트를 제거한다.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className="flex flex-col justify-between w-full h-full overflow-y-scroll">

            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <svg className={overrideHeader ? 'text-black' : 'text-white'} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17.5195L1 9.51953L9 1.51953" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                }
                bgColor={`${overrideHeader ? '#fff' : resultTheme.bgColor }`}
                title={
                    <div className="text-sm font-bold leading-loose" style={{ color: `${overrideHeader ? '#000B25' : '#fff'}` }}>
                        {/* <div className="text-white text-xl font-bold leading-loose"> 폰트 크기 따른 헤더 크기 바뀜 문제*/}
                        AI 분석 결과
                    </div>
                }
                rightChild={
                    <button onClick={handleHomeClick}>
                        <svg className={overrideHeader ? 'text-black' : 'text-white'}width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.256 5.93359L5.25 15.9396" stroke="currentColor" stroke-width="1.66766" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.25 5.93359L15.256 15.9396" stroke="currentColor" stroke-width="1.66766" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                }
            />

            {/* 그냥 말풍선과 캐릭터, 아이콘을 전부 하나로 합치는 것도 고려.. */}
            <div className="h-37 flex justify-between items-end mt-[57px] pt-6 pl-6 pr-9 overflow-clip" style={{ backgroundColor: `${resultTheme.bgColor}` }}>
                <div className="h-full flex items-start">
                    <img src={resultTheme.bubbleChat} alt="위험 경고문구" className="w-51 h-18" />
                </div>
                <div className="h-full flex items-end">
                    <img src={resultTheme.character} alt="캐릭터" className="w-28 h-24 relative top-4" />
                </div>
            </div>

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6 z-10">
                <div className="text-3xl font-extrabold leading-10" style={{ color: resultTheme.bgColor }}>
                    {resultTheme.text}
                </div>

                <div className="h-42">
                    <img src={resultTheme.boardImg} alt="위험도 표"
                        className="z-0" />
                    <div className="relative left-27 bottom-11 w-16 h-16 flex items-center justify-end">
                        <img src={IndicatorArrow} alt="위험지시핀"
                            className="absolute"
                            style={{
                                transform: `rotate(${resultTheme.degree}deg)`,
                                transformOrigin: "95% center",
                            }} />
                    </div>
                </div>

                {resultTheme.state === "safe" ?
                    (
                        <div className="w-full px-4 py-3.5 mt-7.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">
                            {dummyResponse.data.explanation}
                        </div>
                    ) : null}

                <div className="w-full h-0 outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300 my-7.5"></div>

                {resultTheme.state !== "safe" ? (
                    <div className="w-full">

                        <div>
                            <div className="text-slate-950 text-xl font-bold leading-loose">
                                추정 사기 유형
                            </div>
                            <div className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                                <div className="text-white text-2xl font-bold leading-9">
                                    {dummyResponse.data.estimatedFraudType}
                                </div>
                            </div>
                            <div className="w-full px-4 py-3.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">
                                {dummyResponse.data.explanation}
                            </div>
                        </div>

                        <div className="mt-7.5">
                            <div className="text-slate-950 text-xl font-bold leading-loose">
                                판단 키워드
                            </div>

                            <div className="w-full px-4 py-3.5 mb-7.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
                                <div className="flex text-lg font-bold leading-snug">

                                    {dummyResponse.data.keywords.map((keyWord, index) => {
                                        return (
                                            <span className="text-red-500" key={keyWord}>
                                                {index === 0 ? "\"" : <>&nbsp;</>}
                                                {keyWord}
                                                {index !== dummyResponse.data.keywords.length - 1 ? " + " : "\""}
                                            </span>)
                                    })} 등
                                </div>

                                <div className="text-slate-950 text-lg font-bold leading-snug">
                                    → 고위험 패턴 {dummyResponse.data.keywords.length}건 일치
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                <div className="flex flex-col gap-2.5 w-full mb-7.5">
                    <div className="text-slate-950 text-xl font-bold leading-loose">
                        이 유형의 주요 특징은?
                    </div>

                    <TypeFeatureCard
                        title={"지금 안 하면 안 됩니다!"}
                        content={<>긴급성을 강조하는 말투를 사용해서 <br />판단력을 흐리게 만들어요</>} />

                    <TypeFeatureCard
                        title={"신뢰성 확보 시도"}
                        content={<>공문서 위장, 실제 기관명 도용 등으로  <br />신뢰감을 확보해요</>} />

                    <TypeFeatureCard
                        title={"신분증/ 계좌 요청"}
                        content={<>개인정보를 빼내어 범죄에 악용하거나 <br />명의도용을 위해 신분증이나 계좌를 요청해요 </>} />


                    <button className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5"
                        onClick={handleNewsClick}>
                        <div className="flex items-center text-white text-2xl font-bold leading-9 gap-1.5">
                            <img src={FileIcon} alt="아이콘" className="w-6 h-6" /> 관련 피해 사례 더보기
                        </div>
                    </button>
                </div>

                {/* 여기부터 응답과 상관없음 */}
                <div className="text-center text-black text-xl font-bold leading-loose">
                    AI 판단 결과는 <br />완벽하지 않을 수 있습니다.
                </div>


                <div className="mt-7.5 text-center text-black text-xl font-bold leading-loose">
                    의심되면 <span className="text-blue-500">경찰청(112)</span>
                    <br />
                    또는 <span className="text-blue-500">금융감독원(1132)</span>
                    <br />
                    로 확인 전화를 추천드려요.
                </div>
            </div>

            <div className="w-full h-96 px-6 py-7.5 bg-gradient-highlight-2 rounded-tl-[20px] rounded-tr-[20px] inline-flex flex-col justify-start items-center gap-7">
                <div className="text-center justify-center text-white text-2xl font-bold leading-9">
                    지금 이렇게 하세요
                </div>

                <div className="w-full flex justify-between gap-2">
                    <ReactingCard icon={<img className="w-6 h-7" src={PhoneCall} alt="전화 아이콘" />} title={<>신고<br />접수하기</>} btnText={"전화 연결"} handleBtn={handleCallClick} />
                    <ReactingCard icon={<img className="w-6 h-7" src={Siren} alt="사이렌 아이콘" />} title={<>피해대응<br />절차보기</>} btnText={"바로가기"} handleBtn={handleReportClick} />
                    <ReactingCard icon={<img className="w-6 h-7" src={SmartPhone} alt="스마트폰 아이콘" />} title={<>보호자에게<br />알리기</>} btnText={"공유하기"} handleBtn={handleGuardianClick} />
                </div>

                <button className="text-center justify-center text-white text-base font-bold underline leading-normal" onClick={handleHomeClick}>
                    홈으로 돌아가기
                </button>
            </div>

        </div>
    )
}

export default AnalysisResultPage;
