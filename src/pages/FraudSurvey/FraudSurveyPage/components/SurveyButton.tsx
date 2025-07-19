import { STEP_CONFIG, useFraudSurveyContext } from "../../../../hooks/useFraudSurvey";

interface SurveyButtonProps {
    text: string;
}

const SurveyButton = ({ text }: SurveyButtonProps) => {
    const { allAnswers, updateAnswers, progress } = useFraudSurveyContext();


    const currentConfig = STEP_CONFIG[progress as keyof typeof STEP_CONFIG];
    const answerKey = currentConfig.keys[0];
    const currentAnswers = (allAnswers[answerKey] as string[] | string) || [];

    const isSelected = Array.isArray(currentAnswers)
        ? currentAnswers.includes(text)
        : currentAnswers === text;

    const handleClick = () => {
        if (currentConfig.isMultiple) {
            const currentArray = (allAnswers[answerKey] as string[] || []);
            const newAnswers = currentArray.includes(text)
                ? currentArray.filter(a => a !== text)
                : [...currentArray, text];
            updateAnswers({ [answerKey]: newAnswers });
        } else {
            const newAnswer = isSelected ? '' : text;
            updateAnswers({ [answerKey]: newAnswer });
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