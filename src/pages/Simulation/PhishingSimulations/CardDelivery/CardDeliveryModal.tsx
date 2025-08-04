import QuizModal from "../../../../components/QuizModal/QuizModal";

type Props = {
  isModalOpen: boolean;
  resetPage: (value: boolean) => void;
};

const CardDeliveryModal = ({ isModalOpen, resetPage }: Props) => {
  return (
    <QuizModal
      isOpen={isModalOpen}
      onOpenChange={resetPage}
      modalTitle={
        <>
          카드사 직원이 사고처리를 위해
          <br />
          문자로 보내준 링크를 클릭하여
          <br />
          앱을 설치하라고 한다면
          <br />
          어떻게 해야할까?
        </>
      }
      answerDesc={
        <>
          <p className="text-lg font-semibold text-primary-400">
            카드 배송 사기 유형
          </p>
          <p className="text-[16px] text-center">
            이 앱은 ‘보안 점검/사고접수’ 목적처럼 보이지만 실제로는{" "}
            <span className="text-primary-400">원격 제어 앱</span>으로, 당신의
            스마트폰 화면을 사기범이 직접 조작할 수 있게 되며 금융감독원 등 공식
            기관을 사칭한 피싱범에게 전화가 연결됩니다.
          </p>
          <p className="text-[16px] text-center text-highlight-1">
            카드사는 앱 설치를 문자로 안내하지 않으며, 본인 계좌를 대신
            점검해주지도 않으니
            <br />
            명심하세요!
          </p>
        </>
      }
      option1={
        <>
          앱 설치를 중단하고, 해당번호가
          <br />
          진짜 카드사인지 직접 확인한다.
        </>
      }
      option2={
        <>
          의심되긴 하지만 실제 ‘금감원 직원’과
          <br />
          연결시켜주므로 계속 통화하면서 지켜본다.
        </>
      }
      option3={
        <>
          사고 접수를 위한 공식 기관 어플이므로
          <br />
          앱을 설치한 후 상담사의 안내를 따른다.
        </>
      }
      correctAnswer={1}
      navigateTo="/simulation/card-delivery/explain-fraud"
    />
  );
};

export default CardDeliveryModal;
