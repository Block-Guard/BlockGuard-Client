import ResponsibleTextArea from "../../../components/TextArea/ResponsibleTextArea";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";

const FraudSituationPage = () => {
    const { allAnswers, updateAnswers } = useFraudSurveyContext();
    const handleSituationText = (value:string)=>{
        updateAnswers({"additionalDescription" : value})
    }
    return (
        <div className="flex flex-col w-full h-full px-6">
            <div className="mt-9 mb-9">
                <span className="text-slate-950 text-2xl font-bold leading-9">
                    의심스러웠던 당시 상황을 자세히 진술해주세요
                </span>
                <div className="text-gray-400 text-lg font-medium leading-relaxed">
                    AI가 상황을 판단하는데 도움이 돼요!
                </div>
            </div>

            <div className="flex flex-col gap-4 pb-6">
                <ResponsibleTextArea rowCount={5} handleChange={handleSituationText}
                    preValue={allAnswers["additionalDescription"] as string}
                    placeholder="(예시) “상대방이 경찰이라면서 굉장히 진지하고 다급하게 말했어요." />
            </div>
        </div>
    )
}

export default FraudSituationPage;