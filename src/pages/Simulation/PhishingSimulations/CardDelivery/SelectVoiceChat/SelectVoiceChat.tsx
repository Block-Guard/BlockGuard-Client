import { useEffect, useState } from "react";
import VoiceFrequency from "@/assets/simulation/phone-button-icons/voice-frequency-sign.svg";
import { VOICECHAT_DELAY_MS } from "../../constants/delay-ms";
import type { VoiceCallData } from "./voice-chat-data";

type SelectVoiceChatProps = {
  caller: string;
  voiceChatData: VoiceCallData;
  onClickToNextStep: () => void;
};

const SelectVoiceChat = ({
  caller,
  voiceChatData,
  onClickToNextStep,
}: SelectVoiceChatProps) => {
  const [isRenderedSelectButton, setIsRenderedSelectButton] = useState(false);
  const [selectedResponse, setSelectedRespond] = useState("");
  const onClickSelectResponse = (respond: string) => {
    setSelectedRespond(respond);
  };

  const handleClick = () => {
    setIsRenderedSelectButton(false);
    setSelectedRespond("");
    onClickToNextStep();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRenderedSelectButton(true);
    }, VOICECHAT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [voiceChatData]);
  return (
    <div className="h-[55%] flex flex-col justify-start items-start gap-2.5 mb-25">
      <div className="flex flex-row justify-between items-center w-full mb-5">
        <span className="text-stone-200 text-xl font-medium min-w-fit mr-2">
          {caller}
        </span>
        <img src={VoiceFrequency} alt="통화 음성표" />
      </div>

      <div className="w-full py-[23px] px-4 flex flex-col justify-center rounded-[15px] bg-white/75 mb-2.5 gap-7">
        <span className="whitespace-pre-line text-[16px] font-semibold">
          {voiceChatData.voiceCall}
        </span>
        {selectedResponse && (
          <div className="whitespace-pre-line bg-primary-400 rounded-[50px] text-[16px] font-medium text-monochrome-100 py-[13px] text-center">
            {selectedResponse}
          </div>
        )}
      </div>
      {isRenderedSelectButton && !selectedResponse && (
        <div className="flex w-full flex-col gap-[5px]">
          {voiceChatData.options.map((option, index) => (
            <div
              key={index}
              className="whitespace-pre-line rounded-[50px] bg-[#f9f9f9] py-[14px] w-full flex justify-center text-[16px] font-medium text-center"
              onClick={() => onClickSelectResponse(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {selectedResponse && (
        <p
          className="text-xl font-bold text-white w-full text-center py-5 animate-pulse"
          onClick={handleClick}
        >
          클릭해주세요!
        </p>
      )}
    </div>
  );
};

export default SelectVoiceChat;
