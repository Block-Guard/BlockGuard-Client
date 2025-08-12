import { Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button/Button";
import LeftArrowIcon from "../assets/icons/arrow-left-darkblue-icon.svg";
import { useEffect, useMemo } from "react";
import { useFraudSurvey } from "../hooks/useFraudSurvey";
import Header from "../components/Header/Header";

const FraudLayout = () => {
  const location = useLocation();
  const {
    progress,
    setProgress,
    allAnswers,
    updateAnswers,
    canProceed,
    goToNextStep,
    goToPrevStep,
  } = useFraudSurvey();

  const handleBackClick = () => {
    console.log("현재 백클릭에서의 progress : ", progress);
    goToPrevStep();
  };

  const handleBtnClick = () => {
    if (!canProceed) {
      alert("답변을 선택해주세요");
      return;
    }
    goToNextStep();
  };

  const contextValue = useMemo(
    () => ({
      allAnswers,
      updateAnswers,
      progress,
    }),
    [allAnswers, updateAnswers, progress]
  );

  useEffect(() => {
    // 새로고침되어서 progress가 1로 초기화된 경우 처리
    if (progress === 1) {
      if (location.pathname === "/fraud-analysis/survey/1-10") {
        setProgress(1);
      }
      else if (location.pathname !== "/fraud-analysis/survey/result") {
        // "/fraud-analysis/survey/11, 12, 13 경우"
        const curProgress = location.pathname.split("/").at(3);
        if (curProgress) {
          console.log("새로고침된 경우 progress 재설정", curProgress)
          setProgress(parseInt(curProgress));
        }
      }
    }
  }, [])

  return (
    <div className="flex flex-col justify-between w-full h-full">
      {location.pathname === "/fraud-analysis/survey/result" ? (
        <Outlet context={contextValue} />
      ) : (
        <>
          <Header
            leftChild={
              <button onClick={handleBackClick}>
                <img src={LeftArrowIcon} alt="뒤로가기" />
              </button>
            }
            title={<p>progress : {progress}</p>}
          />
          
          <div className="w-full h-1.5 fixed mt-[57px]">
            <div className="w-full h-[5px] left-0 top-0 absolute bg-gray-200" />
            <div
              className="h-[5px] left-0 top-0 absolute bg-blue-500 rounded-tr-[90px] rounded-br-[90px] transition-all duration-300"
              style={{ width: `${(progress / 13) * 100}%` }}
            />
          </div>

          <main
            className="h-[calc(100vh-140px)] bg-[#ffffff] 
        overflow-hidden overflow-y-auto no-scrollbar mt-15"
          >
            <Outlet context={contextValue} /> {/* 사기분석 설문 내용 렌더링 */}
          </main>
          <div className="ml-6 mr-6 mb-8">
            <Button
              onClick={handleBtnClick}
              size="lg"
              isHighlight={false}
              disabled={!canProceed}
            >
              다음
            </Button>
          </div>
        </>
      )}
    </div>

  );
};
export default FraudLayout;
