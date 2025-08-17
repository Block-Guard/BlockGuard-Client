import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VOICECHAT_DELAY_MS } from "../constants/delay-ms";
import VoiceFrequency from "@/assets/simulation/phone-button-icons/voice-frequency-sign.svg";

const CardVoiceChatRenderer = () => {
  const navigate = useNavigate();
  const [renderStep, setRenderStep] = useState(0);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const voices = [
    "/sounds/card-delivery/card-employee2.m4a",
    "/sounds/card-delivery/card-employee3.m4a",
  ];

  // step에 맞는 음성 재생 (있는 경우에만)
  useEffect(() => {
    // 현재 step에 재생할 음성이 있으면 새로 틀기
    if (renderStep < voices.length) {
      // 새 음성을 틀기 전에 이전 음성 정지
      voiceRef.current?.pause();

      const audio = new Audio(voices[renderStep]);
      voiceRef.current = audio;

      // 이 step이 끝났을 때 다음 step으로
      const currentStep = renderStep; // 캡처
      audio.onended = () => {
        // step 0 끝 → 딜레이 후 step 1
        if (currentStep === 0) {
          setTimeout(() => setRenderStep(1), VOICECHAT_DELAY_MS);
        }
      };

      audio
        .play()
        .catch((err) => console.warn(`음성${renderStep + 2} 재생 실패:`, err));

      // cleanup에서 pause 하지 않음 (다음 step이 '무음'일 때도 계속 들리게 유지)
      return () => {
        audio.onended = null; // 리스너만 정리
      };
    }

    // 이 step에 음성이 없으면 아무것도 하지 않음 (이전 음성 계속 재생)
    return;
  }, [renderStep]);

  // 5초 후 step2로 강제 전환 (음성 종료와 무관)
  useEffect(() => {
    if (renderStep !== 1) return;
    const t = setTimeout(() => setRenderStep(2), 5000);
    return () => clearTimeout(t);
  }, [renderStep]);

  // 언마운트 시에는 반드시 정지
  useEffect(() => {
    return () => {
      voiceRef.current?.pause();
      voiceRef.current = null;
    };
  }, []);

  const clickToNextPage = () => {
    // 페이지 이동 전 안전하게 정지 (선택적)
    voiceRef.current?.pause();
    voiceRef.current = null;
    navigate("/simulation/card-delivery/second-message-view");
  };

  return (
    <div className="h-[60%] flex flex-col justify-start items-start gap-2.5 mb-25">
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

      {renderStep >= 1 && (
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
            className="flex flex-col justify-center items-center gap-3 mb-3"
            onClick={clickToNextPage}
          >
            <p className="text-xl font-bold text-white w-full text-center animate-pulse">
              클릭해주세요!
            </p>
            <p className="text-[15px] text-white animate-pulse">
              바로 문자 화면으로 넘어갑니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardVoiceChatRenderer;
