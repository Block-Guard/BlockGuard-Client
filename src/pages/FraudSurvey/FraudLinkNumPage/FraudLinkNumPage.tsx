import ResponsibleTextArea from "../../../components/TextArea/ResponsibleTextArea";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";

const FraudLinkNumPage = () => {
    const { allAnswers, updateAnswers } = useFraudSurveyContext();

    const handleLinkChange = (value: string) => {
        updateAnswers({ "suspiciousLinks": value });
    }

    const handleNumberChange = (value: string) => {
        updateAnswers({ "suspiciousPhoneNumbers": value });
    }

    return (
        <div className="flex flex-col w-full h-full px-6 overflow-y-scroll no-scrollbar">
            <div className="mt-9 mb-9">
                <span className="text-slate-950 text-2xl font-bold leading-9">
                    의심스러운 링크나 전화번호를
                    입력해주세요
                </span>
            </div>

            <div className="flex flex-col w-full h-full gap-4 pb-6">

                <ResponsibleTextArea handleChange={handleLinkChange} placeholder={"링크 (URL)"} preValue={allAnswers["suspiciousLinks"] as string} />

                <ResponsibleTextArea handleChange={handleNumberChange} placeholder={"전화번호"} preValue={allAnswers["suspiciousPhoneNumbers"] as string}/>

            </div>

        </div>
    )
}

export default FraudLinkNumPage;