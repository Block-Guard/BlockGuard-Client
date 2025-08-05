import QuizModal from "../../../../components/QuizModal/QuizModal";

interface FamilyAcquaintanceModalProps {
    isQuizOpen: boolean;
    resetPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FamilyAcquaintanceModal = ({
    isQuizOpen,
    resetPage,
}: FamilyAcquaintanceModalProps) => {

    return (
        <QuizModal
            isOpen={isQuizOpen}
            modalTitle={
                <p className="text-center justify-start text-monochrome-700 text-lg font-medium leading-snug">
                    가족/지인이 원격조작 어플 링크나<br />
                    송금 요청을 보냈을 때 <br />
                    해야 하는 올바른 행동은?
                </p>
            }
            answerDesc={
                <>
                    <span className="text-center justify-center text-primary-400 text-lg font-bold leading-snug">
                        가족/지인 사칭형
                    </span>

                    <span className="text-base font-medium leading-normal text-center">
                        가족이나 지인의 번호로 연락이 와서 원격 제어 앱 설치나 송금을 요구하는 경우,&nbsp;
                        <span className="text-primary-400">
                            반드시 실제 지인에게 직접 사실 여부를 확인
                        </span>해야 해요.
                    </span>

                    <span className="text-center text-base font-medium text-highlight-1 leading-normal">
                        <span className="text-black">
                            만약 피싱범이&nbsp;
                        </span>
                        <span className="text-highlight-1">
                            통화를 거부한다면 100% 스미싱
                        </span>
                        <span className="text-black">
                            이며, 원격 제어 앱을 설치하면 피싱범이 사용자의 스마트폰을&nbsp;
                        </span>
                        <span className="text-highlight-1">
                            직접 조작하여 무단 결제나 불법 대출에 악용
                        </span>
                        <span className="text-black">
                            할 수 있으니 즉시 설치를 중단해야 해요.
                        </span>
                    </span>
                </>
            }
            onOpenChange={resetPage}
            option1={
                <span className="text-base font-medium leading-tight">
                    답장하지 않고 실제 가족/지인에게 <br />
                    직접 확인한다.
                </span>
            }
            option2={
                <span className="text-base font-medium leading-tight">
                    실제 존재하는 어플인지 <br />
                    확인부터 해본다.
                </span>
            }
            option3={
                <span className="text-base font-medium leading-tight">
                    이상하다고 느껴지지만 <br />
                    급한 부탁이니 우선 들어준다.
                </span>
            }
            correctAnswer={1}
            navigateTo={"/simulation/family-acquaintance/explain-fraud"}
        />
    );
};