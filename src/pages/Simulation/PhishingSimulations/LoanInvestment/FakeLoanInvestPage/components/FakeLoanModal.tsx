import QuizModal from "../../../../../../components/QuizModal/QuizModal";

interface FakeLoanModalProps {
    isQuizOpen: boolean;
    resetPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FakeLoanModal = ({ isQuizOpen, resetPage }: FakeLoanModalProps) => {

    return (
        <QuizModal
            isOpen={isQuizOpen}
            modalTitle={<>
                은행직원이 어플설치 후 대출 신청서를 <br />
                작성하라고 한다면 어떻게 해야할까?
            </>}
            answerDesc={
                <>
                    이 앱은 공식은행 대출신청 어플처럼 보이지만, 피싱범이 만든 <span>공식은행사칭앱</span>으로,
                    어플 설치 후 권한을 허용하면 당신의 스마트폰  화면을 사기범이 직접 조작할 수 있게 되며, 대출신청서에 입력한 개인정보를 이용해서 범죄에 악용할 수 있어요.
                    <span>정상적인 은행이나 금융기관은 먼저 대출을 권유하지 않습니다. </span>
                    <span>대출신청권유는 무조건 사기예요!</span>
                </>
            }
            onOpenChange={
                resetPage
            }
            option1={
                <>
                    앱을 설치하지 않고, <br />
                    직접 은행을 방문해 상담을 요청한다.
                </>
            } option2={
                <>
                    의심은 들지만 혹시 진짜일 수도 있으니 <br />
                    신청서까지는 작성해본다.
                </>
            } option3={
                <>
                    당연히 은행 업무니까, 신청서부터 작성하고 <br />
                    다음 단계를 기다린다.
                </>
            } correctAnswer={1} navigateTo={"/simulation/loan-investment/explain-fraud"} />
    )
}
