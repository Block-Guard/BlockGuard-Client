import BlockeeGlitered from "@/assets/characters/blockee-glitering.png";

type Props = { title: string };

const SettingsLoading = ({ title }: Props) => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-white z-500">
      <div className="relative h-[100vh] pb-10 flex flex-col px-6 mt-[70px] justify-center items-center gap-4">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-bold text-2xl leading-9">{title} 이동 중</h1>
          <p className="text-primary-300 font-medium text-lg leading-7">
            잠시만 기다려주세요
          </p>
        </div>
        <img src={BlockeeGlitered} alt="캐릭터" />
      </div>
    </div>
  );
};

export default SettingsLoading;
