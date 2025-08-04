import QuizModal from "../../../../components/QuizModal/QuizModal";

type Props = {
  isModalOpen: boolean;
  resetPage: (value: boolean) => void;
};

const PublicOrganModal = ({ isModalOpen, resetPage }: Props) => {
  return (
    <QuizModal
      isOpen={isModalOpen}
      onOpenChange={resetPage}
      modalTitle={
        <>
          만약 당황해서 "안전계좌로
          <br />
          송금"했다면 어떻게 해야 할까?
        </>
      }
      answerDesc={
        <>
          <p className="text-center font-medium">
            이 대응은 피해금을 지키기 위한
            <br />
            <span className="text-[#437EFC] font-semibold">유일한 방법</span>
            입니다.
          </p>
          <p className="text-center font-medium">
            송금 직후 30분~1시간 내에
            <br />
            지급정지 요청 → 수사 요청으로
            <br />
            이어지면 피해금이 회수될 확률이
            <br />
            매우 높아집니다.
          </p>
        </>
      }
      option1={
        <>
          바로 경찰청 112에 신고하고,
          <br />
          해당 계좌 지급정지를 요청한다
        </>
      }
      option2={
        <>
          상대에게 다시 연락해서
          <br />
          돌려달라고 요청한다
        </>
      }
      option3={<>앱을 삭제하고 아무 일 없었던 척한다</>}
      correctAnswer={1}
      navigateTo="/simulation/public-organ/explain-fraud"
    />
  );
};

export default PublicOrganModal;
