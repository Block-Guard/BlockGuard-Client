import UncheckedIcon from "../../../../assets/icons/unchecked-box-icon.svg";
import CheckedIcon from "../../../../assets/icons/checked-box-icon.svg";

type Props = {
  index: number;
  title: string;
  isDone: boolean;
  setIsDone: (value: boolean) => void;
};

const RequiredCheckList = ({ index, title, isDone, setIsDone }: Props) => {
  const handleToCheck = () => {
    setIsDone(!isDone);
  };
  return (
    <div className="flex flex-row w-full gap-[6px]">
      <div className="flex flex-row justify-center gap-2 px-[17px] py-[10px] bg-primary-200 rounded-[90px] text-[18px] font-bold leading-5 whitespace-nowrap">
        <span className="text-primary-400">{index}</span>
        {title}
      </div>
      <div className="bg-monochrome-200 h-[1px] w-full self-center" />
      {isDone ? (
        <img src={CheckedIcon} onClick={handleToCheck} />
      ) : (
        <img src={UncheckedIcon} onClick={handleToCheck} />
      )}
    </div>
  );
};

export default RequiredCheckList;
