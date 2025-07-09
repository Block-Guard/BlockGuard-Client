import ReportProgressCard from "../../components/ReportProgressCard/ReportProgressCard";
import EmergencyResponseStart from "./EmergencyResponseStart";
import OrganCard from "./OrganCard";
import QuickReportCard from "./QuickReportCard";

let currentProgress = 3;
let totalProgress = 4;

const dummyOrgan = [
  {
    id: 1,
    title: "경찰청 사이버범죄 신고시스템 (ECRM)",
    desc: "경찰서 방문 시간 단축을 위해 사전서류 작성",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    title: "대검찰청 찐센터",
    desc: "내가 받은 서류가 진짜일지 알고싶을 때",
    url: "https://www.google.com/",
  },
  {
    id: 3,
    title: "은행 전화번호 진위확인 서비스",
    desc: "피싱범에게 받은 은행 전화번호, 진짜일까?",
    url: "https://www.google.com/",
  },
  {
    id: 4,
    title: "개인정보노출자 사고예방시스템",
    desc: "더 이상의 개인정보 유출을 막기 위해, 명의도용 예방 시스템",
    url: "https://www.google.com/",
  },
  {
    id: 5,
    title: "명의도용방지 서비스 M-safer",
    desc: "명의도용이 의심될때, 내 이름으로 개통된 휴대폰 조회하기",
    url: "https://www.google.com/",
  },
  {
    id: 6,
    title: "어카운트 인포",
    desc: "내 명의로 개설된 계좌 및 대출 한 눈에 확인하기",
    url: "https://www.google.com/",
  },
];

const EmergencyPage = () => {
  return (
    <div className="px-6 mb-10">
      <h1 className="font-bold text-2xl leading-9 mt-1 mb-4">긴급대응</h1>
      <div className="flex flex-col gap-8">
        <EmergencyResponseStart />
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-bold text-xl leading-8">나의 신고 현황</h2>
          <ReportProgressCard
            currentProgress={currentProgress}
            totalProgress={totalProgress}
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-bold text-xl leading-8">바로 신고</h2>
            <p className="font-normal text-[16px] text-monochrome-500 leading-6">
              꼭 필요한 상황에만 걸어주세요!
            </p>
          </div>
          <QuickReportCard title="경찰서 (112)" />
          <QuickReportCard title="금융감독원 (1132)" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-bold text-xl leading-8">보이스피싱 대응기관들</h2>
          <div className="grid grid-rows-2 grid-flow-col overflow-x-scroll gap-[10px] pb-3">
            {dummyOrgan.map((item, index) => {
              const bgColor = index % 2 === 0 ? "#EEF1F3" : "#F1F4FF";
              return (
                <OrganCard key={item.id} organData={item} bgColor={bgColor} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;
