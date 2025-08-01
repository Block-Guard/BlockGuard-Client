import { useEffect, useRef, useState } from "react";

import MsgImg1 from "@/assets/simulation/message-imgs/publi-organ-msg1.png";
import MsgImg2 from "@/assets/simulation/message-imgs/publi-organ-msg2.png";
import PublicOrganModal from "./PublicOrganModal";
import ReceivedMessage from "../../../../components/SimulationMessage/ReceivedMessage";
import SelectSendMessage from "../../../../components/SimulationMessage/SelectSendMessage";
import { publicOrganMsgs } from "../constants/publicOrganMsgs";
import { MESSAGE_DELAY_MS } from "../constants/delay-ms";

const ProsecutorMessage = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [step, setStep] = useState<number | undefined>();
  const [selectedFirstStepAnswer, setSelectedFirstStepAnswer] = useState(0);
  const [selectedSecondStepAnswer, setSelectedSecondStepAnswer] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(0);
    }, MESSAGE_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const onClickFirstStep = (selected: number) => {
    if (selectedFirstStepAnswer === 0) {
      setSelectedFirstStepAnswer(selected);
      const timer = setTimeout(() => {
        setStep(2);
      }, MESSAGE_DELAY_MS);
      return () => clearTimeout(timer);
    }
  };

  const onClickSecondStep = (selected: number) => {
    if (selectedSecondStepAnswer === 0) {
      setSelectedSecondStepAnswer(selected);
      const timer = setTimeout(() => {
        setStep(6);
      }, MESSAGE_DELAY_MS);
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
        }, MESSAGE_DELAY_MS);
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
          <ReceivedMessage content={publicOrganMsgs.step0} />
          {step >= 1 && (
            <SelectSendMessage
              option1={publicOrganMsgs.step1.answer1}
              option2={publicOrganMsgs.step1.answer2}
              option3={publicOrganMsgs.step1.answer3}
              selectedOption={selectedFirstStepAnswer}
              handleToSelectOption={onClickFirstStep}
            />
          )}
          <div className="flex flex-col gap-[10px]">
            {step >= 2 && <ReceivedMessage content={publicOrganMsgs.step2} />}
            {step >= 3 && <ReceivedMessage content={publicOrganMsgs.step3} />}
            {step >= 4 && (
              <div className="flex flex-col gap-[10px]">
                <ReceivedMessage content={publicOrganMsgs.step4} />
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
            <SelectSendMessage
              option1={publicOrganMsgs.step5.answer1}
              option2={publicOrganMsgs.step5.answer2}
              option3={publicOrganMsgs.step5.answer3}
              selectedOption={selectedSecondStepAnswer}
              handleToSelectOption={onClickSecondStep}
            />
          )}
          {step >= 6 && <ReceivedMessage content={publicOrganMsgs.step6} />}
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
