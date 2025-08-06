import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import AnalysisLoadingPage from "../FraudSurvey/AnalysisLoadingPage/AnalysisLoadingPage";
import { useEffect, useState } from "react";
import { numberAnalysisApi, urlAnalysisApi } from "../../apis/home";
import { riskState } from "../FraudSurvey/AnalysisResultPage/constants";

const NumberUrlResultPage = () => {
    const navigate = useNavigate();
    const [urlNumberParams] = useSearchParams();
    const [riskLevel, setRiskLevel] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState(true);

    const url = urlNumberParams.get('url') || 'url 아님';
    const number = urlNumberParams.get('number') || 'number 아님';
    const handleCloseClick = () => navigate("/home");

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
                setRiskLevel(response?.riskLevel);

                setIsLoading(false);
            } catch (error) {
                console.error("사기 분석 결과 페이지에서 로드 오류 발생 - 더미데이터 로드", error);
                setRiskLevel("안전");
                // setData(dummyResponse.data);
                // const themeIndex = getTheme(dummyResponse.data.riskLevel);
                // setResultTheme(riskState[themeIndex]);
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
        <div className="flex flex-col justify-between w-screen h-screen">
            <Header
                bgColor={riskLevel === "위험" ? "#F24E4E" : "#40D479"}
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

            <div className="h-63 flex flex-col justify-between items-end mt-[57px] pt-6 px-6 overflow-clip" style={{ backgroundColor: `${riskLevel === "위험" ? "#F24E4E" : "#40D479"}` }}>

                {url !== "none" ? (
                    <div className="w-full inline-flex flex-col justify-center items-center gap-1.5 text-white text-base font-medium leading-normal p-2
                border-b-1 border-white">
                        {url}
                    </div>
                ) : (
                    <div className="w-full inline-flex flex-col justify-center items-center gap-1.5 text-white text-3xl 
                    font-extrabold leading-10 p-2 border-b-1 border-white">
                        {number}
                    </div>
                )}

                <div className="w-full flex justify-between">
                    <div className="h-full flex items-start">
                        {
                            riskLevel === "위험" ? (
                                <img src={riskState[0].bubbleChat} alt="위험 경고문구" className="w-51 h-18" />
                            ) : (
                                <img src={riskState[2].bubbleChat} alt="위험 경고문구" className="w-51 h-18" />
                            )
                        }
                    </div>
                    <div className="h-full flex items-end">
                        {
                            riskLevel === "위험" ? (
                                <img src={riskState[0].character} alt="위험 경고문구" className="w-51 h-18" />
                            ) : (
                                <img src={riskState[2].character} alt="위험 경고문구" className="w-51 h-18" />
                            )
                        }
                    </div>
                </div>

            </div >

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6 z-10" >
                {/* <div className="text-3xl font-extrabold leading-10" style={{ color: resultTheme.bgColor }}>
                    {resultTheme.text}
                </div> */}

                {/* <div className="h-42">
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
                </div> */}

                {/* {resultTheme.state === "safe" ?
                    (
                        <div className="w-full px-4 py-3.5 mt-7.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">
                            {data ? data.explanation : "설명 로드 실패"}
                        </div>
                    ) : null} */}

                {/* 여기부터 응답과 상관없음 */}
                <button>신고하기</button>
            </div >
        </div >
    )
}

export default NumberUrlResultPage;