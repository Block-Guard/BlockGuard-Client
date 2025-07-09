type Props = {
  organData: {
    id: number;
    title: string;
    desc: string;
    url: string;
  };
  bgColor: string;
};

const OrganCard = ({ organData, bgColor }: Props) => {
  return (
    <div
      key={organData.id}
      className="flex flex-col border-blur h-[190px] px-5 py-[14px] rounded-[15px] justify-between"
      style={{ background: `${bgColor}` }}
    >
      <div className="flex flex-col gap-[6px]">
        <h3
          className="w-[151px] text-monochrome-700 font-bold text-[18px] leading-5"
          style={{
            wordBreak: "keep-all",
          }}
        >
          {organData.title}
        </h3>
        <span
          className="w-[151px] break-words text-monochrome-500 font-normal text-[16px] leading-6"
          style={{
            wordBreak: "keep-all",
          }}
        >
          {organData.desc}
        </span>
      </div>
      <a className="flex flex-row gap-[5px] justify-end" href={organData.url}>
        <span className="text-primary-400 font-semibold text-[14px] leading-4">
          사이트 바로가기
        </span>
        <img src="/public/icons/site-arrow-icon.svg" alt="화살표 아이콘" />
      </a>
    </div>
  );
};

export default OrganCard;
