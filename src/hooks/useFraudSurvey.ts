import { useState, useCallback, useEffect } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import type { Status, StepConfig, SurveyAnswers } from '../types/fraud-types';

export const STEP_CONFIG: Record<number, StepConfig> = {
    1: { key: 'contactMethod', isMultiple: false, isRequired: true },
    2: { key: 'counterpart', isMultiple: false, isRequired: true },
    3: { key: 'requestedAction', isMultiple: true, isRequired: true },
    4: { key: 'requestedInfo', isMultiple: true, isRequired: true },
    5: { key: 'appType', isMultiple: false, isRequired: false },
    6: { key: 'atmGuided', isMultiple: false, isRequired: false },
    7: { key: 'suspiciousLinks', isMultiple: true, isRequired: false },
    8: { key: 'imageUrls', isMultiple: true, isRequired: false },
    9: { key: 'additionalDescription', isMultiple: false, isRequired: false },
};

interface FraudSurveyState {
    currentStepAnswers: string[];
    status: Status;
    progress: number;
    answers: SurveyAnswers;
}

interface FraudSurveyActions {
    toggleAnswer: (answer: string) => void;
    setSingleAnswer: (answer: string) => void;
    recordAnswerAndProceed: (navigate: NavigateFunction) => void;
    setProgress: (progress: number) => void;
    reset: () => void;
}

export type FraudSurveyInfo = FraudSurveyState & FraudSurveyActions;

// localStorage 관리
const STORAGE_KEY = 'surveyAnswers';

const getInitialAnswers = (): SurveyAnswers => {
    if (typeof window !== 'undefined') {
        const savedAnswers = localStorage.getItem(STORAGE_KEY);
        return savedAnswers ? JSON.parse(savedAnswers) : {};
    }
    return {};
};

const saveAnswersToStorage = (answers: SurveyAnswers) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    }
};

const clearAnswersFromStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
    }
};

// 3. Utility Functions

// 특정 단계의 답변을 불러오는 함수
const getAnswersForStep = (step: number, answers: SurveyAnswers): string[] => {
    const config = STEP_CONFIG[step];
    if (!config) return [];

    const value = answers[config.key];

    if (config.isMultiple) {
        return Array.isArray(value) ? value : [];
    } else {
        return typeof value === 'string' ? [value] : [];
    }
};

export const canProceed = (progress: number, currentStepAnswers: string[]): boolean => {
    const currentConfig = STEP_CONFIG[progress];
    if (!currentConfig) return false;
    
    if (currentConfig.isRequired) {
        return currentStepAnswers.length > 0 && currentStepAnswers[0] !== "";
    }
    
    return true;
};

// 4. Default State Object
// 기본 surveyInfoBase 객체 (기존 코드와의 호환성을 위해)
export const surveyInfoBase = {
    currentStepAnswers: [],
    status: 'idle' as Status,
    progress: 1,
    answers: {},
    toggleAnswer: () => {},
    setSingleAnswer: () => {},
    recordAnswerAndProceed: () => {},
    setProgress: () => {},
    reset: () => {},
};

// 5. useFraudSurvey Hook
export const useFraudSurvey = (): FraudSurveyInfo => {
    const [currentStepAnswers, setCurrentStepAnswers] = useState<string[]>([]);
    const [status, setStatus] = useState<Status>('idle');
    const [progress, setProgressState] = useState<number>(1);
    const [answers, setAnswers] = useState<SurveyAnswers>(getInitialAnswers);

    // progress가 변경될 때마다 해당 단계의 답변 로드
    useEffect(() => {
        const stepAnswers = getAnswersForStep(progress, answers);
        setCurrentStepAnswers(stepAnswers);
    }, [progress, answers]);

    /**
     * 다중 선택용 토글 함수
     */
    const toggleAnswer = useCallback((answer: string) => {
        setCurrentStepAnswers(prev => {
            const isSelected = prev.includes(answer);
            
            if (isSelected) {
                return prev.filter(a => a !== answer);
            } else {
                return [...prev, answer];
            }
        });
    }, []);

    /**
     * 단일 선택용 함수
     */
    const setSingleAnswer = useCallback((answer: string) => {
        setCurrentStepAnswers([answer]);
    }, []);

    /**
     * 현재 단계의 답변을 저장하고 다음 단계로 진행
     */
    const recordAnswerAndProceed = useCallback((navigate: NavigateFunction) => {
        const config = STEP_CONFIG[progress];

        if (!config) {
            console.error(`${progress}단계 설정을 찾을 수 없습니다.`);
            return;
        }

        // 필수 답변 검증
        if (config.isRequired && (currentStepAnswers.length === 0 || currentStepAnswers[0] === '')) {
            alert('답변을 선택해주세요.');
            return;
        }

        // 답변 저장
        const newAnswers = { ...answers };
        const key = config.key;

        if (config.isMultiple) {
            // 다중 선택: 배열로 저장
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newAnswers[key] = currentStepAnswers as any;
        } else {
            // 단일 선택: 값으로 저장
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            newAnswers[key] = currentStepAnswers[0] || undefined as any;
        }

        const newProgress = progress + 1;

        // 상태 업데이트
        setAnswers(newAnswers);
        setProgressState(newProgress);
        setStatus('idle');

        // localStorage 업데이트
        saveAnswersToStorage(newAnswers);

        console.log(`[${progress}단계] 답변 저장 완료:`, currentStepAnswers);

        // 7단계 이상일 때 직접 입력 페이지로 이동
        if (newProgress > 6 && newProgress <= 9) {
            navigate(`/fraud-analysis/survey/${newProgress}`);
        }

        // 설문 완료 시 결과 페이지로 이동
        if (newProgress > 9) {
            navigate('/fraud-analysis/result');
        }
    }, [progress, currentStepAnswers, answers]);

    /**
     * 특정 단계로 이동 (뒤로가기 등에서 사용)
     */
    const setProgress = useCallback((newProgress: number) => {
        setProgressState(newProgress);
    }, []);

    /**
     * 전체 초기화
     */
    const reset = useCallback(() => {
        clearAnswersFromStorage();
        setCurrentStepAnswers([]);
        setStatus('idle');
        setProgressState(1);
        setAnswers({});
        console.log('상태와 localStorage가 초기화되었습니다.');
    }, []);

    return {
        // State
        currentStepAnswers,
        status,
        progress,
        answers,
        
        // Actions
        toggleAnswer,
        setSingleAnswer,
        recordAnswerAndProceed,
        setProgress,
        reset,
    };
};