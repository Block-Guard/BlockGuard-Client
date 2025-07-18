import SurveyButton from "./components/SurveyButton";
import { surveyContent } from "../surveyContent";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";

const FraudSurveyPage = () => {
  const { progress } = useFraudSurveyContext();
  const currentSurvey = surveyContent.find((s) => s.progress === progress);

  return (
    <div className="flex flex-col w-full h-full px-6">
      <div className="mt-9 mb-9">
        <span className="text-slate-950 text-2xl font-bold leading-9">
          {currentSurvey?.question}
        </span>
        {currentSurvey?.isEssential ? (
          <span className="text-red-500 text-2xl font-bold leading-9">*</span>
        ) : (
          <span className="text-zinc-300 text-2xl font-bold leading-9">
            {" (선택)"}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 pb-4">
        {currentSurvey?.answers.map((surveyItem) => {
          return <SurveyButton key={`${progress}-${surveyItem}`} text={surveyItem} />;
        })}

      </div>
    </div>
  );
};

export default FraudSurveyPage;
