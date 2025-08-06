import InputBar from "../InputBar/InputBar";

type Props = {
  label: string;
  type: "text" | "number";
  input: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const LabeledInput = ({
  label,
  type,
  input,
  onChangeInput,
  placeholder,
}: Props) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <h2 className="text-[18px] font-semibold leading-[27px]">{label}</h2>
      <div className="flex flex-col gap-1">
        <InputBar
          type={type}
          input={input}
          onChangeInput={onChangeInput}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default LabeledInput;
