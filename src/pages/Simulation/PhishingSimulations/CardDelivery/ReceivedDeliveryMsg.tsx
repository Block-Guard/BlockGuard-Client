import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Header from "../../../../components/Header/Header";
import LockScreen from "@/assets/simulation/phone-lock-screen.png";
import LeftArrow from "@/assets/icons/arrow-left-white-icon.svg";
import CloseIcon from "@/assets/icons/close-white-icon.svg";
import MessageProfile from "@/assets/icons/message-profile-img.svg";
import ClickAnimation from "../../../../assets/lottie/click-black.json";

const ReceivedDeliveryMsg = () => {
  const navigate = useNavigate();
  const currentTime = new Date();
  const formattedDate = currentTime.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");

  return (
    <div
      className="h-[100vh] z-0"
      style={{
        backgroundImage: `url(${LockScreen})`,
      }}
    >
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrow}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={<img src={CloseIcon} onClick={() => navigate(-1)} />}
        bgColor="none"
      />
      <div className="w-full flex flex-col justify-center items-center pt-10 gap-4">
        <h2 className="text-monochrome-100 text-2xl font-medium">
          {formattedDate}
        </h2>
        <h1 className="text-monochrome-100 text-8xl font-medium">
          {hours}:{minutes}
        </h1>
      </div>
      <div className="absolute bottom-35 w-full px-4 flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <p className="text-white/80 text-[26px]">알림 센터</p>
          <div className="w-8 h-8 bg-white/60 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#616161"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
        <div
          className="relative flex flex-row gap-3 justify-start items-center bg-white/40 rounded-[20px] py-[10px] px-3"
          onClick={() =>
            navigate("/simulation/card-delivery/first-message-view")
          }
        >
          <img className="w-9" src={MessageProfile} />
          <div className="flex flex-col items-start w-[70%]">
            <span className="text-sm font-semibold leading-4">
              010-9809-XXXX
            </span>
            <span className="text-sm leading-4">
              [WEB발신]
              <br />
              [00카드]
              <br />
              고객님 (****-8573)카드가 접수신청되어 배송중입니다...
            </span>
          </div>
          <span className="absolute top-[10px] right-6 text-[11px] text-[#484848]">
            지금
          </span>
          <Lottie
            animationData={ClickAnimation}
            loop
            autoplay
            className="absolute bottom-6 right-8 translate-[50%] w-20 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ReceivedDeliveryMsg;
