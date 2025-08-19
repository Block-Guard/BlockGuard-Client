import RequiredActionCheck from "./components/RequiredActionCheck";
import OpenedDescCard from "./components/OpenedDescCard";
import ReportActionItem from "./components/ReportActionItem";
import PhoneIcon from "../../../assets/report-guide/report-phone-icon.png";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import Button from "../../../components/Button/Button";
import TipPopover from "./components/TipPopover";
import { useOutletContext } from "react-router-dom";
import type { ReportPageProps } from "../../../types/reportTypes";
import { useEffect, useRef } from "react";
import { reportStep2Contents } from "./constants/emergencyReportContents";

const ReportStep2 = () => {
  const {
    serverCompletedSteps,
    currentStep,
    isRequestedToStopPayment,
    setIsRequestedToStopPayment,
  } = useOutletContext<ReportPageProps>();

  // 서버에서 받아온 완료 상태인지 확인
  const isCompletedByServer = serverCompletedSteps[currentStep] || false;

  const topRef = useRef<HTMLDivElement | null>(null);
  const currentStepScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  const handleToScrollJump = (
    scrollRef: React.RefObject<HTMLDivElement | null>
  ) => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col mb-40">
      <div ref={topRef} />
      <div className="flex flex-col gap-[10px] p-6">
        <span className="text-highlight-1 text-[16px] font-bold leading-5">
          필수 조치
        </span>
        <RequiredActionCheck
          index={1}
          title="지급정지 요청하기"
          isDone={isRequestedToStopPayment}
          setIsDone={setIsRequestedToStopPayment}
          disabled={isCompletedByServer}
          onClickToScroll={() => handleToScrollJump(currentStepScrollRef)}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScrollRef} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-2xl font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">1</span>
          지급정지 요청하기
          <span className="text-highlight-1">*</span>
        </h1>
        {reportStep2Contents.requestToStopPayment}
        <OpenedDescCard
          title="본인 계좌 일괄 지급정지란?"
          desc="개인 및 금융정보 유출이 의심되는 경우, 본인 명의의 모든 계좌를 조회하여 피해가 우려되는 계좌의 지급정지를 신청하는 서비스를 의미해요."
        />
        <div className="flex flex-col gap-[10px]">
          <ReportActionItem
            title="경찰청 통합신고 대응센터 (112)"
            emoticon={<img className="w-9" src={PhoneIcon} alt="이모티콘" />}
            shortcutButton={
              <Button
                onClick={() => {
                  window.location.href = `tel:112`;
                }}
                size="sm"
              >
                바로 걸기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={reportStep2Contents.policePopover}
              />
            }
          />
          <ReportActionItem
            title="금융감독원 콜센터 (1132)️️️️️️️️"
            emoticon={<img className="w-9" src={PhoneIcon} alt="이모티콘" />}
            shortcutButton={
              <Button
                onClick={() => {
                  window.location.href = `tel:1132`;
                }}
                size="sm"
              >
                바로 걸기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={reportStep2Contents.callCenterPopover}
              />
            }
          />
          <ReportActionItem
            title="금융결제원 계좌 통합관리 서비스"
            emoticon={<img className="w-9" src={WriteIcon} alt="이모티콘" />}
            shortcutButton={
              <Button
                onClick={() => {
                  window.open(
                    "https://www.payinfo.or.kr/payinfo.html",
                    "_blank"
                  );
                }}
                size="sm"
              >
                바로 가기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={reportStep2Contents.payinfoServicePopover}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReportStep2;
