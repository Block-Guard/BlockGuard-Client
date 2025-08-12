import { useEffect, useRef, useState } from "react";
import { formatCallTime } from "../../../../../utils/formatCallTime";
import OnThePhoneComponentExtend from "./components/OnThePhoneComponentExtend";
import VoiceChatRenderer from "./components/VoiceChat";
const BankerCallPage = () => {
  const [callTime, setCallTime] = useState(0);
  const [isNavigated, setIsNavigated] = useState(false);

  const arsVoice = "/sounds/loan-investment/ringtone-loan.m4a";
  const arsRef = useRef<HTMLAudioElement | null>(null);
  const loanAgentVoice1 = "/sounds/loan-investment/loan-agent-voice1.m4a";
  const loanAgentVoice2 = "/sounds/loan-investment/loan-agent-voice2.m4a";
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  // 언마운트/화면 전환 시 현재 음성 정리 (선택 권장)
  useEffect(() => {
    return () => {
      voiceRef.current?.pause();
      voiceRef.current = null;
    };
  }, []);

  // 벨소리 재생
  useEffect(() => {
    arsRef.current = new Audio(arsVoice);
    arsRef.current.play().catch((error) => {
      console.error("ARS 음성 로드 실패", error);
    });

    return () => {
      arsRef.current?.pause();
      arsRef.current = null;
    };
  }, []);

  // 0번 키패드 클릭 시 화면이 변경되며 경찰 음성 재생됨
  const onClickArsRespond = () => {
    setIsNavigated(true);

    // ARS 정지
    if (arsRef.current) {
      arsRef.current.pause();
      arsRef.current.currentTime = 0;
    }

    // 은행원 1 재생
    const v1 = new Audio(loanAgentVoice1);
    voiceRef.current = v1;

    const handleEnded = () => {
      // v1 리스너 정리
      v1.removeEventListener("ended", handleEnded);

      // 은행원 2 재생
      const v2 = new Audio(loanAgentVoice2);
      voiceRef.current = v2;
      v2.play().catch((e) => console.error("voice2 재생 실패:", e));
    };

    v1.addEventListener("ended", handleEnded);
    v1.play().catch((e) => console.error("voice1 재생 실패:", e));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [callTime]);

  return (
    <div className="h-dvh flex flex-col justify-between items-center px-10 pb-[34px]">
      <div className="pt-18 flex flex-col text-monochrome-100 text-center">
        <span className="text-2xl font-medium h-[29px]">
          {formatCallTime(callTime)}
        </span>
        <span className="text-[44px] font-semibold">02-851-5396</span>
      </div>
      {/* 키패드 0번 누르면 음성 시작 */}
      {isNavigated ? (
        /** 은행원 음성 메세지 시간 차 렌더링 */
        <VoiceChatRenderer />
      ) : (
        <OnThePhoneComponentExtend
          needsKeypad={true}
          handleClick={onClickArsRespond}
        />
      )}
    </div>
  );
};

export default BankerCallPage;
