interface LoanInfoInputProps {
  label: string;
  placeholder: string;
  inputState: boolean;
  inputStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
  handlAutoFill?: () => void;
  isReminded: boolean;
  value: string;
  onChangeValue: (value: string) => void;
}

export const LoanInfoInput = ({
  label,
  placeholder,
  inputState,
  inputStateSetter,
  handlAutoFill,
  isReminded,
  value,
  onChangeValue,
}: LoanInfoInputProps) => {
  const handleFocus = () => {
    if (handlAutoFill) {
      handlAutoFill();
    }
    if (!inputState) inputStateSetter(true);
  };

  return (
    <div className="flex flex-col">
      {value === "" && isReminded ? (
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
          ${value === "" && isReminded ? "outline-red-600" : "outline-gray-100"}
          text-lg font-medium leading-relaxed text-slate-950
          focus:bg-monochrome-200
          placeholder-zinc-300
          resize-none no-scrollbar
          ${value === "" ? "bg-monochrome-200" : "bg-white"}
        `}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};
