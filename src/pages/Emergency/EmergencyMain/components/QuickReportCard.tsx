import Button from "../../../../components/Button/Button";
import PhoneCallIcon from "../../../../assets/icons/phone-call-icon.png";

type Props = {
  title: string;
  handleToCall: () => void;
};

const QuickReportCard = ({ title, handleToCall }: Props) => {
  return (
    <div className="flex flex-row bg-primary-200 rounded-2xl border-blur-sm py-3 px-[13px] justify-between items-center">
      <div className="flex flex-row gap-1 items-center">
        <img className="w-10" src={PhoneCallIcon} alt="전화기 아이콘" />
        <span className="font-bold text-[16px] text-monochrome-700 leading-5">
          {title}
        </span>
      </div>
      <div className="w-[75px]">
        <Button onClick={handleToCall} size="sm">
          바로 걸기
        </Button>
      </div>
    </div>
  );
};

export default QuickReportCard;
