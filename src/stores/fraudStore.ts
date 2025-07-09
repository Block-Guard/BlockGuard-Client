import { create } from 'zustand';


// - 현재 선택된 답변 값을 저장하는 변수
// - 답변 값을 바꾸는 함수
// - 현재 선택된 답변 값을 서버로 전송하는 함수

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FraudState {
    selectedAnswer: string | null; // 현재 선택된 답변 값
    status: Status; // 서버 전송 상태
    progress: number; //현재 설문 단계
}

interface FraudActions {
    selectAnswer: (answer: string) => void; // 답변 값을 바꾸는 함수
    submitAnswer: () => Promise<void>; // 답변 값을 서버로 전송하는 비동기 함수
    setProgress: (progress: number) => void;
    reset: () => void; // 상태를 초기화하는 함수
}

const initialState: FraudState = {
    selectedAnswer: null,
    status: 'idle',
    progress: 1,
};

export const useFraudStore = create<FraudState & FraudActions>((set, get) => ({
    ...initialState,

    /**
     * 답변 값을 선택(변경)하는 함수
     * @param answer - 사용자가 선택한 답변
     */
    selectAnswer: (answer) => {
        set({ selectedAnswer: answer, status: 'idle' }); // 답변을 선택하면 상태를 다시 'idle'로 변경
    },

    /**
     * 현재 선택된 답변을 서버로 전송하는 함수
     */

    submitAnswer: async () => {
        const { selectedAnswer, status } = get(); // get()으로 최신 상태를 가져옵니다.

        // 유효성 검사: 답변이 없거나, 이미 전송 중이면 함수를 중단합니다.
        if (!selectedAnswer || status === 'loading') {
            return;
        }

        // 1. 로딩 상태로 변경하여 UI에 피드백을 줍니다.
        set({ status: 'loading' });

        try {
            // 2. 실제 서버 API를 호출하는 부분 (여기서는 1초 지연으로 시뮬레이션)
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('서버로 전송 성공:', { answer: selectedAnswer });
            // 3. 성공 시 상태 변경
            set(state => ({
                status: 'idle',           // 상태 초기화
                selectedAnswer: null,   // 선택된 답변 초기화
                progress: state.progress + 1, // progress 1 증가
            }));
        } catch (error) {
            // 4. 실패 시 상태 변경
            console.error('서버 전송 실패:', error);
            set({ status: 'error' });
        }
    },

    setProgress: (newProgress) => {
        set({ progress: newProgress })
    },

    reset: () => {
        set(initialState);
    },
}));
