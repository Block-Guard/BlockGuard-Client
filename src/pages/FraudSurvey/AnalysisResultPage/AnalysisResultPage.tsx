import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-white-icon.svg";
import WhiteX from "../../../assets/icons/x-white-icon.svg"
import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import Warning from "../../../assets/analysis-result/warning.svg";
import RightArrowIcon from "../../../assets/icons/arrow-right-site-blue-icon.svg"
import { useState } from "react";



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

                    <img src={Warning} alt="위험 아이콘" className="w-12 h-10" />
                </div>
            </div>

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6">
                <div className="text-red-500 text-3xl font-extrabold leading-10">
                    사기 위험도가 높은 상황
                </div>
                <div>
                    <img src="" alt="위험도 표" />
                </div>
                <div className="w-full h-0 outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300"></div>

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
                            <div className="w-80 px-4 py-3.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
                                해당 메시지는 검찰 또는 경찰을 사칭하여 고소장 접수,범죄 연루 등을 빌미로 개인정보-신분증, 계좌번호 등-나 ‘안전계좌 송금’을 요구해 금전을 탈취하는 피싱 사기 수법입니다.
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
                                                {index === 0 ? "\"" : null}
                                                {keyWord}
                                                {index !== dummyResponse.data.keywords.length - 1 ? "+" : "\""}
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
        </div>
    )
}

export default AnalysisResultPage;
