import { useNavigate } from "react-router-dom";
import BlockeeImg from "../../../../assets/characters/blockee-type-list-bg.png";
import Button from "../../../../components/Button/Button";

const SimulationStart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pt-11 pb-4 bg-monochrome-200 rounded-[20px]">
      <h2 className="font-medium text-[20px] text-primary-400 text-center leading-[30px]">
        <span className="font-bold">‘피싱 유형별 시뮬레이션 학습’</span>을 통해
        <br />
        실제 피싱 상황을 대비해요!
      </h2>
      <img src={BlockeeImg} alt="블록이 이미지" />
      <div className="mx-4 mt-6">
        <Button onClick={() => navigate("/simulation/select-type")}>
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default SimulationStart;
