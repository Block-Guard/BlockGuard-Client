import UncheckedIcon from "../../../../assets/icons/unchecked-box-icon.svg";
import CheckedIcon from "../../../../assets/icons/checked-box-icon.svg";

type Props = {
  isEvidenceChecked: boolean;
  haveIdChecked: boolean;
  setIsEvidenceChecked: (value: boolean) => void;
  setHaveIdChecked: (value: boolean) => void;
};

const ReportCheckList = ({
  isEvidenceChecked,
  haveIdChecked,
  setIsEvidenceChecked,
  setHaveIdChecked,
}: Props) => {
  const handleEvidenceCheckList = () => {
    setIsEvidenceChecked(!isEvidenceChecked);
  };

  const handleHaveIdCheckList = () => {
    setHaveIdChecked(!haveIdChecked);
  };
  return (
    <div className="flex flex-col gap-[15px] bg-monochrome-200 rounded-[15px] px-3 py-4">
      <div className="w-fit bg-primary-400 rounded-[90px] px-[10px] py-[2px] text-monochrome-100 font-medium">
        Check List
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row gap-[10px] items-center">
          {isEvidenceChecked ? (
            <img src={CheckedIcon} onClick={handleEvidenceCheckList} />
          ) : (
            <img src={UncheckedIcon} onClick={handleEvidenceCheckList} />
          )}
          <span className="text-[16px] font-bold leading-5">증거자료 확보</span>
        </div>
        <div className="flex flex-row gap-[10px] items-center">
          {haveIdChecked ? (
            <img src={CheckedIcon} onClick={handleHaveIdCheckList} />
          ) : (
            <img src={UncheckedIcon} onClick={handleHaveIdCheckList} />
          )}
          <span className="text-[16px] font-bold leading-5">신분증 지참</span>
        </div>
      </div>
    </div>
  );
};

export default ReportCheckList;
