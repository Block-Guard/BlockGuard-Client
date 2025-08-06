import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MESSAGE_DELAY_MS } from "../constants/delay-ms";
import VoiceFrequency from "@/assets/simulation/phone-button-icons/voice-frequency-sign.svg";

const CardVoiceChatRenderer = () => {
  const navigate = useNavigate();
  const [renderStep, setRenderStep] = useState(0);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const voices = [
    "/sounds/police-voice-exam.mp3", // voice2
    "/sounds/police-voice-exam.mp3", // voice3
    "/sounds/police-voice-exam.mp3", // voice4
  ];

  const playVoiceWithDelay = (index: number) => {
    const audio = new Audio(voices[index]);
    voiceRef.current = audio;

    audio
      .play()
      .catch((err) => console.warn(`음성${index + 2} 재생 실패:`, err));

    audio.onended = () => {
      // 다음 음성으로 넘어가기 전 delay
      if (renderStep < 2) {
        setTimeout(() => {
          setRenderStep((prev) => prev + 1);
        }, MESSAGE_DELAY_MS);
      }
    };
  };

  // 최초 renderStep이 0일 때 voice2 재생 시작
  useEffect(() => {
    playVoiceWithDelay(renderStep);

    return () => {
      // 컴포넌트 언마운트 또는 음성 변경 시 이전 음성 정지
      if (voiceRef.current) {
        voiceRef.current.pause();
        voiceRef.current = null;
      }
    };
  }, [renderStep]);

  const clickToNextPage = () => {
    navigate("/simulation/card-delivery/second-message-view");
  };

  return (
    <div className="h-[50%] flex flex-col justify-start items-start gap-2.5 mb-25">
      <div className="flex flex-row justify-between items-center w-full mb-5">
        <span className="text-stone-200 text-xl font-medium min-w-fit mr-2">
          카드사 직원
        </span>
        <img src={VoiceFrequency} alt="통화 음성표" />
      </div>

      {renderStep === 0 && (
        <div className="w-full py-6 px-4 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 font-semibold">
          아, 잠시만요. 확인 해보겠습니다.
          <br />
          본인 성함과 주민등록번호를 알려주시겠습니까?
          <br />
          카드 재발급신청 접수확인을 위해 필요합니다.
        </div>
      )}

      {renderStep === 1 && (
        <div className="w-full py-6 px-4 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 font-semibold">
          확인해봤는데, 고객님 명의로 마스터카드가 하나 발급된 정보가
          존재합니다.
          <br />
          개인정보가 유출돼서 누군가 고객님 명의로 카드를 신청한 것 같습니다.
        </div>
      )}

      {renderStep === 2 && (
        <div className="flex flex-col gap-8">
          <div className="w-full py-6 px-4 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5 font-semibold">
            저희가 우선 마스터카드는 해지를 해드릴거고요, 명의도용권으로 또 다른
            금융권에서도 카드가 다시 발급이 되실 수 있습니다.
            <br />
            비대면 대출 또는 개인정보를 활용한 범죄에 노출되실 수 있기때문에 이
            부분은 저희와 함께 신고접수를 진행하셔야 할겁니다. 제가 지금 문자로
            링크 하나 보내드릴건데 한번 확인해주시겠습니까?
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
  );
};

export default CardVoiceChatRenderer;
