import RightArrow from "../../../../assets/icons/arrow-right-blue.svg";
import SiteArrowIcon from "../../../../assets/icons/arrow-right-site-blue-icon.svg";

type Props = {
  id: number;
  title: string;
  desc: string;
  url: string;
};

const PhishingExamCard = ({ id, title, desc, url }: Props) => {
  return (
    <div
      className="flex flex-col p-[15px] rounded-[15px]"
      style={{ background: id % 2 !== 0 ? "#eef1f3" : "#F1F4FF" }}
    >
      <div className="flex flex-row items-center justify-between mb-1">
        <h3 className="text-lg text-primary-400 font-bold leading-[21px]">
          {title}
        </h3>
        <a href={url}>
          <img src={RightArrow} />
        </a>
      </div>
      <p className="text-[16px] font-medium text-monochrome-500 leading-6 mr-7">
        {desc}
      </p>
      <a href={url} className="flex flex-row gap-[5px] mt-[10px] justify-end">
        <span className="text-sm font-semibold leading-4 text-primary-400">
          관련 사례 보기
        </span>
        <img src={SiteArrowIcon} alt="사례보기 링크" />
      </a>
    </div>
  );
};

export default PhishingExamCard;
