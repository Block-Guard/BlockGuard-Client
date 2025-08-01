import QuizModal from "../../../../../../components/QuizModal/QuizModal";

interface FakeLoanModalProps {
    isQuizOpen: boolean;
    resetPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FakeLoanModal = ({ isQuizOpen, resetPage }: FakeLoanModalProps) => {
    <div className="text-center justify-start text-monochrome-700 text-lg font-medium leading-snug">은행직원이 어플설치 후 대출 신청서를작성하라고 한다면 어떻게 해야할까? </div>
    return (
        <QuizModal
            isOpen={isQuizOpen}
            modalTitle={<p className="text-center justify-start text-monochrome-700 text-lg font-medium leading-snug">
                은행직원이 어플설치 후 대출 신청서를
                작성하라고 한다면 어떻게 해야할까?
            </p>}
            answerDesc={
                <>
                    <span className="text-center justify-center text-primary-400 text-lg font-bold leading-snug">
                        대출 사기 유형
                    </span>

                    <span className="text-base font-medium leading-normal text-center">
                        이 앱은 공식은행 대출신청 어플처럼 보이지만, 피싱범이 만든 <span className="text-primary-400">공식은행사칭앱</span>으로,
                        어플 설치 후 권한을 허용하면 당신의 스마트폰  화면을 사기범이 직접 조작할 수 있게 되며, 대출신청서에 입력한 개인정보를 이용해서 범죄에 악용할 수 있어요.
                    </span>

                    <span className="text-center text-highlight-1 leading-normal">
                        <span className="text-base font-medium">정상적인 은행이나 금융기관은 먼저 대출을 권유하지 않습니다.<br /> </span>
                        <span className="text-base font-bold">대출신청권유는 무조건 사기예요!</span>
                    </span>
                </>
            }
            onOpenChange={resetPage}
            option1={
                // <span className="text-monochrome-600 text-base font-medium leading-tight">
                <span className="text-base font-medium leading-tight">
                    앱을 설치하지 않고, <br />
                    직접 은행을 방문해 상담을 요청한다.
                </span>
            } option2={
                <span className="text-base font-medium leading-tight">
                    의심은 들지만 혹시 진짜일 수도 있으니 <br />
                    신청서까지는 작성해본다.
                </span>
            } option3={
                <span className="text-base font-medium leading-tight">
                    당연히 은행 업무니까, 신청서부터 작성하고 <br />
                    다음 단계를 기다린다.
                </span>
            } correctAnswer={1} navigateTo={"/simulation/loan-investment/explain-fraud"} />
    )
}
