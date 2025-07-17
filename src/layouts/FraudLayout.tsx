import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import LeftArrowWhiteIcon from "../assets/icons/arrow-left-white-icon.svg";
import LeftArrowIcon from "../assets/icons/arrow-left-darkblue-icon.svg";
import { canProceed, useFraudSurvey } from "../hooks/useFraudSurvey"

const FraudLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const surveyInfo = useFraudSurvey();


  const heightSize =
    location.pathname === "/fraud-analysis"
      ? "h-[calc(100vh-48px)]"
      : "h-[calc(100vh-140px)]";

  const {
    currentStepAnswers,
    progress,
    setProgress,
    recordAnswerAndProceed,
    reset,
  } = surveyInfo;

  const handleBackClick = () => {
console.log("현재 백클릭에서의 progress : ", progress);
    if (progress <= 1) {
      reset();
      navigate(-1);
      return;
    }
    if (progress >= 7) {
      navigate(-1);
    }
    setProgress(progress - 1);
  };

  const handleBtnClick = () => {
    if (!canProceed(progress, currentStepAnswers)) {
      alert("답변을 선택해주세요");
      return;
    }
    recordAnswerAndProceed(navigate);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      {location.pathname === "/fraud-analysis" ? (
        <div className="w-full h-12 bg-primary-400 outline-none">
          <div className="flex justify-start pl-6 pt-3.5 pb-3.5">
            <button onClick={() => navigate(-1)}>
              <img src={LeftArrowWhiteIcon} alt="뒤로가기" />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-12">
          <div className="flex justify-start pl-6 pt-3.5 pb-3.5">
            <button onClick={handleBackClick}>
              <img src={LeftArrowIcon} alt="뒤로가기" />
            </button>
          </div>

          <div className="w-full h-1.5 relative">
            <div className="w-full h-[5px] left-0 top-0 absolute bg-gray-200" />
            <div
              className="h-[5px] left-0 top-0 absolute bg-blue-500 rounded-tr-[90px] rounded-br-[90px] transition-all duration-300"
              style={{ width: `${progress / 9 * 100}%` }}
            />
          </div>
        </div>
      )}

      <main
        className={`${heightSize} bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar`}
      >
        <Outlet context={{surveyInfo }}/> {/* 사기분석 설문 내용 렌더링 */}
      </main>

      {location.pathname === "/fraud-analysis" ? null : (
        <div className="ml-6 mr-6 mb-8">
          <Button
            onClick={handleBtnClick}
            size="lg"
            isHighlight={false}
            disabled={!canProceed(progress, currentStepAnswers)}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
};
export default FraudLayout;
