import { useRef, useState } from "react";

interface LoanInfoInputProps {
  label: string;
  placeholder: string;
  inputState: boolean;
  inputStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
  isReminded: boolean;
}

export const LoanInfoInput = ({
  label,
  placeholder,
  inputState,
  inputStateSetter,
  isReminded,
}: LoanInfoInputProps) => {
  const textForm = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e.target.value);
    if(!inputState)
      inputStateSetter(true);
  };
  return (
    <div className="flex flex-col">
      {info === "" && isReminded ? (
        <span className="text-red-600 text-base font-medium leading-normal">
          {label} &nbsp;{"*필수입력 항목입니다."}
        </span>
      ) : (
        <span className="text-black text-base font-medium leading-normal">
          {label}
        </span>
      )}

      <input
        type="text"
        className={`w-full h-12 px-5 py-3 outline-2 outline-offset-[-2px]
                ${
                  info === "" && isReminded
                    ? "outline-red-600"
                    : "outline-gray-100"
                }
                            text-lg font-medium leading-relaxed text-slate-950
                                    focus:bg-monochrome-200
                                    placeholder-zinc-300
                                    resize-none no-scrollbar
                                    ${
                                      info === ""
                                        ? "bg-monochrome-200"
                                        : "bg-white"
                                    }
                                    `}
        placeholder={placeholder}
        onChange={handleChange}
        ref={textForm}
      />
    </div>
  );
};
