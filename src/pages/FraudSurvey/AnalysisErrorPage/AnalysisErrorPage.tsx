import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import BlockeeWarning from "@/assets/characters/blockee-warning.png";
import Button from "../../../components/Button/Button";

const AnalysisErrorPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate("/fraud-analysis/survey/13");
  /** 사기 분석 결과 얻은 후, localStorage 내 설문 초기화 */
  const handleCloseClick = () => {
    localStorage.removeItem("surveyAnswers");
    navigate("/home");
  };
  const handleLearnClick = () => {
    // 일단 전체로 처리. 추후 사기 분석 결과 유형이 뉴스와 대응되면 추가.
    navigate(`/news/recent?category=전체`);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        leftChild={
          <button onClick={handleBackClick}>
            <svg
              className="text-white"
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17.5195L1 9.51953L9 1.51953"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        }
        bgColor={"#FFCD42"}
        title={
          <h1 className="text-xl font-bold leading-8" style={{ color: "#fff" }}>
            AI 분석 결과
          </h1>
        }
        rightChild={
          <button onClick={handleCloseClick}>
            <svg
              className="text-white"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.256 5.93359L5.25 15.9396"
                stroke="currentColor"
                strokeWidth="1.66766"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 5.93359L15.256 15.9396"
                stroke="currentColor"
                strokeWidth="1.66766"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        }
      />
      <div className="h-37 flex justify-between items-end mt-[57px] pt-6 pl-6 pr-9 overflow-clip bg-[#FFCD42]">
        <div className="h-full flex items-start">
          <div
            className="max-w-60 h-18 bg-[#D9AE38] rounded-[50px] px-4
          text-center flex items-center justify-center text-white text-lg font-semibold leading-snug"
          >
            잠시 후<br /> 다시 시도해주세요.
          </div>
        </div>

        <div className="h-full flex items-end">
          <img
            src={BlockeeWarning}
            alt="캐릭터"
            className="relative top-4"
            style={{ width: "120px", height: "96px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="w-full flex flex-col p-6">
        <div className="text-slate-950 text-xl font-bold leading-loose">
          AI 분석 결과를 불러올 수 없음
        </div>

        <div className="w-full px-4 py-3 my-7.5 bg-gray-100 rounded-[25px] border-blur inline-flex flex-col justify-start items-start gap-2.5">
          네트워크 혹은 서버 측 문제로 결과를 불러올 수 없습니다. <br />
          잠시 후 다시 요청해주세요.
        </div>

        <Button onClick={handleLearnClick} size="lg" isHighlight={false}>
          보이스피싱 피해 사례 더보기
        </Button>

        <div className="mt-3 text-center text-black text-xl font-bold leading-loose">
          AI 판단 결과는 <br />
          완벽하지 않을 수 있습니다.
        </div>

        <div className="mt-7.5 text-center text-black text-xl font-bold leading-loose">
          의심되면 <span className="text-blue-500">경찰청(112)</span>
          <br />
          또는 <span className="text-blue-500">금융감독원(1132)</span>
          <br />로 확인 전화를 추천드려요.
        </div>
      </div>
    </div>
  );
};

export default AnalysisErrorPage;
