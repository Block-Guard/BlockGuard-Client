import UncheckedIcon from "../../../../assets/icons/unchecked-box-icon.svg";
import CheckedIcon from "../../../../assets/icons/checked-box-icon.svg";

type Props = {
  index: number;
  title: string;
  isDone: boolean;
  setIsDone: (value: boolean) => void;
  disabled?: boolean;
};

const RequiredActionCheck = ({
  index,
  title,
  isDone,
  setIsDone,
  disabled = false,
}: Props) => {
  const handleToCheck = () => {
    if (!disabled) {
      setIsDone(!isDone);
    }
  };
  return (
    <div className="flex flex-row w-full gap-[6px]">
      <div
        className={`flex flex-row justify-center gap-2 px-[17px] py-[10px] rounded-[90px] text-[18px] font-bold leading-5 whitespace-nowrap ${
          disabled ? "bg-monochrome-300" : "bg-primary-200"
        }`}
      >
        <span
          className={`${disabled ? "text-monochrome-500" : "text-primary-400"}`}
        >
          {index}
        </span>
        <span className={disabled ? "text-monochrome-500" : ""}>{title}</span>
      </div>
      <div className="bg-monochrome-200 h-[1px] w-full self-center" />
      {isDone ? (
        <img
          src={CheckedIcon}
          onClick={handleToCheck}
          className={`${
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      ) : (
        <img
          src={UncheckedIcon}
          onClick={handleToCheck}
          className={`${
            disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      )}
    </div>
  );
};

export default RequiredActionCheck;
