import SpeakerIcon from "@/assets/simulation/phone-button-icons/speaker-icon.svg";
import FaceTimeIcon from "@/assets/simulation/phone-button-icons/face-time-icon.svg";
import SoundOffIcon from "@/assets/simulation/phone-button-icons/sound-off-icon.svg";
import AddIcon from "@/assets/simulation/phone-button-icons/add-icon.svg";
import EndCallIcon from "@/assets/simulation/phone-button-icons/end-call-icon.svg";
import KeypadIcon from "@/assets/simulation/phone-button-icons/keypad-icon.svg";
import PhoneButton from "./PhoneButton";

const OnThePhoneComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-9">
      <PhoneButton icon={SpeakerIcon} desc="스피커" />
      <PhoneButton icon={FaceTimeIcon} desc="FaceTime" />
      <PhoneButton icon={SoundOffIcon} desc="소리 끔" />
      <PhoneButton icon={AddIcon} desc="추가" />
      <PhoneButton icon={EndCallIcon} desc="종료" color="#f24e4e" />
      <PhoneButton icon={KeypadIcon} desc="키패드" />
    </div>
  );
};

export default OnThePhoneComponent;
