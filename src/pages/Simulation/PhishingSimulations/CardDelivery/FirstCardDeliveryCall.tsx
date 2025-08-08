import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatCallTime } from "../../../../utils/formatCallTime";
import OnThePhoneComponent from "../../components/OnThePhoneComponent";
import IncomingCallComponent from "../../components/IncomingCallComponent";
import SelectVoiceChat from "./SelectVoiceChat/SelectVoiceChat";
import {
  deliveryDriverCallFirstData,
  deliveryDriverCallSecondData,
} from "./SelectVoiceChat/voice-chat-data";

const FirstCardDeliveryCall = () => {
  const navigate = useNavigate();
  const [isAnsweredPhone, setIsAnsweredPhone] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const [isStartedVoiceChat, setIsStartedVoiceChat] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);

  const ringtoneRef = useRef<HTMLAudioElement | null>(null);
  const voice1Ref = useRef<HTMLAudioElement | null>(null);
  const voice2Ref = useRef<HTMLAudioElement | null>(null);

  const ringtone = "/sounds/iphone-ringtone.mp3";
  // 추후 배송기사 음성
  const deliveryDriverVoice1 = "/sounds/police-voice-exam.mp3";
  const deliveryDriverVoice2 = "/sounds/police-voice-exam.mp3";

  // 벨소리 재생
  useEffect(() => {
    const audio = new Audio(ringtone);
    ringtoneRef.current = audio;
    audio.play().catch((error) => {
      console.error("Ringtone playback failed:", error);
    });

    return () => {
      audio.pause();
      ringtoneRef.current = null;
    };
  }, []);

  const onClickToRespond = () => {
    setIsAnsweredPhone(true);

    // 벨소리 중지
    ringtoneRef.current?.pause();
    ringtoneRef.current = null;

    // 음성1 재생
    const audio1 = new Audio(deliveryDriverVoice1);
    voice1Ref.current = audio1;
    audio1.play().catch((error) => {
      console.error("Voice1 playback failed:", error);
    });

    // 1초 뒤에 대화 인터페이스 시작
    const timer = setTimeout(() => {
      setIsStartedVoiceChat(true);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const onClickToSecondStep = () => {
    setIsSecondStep(true);

    // 음성2 재생
    const audio2 = new Audio(deliveryDriverVoice2);
    voice2Ref.current = audio2;
    audio2.play().catch((error) => {
      console.error("Voice2 playback failed:", error);
    });
  };

  useEffect(() => {
    if (isAnsweredPhone) {
      const timer = setTimeout(() => {
        setCallTime((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnsweredPhone, callTime]);

  return (
    <div className="h-dvh flex flex-col justify-between items-center px-8 pb-[34px]">
      <div className="pt-18 flex flex-col text-monochrome-100 text-center">
        <span className="text-2xl font-medium h-[29px]">
          {isAnsweredPhone ? `${formatCallTime(callTime)}` : ""}
        </span>
        <span className="text-[40px] font-semibold">010-9809-XXXX</span>
      </div>
      {isStartedVoiceChat ? (
        isSecondStep ? (
          <SelectVoiceChat
            caller="배송기사"
            voiceChatData={deliveryDriverCallSecondData}
            onClickToNextStep={() =>
              navigate("/simulation/card-delivery/second-call-app")
            }
          />
        ) : (
          <SelectVoiceChat
            caller="배송기사"
            voiceChatData={deliveryDriverCallFirstData}
            onClickToNextStep={onClickToSecondStep}
          />
        )
      ) : isAnsweredPhone ? (
        <OnThePhoneComponent />
      ) : (
        <IncomingCallComponent onClickToRespond={onClickToRespond} />
      )}
    </div>
  );
};

export default FirstCardDeliveryCall;
