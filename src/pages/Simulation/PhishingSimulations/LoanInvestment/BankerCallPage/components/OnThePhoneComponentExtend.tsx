import Lottie from "lottie-react";
import ClickAnimation from "../../../../../../assets/lottie/click.json";
import SpeakerIcon from "@/assets/simulation/phone-button-icons/speaker-icon.svg";
import FaceTimeIcon from "@/assets/simulation/phone-button-icons/face-time-icon.svg";
import SoundOffIcon from "@/assets/simulation/phone-button-icons/sound-off-icon.svg";
import AddIcon from "@/assets/simulation/phone-button-icons/add-icon.svg";
import EndCallIcon from "@/assets/simulation/phone-button-icons/end-call-icon.svg";
import KeypadIcon from "@/assets/simulation/phone-button-icons/keypad-icon.svg";
import PhoneButton from "../../../../components/PhoneButton";
import KeypadButton from "../../../../components/KeypadButton";
import { useState } from "react";
import ColoredKeypadButton from "../../../../components/ColoredKeypadButton";

type Props = {
  needsKeypad?: boolean;
  handleClick?: ()=>void;
};

const OnThePhoneComponentExtend = ({ needsKeypad = false, handleClick }: Props) => {
  const [isKeypadOpen, setIsKeypadOpen] = useState(false);
  return (
    <>
      {needsKeypad ? (
        <>
          {isKeypadOpen ? (
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-3 gap-y-5 gap-x-[26px] relative">
                <KeypadButton mainText="1" />
                <KeypadButton mainText="2" subText="A B C" />
                <KeypadButton mainText="3" subText="D E F" />
                <KeypadButton mainText="4" subText="G H I" />
                <KeypadButton mainText="5" subText="J K L" />
                <KeypadButton mainText="6" subText="M N O" />
                <KeypadButton mainText="7" subText="P Q R S" />
                <KeypadButton mainText="8" subText="T U V" />
                <KeypadButton mainText="9" subText="W X Y Z" />
                <KeypadButton mainText="*" />
                <ColoredKeypadButton mainText={<div onClick={handleClick} >0</div> } subText="+" bgColor="rgba(255, 255, 255, 0.3)" textColor="#ffffff"/>
                <Lottie
                animationData={ClickAnimation}
                loop
                autoplay
                className="absolute bottom-5 left-1/6 translate-[65%] w-25 pointer-events-none z-10"
              />
                <KeypadButton mainText="#" />
              </div>
              <div className="relative flex justify-center">
                <PhoneButton icon={EndCallIcon} desc="종료" color="#f24e4e" />
                <span className="absolute bottom-[50%] right-0 translate-y-[50%] text-monochrome-100 font-medium text-sm">
                  키패드 가리기
                </span>
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden grid grid-cols-3 gap-y-6 gap-x-9">
              <PhoneButton icon={SpeakerIcon} desc="스피커" />
              <PhoneButton icon={FaceTimeIcon} desc="FaceTime" />
              <PhoneButton icon={SoundOffIcon} desc="소리 끔" />
              <PhoneButton icon={AddIcon} desc="추가" />
              <PhoneButton icon={EndCallIcon} desc="종료" color="#f24e4e" />
              <PhoneButton
                icon={KeypadIcon}
                desc="키패드"
                onClick={() => setIsKeypadOpen(true)}
              />
              <Lottie
                animationData={ClickAnimation}
                loop
                autoplay
                className="absolute bottom-12 right-6 translate-[50%] w-25 pointer-events-none"
              />
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-cols-3 gap-y-6 gap-x-9">
          <PhoneButton icon={SpeakerIcon} desc="스피커" />
          <PhoneButton icon={FaceTimeIcon} desc="FaceTime" />
          <PhoneButton icon={SoundOffIcon} desc="소리 끔" />
          <PhoneButton icon={AddIcon} desc="추가" />
          <PhoneButton icon={EndCallIcon} desc="종료" color="#f24e4e" />
          <PhoneButton icon={KeypadIcon} desc="키패드" />
        </div>
      )}
    </>
  );
};

export default OnThePhoneComponentExtend;
