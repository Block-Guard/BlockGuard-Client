import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";

type Props = {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  isPrimary: boolean;
};

const NokInfoPopover = ({ popoverTrigger, popoverContent }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{popoverTrigger}</PopoverTrigger>
      <PopoverContent className="border-none stroke-none outline-none">
        <div className="w-35 py-2 px-4 bg-white rounded-[6px] border border-[#979797] shadow-[0_3.76px_10.452px_3.76px_rgba(147,147,147,0.25)]">
          {popoverContent}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NokInfoPopover;
