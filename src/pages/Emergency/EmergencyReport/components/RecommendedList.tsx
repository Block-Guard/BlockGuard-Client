type Props = {
  index: number;
  title: string;
  onClickToScroll: () => void;
};

const RecommendedList = ({ index, title, onClickToScroll }: Props) => {
  return (
    <div className="flex flex-row w-full gap-[6px]">
      <div
        className="flex flex-row justify-center gap-2 px-[17px] py-[10px] bg-primary-200 rounded-[90px] text-[18px] font-bold leading-5 whitespace-nowrap"
        onClick={onClickToScroll}
      >
        <span className="text-primary-400">{index}</span>
        {title}
      </div>
    </div>
  );
};

export default RecommendedList;
