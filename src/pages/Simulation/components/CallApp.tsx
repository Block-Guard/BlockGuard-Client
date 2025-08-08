import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import ColoredKeypadButton from "./ColoredKeypadButton";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../../../assets/icons/close-darkblue-icon.svg";
import AddAddressBlue from "../../../assets/simulation/phone-button-icons/add-blue-icon.svg";
import ResponseCall from "../../../assets/simulation/phone-button-icons/respond-call-icon.svg";
import DeleteBtn from "../../../assets/simulation/phone-button-icons/delete-icon.svg";
import { CallAppNav } from "./CallAppNav";
import Lottie from "lottie-react";
import ClickAnimation from "../../../assets/lottie/click-black.json";
interface CallAppProps {
  phoneNumber: string;
  navigateUrl: string;
}

const CallApp = ({ phoneNumber, navigateUrl }: CallAppProps) => {
  const navigate = useNavigate();
  const handleCall = () => navigate(navigateUrl);
  return (
    <div className="h-screen flex flex-col bg-white ">
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          <img
            src={CloseIcon}
            onClick={() => navigate("/simulation/select-type")}
          />
        }
        bgColor="white"
      />

      <main className="flex flex-col h-full justify-between mt-[68px] mb-22 px-15 py-2">
        <div className="flex justify-start items-center relative mb-auto">
          <div className="w-full bg-white text-center justify-start text-black text-4xl font-normal">
            {phoneNumber}
          </div>
          <img src={AddAddressBlue} className="w-7 h-6 absolute -right-8" />
        </div>

        <div className="flex flex-col justify-center items-center gap-10  box-border">
          <div className="grid grid-cols-3 gap-y-5 gap-x-[26px] relative">
            <ColoredKeypadButton mainText="1" />
            <ColoredKeypadButton mainText="2" subText="A B C" />
            <ColoredKeypadButton mainText="3" subText="D E F" />
            <ColoredKeypadButton mainText="4" subText="G H I" />
            <ColoredKeypadButton mainText="5" subText="J K L" />
            <ColoredKeypadButton mainText="6" subText="M N O" />
            <ColoredKeypadButton mainText="7" subText="P Q R S" />
            <ColoredKeypadButton mainText="8" subText="T U V" />
            <ColoredKeypadButton mainText="9" subText="W X Y Z" />
            <ColoredKeypadButton mainText="*" />
            <ColoredKeypadButton mainText="0" subText="+" />
            <ColoredKeypadButton mainText="#" />
            <>&nbsp;</>
            <ColoredKeypadButton
              mainText={<img src={ResponseCall} onClick={handleCall} />}
              bgColor="#34C759"
            />
            <Lottie
              animationData={ClickAnimation}
              loop
              autoplay
              className="absolute top-5/7 right-1/2 translate-[65%] w-25 pointer-events-none z-50"
            />
            <div className="flex justify-center items-center">
              <img src={DeleteBtn} />
            </div>
          </div>
        </div>
      </main>
      <CallAppNav />
    </div>
  );
};

export default CallApp;
