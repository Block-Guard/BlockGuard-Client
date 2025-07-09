import { useFraudStore } from "../../../stores/fraudStore";

interface SurveyButtonProps {
    text: string;
}

const SurveyButton = ({ text }: SurveyButtonProps) => {
    const { selectedAnswer, selectAnswer } = useFraudStore();

    return (
        <div className="w-full">
            {selectedAnswer === text ? (
                <div data-property-1="Selected" className="w-full h-15 px-4 py-3.5 bg-blue-300 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={() => selectAnswer("")}>
                    <div className="text-white text-xl font-bold leading-loose">
                        {text}
                    </div>
                </div>
            ) : (
                <div data-property-1="Default" className="w-full h-15 px-4 py-3.5 bg-gray-100 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={() => selectAnswer(text)}>
                    <div className="text-slate-950 text-xl font-semibold leading-loose">
                        {text}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SurveyButton;