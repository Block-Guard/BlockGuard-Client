import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReceivedMessage from "../../../../components/SimulationMessage/ReceivedMessage";

const FirstCardDeliveryMsg = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/simulation/card-delivery/first-call");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
        5월 31일 (토) 오후 3:26
      </p>
      <div className="w-full px-[15px]">
        <ReceivedMessage
          content={`[WEB발신]\n[00카드]\n고객님 (****-8573)카드가 접수신청되어 배송중입니다\n본인이 아닐경우 상담접수\n상담문의: (1899-6077)`}
        />
      </div>
    </div>
  );
};

export default FirstCardDeliveryMsg;
