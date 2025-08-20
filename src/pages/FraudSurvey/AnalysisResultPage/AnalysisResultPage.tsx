import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "../../../components/Header/Header";
import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"
import { initSurvey, riskState } from "./constants";
import { getTheme } from "../../../utils/fraudResult";
import { useScrollHeader } from "../../../hooks/useScrollHeader";
import BottomCard from "./components/BottomCard";
import FraudType from "./components/FraudType";
import { ReportCallDrawer } from "./components/ReportCallDrawer";
import { GuardianCallDrawer } from "./components/GuardianCallDrawer";
import { TypeFeature } from "./components/TypeFeature";
import AnalysisLoadingPage from "../AnalysisLoadingPage/AnalysisLoadingPage";
import { fraudAnalysisApi } from "../../../apis/fraud";
import type { FraudResultData } from "../../../types/fraud-types";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";
import AnalysisErrorPage from "../AnalysisErrorPage/AnalysisErrorPage";
import { useQuery } from "@tanstack/react-query";

const AnalysisResultPage = () => {
    const navigate = useNavigate();
    const { allAnswers } = useFraudSurveyContext();
    const booleanAnswer = [
        "pressuredInfo",
        "appOrLinkRequest",
        "thirdPartyConnect",
        "authorityPressure",
        "accountOrLinkRequest",
    ]
    // const [data, setData] = useState<FraudResultData | null>(null);
    const [resultTheme, setResultTheme] = useState(riskState[1]);
    const [overrideHeader, setOverrideHeader] = useState(false);
    const [openReportCall, setOpenReportCall] = useState(false);
    const [openGuardianCall, setOpenGuardianCall] = useState(false);

    const handleBackClick = () => navigate("/fraud-analysis/survey/13");
    /** 사기 분석 결과 얻은 후, localStorage 내 설문 초기화 */
    const handleCloseClick = () => {
        navigate("/home");
    }

    const makeForm = () => {
        const formData = new FormData();
        type SurveyKey = typeof initSurvey & { [key: string]: string | string[] | boolean };
        const stringSurvey: SurveyKey = { ...initSurvey };
        for (const [key, value] of Object.entries(allAnswers)) {
            /** imageBase64는 이미지 프리뷰, localStorage 복원용 */
            if (key === "imageBase64") continue;
            /**  initSurvey 기본값 처리 */
            if (booleanAnswer.includes(key)) {
                stringSurvey[key] = (value === "네");
            } else if (key === "imageFiles") {
                if (value?.length !== 0)
                    (value as File[]).forEach(file => formData.append(key, file));
            }
            else if (value && (typeof value === "string" || (Array.isArray(value) && value.every(item => typeof item === 'string')))) {
                stringSurvey[key] = value;
            }
        }
        formData.append("fraudAnalysisRequest", JSON.stringify(stringSurvey));
        console.log("디버깅용 formData 출력");
        for (const [key, value] of formData.entries()) {
            console.log("formData key값 : ", key);
            if (key !== "imageFiles") {
                for (const [key2, value2] of Object.entries(JSON.parse(value as string))) {
                    console.log(`FormData 중 ${key}를 키값으로 갖는 데이터 : ${key2} = ${value2}`);
                }
            } else if (key === "imageFiles") {
                console.log("key 값이 이미지파일인 경우 : ", typeof value);
            }
        }
        return formData;
    }

    const fetchFraudResult = async () => {
        const formData = makeForm();
        const data: FraudResultData = await fraudAnalysisApi(formData);
        return data;
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['fraud-result', JSON.stringify(allAnswers)],
        queryFn: fetchFraudResult,
        // 키 값이 일치하면 데이터 5분간 유지
        staleTime: 1000 * 60 * 5,
        enabled: !!allAnswers,
        refetchOnMount: false, // 컴포넌트가 다시 마운트될 때 5분내라면 refetch 안 하도록. 
    })

    useEffect(() => {
        if (data) {
            const themeIndex = getTheme(data.riskLevel)
            const detailDegree = { ...riskState[themeIndex], degree: (data.score * 180 / 100) }
            setResultTheme(detailDegree);
        }
    }, [data])

    useScrollHeader((overrideHeader) => setOverrideHeader(overrideHeader))

    if (isLoading)
        return <AnalysisLoadingPage />

    if (error)
        return <AnalysisErrorPage />

    if (!allAnswers && !isLoading)
        navigate("/home"); // 설문 기록이 초기화되었는데, 결과 화면인 에러 경우.. 예외 처리

    return (
        <div className="flex flex-col justify-between w-full h-full">
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
                    <img src={resultTheme.character} alt="캐릭터" className="relative top-4" style={{ width: '120px', height: '96px', objectFit: 'cover' }} />
                </div>
            </div>

            {/* 여기까지 상단 안내 */}

            <div className="flex flex-col items-center py-7.5 px-6 z-10">
                <div className="text-3xl font-extrabold leading-10" style={{ color: resultTheme.bgColor }}>
                    {resultTheme.text}
                </div>

                <div className="h-42 relative">
                    <img src={resultTheme.boardImg} alt="위험도 표"
                        className="z-0 w-85 h-41" />
                    <div className="relative left-25 bottom-11 w-16 h-16 flex items-center justify-end">
                        <img src={IndicatorArrow} alt="위험지시핀"
                            className="absolute left-2"
                            style={{
                                transform: `rotate(${resultTheme.degree}deg)`,
                                transformOrigin: "95% center",
                            }} />
                    </div>
                </div>

                {resultTheme.state === "safe" ?
                    (
                        <div className="w-full px-4 py-3.5 mt-7.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">

                            <div className="text-[#000b25] text-lg font-medium leading-relaxed">
                                분석결과, 현재 상황은 보이스 피싱의 일반적인 패턴과 다르게 나타납니다. 특별한 위험 요소나 이상 징후는 확인되지 않아요
                            </div>
                        </div>
                    ) : null}

                <div className="w-full h-0 outline-[0.50px] outline-offset-[-0.25px] outline-zinc-300 my-7.5"></div>

                {resultTheme.state !== "safe" ? (
                    <>
                        {data ? <FraudType data={data} /> : null}
                    </>
                ) : null}

                {resultTheme.state === "safe" || !data || data.estimatedFraudType === "판단할 수 없음" ? null : <TypeFeature fraudType={data.estimatedFraudType} />}

                <div className="text-center text-black text-xl font-bold leading-loose">
                    AI 판단 결과는 <br />완벽하지 않을 수 있습니다.
                </div>

                <div className="mt-7.5 text-center text-black text-xl font-bold leading-loose">
                    의심되면 <span className="text-primary-400">경찰청(112)</span>
                    <br />
                    또는 <span className="text-primary-400">금융감독원(1132)</span>
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