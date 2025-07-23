import { dummyPhishingExam } from "../phishingExamList";
import SimulationStart from "./components/SimulationStart";
import PhishingExamCard from "./components/PhishingExamCard";

const SimulationMainPage = () => {
  return (
    <div className="px-6 mb-10">
      <h1 className="font-bold text-2xl leading-9 mt-1 mb-4">학습</h1>
      <div className="flex flex-col gap-[50px]">
        <SimulationStart />
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-bold text-[20px] leading-[30px]">
            시뮬레이션 학습 전에, 사례를 통해
            <br />
            유형별 피싱사례를 알아보세요!
          </h2>
          {dummyPhishingExam.map((item) => (
            <PhishingExamCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimulationMainPage;
