import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import Button from "../../../../components/Button/Button";

import LeftArrowWhiteIcon from "../../../../assets/icons/arrow-left-white-icon.svg";
import Blockee from "../../../../assets/characters/blockee-default.png";
import { MethodCard } from "./components/MethodCard";
import { FeatureCard } from "./components/FeatureCard";
import type { ExplainInfo } from "./constant";
import { useEffect, useRef } from "react";

interface ExplainLoanPhishPageProps {
  info: ExplainInfo;
}

const ExplainLoanPhishPage = ({ info }: ExplainLoanPhishPageProps) => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/home");
  const handleLearnClick = () => {
    console.log(info.category, "유형 뉴스 기사로 이동");
    navigate(`/news/recent?category=${info.category}`);
  };
  const handleQuitClick = () => navigate("/simulation");
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("렌더링 시점 info:", info);
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-white box-border">
      <div ref={topRef} />
      <Header
        leftChild={
          <button onClick={handleBackClick}>
            <img src={LeftArrowWhiteIcon} alt="뒤로가기" />
          </button>
        }
        bgColor="#437efc"
      />
      <div className="flex flex-col gap-2.5 h-82 bg-primary-400 mt-[57px] px-6 pt-2 relative overflow-clip">
        {info.title}
        <div className="z-10 leading-7">{info.description}</div>
        <img
          src={Blockee}
          alt="캐릭터"
          className="absolute w-55 top-50 right-0 z-0"
        />
      </div>

      <main className="w-full px-6">
        <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10 mb-2.5">
          사기 방식은?
        </div>
        <div className="flex flex-col gap-[9px]">
          {info.methods.map((method) => (
            <MethodCard text={method.text} id={method.id} />
          ))}
        </div>

        <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10 mb-2.5">
          주요 특징은?
        </div>
        <div className="flex flex-col gap-2.5">
          {info.features.map((feat) => (
            <FeatureCard title={feat.title} description={feat.description} />
          ))}
        </div>

        <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10 mb-2.5">
          피해 예방 및 대응 요령을 알려드릴게요!
        </div>
        <div className="flex flex-col gap-2.5">
          {info.knowhow.map((feat) => (
            <FeatureCard title={feat.title} description={feat.description} />
          ))}
        </div>
      </main>

      <footer className="w-full flex flex-col gap-2.5 p-6 mt-9.5">
        <div className="flex flex-col text-center justify-center  text-xl font-bold leading-loose mb-[57px]">
          <div>
            <span className="text-stone-950">의심되면 무조건</span>
            <span className="text-primary-400 ">112</span>
            <span className="text-stone-950 ">
              ,<br />
            </span>
          </div>
          <div>
            <span className="text-primary-400 ">1566-1188</span>
            <span className="text-stone-950 ">로 확인 전화!</span>
          </div>
        </div>

        <Button onClick={handleLearnClick} size="lg" isHighlight={false}>
          관련 피해 사례 더보기
        </Button>
        <button
          className="bg-monochrome-400 font-semibold text-[22px] text-primary-400 rounded-[15px] cursor-pointer py-3"
          onClick={handleQuitClick}
        >
          학습 종료
        </button>
      </footer>
    </div>
  );
};

export default ExplainLoanPhishPage;
