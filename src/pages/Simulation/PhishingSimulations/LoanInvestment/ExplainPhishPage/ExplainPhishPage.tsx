import { useNavigate } from "react-router-dom";
import Header from "../../../../../components/Header/Header";
import Button from "../../../../../components/Button/Button";

import LeftArrowWhiteIcon from "../../../../../assets/icons/arrow-left-white-icon.svg";
import Blockee from "../../../../../assets/character-cropped-fit-image.svg";
import { MethodCard } from "./components/MethodCard";
import { FeatureCard } from "./components/FeatureCard";

const ExplainLoanPhishPage = () => {
    const navigate = useNavigate();
    const handleBackClick = () => navigate("/simulation/loan-investment/fake-loan-invest")
    const handleLearnClick = () => console.log("피해 사례 더보기");
    const handleQuitClick = () => navigate("/home");
    return (
        <div className="w-full h-full flex flex-col bg-white box-border">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowWhiteIcon} alt="뒤로가기" />
                    </button>
                }
                bgColor="#437efc"
            />
            <div className="flex flex-col gap-2.5 h-81.5 bg-primary-400 mt-[57px] px-6 pt-2 relative overflow-clip">
                <div className="w-full text-stone-50 text-3xl font-extrabold leading-13">
                    대출사기형<br />
                    보이스피싱 유형
                </div>

                <div className="z-10">
                    저금리 대출, 정부지원 대출 등 대출 상담으로 접근해 개인정보나 돈을 편취하는 사기 수법으로, 기존 고금리 대출 상환이나 신용등급을 높여준다는 명목으로 개인 계좌 이체를 유도하는 방식
                    저금리 대출, 정부지원 대출 등 대출 상담으로 접근해 개인정보나 돈을 편취하는 사기 수법으로, 기존 고금리 대출 상환이나 신용등급을 높여준다는 명목으로 개인 계좌 이체를 유도하는 방식
                </div>
                <img src={Blockee} alt="캐릭터" className="absolute top-50 right-5 z-0" />
            </div>


            <main className="w-full px-6">
                <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10">
                    사기 방식은?
                </div>
                <div className="flex flex-col gap-[9px]">
                    <MethodCard text={"123"} isFirst={true} isLast={false} />
                    {/* <MethodCard text={"123"} isFirst={false} isLast={false} /> */}
                    <MethodCard text={"123"} isFirst={false} isLast={false} />
                    <MethodCard text={"123"} isFirst={false} isLast={true} />
                </div>

                <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10">
                    주요 특징은?
                </div>
                <div className="flex flex-col gap-2.5">
                    <FeatureCard title={"123"} description={"456"} />
                    <FeatureCard title={"123"} description={"456"} />
                    <FeatureCard title={"123"} description={"456"} />
                </div>

                <div className="w-full text-stone-950 text-xl font-bold leading-loose mt-10">
                    피해 예방 및 대응 요령을 알려드릴게요!
                </div>
                <div className="flex flex-col gap-2.5">
                    <FeatureCard title={"123"} description={"456"} />
                    <FeatureCard title={"123"} description={"456"} />
                    <FeatureCard title={"123"} description={"456"} />
                </div>

            </main>

            <footer className="w-full flex flex-col gap-2.5 p-6 mt-15.5">
                <div className="flex flex-col text-center justify-center  text-xl font-bold leading-loose mb-[57px]">
                    <div>
                        <span className="text-stone-950">
                            의심되면 무조건
                        </span>
                        <span className="text-primary-400 ">
                            112
                        </span>
                        <span className="text-stone-950 ">
                            ,<br />
                        </span>
                    </div>
                    <div>
                        <span className="text-primary-400 ">
                            1566-1188
                        </span>
                        <span className="text-stone-950 ">
                            로 확인 전화!
                        </span>
                    </div>
                </div>

                <Button
                    onClick={handleLearnClick}
                    size="lg"
                    isHighlight={false}
                >
                    관련 피해 사례 더보기
                </Button>
                <button className="bg-monochrome-400 font-semibold text-[22px] text-primary-400 rounded-[15px] cursor-pointer py-3"
                    onClick={handleQuitClick}
                >
                    학습 종료
                </button>
            </footer>
        </div>
    )
}

export default ExplainLoanPhishPage;