import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useReportStepNavigation = (
  reportId: number,
  currentStep: number,
  saveStepData: (step: number) => Promise<any>
) => {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  const [isReportCompleted, setIsReportCompleted] = useState(false);

  const onClickScrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onClickPreviousButton = async () => {
    try {
      // 현재 step 데이터 저장 (미완료 상태로)
      await saveStepData(currentStep);

      if (currentStep === 1) {
        navigate("/emergency/report-overview");
      } else {
        navigate(`/emergency/report-step/${currentStep - 1}`, {
          state: { reportId: reportId },
        });
      }
    } catch (error) {
      console.error("이전 단계 이동 중 데이터 저장 실패:", error);
      // 에러가 발생해도 이전 단계로 이동
      if (currentStep === 1) {
        navigate("/emergency/report-overview");
      } else {
        navigate(`/emergency/report-step/${currentStep - 1}`, {
          state: { reportId: reportId },
        });
      }
    }
  };

  const onClickCloseButton = async () => {
    try {
      // 현재 step 데이터 저장 (미완료 상태로)
      await saveStepData(currentStep);
      navigate("/emergency/report-overview");
    } catch (error) {
      console.error("신고 가이드 닫기 중 데이터 저장 실패:", error);
      // 에러가 발생해도 페이지 이동
      navigate("/emergency/report-overview");
    }
  };

  const onClickNextButton = async (currentStepCompleted: boolean) => {
    if (!currentStepCompleted) {
      toast("필수 조치를 완료 후 모두 체크해주세요!");
      return;
    }

    try {
      // 현재 step 데이터 저장
      await saveStepData(currentStep);

      if (currentStep === 4) {
        setIsReportCompleted(true);
        const timer = setTimeout(() => {
          navigate("/emergency/report-completion");
        }, 500);
        return () => clearTimeout(timer);
      } else {
        navigate(`/emergency/report-step/${currentStep + 1}`, {
          state: { reportId: reportId },
        });
      }
    } catch (error) {
      console.error("현재 단계 데이터 저장 실패:", error);
      if (currentStep === 4) {
        setIsReportCompleted(true);
        setTimeout(() => {
          navigate("/emergency/report-completion");
        }, 500);
      } else {
        navigate(`/emergency/report-step/${currentStep + 1}`, {
          state: { reportId: reportId },
        });
      }
    }
  };

  return {
    mainRef,
    isReportCompleted,
    onClickScrollToTop,
    onClickPreviousButton,
    onClickCloseButton,
    onClickNextButton,
  };
};
