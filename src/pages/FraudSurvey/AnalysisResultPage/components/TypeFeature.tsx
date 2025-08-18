import TypeFeatureCard from "./TypeFeatureCard"
import NewsIcon from "../../../../assets/analysis-result/news-icon.svg"
import { useNavigate } from "react-router-dom"
import type { FraudFeature, ScamType } from "../../../../types/fraud-types";
import { fraudFeatureList, scamTypes } from "../constants";
import { createScamMapImmutable } from "../../../../utils/fraudResult";

interface TypeFeatureProps {
    fraudType: string;
}

export const TypeFeature = ({ fraudType }: TypeFeatureProps) => {
    const navigate = useNavigate();

    const features:FraudFeature[] = fraudFeatureList[fraudType as ScamType]
    const scamMap = createScamMapImmutable(scamTypes);
    const findTopLevelNameFromMap = (name: string) => {
        return scamMap[name] || null;
    }

    const handleLearnClick = () => {
        const topName = findTopLevelNameFromMap(fraudType)
        console.log("fraudType, topName : ", fraudType, topName)
        if (topName) {
            navigate(`/news/recent?category=${topName}`);
        }
        else {
            navigate(`/news/recent?category=전체`);
        }
    }

    return (
        <div className="flex flex-col gap-2.5 w-full mb-7.5">
            <div className="text-slate-950 text-xl font-bold leading-loose">
                이 유형의 주요 특징은?
            </div>
            {
                (features ?? []).map((feat) => {
                    return (<TypeFeatureCard
                        title={feat.title}
                        content={feat.content}
                        key={feat.title} />)
                })
            }
            <button className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5"
                onClick={handleLearnClick}>
                <div className="flex items-center text-white text-2xl font-bold leading-9 gap-1.5">
                    <img src={NewsIcon} alt="아이콘" className="w-6 h-6" />
                    관련 피해 사례 더보기
                </div>
            </button>
        </div>
    )
}