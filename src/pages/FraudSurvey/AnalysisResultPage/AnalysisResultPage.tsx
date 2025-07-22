import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-white-icon.svg";
import WhiteX from "../../../assets/icons/x-white-icon.svg"
import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import Blockee from "../../../assets/character-cropped-fit-image.svg";
import Warning from "../../../assets/analysis-result/warning.svg";
import PhoneCall from "../../../assets/icons/phone-call-icon.png";
import Siren from "../../../assets/icons/siren-icon.svg";
import SmartPhone from "../../../assets/analysis-result/smartphone-icon.png";
import RiskRed from "../../../assets/analysis-result/risk-level-red.svg";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.svg";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.svg";
import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"

import { useEffect, useState } from "react";
import ReactingCard from "./components/ReactingCard";

const riskState = [
    {
        bgColor: "#F24E4E",
        text: "사기 위험도가 높은 상황",
        bubbleChat: RiskChatBubble,
        boardImg: RiskRed,
        degree: 135,
    },
    {
        bgColor: "#FFCD42",
        text: "사기 위험도 주의 상황",
        bubbleChat: WarnChatBubble,
        boardImg: RiskYellow,
        degree: 90,
    },
    {
        bgColor: "#40D479",
        text: "사기 위험도가 낮은 상황",
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

    const [resultTheme, setResultTheme] = useState(riskState[1]);

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

    useEffect(() => {
        let flag = 0;
        if (dummyResponse.data.riskLevel === "위험")
            flag = 0;
        if (dummyResponse.data.riskLevel === "주의")
            flag = 1;
        if (dummyResponse.data.riskLevel === "안전")
            flag = 2;

        flag = 2
        setResultTheme(riskState[flag]);
    }, [])


    return (
        <div className="flex flex-col justify-between w-full h-full overflow-y-scroll">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowIcon} alt="뒤로가기" />
                    </button>
                }
                bgColor={resultTheme.bgColor}
                title={
                    <div className="text-white text-xl font-bold leading-loose">
                        AI 분석 결과
                    </div>
                }
                rightChild={
                    <button onClick={handleHomeClick}>
                        <img src={WhiteX} alt="창닫기" className="w-6 h-6" />
                    </button>
                }
            />

            <div className="mt-[57px] h-37" style={{ backgroundColor: `${resultTheme.bgColor}` }}>
                <div className="p-0">
                    <img src={resultTheme.bubbleChat} alt="위험 경고문구" className="w-51 h-18" />
                    <img src={Blockee} alt="캐릭터" className="w-28 h-24 z-0" />
                    <img src={Warning} alt="위험 아이콘" className="w-12 h-10" />
                </div>
            </div>

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6">
                <div className="text-3xl font-extrabold leading-10" style={{color:resultTheme.bgColor}}>
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

                <div className="w-full h-0 outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300 my-7.5"></div>

                {resultTheme.bgColor !== "" ? (
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

                            <div className="w-full px-4 py-3.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
                                <div className="flex text-lg font-bold leading-snug">

                                    {dummyResponse.data.keywords.map((keyWord, index) => {
                                        return (
                                            <span className="text-red-500">
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

                <div className="mt-7.5 text-center text-black text-xl font-bold leading-loose">
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
            {/* 여기까지 사기 분석 결과 내용*/}
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
