import InputBar from "../InputBar/InputBar";

type Props = {
  label: string;
  type: "text" | "number" | "password";
  input: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
  rightChild?: React.ReactNode;
};

const LabeledInput = ({
  label,
  type,
  input,
  onChangeInput,
  placeholder,
  disabled = false,
  rightChild,
}: Props) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <h2 className="text-[18px] font-semibold leading-[27px]">{label}</h2>
      <div className="flex flex-col">
        <InputBar
          type={type}
          input={input}
          onChangeInput={onChangeInput}
          placeholder={placeholder}
          disabled={disabled}
          rightChild={rightChild}
        />
      </div>
    </div>
  );
};

export default LabeledInput;
