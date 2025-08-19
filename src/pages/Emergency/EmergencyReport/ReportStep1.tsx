import RequiredActionCheck from "./components/RequiredActionCheck";
import PhoneIcon from "../../../assets/report-guide/report-phone-icon.png";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import Button from "../../../components/Button/Button";
import ReportActionItem from "./components/ReportActionItem";
import ReportCheckList from "./components/ReportCheckList";
import TipPopover from "./components/TipPopover";
import { useOutletContext } from "react-router-dom";
import type { ReportPageProps } from "../../../types/reportTypes";
import { useEffect, useRef } from "react";
import { reportStep1Contents } from "./constants/emergencyReportContents";

const ReportStep1 = () => {
  const {
    serverCompletedSteps,
    currentStep,
    reportReceived,
    setReportReceived,
    secureEvidence,
    setSecureEvidence,
    caseFiled,
    setCaseFiled,
    isEvidenceChecked,
    setIsEvidenceChecked,
    haveIdChecked,
    setHaveIdChecked,
  } = useOutletContext<ReportPageProps>();

  // 서버에서 받아온 완료 상태인지 확인
  const isCompletedByServer = serverCompletedSteps[currentStep] || false;

  const topRef = useRef<HTMLDivElement | null>(null);
  const currentStepScroll1Ref = useRef<HTMLDivElement | null>(null);
  const currentStepScroll2Ref = useRef<HTMLDivElement | null>(null);
  const currentStepScroll3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  const handleOpenPdf = () => {
    window.open("/files/incident-report.pdf", "_blank");
  };

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
          title="신고 접수하기"
          isDone={reportReceived}
          setIsDone={setReportReceived}
          disabled={isCompletedByServer}
          onClickToScroll={() => handleToScrollJump(currentStepScroll1Ref)}
        />
        <RequiredActionCheck
          index={2}
          title="증거 확보하기"
          isDone={secureEvidence}
          setIsDone={setSecureEvidence}
          disabled={isCompletedByServer}
          onClickToScroll={() => handleToScrollJump(currentStepScroll2Ref)}
        />
        <RequiredActionCheck
          index={3}
          title="경찰서 방문 및 사건접수"
          isDone={caseFiled}
          setIsDone={setCaseFiled}
          disabled={isCompletedByServer}
          onClickToScroll={() => handleToScrollJump(currentStepScroll3Ref)}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll1Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">1</span>
          경찰서 신고 접수
        </h1>
        {reportStep1Contents.policeCaseFile}
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
          />
          <ReportActionItem
            title="경찰청 사이버 신고센터"
            emoticon={<img className="w-9" src={WriteIcon} alt="이모티콘" />}
            shortcutButton={
              <Button
                onClick={() => {
                  window.open(
                    "https://ecrm.police.go.kr/minwon/main",
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
                popoverContent={reportStep1Contents.policePopover}
              />
            }
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll2Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">2</span>
          증거 확보하기
        </h1>
        {reportStep1Contents.evidence}
        <ReportCheckList
          isEvidenceChecked={isEvidenceChecked}
          haveIdChecked={haveIdChecked}
          setIsEvidenceChecked={setIsEvidenceChecked}
          setHaveIdChecked={setHaveIdChecked}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll3Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">3</span>
          경찰서 방문 및 사건접수
        </h1>
        {reportStep1Contents.goPoliceOffice}
        <ReportActionItem
          title="사건사고사실 확인원"
          emoticon={<img className="w-9" src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={handleOpenPdf} size="sm">
              문서보기
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ReportStep1;
