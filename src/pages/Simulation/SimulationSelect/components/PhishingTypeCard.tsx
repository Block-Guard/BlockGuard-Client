type Props = {
  selectedType: number;
  id: number;
  title: string;
  defaultIcon: string;
  selectedIcon: string;
  setSelectedType: (value: number) => void;
};

const PhishingTypeCard = ({
  selectedType,
  id,
  title,
  defaultIcon,
  selectedIcon,
  setSelectedType,
}: Props) => {
  const onClickSelectType = (selectedId: number) => {
    if (selectedType === selectedId) {
      setSelectedType(0);
    } else {
      setSelectedType(selectedId);
    }
  };
  return (
    <div
      key={id}
      className="bg-monochrome-200 py-[22px] flex flex-col items-center gap-1 rounded-[12px]"
      style={{
        background: selectedType === id ? "#87AEFD" : "#eef1f3",
      }}
      onClick={() => onClickSelectType(id)}
    >
      <img
        className="w-[46px]"
        src={selectedType === id ? selectedIcon : defaultIcon}
        alt="피싱 아이콘"
      />
      <span
        className="whitespace-pre-line text-lg font-bold leading-[27px] text-center"
        style={{ color: selectedType === id ? "#fff" : "#000" }}
      >
        {title}
      </span>
    </div>
  );
};

export default PhishingTypeCard;
