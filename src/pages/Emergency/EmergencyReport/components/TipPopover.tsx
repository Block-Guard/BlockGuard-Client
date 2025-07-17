import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import React from "react";

type Props = {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  isBlue?: boolean;
};

const TipPopover = ({
  popoverTrigger,
  popoverContent,
  isBlue = true,
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{popoverTrigger}</PopoverTrigger>
      <PopoverContent className="border-none stroke-none outline-none">
        <div
          className="max-w-[256px] flex flex-col gap-2 p-3 bg-monochrome-100 border-2 rounded-[5px]"
          style={{ borderColor: isBlue ? "#87aefd" : "#FFDCDC" }}
        >
          <div
            className="w-fit py-2 px-[10px] text-monochrome-100 rounded-[90px] h-[25px] flex items-center text-[14px] leading-[21px]"
            style={{ background: isBlue ? "#437EFC" : "#FF4E4E" }}
          >
            Tip
          </div>
          <div
            className="text-[16px] leading-6"
            style={{ color: isBlue ? "#437EFC" : "#FF4E4E" }}
          >
            {popoverContent}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TipPopover;
