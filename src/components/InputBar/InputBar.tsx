import React from "react";

type Props = {
  type: "email" | "password" | "text" | "number";
  input: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  rightChild?: React.ReactNode;
  isError?: string;
};

const InputBar = ({
  type,
  input,
  onChangeInput,
  placeholder = "",
  rightChild,
  isError = "",
}: Props) => {
  return (
    <div className="w-full relative">
      <input
        className="w-full border px-7 py-5 rounded-xl text-[20px] placeholder:text-[#b2b2b2]"
        style={{ borderColor: isError ? "#F24E4E" : "#b2b2b2" }}
        type={type}
        value={input}
        onChange={onChangeInput}
        placeholder={placeholder}
      />
      {rightChild}
    </div>
  );
};

export default InputBar;
