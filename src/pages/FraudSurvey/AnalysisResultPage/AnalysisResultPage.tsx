import { useNavigate } from "react-router-dom";
import { useEffect, useState, type SetStateAction } from "react";
import Header from "../../../components/Header/Header";
import TypeFeatureCard from "./components/TypeFeatureCard";

import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"
import FileIcon from "../../../assets/analysis-result/file-icon.png"
import { dummyResponse, riskState } from "./constants";
import { getTheme } from "../../../utils/fraudResult";
import { useScrollHeader } from "../../../hooks/useScrollHeader";
import BottomCard from "./components/BottomCard";
import FraudType from "./components/FraudType";
import { ReportCallDrawer } from "./components/ReportCallDrawer";

const AnalysisResultPage = () => {
    const navigate = useNavigate();

    const [resultTheme, setResultTheme] = useState(riskState[0]);
    const [overrideHeader, setOverrideHeader] = useState(false);

    const [openReportCall, setOpenReportCall] = useState(false);
    const [openGuardianCall, setOpenGuardianCall] = useState(false);
    
    const handleBackClick = () => {
        navigate(-1);
        // navigate("/fraud-analysis/survey/9");
    };
    const handleCloseClick = () => navigate("/home");
    const handleNewsClick = () => console.log("아마 뉴스로 이동일듯?")

    useEffect(() => {
        const themeIndex = getTheme(dummyResponse.data.riskLevel as string)
        riskState[themeIndex].degree = dummyResponse.data.score * 180 / 100;
        setResultTheme(riskState[themeIndex]);
    }, [])

    useScrollHeader((overrideHeader) => setOverrideHeader(overrideHeader))

    return (
        <div className="flex flex-col justify-between w-full h-full overflow-y-scroll">

            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <svg className={overrideHeader ? 'text-black' : 'text-white'} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17.5195L1 9.51953L9 1.51953" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                }
                bgColor={`${overrideHeader ? '#fff' : resultTheme.bgColor}`}
                title={
                    <div className="text-sm font-bold leading-loose" style={{ color: `${overrideHeader ? '#000B25' : '#fff'}` }}>
                        {/* <div className="text-white text-xl font-bold leading-loose"> 폰트 크기 따른 헤더 크기 바뀜 문제*/}
                        AI 분석 결과
                    </div>
                }
                rightChild={
                    <button onClick={handleCloseClick}>
                        <svg className={overrideHeader ? 'text-black' : 'text-white'} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.256 5.93359L5.25 15.9396" stroke="currentColor" strokeWidth="1.66766" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.25 5.93359L15.256 15.9396" stroke="currentColor" strokeWidth="1.66766" strokeLinecap="round" strokeLinejoin="round" />
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
                    <div className="relative left-25 bottom-11 w-16 h-16 flex items-center justify-end">
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
                    <FraudType data={dummyResponse.data} />
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

            <BottomCard setOpenReportCall={setOpenReportCall} setOpenGuardianCall={setOpenGuardianCall} />
            <ReportCallDrawer openReportCall={openReportCall} setOpenReportCall={setOpenReportCall} />
            <ReportCallDrawer openReportCall={openGuardianCall} setOpenReportCall={setOpenGuardianCall} />
        </div>
    )
}

export default AnalysisResultPage;