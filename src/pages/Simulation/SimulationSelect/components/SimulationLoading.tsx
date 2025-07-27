import BlockeeGlitered from "@/assets/characters/blockee-glitering.svg";

const SimulationLoading = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col px-6 h-[100vh] justify-center items-center gap-10">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-2xl leading-9">
            시뮬레이션 페이지 이동 중
          </h1>
          <p className="font-semibold text-sm leading-4">잠시만 기다려주세요</p>
        </div>
        <img src={BlockeeGlitered} alt="캐릭터" />
      </div>
    </div>
  );
};

export default SimulationLoading;
