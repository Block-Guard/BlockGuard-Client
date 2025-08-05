import FraudCheck from "./FraudCheck";
import LinkNumberCheck from "./LinkNumberCheck";
import ShieldImg from "../../../assets/home-background-shield-image.svg";
import type { RefObject } from "react";

type HomeCheckProps = {
  topRef: RefObject<HTMLDivElement | null>;
};
const HomeCheck = ({ topRef }: HomeCheckProps) => {
  return (
    <div className="w-full relative p-6 pb-9 bg-blue-500">
      <div ref={topRef} />
      <div className="justify-start font-ncs-radhiumz text-blue-50 text-base leading-loose">
        Block Guard
      </div>

      <div className="justify-start text-white text-3xl font-extrabold leading-loose">
        피싱 사기가 의심 되시나요?
      </div>

      <div className="justify-center text-gray-200 text-lg font-normal leading-normal">
        의심스러운 상황에 대해 설명해주시면
        <br />
        블락이가 피싱여부를 분석해드려요!
      </div>

      <img src={ShieldImg} className="absolute right-0 top-33" />

      <div className="flex flex-col items-center">
        <FraudCheck />
        <LinkNumberCheck />
      </div>
    </div>
  );
};

export default HomeCheck;
