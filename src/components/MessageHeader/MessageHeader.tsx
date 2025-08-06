import { useNavigate } from "react-router-dom";

import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "@/assets/icons/close-darkblue-icon.svg";
import MessageProfile from "@/assets/icons/message-profile-img.svg";
import RightArrowIcon from "@/assets/icons/arrow-right-gray-sm.svg";

type Props = {
  sender: string;
};

const MessageHeader = ({ sender }: Props) => {
  const navigate = useNavigate();
  return (
    <header className="w-full fixed flex flex-row items-start px-6 py-[19px] z-50 max-w-[800px] bg-white">
      <div className="flex-1 flex justify-start">
        <img src={LeftArrowIcon} onClick={() => navigate(-1)} />
      </div>
      <div className="flex-4 flex justify-center flex-col gap-[3px] items-center pt-1">
        <img src={MessageProfile} />
        <div className="flex flex-row gap-[3px] items-center">
          <span className="font-medium text-monochrome-700">{sender}</span>
          <img src={RightArrowIcon} />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <img
          src={CloseIcon}
          onClick={() => navigate("/simulation/select-type")}
        />
      </div>
    </header>
  );
};

export default MessageHeader;
