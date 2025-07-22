import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-white-icon.svg";
import WhiteX from "../../../assets/icons/x-white-icon.svg"
import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import Blockee from "../../../assets/character-cropped-fit-image.svg";
import Warning from "../../../assets/analysis-result/warning.svg";
import PhoneCall from "../../../assets/icons/phone-call-icon.png";
import Siren from "../../../assets/icons/siren-icon.svg";
import SmartPhone from "../../../assets/analysis-result/smartphone-icon.png";
import RiskRed from "../../../assets/analysis-result/risk-level-red.svg";
import RiskYellow from "../../../assets/analysis-result/risk-level-red.svg";
import RiskGreen from "../../../assets/analysis-result/risk-level-red.svg";

import { useState } from "react";
import ReactingCard from "./components/ReactingCard";



const AnalysisResultPage = () => {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState("#F24E4E");
    const handleBackClick = () => {
        navigate(-1);
        // navigate("/fraud-analysis/survey/9");
    };
    const handleCloseClick = () => {
        navigate("/home");
    };

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

    const setStaticInfo = () => {
        setBgColor("white")
        if (dummyResponse.data.riskLevel === "위험") {
            setBgColor("#F24E4E")

        }
        if (dummyResponse.data.riskLevel === "주의") {
            setBgColor("#FFCD42")

        }
        if (dummyResponse.data.riskLevel === "안전") {
            setBgColor("#40D479")
        }
    }


    return (
        <div className="flex flex-col justify-between w-full h-full overflow-y-scroll">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowIcon} alt="뒤로가기" />
                    </button>
                }
                bgColor={bgColor}
                title={
                    <div className="text-white text-xl font-bold leading-loose">
                        AI 분석 결과
                    </div>
                }
                rightChild={
                    <button onClick={handleCloseClick}>
                        <img src={WhiteX} alt="창닫기" className="w-6 h-6" />
                    </button>
                }
            />

            <div className="mt-[57px] h-37" style={{ backgroundColor: `${bgColor}` }}>
                <div>
                    <img src={RiskChatBubble} alt="위험 경고문구" className="w-51 h-18" />
                    <img src={Blockee} alt="캐릭터" className="w-28 h-24"/>
                    <img src={Warning} alt="위험 아이콘" className="w-12 h-10" />
                </div>
            </div>

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6">
                <div className="text-red-500 text-3xl font-extrabold leading-10">
                    사기 위험도가 높은 상황
                </div>
                <div>
                    <img src={RiskRed} alt="위험도 표" />
                </div>

                <div className="w-full h-0 outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300 my-7.5"></div>

                {bgColor !== "" ? (
                    <div className="w-full">

                        <div>
                            <div className="text-slate-950 text-xl font-bold leading-loose">
                                추정 사기 유형
                            </div>
                            <div className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                                <div className="text-white text-2xl font-bold font-['Pretendard'] leading-9">
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
                    <br/>
                    또는 <span className="text-blue-500">금융감독원(1132)</span>
                    <br/>
                    로 확인 전화를 추천드려요.
                </div>
            </div>
            {/* 여기까지 사기 분석 결과 내용*/}
            <div className="w-full h-96 px-6 py-7 bg-gradient-highlight-2 rounded-tl-[20px] rounded-tr-[20px] inline-flex flex-col justify-start items-center gap-7">
                <div className="text-center justify-center text-white text-2xl font-bold leading-9">
                    지금 이렇게 하세요
                </div>
                
                <div className="w-full flex gap-2">
                    <ReactingCard icon={<img className="w-6 h-7" src={PhoneCall} alt="전화 아이콘"/>} title={<>신고<br/>접수하기</>} btnText={"전화 연결"} handleBtn={function (): void {
                        throw new Error("Function not implemented.");
                    } }/>
                    <ReactingCard icon={<img className="w-6 h-7" src={Siren} alt="사이렌 아이콘"/>} title={<>피해대응<br/>절차보기</>} btnText={"바로가기"} handleBtn={function (): void {
                        throw new Error("Function not implemented.");
                    } }/>
                    <ReactingCard icon={<img className="w-6 h-7" src={SmartPhone} alt="스마트폰 아이콘"/>} title={<>보호자에게<br/>알리기</>} btnText={"공유하기"} handleBtn={function (): void {
                        throw new Error("Function not implemented.");
                    } }/>
                </div>

                <div className="text-center justify-center text-white text-base font-bold underline leading-normal">
                    홈으로 돌아가기 
                </div>
            </div>
    
        </div>
    )
}

export default AnalysisResultPage;
