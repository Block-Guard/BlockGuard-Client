import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"
import { dummyResponse, riskState } from "./constants";
import { getTheme } from "../../../utils/fraudResult";
import { useScrollHeader } from "../../../hooks/useScrollHeader";
import BottomCard from "./components/BottomCard";
import FraudType from "./components/FraudType";
import { ReportCallDrawer } from "./components/ReportCallDrawer";
import { GuardianCallDrawer } from "./components/GuardianCallDrawer";
import { TypeFeature } from "./components/TypeFeature";
import AnalysisLoadingPage from "../AnalysisLoadingPage/AnalysisLoadingPage";
import { fraudAnalysisApi } from "../../../apis/fraud";
import type { OptionSurveyData } from "../../../types/fraud-types";

const AnalysisResultPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [resultTheme, setResultTheme] = useState(riskState[0]);
    const [overrideHeader, setOverrideHeader] = useState(false);

    const [openReportCall, setOpenReportCall] = useState(false);
    const [openGuardianCall, setOpenGuardianCall] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const handleBackClick = () => navigate("/fraud-analysis/survey/9");
    const handleCloseClick = () => navigate("/home");

    /** 선택 값인 항목으로, location.state에 없을 경우 기본 값 처리용 */
    const initSurvey: OptionSurveyData = {
        appType: "",// 설문 5 (선택)
        atmGuided: "false",// 설문 6 (선택)
        suspiciousLinks: "",// 설문 7 (선택)
        suspiciousPhoneNumbers: "",// 설문 7 (선택)
        imageUrls: [], // 설문 8 (선택)
        messageContent: "",  // 설문 8 (선택)
        // additionalDescription: "",
    }

    const appendToFormData = (formData: FormData, key: string, value: any) => {
        if (key === "atmGuided") {
            formData.append(key, value === "네" ? "true" : "false");
        } else if (key === "imageUrls" && value.length > 0) {
            (value as File[]).forEach(file => formData.append(key, file));
        } else if (Array.isArray(value)) {
            (value as string[]).forEach(item => formData.append(key, item));
        } else {
            formData.append(key, String(value));
        }
    };

    const makeForm = () => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(location.state || {})) {
            /** imageBase64는 이미지 프리뷰, localStorage 복원용 */
            if (key === "imageBase64") continue;
            appendToFormData(formData, key, value);
        }
        // initSurvey 기본값 처리
        const filledKeys = Object.keys(location.state || {});
        for (const [key, value] of Object.entries(initSurvey)) {
            if (!filledKeys.includes(key)) {
                appendToFormData(formData, key, value);
            }
        }

        for (const [key, value] of formData.entries()) {
            console.log(`FormData: ${key} = ${value}`);
        }
        return formData;
    }

    const getResult = async (formData: FormData) => {
        return await fraudAnalysisApi(formData);
    }

    useEffect(() => {
        const process = async () => {
            try {
                setIsLoading(true);
                const formData = makeForm();
                const data = await getResult(formData);
                const themeIndex = getTheme(data.riskLevel)
                riskState[themeIndex].degree = data.score * 180 / 100;
                setIsLoading(false);
            } catch (error) {
                console.error("사기 분석 결과 페이지에서 로드 오류 발생", error);
            } finally {
                setIsLoading(false);
            }
        }

        if (location.state) {
            process();
        }

        // const themeIndex = getTheme(dummyResponse.data.riskLevel as string)
        // riskState[themeIndex].degree = dummyResponse.data.score * 180 / 100;
        // setResultTheme(riskState[themeIndex]);
    }, [])

    useScrollHeader((overrideHeader) => setOverrideHeader(overrideHeader))

    if (isLoading) {
        return <AnalysisLoadingPage />
    }

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
                    <h1 className="text-xl font-bold leading-8" style={{ color: `${overrideHeader ? '#000B25' : '#fff'}` }}>
                        AI 분석 결과
                    </h1>
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

                {resultTheme.state === "safe" || dummyResponse.data.estimatedFraudType === "판단할 수 없음" ? null : <TypeFeature />}


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
            <GuardianCallDrawer openGuardianCall={openGuardianCall} setOpenGuardianCall={setOpenGuardianCall} />
        </div>
    )
}

export default AnalysisResultPage;