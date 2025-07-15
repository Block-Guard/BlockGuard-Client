import type { NavigateFunction } from 'react-router-dom';
import { create } from 'zustand';
import type { Status, StepConfig, SurveyAnswers } from '../types/fraud-types';

export const STEP_CONFIG: Record<number, StepConfig> = {
    1: { key: 'contactMethod', isMultiple: false, isRequired: true },
    2: { key: 'counterpart', isMultiple: false, isRequired: true },
    3: { key: 'requestedAction', isMultiple: true, isRequired: true },
    4: { key: 'requestedInfo', isMultiple: true, isRequired: true },
    5: { key: 'appType', isMultiple: false, isRequired: false },
    6: { key: 'atmGuided', isMultiple: false, isRequired: false },
    7: { key: 'suspiciousLinks', isMultiple: true, isRequired: false }, // 또는 suspiciousPhoneNumbers
    8: { key: 'imageUrls', isMultiple: true, isRequired: false }, // 또는 messageContent
    9: { key: 'additionalDescription', isMultiple: false, isRequired: false },
};

interface FraudState {
    currentStepAnswers: string[]; // 현재 단계에서 선택된 답변들
    status: Status;
    progress: number;
    answers: SurveyAnswers; // ✅ 객체 형태로 답변 저장
}

interface FraudActions {
    toggleAnswer: (answer: string) => void;
    setSingleAnswer: (answer: string) => void; // ✅ 단일 선택용 함수
    recordAnswerAndProceed: (navigate: NavigateFunction) => void;
    submitAnswer: () => Promise<void>;
    setProgress: (progress: number) => void;
    reset: () => void;
    loadAnswersForStep: (step: number) => void;
    setStepKey: (step: number, key: keyof SurveyAnswers) => void; // ✅ 동적 키 설정 (7, 8단계용)
}


// ✅ localStorage에서 기존 답변을 불러오는 함수
const getInitialAnswers = (): SurveyAnswers => {
    if (typeof window !== 'undefined') {
        const savedAnswers = localStorage.getItem('surveyAnswers');
        return savedAnswers ? JSON.parse(savedAnswers) : {};
    }
    return {};
};

// ✅ 특정 단계의 답변을 불러오는 함수
const getAnswersForStep = (step: number, answers: SurveyAnswers): string[] => {
    const config = STEP_CONFIG[step];
    if (!config) return [];

    const value = answers[config.key];

    if (config.isMultiple) {
        return Array.isArray(value) ? value : [];
    } else {
        if (typeof (value) === "string") {
            return [value];
        }
        return []; //임시 처리 value ? [value] : [];
    }
};

const initialState: Omit<FraudState, 'answers' | 'currentStepAnswers'> = {
    status: 'idle',
    progress: 1,
};

export const useFraudStore = create<FraudState & FraudActions>((set, get) => ({
    ...initialState,
    answers: getInitialAnswers(),
    currentStepAnswers: [],

    /**
     * ✅ 다중 선택용 토글 함수
     */
    toggleAnswer: (answer) => {
        const { currentStepAnswers } = get();

        const isSelected = currentStepAnswers.includes(answer);
        let newCurrentAnswers: string[];

        if (isSelected) {
            newCurrentAnswers = currentStepAnswers.filter(a => a !== answer);
            console.log(`답변 "${answer}" 삭제됨`);
        } else {
            newCurrentAnswers = [...currentStepAnswers, answer];
            console.log(`답변 "${answer}" 추가됨`);
        }

        set({ currentStepAnswers: newCurrentAnswers });
    },

    /**
     * ✅ 단일 선택용 함수
     */
    setSingleAnswer: (answer) => {
        set({ currentStepAnswers: [answer] });
        console.log(`단일 답변 "${answer}" 설정됨`);
    },

    /**
     * ✅ 특정 단계의 답변을 불러오는 함수
     */
    loadAnswersForStep: (step) => {
        const { answers } = get();
        const currentAnswers = getAnswersForStep(step, answers);
        set({ currentStepAnswers: currentAnswers });
        console.log(`${step}단계 답변 불러옴:`, currentAnswers);
    },

    /**
     * ✅ 동적 키 설정 함수 (7, 8단계에서 사용)
     */
    setStepKey: (step, key) => {
        const newConfig = { ...STEP_CONFIG[step], key };
        STEP_CONFIG[step] = newConfig;
        console.log(`${step}단계 키를 "${key}"로 설정함`);
    },

    /**
     * ✅ 현재 단계의 답변을 저장하고 다음 단계로 진행하는 함수
     */
    recordAnswerAndProceed: (navigate) => {
        const { currentStepAnswers, progress, answers } = get();
        const config = STEP_CONFIG[progress];

        if (!config) {
            console.error(`${progress}단계 설정을 찾을 수 없습니다.`);
            return;
        }

        // 필수 답변 검증
        if (config.isRequired && currentStepAnswers.length === 0) {
            alert('답변을 선택해주세요.');
            return;
        }

        // 답변 저장
        const newAnswers = { ...answers };
        const key = config.key;

        // ✅ 일단 any로 타협.. 추후 개선.
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
        set({
            answers: newAnswers,
            progress: newProgress,
            currentStepAnswers: [], // 다음 단계를 위해 초기화
            status: 'idle',
        });

        // localStorage 업데이트
        localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));

        console.log(`[${progress}단계] 답변 저장 완료:`, currentStepAnswers);
        console.log(`키 "${key}"에 저장됨:`, newAnswers[key]);
        console.log('전체 답변 상태:', newAnswers);

        // 다음 단계 답변 불러오기
        if (newProgress <= 6) {
            get().loadAnswersForStep(newProgress);
        }

        if (newProgress > 6 && newProgress <= 9) {
            console.log("직접 입력 설문페이지로 이동")
            navigate(`/fraud-analysis/survey/${newProgress}`)
        }

        // 설문 완료 시 라우팅
        if (newProgress > 9) {
            console.log('설문 완료, 결과 페이지로 이동');
            navigate('/fraud-analysis/result');
        }
    },

    submitAnswer: async () => {
        const { answers, status } = get();

        if (status === 'loading') {
            return;
        }

        // 필수 답변 검증
        const requiredKeys = Object.entries(STEP_CONFIG)
            // `__` 에 대한 불필요한 unused 경고 제거
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([__, config]) => config.isRequired)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([__, config]) => config.key);

        const missingRequired = requiredKeys.filter(key => !answers[key]);
        if (missingRequired.length > 0) {
            console.error('필수 답변이 누락됨:', missingRequired);
            alert('필수 답변을 모두 입력해주세요.');
            return;
        }

        set({ status: 'loading' });

        try {
            // ✅ 최종 전송 형태로 데이터 전송
            const response = await fetch('/api/fraud-analysis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });

            if (!response.ok) {
                throw new Error('서버 응답 오류');
            }

            console.log('✅ 서버로 답변 전송 성공:', answers);
            set({ status: 'success' });

            // 성공 시 초기화
            get().reset();

        } catch (error) {
            console.error('서버 전송 실패:', error);
            set({ status: 'error' });
        }
    },

    setProgress: (newProgress) => {
        set({ progress: newProgress });
        get().loadAnswersForStep(newProgress);
    },

    reset: () => {
        localStorage.removeItem('surveyAnswers');
        set({
            ...initialState,
            answers: {},
            currentStepAnswers: []
        });
        console.log('상태와 localStorage가 초기화되었습니다.');
    },
}));
