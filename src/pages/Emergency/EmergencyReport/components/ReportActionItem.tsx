import React from "react";

type Props = {
  title: string;
  emoticon: React.ReactNode;
  shortcutButton: React.ReactNode;
  tipIcon?: React.ReactNode;
};

const ReportActionItem = ({
  title,
  emoticon,
  shortcutButton,
  tipIcon = <></>,
}: Props) => {
  return (
    <div className="border-blur-sm flex flex-row justify-between rounded-[15px] bg-monochrome-200 px-[13px] py-[12px] gap-2">
      <div className="flex flex-row gap-[5px] items-center">
        {emoticon}
        <span className="w-fit font-bold text-[14px] break-all">{title}</span>
        {tipIcon}
      </div>
      <div className="w-fit min-w-[75px]">{shortcutButton}</div>
    </div>
  );
};

export default ReportActionItem;
