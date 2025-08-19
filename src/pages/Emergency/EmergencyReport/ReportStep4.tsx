import RequiredActionCheck from "./components/RequiredActionCheck";
import RecommendedList from "./components/RecommendedList";
import ReportOneCheck from "./components/ReportOneCheck";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipRedIcon from "../../../assets/icons/tip-red-icon.svg";
import ReportActionItem from "./components/ReportActionItem";
import Button from "../../../components/Button/Button";
import TipPopover from "./components/TipPopover";
import type { ReportPageProps } from "../../../types/reportTypes";
import { useOutletContext } from "react-router-dom";
import { useEffect, useRef } from "react";
import { reportStep4Contents } from "./constants/emergencyReportContents";

const ReportStep4 = () => {
  const {
    serverCompletedSteps,
    currentStep,
    isIssuedAccidentFactsConf,
    setIsIssuedAccidentFactsConf,
    isIssuedAccidentFactsConfList,
    setIsIssuedAccidentFactsConfList,
    didWrittenSubmission,
    setDidWrittenSubmission,
    didClaimForRelief,
    setDidClaimForRelief,
    hasBringRequiredDocs,
    setHasBringRequiredDocs,
  } = useOutletContext<ReportPageProps>();

  // 서버에서 받아온 완료 상태인지 확인
  const isCompletedByServer = serverCompletedSteps[currentStep] || false;

  const topRef = useRef<HTMLDivElement | null>(null);

  const currentStepScroll1Ref = useRef<HTMLDivElement | null>(null);
  const currentStepScroll2Ref = useRef<HTMLDivElement | null>(null);
  const currentStepScroll3Ref = useRef<HTMLDivElement | null>(null);
  const currentStepScroll4Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  const handleOpenPdf = () => {
    window.open("/files/damage-relief-application.pdf", "_blank");
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
        <div className="flex flex-col gap-[30px]">
          {reportStep4Contents.topContent}
          <div className="flex flex-col gap-[10px]">
            <span className="text-highlight-1 text-[16px] font-bold leading-5">
              필수 조치
            </span>
            <RequiredActionCheck
              index={1}
              title="신고접수 서류 발급"
              isDone={isIssuedAccidentFactsConf}
              setIsDone={setIsIssuedAccidentFactsConf}
              disabled={isCompletedByServer}
              onClickToScroll={() => handleToScrollJump(currentStepScroll1Ref)}
            />
            <RequiredActionCheck
              index={3}
              title="서면접수 (피해구제신청)"
              isDone={didWrittenSubmission}
              setIsDone={setDidWrittenSubmission}
              disabled={isCompletedByServer}
              onClickToScroll={() => handleToScrollJump(currentStepScroll3Ref)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-primary-400 text-[16px] font-bold leading-5">
              권장 조치
            </span>
            <RecommendedList
              index={2}
              title="피해구제 신청서 작성"
              onClickToScroll={() => handleToScrollJump(currentStepScroll2Ref)}
            />
            <RecommendedList
              index={4}
              title="채권소멸절차 및 피해금 환급 "
              onClickToScroll={() => handleToScrollJump(currentStepScroll4Ref)}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll1Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">1</span>
          경찰서 신고 접수
        </h1>
        {reportStep4Contents.evidenceContent}
        <ReportOneCheck
          title="신고접수 서류 발급"
          isChecked={isIssuedAccidentFactsConfList}
          setIsChecked={setIsIssuedAccidentFactsConfList}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll2Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">2</span>
          피해구제 신청서 작성
        </h1>
        {reportStep4Contents.writeDamageRelief}
        <ReportActionItem
          title="피해구제 신청서 작성예시"
          emoticon={<img className="w-9" src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={handleOpenPdf} size="sm">
              바로 가기
            </Button>
          }
        />
        <ReportOneCheck
          title="피해구제 신청서 작성️"
          isChecked={didClaimForRelief}
          setIsChecked={setDidClaimForRelief}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll3Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">3</span>
          서면접수(피해구제신청)
          <TipPopover
            popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
            popoverContent={reportStep4Contents.writeApplicationPopover}
            isBlue={false}
          />
        </h1>
        {reportStep4Contents.writeApplicationContent}
        <ReportOneCheck
          title="필수 서류 지참하기"
          isChecked={hasBringRequiredDocs}
          setIsChecked={setHasBringRequiredDocs}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div ref={currentStepScroll4Ref} className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">4</span>
          채권소멸절차 및 피해금 환급
          <TipPopover
            popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
            popoverContent={
              <span>
                사기이용계좌 명의인의 이의제기와 같은 특별법 제 8조에 해당하는
                사유 발생 시, 지급정지 및 채권소멸절차가 종료될 수 있습니다.
              </span>
            }
            isBlue={false}
          />
        </h1>
        {reportStep4Contents.damageRefundContent}
        <ReportActionItem
          title="채권소멸절차 개시공고 확인"
          emoticon={<img className="w-9" src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button
              onClick={() => {
                window.open(
                  "https://www.fss.or.kr/fss/cvpl/stepNotice/list.do?menuNo=200581",
                  "_blank"
                );
              }}
              size="sm"
            >
              바로 가기
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ReportStep4;
