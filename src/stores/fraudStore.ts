import type { NavigateFunction } from 'react-router-dom';
import { create } from 'zustand';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FraudState {
    selectedAnswer: string | null; // 현재 선택된 답변 값
    status: Status; // 서버 전송 상태
    progress: number; //현재 설문 단계
    answers: string[]; // ✅ 각 단계별 답변을 저장할 배열
}

interface FraudActions {
    selectAnswer: (answer: string) => void; // 답변 값을 바꾸는 함수
    recordAnswerAndProceed: (navigate: NavigateFunction) => void;
    submitAnswer: () => Promise<void>; // 답변 값을 서버로 전송하는 비동기 함수
    setProgress: (progress: number) => void;
    reset: () => void; // 상태를 초기화하는 함수
}

// ✅ 앱 시작 시 localStorage에서 기존 답변을 불러오도록 초기 상태 설정
const getInitialAnswers = (): string[] => {
    if (typeof window !== 'undefined') {
        const savedAnswers = localStorage.getItem('surveyAnswers');
        return savedAnswers ? JSON.parse(savedAnswers) : [];
    }
    return [];
};

const initialState: Omit<FraudState, 'answers'> = {
    selectedAnswer: null,
    status: 'idle',
    progress: 1,
};

export const useFraudStore = create<FraudState & FraudActions>((set, get) => ({
    ...initialState,
    answers: getInitialAnswers(),
    /**
     * 답변 값을 선택(변경)하는 함수
     * @param answer - 사용자가 선택한 답변
     */
    selectAnswer: (answer) => {
        set({ selectedAnswer: answer }); // 답변을 선택하면 상태를 다시 'idle'로 변경
    },

    //답변을 기록하고, progress를 증가시키며, 조건에 따라 라우팅하는 함수
    recordAnswerAndProceed: (navigate) => {
        const { selectedAnswer, progress, answers } = get();


        // 현재 단계에서 선택된 답변이 없으면 진행하지 않음
        if (selectedAnswer === null) {
            alert('답변을 선택해주세요.');
            return;
        }

        // 1. 기존 답변 배열에 현재 선택된 답변을 추가
        const newAnswers = [...answers, selectedAnswer];
        const newProgress = progress + 1;

        const nextSelectedAnswer = progress >= 5 ? "" : null; //선택질문에 대해 빈 값 디폴트

        // 2. Zustand 상태와 localStorage를 함께 업데이트
        set({
            answers: newAnswers,
            progress: newProgress,
            selectedAnswer: nextSelectedAnswer, // 다음 질문을 위해 선택 초기화
            status: 'idle',
        });
        localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));

        console.log(`[${progress}단계] 답변 "${selectedAnswer}" 기록 완료. 다음 단계로 이동합니다.`);

        // 3. progress가 6 이상이면 다음 설문 페이지로 라우팅
        if (newProgress >= 7) {
            console.log(`progress가 ${newProgress}이므로 라우팅을 수행합니다.`);
            navigate(`/fraud-analysis/survey/${newProgress}`);
        }
    },

    submitAnswer: async () => {
        const { answers, status } = get(); // get()으로 최신 상태를 가져옵니다.

        // 유효성 검사: 답변이 없거나, 이미 전송 중이면 함수를 중단합니다.
        if (status === 'loading' || answers.length === 0) {
            return;
        }

        // 1. 로딩 상태로 변경하여 UI에 피드백을 줍니다.
        set({ status: 'loading' });

        try {
            // 실제로는 여기에 모든 답변(answers)을 body에 담아 API를 호출합니다.
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('✅ 서버로 모든 답변 전송 성공:', answers);

            set({ status: 'success' });
            // 성공 시 상태와 localStorage를 모두 초기화
            get().reset();

        } catch (error) {
            console.error('서버 전송 실패:', error);
            set({ status: 'error' });
        }
    },

    setProgress: (newProgress) => {
        set({ progress: newProgress })
    },

    reset: () => {
        localStorage.removeItem('surveyAnswers');
        set({ ...initialState, answers: [] });
        console.log('상태와 localStorage가 초기화되었습니다.');
    },
}));
