import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatCallTime } from "../../../../utils/formatCallTime";
import OnThePhoneComponentExtend from "../LoanInvestment/BankerCallPage/components/OnThePhoneComponentExtend";

const SecondCardDeliveryCall = () => {
  const navigate = useNavigate();
  const [callTime, setCallTime] = useState(0);

  // 추후 ars 음성이 필요함. ex) 0번을 눌러주세요.
  const arsVoice = "/sounds/police-voice-exam.mp3";

  // ⬇️ 음성 처음 진입 시 한번만 재생
  useEffect(() => {
    const audio = new Audio(arsVoice);
    audio.play().catch((e) => {
      console.warn("자동 재생이 차단되었을 수 있습니다:", e);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [callTime]);

  return (
    <div className="h-dvh flex flex-col justify-between items-center px-8 pb-[34px]">
      <div className="pt-18 flex flex-col text-monochrome-100 text-center">
        <span className="text-2xl font-medium h-[29px]">
          {formatCallTime(callTime)}
        </span>
        <span className="text-[40px] font-semibold">1899-6077</span>
      </div>
      {/* handleClick 로직은 추후 수정 예정 */}
      <OnThePhoneComponentExtend
        needsKeypad={true}
        handleClick={() =>
          navigate("/simulation/card-delivery/second-message-view")
        }
      />
    </div>
  );
};

export default SecondCardDeliveryCall;
