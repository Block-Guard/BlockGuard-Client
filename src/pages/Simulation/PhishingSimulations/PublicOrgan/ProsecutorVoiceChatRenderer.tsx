import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VoiceFrequency from "@/assets/simulation/phone-button-icons/voice-frequency-sign.svg";

const ProsecutorVoiceChatRenderer = () => {
  const navigate = useNavigate();
  const [renderStep, setRenderStep] = useState(0);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const voice = "/sounds/public-organ/prosecutor-voice4.m4a";

  const playVoiceWithDelay = () => {
    const audio = new Audio(voice);
    voiceRef.current = audio;

    audio.play().catch((err) => console.warn(`음성 재생 실패:`, err));
  };

  // 최초 renderStep이 0일 때 재생 시작
  useEffect(() => {
    playVoiceWithDelay();

    const timer = setTimeout(() => {
      setRenderStep((prev) => prev + 1);
    }, 5000);

    return () => {
      clearTimeout(timer);
      // 컴포넌트 언마운트 또는 음성 변경 시 이전 음성 정지
      if (voiceRef.current) {
        voiceRef.current.pause();
        voiceRef.current = null;
      }
    };
  }, []);

  const clickToNextPage = () => {
    navigate("/simulation/public-organ/step2");
  };

  return (
    <div className="h-[65%] flex flex-col justify-start items-start gap-2.5 mb-25">
      <div className="flex flex-row justify-between items-center w-full mb-5">
        <span className="text-stone-200 text-xl font-medium min-w-fit mr-2">
          수사관
        </span>
        <img src={VoiceFrequency} alt="통화 음성표" />
      </div>
      <div className="flex flex-col gap-6">
        {renderStep >= 0 && (
          <div className="w-full py-6 px-4 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 font-semibold">
            지금부터 법정 증거 확보를 위해 본인 동의하에 녹취를 진행할겁니다.
            <br />
            조용한 공간에서 협조해 주시고, 위증이나 허위 진술 시 5년 이하
            징역형에 처해질 수 있습니다.
            <br />본 사건은 수사상 극비이므로 가족·지인 포함 어떤 사람에게도
            알리시면 안 됩니다.
          </div>
        )}
        {renderStep === 1 && (
          <div className="flex flex-col gap-8">
            <div className="w-full py-6 px-4 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 font-semibold">
              지금 메신저로 수사 협조 의뢰 공문서와 검찰 공무원증 사본을
              보내드리겠습니다.
              <br />
              사건번호와 본인 정보가 기재돼 있으니 반드시 확인 후 안내된 절차를
              따라 주세요.
            </div>
            <div
              className="flex flex-col justify-center items-center gap-3"
              onClick={clickToNextPage}
            >
              <p className="text-xl font-bold text-white w-full text-center">
                클릭해주세요!
              </p>
              <p className="text-[15px] text-white">
                바로 문자 화면으로 넘어갑니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProsecutorVoiceChatRenderer;
