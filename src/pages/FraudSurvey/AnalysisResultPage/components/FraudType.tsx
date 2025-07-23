interface FraudTypeProps{
    data:FraudResultData
}

import type { FraudResultData } from "../../../../types/fraud-types";

const FraudType = ({data}:FraudTypeProps) => {

    const {estimatedFraudType, explanation, keywords} = data;

    return (
        <div className="w-full">

            <div>
                <div className="text-slate-950 text-xl font-bold leading-loose">
                    추정 사기 유형
                </div>
                <div className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5">
                    <div className="text-white text-2xl font-bold leading-9">
                        {estimatedFraudType}
                    </div>
                </div>
                <div className="w-full px-4 py-3.5 bg-gray-100 rounded-2xl border-blur inline-flex flex-col justify-start items-start gap-2.5">
                    {explanation}
                </div>
            </div>

            <div className="mt-7.5">
                <div className="text-slate-950 text-xl font-bold leading-loose">
                    판단 키워드
                </div>

                <div className="w-full px-4 py-3.5 mb-7.5 bg-gray-100 rounded-2xl outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-start gap-2.5">
                    <div className="flex text-lg font-bold leading-snug">

                        {keywords.map((keyWord, index) => {
                            return (
                                <span className="text-red-500" key={keyWord}>
                                    {index === 0 ? "\"" : <>&nbsp;</>}
                                    {keyWord}
                                    {index !== keywords.length - 1 ? " + " : "\""}
                                </span>)
                        })} 등
                    </div>

                    <div className="text-slate-950 text-lg font-bold leading-snug">
                        → 고위험 패턴 {keywords.length}건 일치
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FraudType;