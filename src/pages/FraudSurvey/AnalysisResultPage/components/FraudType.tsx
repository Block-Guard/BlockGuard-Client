interface FraudTypeProps {
    data: FraudResultData
}

import type { FraudResultData, ScamType } from "../../../../types/fraud-types";
import { ScamTypeData } from "../constants";

const FraudType = ({ data }: FraudTypeProps) => {

    const { estimatedFraudType, explanation, keywords } = data;

    const makeForm = (keywords: string[]) => {
        let str = "";
        keywords.map((word, index) => {
            if (index === 0) {
                str += `"${word}`;
            }
            else if (index === keywords.length - 1) {
                str += `${word}"`;
            }
            else {
                str += ` + ${word} + `
            }
        })
        return str;
    }

    return (
        <div className="w-full">

            <div>
                <div className="text-[#000b25] text-xl font-bold leading-loose">
                    추정 사기 유형
                </div>
                <div className="w-full h-11 my-2.5 px-4 bg-primary-400 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                    <div className="text-white text-2xl font-bold leading-9">
                        {estimatedFraudType}
                    </div>
                </div>
                <div className="w-full px-4 py-3.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5 text-[#000b25] text-lg leading-relaxed">
                    <span>
                        {
                            (ScamTypeData[estimatedFraudType as ScamType]||[]).map((scamData, index) => (
                                <span key={index} className={scamData.className}>
                                    {scamData.text}
                                </span>
                            ))
                        }
                    </span>
                </div>
            </div>

            <div className="mt-7.5">
                <div className="text-slate-950 text-xl font-bold leading-loose">
                    판단 키워드
                </div>

                <div className="w-full px-4 py-3.5 mb-7.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="flex text-lg font-bold leading-snug">
                        <span className="text-highlight-1">
                            {makeForm(keywords)}
                        </span>
                    </div>

                    <div className="text-[#000b25] text-lg font-bold leading-snug">
                        → 고위험 패턴 {keywords.length}건 일치
                    </div>

                    <div className="text-[#000b25] text-base font-medium leading-snug">
                        {explanation}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FraudType;