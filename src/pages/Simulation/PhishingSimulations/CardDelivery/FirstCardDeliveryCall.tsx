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
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const ringtone = "/sounds/iphone-ringtone.mp3";
  // 추후 배송기사 음성
  const deliveryDriverVoice1 =
    "/sounds/card-delivery/card-delivery-driver1.m4a";
  const deliveryDriverVoice2 =
    "/sounds/card-delivery/card-delivery-driver2.m4a";

  // 벨소리 재생
  useEffect(() => {
    const audio = new Audio(ringtone);
    ringtoneRef.current = audio;
    audio.play().catch((e) => console.error("Ringtone playback failed:", e));

    return () => {
      audio.pause();
      ringtoneRef.current = null;
    };
  }, []);

  const stopVoice = () => {
    voiceRef.current?.pause();
    voiceRef.current = null;
  };

  const onClickToRespond = () => {
    setIsAnsweredPhone(true);
    // 벨소리 중지
    ringtoneRef.current?.pause();
    ringtoneRef.current = null;

    // 1초 뒤 대화 인터페이스 시작
    setTimeout(() => setIsStartedVoiceChat(true), 1000);
  };

  const onClickToSecondStep = () => {
    setIsSecondStep(true); // 실제 재생은 아래 useEffect가 담당
  };

  // step 변화에 따라 해당 음성만 재생, 이전 것은 항상 중지
  useEffect(() => {
    if (!isStartedVoiceChat) {
      stopVoice();
      return;
    }

    // step1/step2에 맞는 소스 선택
    const src = isSecondStep ? deliveryDriverVoice2 : deliveryDriverVoice1;

    // 이전 음성 정지
    stopVoice();

    // 새 음성 재생
    const audio = new Audio(src);
    voiceRef.current = audio;
    audio.play().catch((e) => console.error("Voice playback failed:", e));

    // 다음 변경/언마운트 시 정리
    return () => {
      audio.pause();
      if (voiceRef.current === audio) voiceRef.current = null;
    };
  }, [isStartedVoiceChat, isSecondStep]);

  // 다른 페이지로 이동할 때(언마운트) 전체 오디오 종료
  useEffect(() => {
    return () => {
      ringtoneRef.current?.pause();
      voiceRef.current?.pause();
      ringtoneRef.current = null;
      voiceRef.current = null;
    };
  }, []);

  // 통화 시간
  useEffect(() => {
    if (!isAnsweredPhone) return;
    const t = setTimeout(() => setCallTime((p) => p + 1), 1000);
    return () => clearTimeout(t);
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
