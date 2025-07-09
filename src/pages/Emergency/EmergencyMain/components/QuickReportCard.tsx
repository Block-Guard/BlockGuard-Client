import Button from "../../../../components/Button/Button";

type Props = {
  title: string;
};

const QuickReportCard = ({ title }: Props) => {
  const handleToCall = (title: string) => {
    console.log(title, "에 전화하기");
  };
  return (
    <div className="flex flex-row bg-primary-200 rounded-2xl border-blur py-3 px-[13px] justify-between items-center">
      <div className="flex flex-row gap-3">
        <img
          className="w-[18px]"
          src="/public/icons/phone-call-icon.png"
          alt="전화기 아이콘"
        />
        <span className="font-bold text-[16px] text-monochrome-700 leading-5">
          {title}
        </span>
      </div>
      <div className="w-[75px]">
        <Button onClick={() => handleToCall(title)} size="sm">
          바로 걸기
        </Button>
      </div>
    </div>
  );
};

export default QuickReportCard;
