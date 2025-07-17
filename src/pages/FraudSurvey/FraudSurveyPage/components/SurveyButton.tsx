import { STEP_CONFIG } from "../../../../hooks/useFraudSurvey";
import type { OutletContext } from "../../../../types/fraud-types"
import { useOutletContext } from "react-router-dom";


interface SurveyButtonProps {
    text: string;
}

const SurveyButton = ({ text }: SurveyButtonProps) => {
    const { surveyInfo } = useOutletContext<OutletContext>();

    const { progress, currentStepAnswers, toggleAnswer, setSingleAnswer } = surveyInfo;

    const currentConfig = STEP_CONFIG[progress];
    const isSelected = currentStepAnswers.includes(text);


    const handleClick = () => {
        if (!currentConfig)
            return;

        if (currentConfig.isMultiple) {
            toggleAnswer(text);
        } else {
            if (isSelected) {
                setSingleAnswer('');
            } else {
                setSingleAnswer(text);
            }
        }
    };

    return (
        <div className="w-full">
            {isSelected ? (
                <div data-property-1="Selected" className="w-full h-15 px-4 py-3.5 bg-blue-300 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={handleClick}>
                    <div className="text-white text-xl font-bold leading-loose">
                        {text}
                    </div>
                </div>
            ) : (
                <div data-property-1="Default" className="w-full h-15 px-4 py-3.5 bg-gray-100 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={handleClick}>
                    <div className="text-slate-950 text-xl font-semibold leading-loose">
                        {text}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SurveyButton;