import Button from "../../../components/Button/Button";

const EmergencyResponseStart = () => {
  return (
    <div className="relative flex flex-col gap-22 border-blur w-full bg-primary-400 px-4 pt-3 pb-4 rounded-[20px]">
      <span className="text-2xl text-monochrome-100 font-bold leading-9">
        내 상황에 맞는
        <br />
        신고/대응 가이드를
        <br />
        절차별로 알려드려요
      </span>
      <img
        className="absolute w-41 right-2 top-11"
        src="/public/icons/Emergency-start-icon.svg"
        alt="긴급 신고/대응 시작하기 아이콘"
      />
      <Button
        onClick={() => {
          console.log("test");
        }}
        isBlur={true}
      >
        시작하기
      </Button>
    </div>
  );
};

export default EmergencyResponseStart;
