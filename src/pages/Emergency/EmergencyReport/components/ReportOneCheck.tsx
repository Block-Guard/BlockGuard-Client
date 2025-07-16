import UncheckedIcon from "../../../../assets/icons/unchecked-box-icon.svg";
import CheckedIcon from "../../../../assets/icons/checked-box-icon.svg";

type Props = {
  title: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

const ReportOneCheck = ({ title, isChecked, setIsChecked }: Props) => {
  const handleToCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col gap-[15px] bg-monochrome-200 rounded-[15px] px-3 py-4">
      <div className="w-fit bg-primary-400 rounded-[90px] px-[10px] py-[2px] text-monochrome-100 font-medium">
        Check List
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row gap-[10px] items-center">
          {isChecked ? (
            <img src={CheckedIcon} onClick={handleToCheck} />
          ) : (
            <img src={UncheckedIcon} onClick={handleToCheck} />
          )}
          <span className="text-[16px] font-bold leading-5">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ReportOneCheck;
