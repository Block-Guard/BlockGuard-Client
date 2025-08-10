import { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { FraudSurveyContextType, SurveyAnswers } from "../types/fraud-types";

// STEP_CONFIG: 각 단계가 사용할 key들을 명시
export const STEP_CONFIG = {
    1: { keys: ['contactMethod'], isRequired: true, isMultiple: false },
    2: { keys: ['counterpart'], isRequired: true, isMultiple: false },
    3: { keys: ['requestedAction'], isRequired: true, isMultiple: true },
    4: { keys: ['requestedInfo'], isRequired: true, isMultiple: true },
    5: { keys: ['linkType'], isRequired: false, isMultiple: false },

    6: { keys: ['pressuredInfo'], isRequired: false, isMultiple: false },
    7: { keys: ['appOrLinkRequest'], isRequired: false, isMultiple: false },
    8: { keys: ['thirdPartyConnect'], isRequired: false, isMultiple: false },
    9: { keys: ['authorityPressure'], isRequired: false, isMultiple: false },
    10: { keys: ['accountOrLinkRequest'], isRequired: false, isMultiple: false },

    11: { keys: ['suspiciousLinks', 'suspiciousPhoneNumbers'], isRequired: false, isMultiple: "false" },
    12: { keys: ['messageContent', 'imageFiles'], isRequired: false, isMultiple: true },
    13: { keys: ['additionalDescription'], isRequired: true, isMultiple: false },
};

export const useFraudSurveyContext = () => {
    return useOutletContext<FraudSurveyContextType>();
};

const getInitialAnswers = (): SurveyAnswers => {
    if (typeof window !== "undefined") {
        const savedAnswers = localStorage.getItem("surveyAnswers");
        return savedAnswers ? JSON.parse(savedAnswers) : {};
    }
    return {};
};

export const useFraudSurvey = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(1);
    const [allAnswers, setAllAnswers] = useState<SurveyAnswers>(getInitialAnswers);

    const updateAnswers = useCallback((newAnswerData: Partial<SurveyAnswers>) => {
        setAllAnswers((prev) => ({ ...prev, ...newAnswerData }));
    }, []);

    useEffect(() => {
        localStorage.setItem("surveyAnswers", JSON.stringify(allAnswers));
    }, [allAnswers]);

    const canProceed = useMemo(() => {
        const config = STEP_CONFIG[progress as keyof typeof STEP_CONFIG];
        if (!config?.isRequired) return true;
        return config.keys.some((key) => {
            const value = allAnswers[key];
            return Array.isArray(value) ? value.length > 0 : !!value;
        });
    }, [progress, allAnswers]);

    const goToNextStep = useCallback(() => {
        const newProgress = progress + 1;
        setProgress(newProgress);
        console.log("디버깅용 answers : ", allAnswers)
        if (newProgress > 13) {
            // navigate("/fraud-analysis/result", {state:allAnswers});
            navigate("/fraud-analysis/survey/result");
        } else if (newProgress > 10) {
            navigate(`/fraud-analysis/survey/${newProgress}`);
        }
    }, [progress, navigate]);


    const goToPrevStep = useCallback(() => {
        const newProgress = progress - 1;
        setProgress(newProgress);

        if (newProgress <= 0) {
            // TODO: 초기화 및 뒤로 가기 로직
            navigate('/fraud-analysis/landing');
            return;
        }
        if (newProgress === 10) {
            navigate('/fraud-analysis/survey/1-10');
            return;
        }
        if(newProgress > 10){
            navigate(`/fraud-analysis/survey/${newProgress}`);
        }

    }, [progress, navigate]);

    // 훅이 반환하는 값들: 상태와 핸들러 함수
    return {
        progress,
        setProgress,
        allAnswers,
        updateAnswers,
        canProceed,
        goToNextStep,
        goToPrevStep,
    };
};