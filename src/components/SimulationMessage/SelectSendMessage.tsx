type Props = {
  option1: string;
  option2: string;
  option3: string;
  selectedOption: number;
  handleToSelectOption: (value: number) => void;
};

const SelectSendMessage = ({
  option1,
  option2,
  option3,
  selectedOption,
  handleToSelectOption,
}: Props) => {
  return (
    <div className="flex flex-col items-end gap-[5px]">
      <button
        className="whitespace-pre-line p-[10px] max-w-[300px] w-fit rounded-[20px] text-[15px] text-start"
        style={{
          background: selectedOption === 1 ? "#437EFC" : "#D6ECF8",
          color: selectedOption === 1 ? "#fff" : "#79818A",
        }}
        onClick={() => handleToSelectOption(1)}
      >
        {option1}
      </button>
      <button
        className="whitespace-pre-line p-[10px] max-w-[300px] w-fit rounded-[20px] text-[15px] text-start"
        style={{
          background: selectedOption === 2 ? "#437EFC" : "#D6ECF8",
          color: selectedOption === 2 ? "#fff" : "#79818A",
        }}
        onClick={() => handleToSelectOption(2)}
      >
        {option2}
      </button>
      <button
        className="whitespace-pre-line p-[10px] max-w-[300px] w-fit rounded-[20px] text-[15px] text-start"
        style={{
          background: selectedOption === 3 ? "#437EFC" : "#D6ECF8",
          color: selectedOption === 3 ? "#fff" : "#79818A",
        }}
        onClick={() => handleToSelectOption(3)}
      >
        {option3}
      </button>
    </div>
  );
};

export default SelectSendMessage;
