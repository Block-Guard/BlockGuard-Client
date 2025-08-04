import ReceivedMessage from "../../../../components/SimulationMessage/ReceivedMessage";
import CardDeliveryMsgLinkImg from "../../../../assets/simulation/message-imgs/card-delivery-msg-link-image.png";
import { useEffect, useState } from "react";
import CardDeliveryModal from "./CardDeliveryModal";

const SecondCardDeliveryMsg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isModalOpen]);
  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
        5월 31일 (토) 오후 3:26
      </p>
      <div className="w-full px-[15px]">
        <div className="flex flex-col gap-[10px]">
          <ReceivedMessage
            content={`[WEB발신] https://www.kca.go.kr/home/main.do`}
          />
          <img className="w-[70%]" src={CardDeliveryMsgLinkImg} />
        </div>
      </div>
      <CardDeliveryModal
        isModalOpen={isModalOpen}
        resetPage={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SecondCardDeliveryMsg;
