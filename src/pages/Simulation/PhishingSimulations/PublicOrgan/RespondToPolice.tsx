import { useEffect, useRef, useState } from "react";
import OnThePhoneComponent from "../../components/OnThePhoneComponent";
import IncomingCallComponent from "../../components/IncomingCallComponent";
import { useNavigate } from "react-router-dom";
import { formatCallTime } from "../../../../utils/formatCallTime";

const RespondToPolice = () => {
  const navigate = useNavigate();
  const [isAnsweredPhone, setIsAnsweredPhone] = useState(false);
  const [callTime, setCallTime] = useState(0);

  const ringtoneRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const ringtone = "/sounds/iphone-ringtone.mp3";
  // 추후 경찰 음성 필요
  const policeVoice = "/sounds/police-voice-exam.mp3";

  // 벨소리 재생
  useEffect(() => {
    ringtoneRef.current = new Audio(ringtone);
    ringtoneRef.current.play().catch((error) => {
      console.error("Ringtone playback failed:", error);
    });

    return () => {
      ringtoneRef.current?.pause();
      ringtoneRef.current = null;
    };
  }, []);

  // 응답 클릭 시 화면이 변경되며 경찰 음성 재생됨
  const onClickToRespond = () => {
    setIsAnsweredPhone(true);
    // 벨소리 중단
    if (ringtoneRef.current) {
      ringtoneRef.current.pause();
      ringtoneRef.current.currentTime = 0;
    }
    // 경찰 음성 재생
    const voice = new Audio(policeVoice);
    voiceRef.current = voice;
    voice.play().catch((error) => {
      console.error("Police voice playback failed:", error);
    });

    // 음성 재생이 끝나면 이동
    voice.onended = () => {
      voiceRef.current = null;
      navigate("/simulation/public-organ/step2");
    };
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
        <span className="text-[44px] font-semibold">112</span>
      </div>
      {isAnsweredPhone ? (
        <OnThePhoneComponent />
      ) : (
        <IncomingCallComponent onClickToRespond={onClickToRespond} />
      )}
    </div>
  );
};

export default RespondToPolice;
