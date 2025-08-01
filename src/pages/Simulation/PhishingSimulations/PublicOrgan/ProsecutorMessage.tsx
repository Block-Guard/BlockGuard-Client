import { useEffect, useRef, useState } from "react";
import MsgImg1 from "@/assets/simulation/message-imgs/publi-organ-msg1.png";
import MsgImg2 from "@/assets/simulation/message-imgs/publi-organ-msg2.png";
import PublicOrganModal from "./PublicOrganModal";

const ProsecutorMessage = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number | undefined>();
  const [selectedFirstStepAnswer, setSelectedFirstStepAnswer] = useState(0);
  const [selectedSecondStepAnswer, setSelectedSecondStepAnswer] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(0);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const onClickFirstStep = (selected: number) => {
    if (selectedFirstStepAnswer === 0) {
      setSelectedFirstStepAnswer(selected);
      const timer = setTimeout(() => {
        setStep(2);
      }, 1500);
      return () => clearTimeout(timer);
    }
  };

  const onClickSecondStep = (selected: number) => {
    if (selectedSecondStepAnswer === 0) {
      setSelectedSecondStepAnswer(selected);
      const timer = setTimeout(() => {
        setStep(6);
      }, 1500);
      return () => clearTimeout(timer);
    }
  };

  const resetPage = () => {
    setSelectedFirstStepAnswer(0);
    setSelectedSecondStepAnswer(0);
    setIsModalOpen(false);
    setStep(undefined);
    setTimeout(() => {
      setStep(0);
    }, 10);
  };

  useEffect(() => {
    switch (step) {
      case 0:
      case 2:
      case 3:
      case 4:
      case 6:
        const timer = setTimeout(() => {
          setStep(step + 1);
        }, 1500);
        return () => clearTimeout(timer);
      case 7:
        setIsModalOpen(true);
        break;
    }
  }, [step, setStep]);

  useEffect(() => {
    // step이 바뀐 후 렌더가 완료되면 스크롤
    const timeout = setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    step !== undefined && (
      <div className="w-full flex flex-col items-center">
        <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
          5월 31일 (토) 오후 3:26
        </p>
        <div className="w-full flex flex-col gap-[30px] px-[15px]">
          <div className="p-[10px] max-w-[270px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
            안녕하세요, 서울중앙지방검찰청 수사관 김경찰입니다. 000씨
            맞으신가요? 지금 본인 앞으로 고소장이 접수가 되신 게 있어서 몇 가지
            확인차 연락을 드렸습니다
          </div>
          {step >= 1 && (
            <div className="flex flex-col items-end gap-[5px]">
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedFirstStepAnswer === 1 ? "#437EFC" : "#D6ECF8",
                  color: selectedFirstStepAnswer === 1 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickFirstStep(1)}
              >
                직접 확인해보고 다시 연락드릴게요.
              </button>
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedFirstStepAnswer === 2 ? "#437EFC" : "#D6ECF8",
                  color: selectedFirstStepAnswer === 2 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickFirstStep(2)}
              >
                고소요? 무슨 고소인지 설명 좀 해주세요.
              </button>
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedFirstStepAnswer === 3 ? "#437EFC" : "#D6ECF8",
                  color: selectedFirstStepAnswer === 3 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickFirstStep(3)}
              >
                그게 무슨 일인지 전혀 모르겠는데요…
              </button>
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
            {step >= 2 && (
              <div className="p-[10px] max-w-[270px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                본인 명의의 통장이 실질적으로 사용이 되었기 때문에 연락을
                드렸고, 지금 본인 명의 통장으로 불법 자금이 대략 300만원 가량
                이용이 되었는데
              </div>
            )}
            {step >= 3 && (
              <div className="p-[10px] max-w-[270px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                본인 명의의 통장이 실제 범죄 자금 유통에 사용되었기 때문에
                저희가 계좌를 일시적으로 동결하려는 조치를 검토하고 있습니다.
              </div>
            )}
            {step >= 4 && (
              <div className="flex flex-col gap-[10px]">
                <div className="whitespace-pre-line p-[10px] max-w-[270px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                  {`본인이 피해자임을 입증하지 못하면, 그 피해금액(300만원)을 배상하셔야 될 수도 있어요. \n우선 지금 카카오톡으로 보내드리는 사건 공문장 확인 한번 좀 해보시겠습니까?`}
                </div>
                <div className="relative h-[310px] w-[270px]">
                  <img className="absolute top-0 left-4" src={MsgImg1} />
                  <img
                    className="absolute bottom-0 right-4 z-10"
                    src={MsgImg2}
                  />
                </div>
              </div>
            )}
          </div>
          {step >= 5 && (
            <div className="flex flex-col items-end gap-[5px]">
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedSecondStepAnswer === 1 ? "#437EFC" : "#D6ECF8",
                  color: selectedSecondStepAnswer === 1 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickSecondStep(1)}
              >
                이건 진짜인지 확인하고 연락드리겠습니다.
              </button>
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedSecondStepAnswer === 2 ? "#437EFC" : "#D6ECF8",
                  color: selectedSecondStepAnswer === 2 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickSecondStep(2)}
              >
                네, 공문 확인했어요. 그럼 어떻게 해야 하나요?
              </button>
              <button
                className="p-[10px] max-w-[270px] w-fit rounded-[20px] text-[15px] text-start"
                style={{
                  background:
                    selectedSecondStepAnswer === 3 ? "#437EFC" : "#D6ECF8",
                  color: selectedSecondStepAnswer === 3 ? "#fff" : "#79818A",
                }}
                onClick={() => onClickSecondStep(3)}
              >
                일단 저한테 뭐가 필요한지 알려주세요. <br />
                지금 너무 무섭네요…
              </button>
            </div>
          )}
          {step >= 6 && (
            <div className="p-[10px] max-w-[270px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
              당황하실 수 있죠. 일단 저희가 절차대로 안내드릴거니까 너무 걱정
              마시고, 우선 본인 확인을 위해 신분증 앞면을 촬영해서 보내주세요.
              그리고 사건 처리를 위해 ‘안전계좌로 자금 이체’가 필요합니다.
            </div>
          )}
          {step >= 7 && (
            <PublicOrganModal isModalOpen={isModalOpen} resetPage={resetPage} />
          )}
          {/* 스크롤 타겟 */}
          <div ref={bottomRef} />
        </div>
      </div>
    )
  );
};

export default ProsecutorMessage;
