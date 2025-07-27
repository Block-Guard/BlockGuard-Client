import Lottie from "lottie-react";
import ClickAnimation from "../../../assets/lottie/click.json";
import PhoneButton from "./PhoneButton";
import SendMessageIcon from "@/assets/simulation/phone-button-icons/send-message-icon.svg";
import VoicemailIcon from "@/assets/simulation/phone-button-icons/voicemail-icon.svg";
import EndCallIcon from "@/assets/simulation/phone-button-icons/end-call-icon.svg";
import RespondCallIcon from "@/assets/simulation/phone-button-icons/respond-call-icon.svg";

type Props = {
  onClickToRespond: () => void;
};

const IncomingCallComponent = ({ onClickToRespond }: Props) => {
  return (
    <div className="flex flex-row justify-between w-[326px] h-[250px]">
      <div className="flex flex-col justify-between">
        <PhoneButton icon={SendMessageIcon} desc="메시지 보내기" size="sm" />
        <PhoneButton icon={EndCallIcon} desc="거절" color="#f24e4e" />
      </div>
      <div className="relative overflow-hidden flex flex-col justify-between">
        <PhoneButton icon={VoicemailIcon} desc="음성 사서함" size="sm" />
        <PhoneButton
          icon={RespondCallIcon}
          desc="응답"
          color="#66CF68"
          onClick={onClickToRespond}
        />
        <Lottie
          animationData={ClickAnimation}
          loop
          autoplay
          className="absolute bottom-17 right-11 translate-[50%] w-50 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default IncomingCallComponent;
