import { useEffect, useRef, useState } from "react";
import { formatCallTime } from "../../../../utils/formatCallTime";
import OnThePhoneComponentExtend from "../LoanInvestment/BankerCallPage/components/OnThePhoneComponentExtend";
import SelectVoiceChat from "./SelectVoiceChat/SelectVoiceChat";
import { cardCompanyStaffCallData } from "./SelectVoiceChat/voice-chat-data";
import CardVoiceChatRenderer from "./CardVoiceChatRenderer";

const SecondCardDeliveryCall = () => {
  const [callTime, setCallTime] = useState(0);
  const [isStartedVoiceChat, setIsStartedVoiceChat] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);

  const arsVoiceRef = useRef<HTMLAudioElement | null>(null);
  const staffVoiceRef = useRef<HTMLAudioElement | null>(null);

  // 추후 ars 음성이 필요함. ex) 0번을 눌러주세요.
  const arsVoice = "/sounds/card-delivery/ringtone-card.m4a";
  // 0번을 누르면 재생되면 직원 음성
  const cardCompanyStaffVoice1 = "/sounds/card-delivery/card-employee1.m4a";

  useEffect(() => {
    return () => {
      arsVoiceRef.current?.pause();
      staffVoiceRef.current?.pause();
      arsVoiceRef.current = null;
      staffVoiceRef.current = null;
    };
  }, []);

  const stopVoice = () => {
    staffVoiceRef.current?.pause();
    staffVoiceRef.current = null;
  };

  // 최초 진입 시 ARS 음성 재생 (한 번만)
  useEffect(() => {
    const audio = new Audio(arsVoice);
    arsVoiceRef.current = audio;
    audio.play().catch((e) => {
      console.warn("ARS 자동 재생 실패:", e);
    });

    return () => {
      audio.pause();
      arsVoiceRef.current = null;
    };
  }, []);

  // 키패드 눌렀을 때 직원 음성 재생
  const handleClickKeypad = () => {
    setIsStartedVoiceChat(true);

    // 벨소리 중지
    arsVoiceRef.current?.pause();
    arsVoiceRef.current = null;

    const audio = new Audio(cardCompanyStaffVoice1);
    staffVoiceRef.current = audio;
    audio.play().catch((e) => {
      console.warn("직원 음성 재생 실패:", e);
    });
  };

  const onClickToSecondStep = () => {
    stopVoice();
    setIsSecondStep(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [callTime]);

  return (
    <div className="h-dvh flex flex-col justify-between items-center px-8 pb-[34px]">
      <div className="pt-18 flex flex-col text-monochrome-100 text-center">
        <span className="text-2xl font-medium h-[29px]">
          {formatCallTime(callTime)}
        </span>
        <span className="text-[40px] font-semibold">1899-6077</span>
      </div>
      {/* handleClick 로직은 추후 수정 예정 */}
      {isStartedVoiceChat ? (
        isSecondStep ? (
          <CardVoiceChatRenderer />
        ) : (
          <SelectVoiceChat
            caller="카드사 직원"
            voiceChatData={cardCompanyStaffCallData}
            onClickToNextStep={onClickToSecondStep}
          />
        )
      ) : (
        <OnThePhoneComponentExtend
          needsKeypad={true}
          handleClick={handleClickKeypad}
        />
      )}
    </div>
  );
};

export default SecondCardDeliveryCall;
