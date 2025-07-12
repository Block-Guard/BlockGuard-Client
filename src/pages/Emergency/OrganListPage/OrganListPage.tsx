import { useNavigate } from "react-router-dom";
import { dummyOrgan } from "../organList";
import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import SiteArrowIcon from "../../../assets/icons/arrow-right-site-blue-icon.svg";

const OrganListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Header
        title={
          <h1 className="text-xl text-monochrome-700 font-bold leading-8">
            보이스피싱 대응기관
          </h1>
        }
        leftChild={
          <img
            src={LeftArrowIcon}
            alt="뒤로가기"
            onClick={() => navigate(-1)}
          />
        }
        rightChild={<></>}
      />
      <main className="mt-[72px] overflow-y-scroll flex flex-col gap-[10px] px-6 h-[calc(100vh-72px)] pb-10">
        {dummyOrgan.map((item, index) => {
          const bgColor = index % 2 === 0 ? "#EEF1F3" : "#F1F4FF";
          return (
            <div
              key={item.id}
              className="flex flex-col border-blur px-5 py-[14px] rounded-[15px] gap-[10px]"
              style={{ background: `${bgColor}` }}
            >
              <div className="flex flex-col gap-[6px]">
                <h3
                  className="text-monochrome-700 font-bold text-[18px] leading-5"
                  style={{
                    wordBreak: "keep-all",
                  }}
                >
                  {item.title}
                </h3>
                <span
                  className="break-words text-monochrome-500 font-normal text-[16px] leading-6"
                  style={{
                    wordBreak: "keep-all",
                  }}
                >
                  {item.desc}
                </span>
              </div>
              <a
                className="flex flex-row gap-[5px] justify-end"
                href={item.url}
              >
                <span className="text-primary-400 font-semibold text-[14px] leading-4">
                  사이트 바로가기
                </span>
                <img src={SiteArrowIcon} alt="화살표 아이콘" />
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default OrganListPage;
