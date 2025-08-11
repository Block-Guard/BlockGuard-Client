import BlockeeGlitering from "@/assets/characters/blockee-glitering.svg";
import Button from "../../../components/Button/Button";

type Props = {
  setAddNokMode: (value: boolean) => void;
};

const EmptyNokListCard = ({ setAddNokMode }: Props) => {
  return (
    <div className="flex flex-col px-6 py-[21px] bg-white rounded-[12px] shadow-[0_2px_19px_rgba(0,0,0,0.25)]">
      <img src={BlockeeGlitering} alt="" />
      <Button onClick={() => setAddNokMode(true)}>+ 보호자 등록하기</Button>
      <span className="text-[15px] leading-5 text-[#a0a0a0] text-center mt-[21px]">
        등록된 보호자가 없어요.
        <br />
        보호자를 추가해주세요.
      </span>
    </div>
  );
};

export default EmptyNokListCard;
