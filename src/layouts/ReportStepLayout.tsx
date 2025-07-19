import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useRef, useState } from "react";
import { getStepFromUrl, getTitleFromUrl } from "../utils/emergencyReport";
import LeftArrowIcon from "../assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "../assets/icons/close-darkblue-icon.svg";
import UpArrowIcon from "../assets/icons/arrow-up-darkblue-icon.svg";
import Button from "../components/Button/Button";

const ReportStepLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepTitle, setStepTitle] = useState<string>("");
  const [currentStepCompleted, setCurrentStepCompleted] =
    useState<boolean>(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = getStepFromUrl(location.pathname);
    const title = getTitleFromUrl(location.pathname);
    setCurrentStep(step);
    setStepTitle(title);
  }, [location]);

  const onClickScrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onClickNextButton = () => {
    if (currentStep === 4) {
      navigate("/emergency/report-completion");
    } else {
      navigate(`/emergency/report-step/${currentStep + 1}`);
      setCurrentStepCompleted(false);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Header
        title={
          <h1 className="flex flex-row gap-1 text-xl font-bold leading-[30px]">
            <div className="text-primary-400">STEP {currentStep}</div>
            {stepTitle}
          </h1>
        }
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          <img
            src={CloseIcon}
            alt="긴급 신고 가이드 닫기"
            onClick={() => navigate("/emergency/report-overview")}
          />
        }
        bgColor="#fff"
      />
      <div className="fixed w-full mt-[65px]">
        <div className="h-[5px] bg-monochrome-300" />
        <div
          className="absolute left-0 top-0 rounded-r-[90px] h-[5px] bg-primary-400 z-10"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>
      <main
        ref={mainRef}
        className="relative h-[calc(100vh-71px)] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar mt-[71px]"
      >
        <Outlet context={{ setCurrentStepCompleted }} />
      </main>
      <div
        className="absolute bottom-0 w-full px-6 pt-6 pb-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
        }}
      >
        <div className="flex flex-col gap-5">
          <div
            className="w-fit p-2 self-end bg-monochrome-100 rounded-[50%]"
            style={{ boxShadow: "0px 0px 5.714px 0px rgba(0, 0, 0, 0.25)" }}
            onClick={onClickScrollToTop}
          >
            <img src={UpArrowIcon} alt="맨위로" />
          </div>
          <Button onClick={onClickNextButton} disabled={!currentStepCompleted}>
            {currentStep === 4 ? "완료" : "다음 단계"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportStepLayout;
