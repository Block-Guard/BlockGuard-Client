import { useState } from "react";
import DownArrowIcon from "../../../../assets/icons/arrow-down-lightblue.svg";
import UpArrowIcon from "../../../../assets/icons/arrow-up-lightblue.svg";

type Props = {
  title: string;
  desc: string;
  tipIcon?: React.ReactNode;
};

const OpenedDescCard = ({ title, desc, tipIcon }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleToOpenClose = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="my-[15px] flex flex-col gap-[5px]">
      <div className="flex flex-row gap-[5px]" onClick={handleToOpenClose}>
        {isOpened ? (
          <img src={UpArrowIcon} alt="설명 닫기" />
        ) : (
          <img src={DownArrowIcon} alt="설명 열기" />
        )}
        <p className="font-bold text-[#0143D5] leading-6 text-[16px] underline">
          {title}
        </p>
        {tipIcon}
      </div>
      {isOpened && (
        // \n을 실제 줄바꿈처럼 렌더링을 하려면 whitespace-pre-line 이 있어야 한다.
        <div className="whitespace-pre-line px-[10px] py-2 border border-[#EEF1F3] border-l-[2px] border-l-[#87AEFD]">
          {desc}
        </div>
      )}
    </div>
  );
};

export default OpenedDescCard;
