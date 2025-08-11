import React from "react";

type Props = {
  input: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  desc: string;
};

const NokInfoInput = ({ input, onChangeInput, placeholder, desc }: Props) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <input
        className="w-full bg-[#F5F5F5] border-2 border-[#EEF1F3] p-4 rounded-xl text-[18px] font-semibold placeholder:text-[#d9d9d9]"
        type="text"
        value={input}
        onChange={onChangeInput}
        placeholder={placeholder}
      />
      <span className="text-[13px] text-[#a0a0a0] max-w-[75%] ml-[9px]">
        {desc}
      </span>
    </div>
  );
};

export default NokInfoInput;
