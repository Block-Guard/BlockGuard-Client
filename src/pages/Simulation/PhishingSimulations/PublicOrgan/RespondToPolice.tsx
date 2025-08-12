import { useEffect, useRef, useState } from "react";
import OnThePhoneComponent from "../../components/OnThePhoneComponent";
import IncomingCallComponent from "../../components/IncomingCallComponent";
import { formatCallTime } from "../../../../utils/formatCallTime";
import SelectVoiceChat from "./SelectVoiceChat/SelectVoiceChat";
import {
  prosecutorCallFirstData,
  prosecutorCallSecondData,
  prosecutorCallThirdData,
} from "./SelectVoiceChat/voice-chat-data";
import ProsecutorVoiceChatRenderer from "./ProsecutorVoiceChatRenderer";

const RespondToPolice = () => {
  const [isAnsweredPhone, setIsAnsweredPhone] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const [isStartedVoiceChat, setIsStartedVoiceChat] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const ringtoneRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const ringtone = "/sounds/iphone-ringtone.mp3";
  const prosecutorVoice1 = "/sounds/public-organ/prosecutor-voice1.m4a";
  const prosecutorVoice2 = "/sounds/public-organ/prosecutor-voice2.m4a";
  const prosecutorVoice3 = "/sounds/public-organ/prosecutor-voice3.m4a";

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

    // 1초 뒤 대화 인터페이스 시작
    setTimeout(() => setIsStartedVoiceChat(true), 1000);
  };

  // currentStep / isStartedVoiceChat 변화에 따라 해당 음성만 재생
  useEffect(() => {
    if (!isStartedVoiceChat) return;

    // 스텝 1~3만 음성 재생, 그 외(4)는 음성 정지
    const src =
      currentStep === 1
        ? prosecutorVoice1
        : currentStep === 2
        ? prosecutorVoice2
        : currentStep === 3
        ? prosecutorVoice3
        : null;

    // 이전 음성 정지
    voiceRef.current?.pause();
    voiceRef.current = null;

    if (!src) return; // step 4: 음성 없음

    const audio = new Audio(src);
    voiceRef.current = audio;
    audio.play().catch(console.error);

    // 다음 변경/언마운트 시 정리
    return () => {
      audio.pause();
      if (voiceRef.current === audio) voiceRef.current = null;
    };
  }, [currentStep, isStartedVoiceChat]);

  const onClickToSecondStep = () => setCurrentStep(2);
  const onClickToThirdStep = () => setCurrentStep(3);
  const onClickToRenderVoiceChat = () => setCurrentStep(4); // 이때 음성 자동 정지

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
        <span className="text-[40px] font-semibold">112</span>
      </div>
      {isStartedVoiceChat ? (
        currentStep === 1 ? (
          <SelectVoiceChat
            caller="수사관"
            voiceChatData={prosecutorCallFirstData}
            onClickToNextStep={onClickToSecondStep}
          />
        ) : currentStep === 2 ? (
          <SelectVoiceChat
            caller="수사관"
            voiceChatData={prosecutorCallSecondData}
            onClickToNextStep={onClickToThirdStep}
          />
        ) : currentStep === 3 ? (
          <SelectVoiceChat
            caller="수사관"
            voiceChatData={prosecutorCallThirdData}
            onClickToNextStep={onClickToRenderVoiceChat}
          />
        ) : (
          <ProsecutorVoiceChatRenderer />
        )
      ) : isAnsweredPhone ? (
        <OnThePhoneComponent />
      ) : (
        <IncomingCallComponent onClickToRespond={onClickToRespond} />
      )}
    </div>
  );
};

export default RespondToPolice;
