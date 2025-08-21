import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import AnalysisLoadingPage from "../FraudSurvey/AnalysisLoadingPage/AnalysisLoadingPage";
import { useEffect, useState } from "react";
import { numberAnalysisApi, urlAnalysisApi } from "../../apis/home";
import { riskState } from "../FraudSurvey/AnalysisResultPage/constants";
import IndicatorArrow from "../../assets/analysis-result/indicator-arrow.svg"
import Button from "../../components/Button/Button";

const NumberUrlResultPage = () => {
    const navigate = useNavigate();
    const [urlNumberParams] = useSearchParams();
    const [riskLevel, setRiskLevel] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    const url = urlNumberParams.get('url') || 'url 아님';
    const number = urlNumberParams.get('number') || 'number 아님';
    const handleCloseClick = () => navigate("/home");

    const handleReportClick = () => {
        console.log("외부 페이지로 이동")
    }

    const getNumberResult = async (inputs: string) => {
        return await numberAnalysisApi(inputs);
    }
    const getUrlResult = async (inputs: string) => {
        return await urlAnalysisApi(inputs);
    }

    useEffect(() => {
        const process = async () => {
            try {
                setIsLoading(true);
                let response;
                if (url !== "none") {
                    response = await getUrlResult(url);
                }
                else if (number !== "none") {
                    response = await getNumberResult(url);
                }

                if (response?.riskLevel === "위험")
                    setRiskLevel(0);
                else
                    setRiskLevel(2);

                setIsLoading(false);
            } catch (error) {
                console.error("사기 분석 결과 페이지에서 로드 오류 발생 - 더미데이터 로드", error);
                setRiskLevel(0); // 일단 위험
            } finally {
                setIsLoading(false);
            }
        }

        if (url !== "none" || number !== "none") {
            process();
        }

    }, [])


    if (isLoading) {
        return <AnalysisLoadingPage />
    }

    return (
        <div className="flex flex-col w-screen h-dvh">
            <Header
                bgColor={riskState[riskLevel].bgColor}
                title={
                    <h1 className="text-xl font-bold leading-8 text-white">
                        AI 분석 결과
                    </h1>
                }
                rightChild={
                    <button onClick={handleCloseClick}>
                        <svg className='text-white' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.256 5.93359L5.25 15.9396" stroke="currentColor" strokeWidth="1.66766" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.25 5.93359L15.256 15.9396" stroke="currentColor" strokeWidth="1.66766" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                }
            />

            <div className="h-63 flex flex-col justify-between items-end mt-[57px] pt-6 px-6 overflow-clip" style={{ backgroundColor: `${riskState[riskLevel].bgColor}` }}>

                {url !== "none" ? (
                    <div className="w-full justify-center items-center gap-1.5 text-white text-base font-medium leading-normal p-2
                border-b-1 border-white line-clamp-3 break-words">
                        {url}
                    </div>
                ) : (
                    <div className="w-full inline-flex flex-col justify-center items-center gap-1.5 text-white text-3xl 
                    font-extrabold leading-10 p-2 border-b-1 border-white">
                        {number}
                    </div>
                )}

                <div className="w-full h-36 flex justify-between relative top-2">
                    <div className="h-full flex items-start">
                        <img src={riskState[riskLevel].bubbleChat} alt="안전 문구" className="w-51 h-18" />
                    </div>
                    <div className="h-full flex items-end">
                        <img src={riskState[riskLevel].character} alt="위험 경고 캐릭터" style={{ width: '120px', height: '96px', objectFit: 'cover' }} />
                    </div>
                </div>

            </div >

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6 z-10" >
                <div className="text-3xl font-extrabold leading-10" style={{ color: riskState[riskLevel].bgColor }}>
                    {riskState[riskLevel].text2}
                </div>

                <div className="h-42 relative">
                    <img src={riskState[riskLevel].boardImg} alt="위험도 표"
                        className="z-0 w-85 h-41" />
                    <div className="relative left-25 bottom-11 w-16 h-16 flex items-center justify-end">
                        <img src={IndicatorArrow} alt="위험지시핀"
                            className="absolute left-2"
                            style={{
                                transform: `rotate(${riskState[riskLevel].degree}deg)`,
                                transformOrigin: "95% center",
                            }} />
                    </div>
                </div>


                <div className="w-full px-10 py-3.5 mt-7.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">
                    {riskLevel === 0 ?
                        (
                            <>
                                {
                                    url !== "none" ? (
                                        "이 URL은 사기피해가 의심되는 위험 URL이에요. 각별한 주의가 필요해요."
                                    ) : (
                                        "이 전화번호는 사기피해가 의심되는 위험 번호예요. 각별한 주의가 필요해요."
                                    )
                                }
                            </>

                        ) : (
                            <>
                                {
                                    url !== "none" ? (
                                        "분석결과 안전한 URL로,\n 피해사례 등록이나 의심요소가 없어요."
                                    ) : (
                                        "분석결과 안전한 전화번호로,\n 피해사례 등록이나 의심요소가 없어요."
                                    )
                                }
                            </>
                        )
                    }
                </div>

                <div className="w-full h-full mt-9">
                    <Button
                        onClick={handleReportClick}
                        size="lg"
                        isHighlight={false}
                    >
                        <a href="https://www.counterscam112.go.kr/report/reportGuide.do?type=itg">
                            신고하기
                        </a>
                    </Button>
                </div>

            </div >
        </div >
    )
}

export default NumberUrlResultPage;