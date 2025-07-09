import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { useFraudStore } from "../stores/fraudStore";

const FraudLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedAnswer, progress, setProgress, submitAnswer, reset } = useFraudStore();
    const heightSize = location.pathname === "/fraud-analysis" ? "h-[calc(100vh-48px)]" : "h-[calc(100vh-140px)]"

    const handleBackClick = () => {
        console.log("현재 백클릭에서의 progress : ", progress)
        if (progress <= 1) {
            reset();
            navigate(-1);
            return
        }
        setProgress(progress - 1);
    }

    const handleBtnClick = () => {
        //🎯선택 항목에서, 아무것도 클릭하지 않은 경우 어떻게 처리할지 백엔드와 협의 필요.
        submitAnswer();
    }

    return (
        <div className="flex flex-col justify-between w-full h-full">
            {location.pathname === "/fraud-analysis" ? (
                <div className="w-full h-12 bg-primary-400 outline-none">
                    <div className="flex justify-start pl-6 pt-3.5 pb-3.5">
                        <button onClick={() => navigate(-1)}>
                            <img src="/icons/ArrowLeftWhite-icon.svg" alt="뒤로가기" />
                        </button>
                    </div >
                </div>
            ) : (
                <div className="w-full h-12">
                    <div className="flex justify-start pl-6 pt-3.5 pb-3.5">
                        <button onClick={handleBackClick}>
                            <img src="/icons/ArrowLeftBlack-icon.svg" alt="뒤로가기" />
                        </button>
                    </div >

                    <div className="w-full h-1.5 relative">
                        <div className="w-full h-[5px] left-0 top-0 absolute bg-gray-200" />
                        <div className="h-[5px] left-0 top-0 absolute bg-blue-500 rounded-tr-[90px] rounded-br-[90px]"
                            style={{ width: `${progress * 10}%` }} />
                    </div>
                </div >
            )}


            <main className={`${heightSize} bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar`}>
                <Outlet />{" "}
                {/* 사기분석 설문 내용 렌더링 */}
            </main>


            {location.pathname === "/fraud-analysis" ? null : (
                <div className="ml-6 mr-6 mb-8">
                    <Button onClick={handleBtnClick} size="lg" isHighlight={false} disabled={selectedAnswer === null && progress < 5}>
                        다음
                    </Button>
                </div>
            )}
        </div >
    );
}
export default FraudLayout;