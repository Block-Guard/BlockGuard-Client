import RequiredActionCheck from "./components/RequiredActionCheck";
import RecommendedList from "./components/RecommendedList";
import OpenedDescCard from "./components/OpenedDescCard";
import ReportActionItem from "./components/ReportActionItem";
import Button from "../../../components/Button/Button";

import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import TipRedIcon from "../../../assets/icons/tip-red-icon.svg";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipPopover from "./components/TipPopover";
import { useOutletContext } from "react-router-dom";
import type { ReportPageProps } from "../../../types/reportTypes";
import { useEffect, useRef } from "react";
import { reportStep3Contents } from "./constants/emergencyReportContents";

const ReportStep3 = () => {
  const {
    serverCompletedSteps,
    currentStep,
    isBlockedBadApp,
    setIsBlockedBadApp,
    isRegisteredPersonalInformExposed,
    setIsRegisteredPersonalInformExposed,
  } = useOutletContext<ReportPageProps>();

  // 서버에서 받아온 완료 상태인지 확인
  const isCompletedByServer = serverCompletedSteps[currentStep] || false;

  const topRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <div className="w-full flex flex-col mb-40">
      <div ref={topRef} />
      <div className="flex flex-col gap-[10px] p-6">
        <div className="flex flex-col gap-[30px]">
          {reportStep3Contents.topContent}
          <div className="flex flex-col gap-[10px]">
            <span className="text-highlight-1 text-[16px] font-bold leading-5">
              필수 조치
            </span>
            <RequiredActionCheck
              index={1}
              title="악성앱 차단하기"
              isDone={isBlockedBadApp}
              setIsDone={setIsBlockedBadApp}
              disabled={isCompletedByServer}
            />
            <RequiredActionCheck
              index={2}
              title="개인정보노출자 등록"
              isDone={isRegisteredPersonalInformExposed}
              setIsDone={setIsRegisteredPersonalInformExposed}
              disabled={isCompletedByServer}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-primary-400 text-[16px] font-bold leading-5">
              권장 조치
            </span>
            <RecommendedList index={3} title="계좌개설여부조회" />
            <RecommendedList
              index={4}
              title="명의도용된 휴대전화 개설 여부 조회"
            />
            <RecommendedList index={5} title="휴대폰 소액결제차단 신청" />
            <RecommendedList index={6} title="여신거래 안심차단 서비스 신청" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">1</span>
          악성앱 차단하기
          <span className="text-highlight-1 mr-[5px]">*</span>
          <TipPopover
            popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
            popoverContent={reportStep3Contents.blockBadAppPopover}
            isBlue={false}
          />
        </h1>
        {reportStep3Contents.blockBadAdd}
        <div>
          <OpenedDescCard
            title="악성앱 설치여부 조회하기"
            desc="먼저, 휴대폰에 설치된 앱을 확인하고 의심스러운 앱을 삭제하세요. 모바일 백신 앱이나 경찰청 시티즌코난(안드로이드), 피싱아이즈(ios) 앱을 통해 ‘악성 앱 검사’를 실시하면 악성앱 설치 여부를 빠르게 확인할 수 있어요."
          />
          <OpenedDescCard
            title="원격조종 앱 확인 및 삭제하기"
            desc={`파일에서 직접 원격조종 앱(QuickSupport, Host, AnyDesk 등) 악성 설치파일이 있는지 확인하고 삭제하세요. \n\ni) 안드로이드 사용자: 휴대폰 설정 → 애플리케이션 → 내 파일-> 좌측 하단 열기버튼-> 다운로드-> 원격조종 앱 선택→ 휴지통 \n\nii) IOS 사용자: 파일 앱 접속-> 다운로드 폴더-> 악성 설치 파일 (.apk) 및 의심스러운 파일 삭제`}
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="Tip" />}
                popoverContent={reportStep3Contents.appConfirmDeletePopover}
              />
            }
          />
          <OpenedDescCard
            title="비행기모드 전환 OR 전원끄기"
            desc="휴대폰을 켜두는 사이에 원격 조종이 이루어지고 있어요. 전원을 끄거나 네트워크를 차단해놓으세요"
          />
          <OpenedDescCard
            title="휴대폰 초기화하기"
            desc="악성 앱이 완전히 삭제되지 않거나 특정하기 어려운 경우, 휴대폰 전원을 끈 채로 초기화하거나 제조사 AS센터를 방문 하세요."
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="Tip" />}
                popoverContent={reportStep3Contents.resetPhonePopover}
              />
            }
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">2</span>
          개인정보노출자 등록
          <span className="text-highlight-1 mr-[5px]">*</span>
        </h1>
        {reportStep3Contents.registerPersonalInformContent}
        <ReportActionItem
          title="‍개인정보노출자 사고예방시스템"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button
              onClick={() => {
                window.open("https://pd.fss.or.kr/", "_blank");
              }}
              size="sm"
            >
              바로 가기
            </Button>
          }
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">3</span>
          계좌개설여부조회
          <div className="flex ml-[5px] items-center">
            <TipPopover
              popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
              popoverContent={
                <span>서비스 이용을 위해 공인인증서가 필요해요.</span>
              }
              isBlue={false}
            />
          </div>
        </h1>
        {reportStep3Contents.isOpenedAccountContents}
        <ReportActionItem
          title="‍계좌정보통합관리서비스"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button
              onClick={() => {
                window.open("https://www.payinfo.or.kr/", "_blank");
              }}
              size="sm"
            >
              바로 가기
            </Button>
          }
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">4</span>
          명의도용된 휴대전화 개설 여부 조회
          <div className="flex ml-[5px] items-center">
            <TipPopover
              popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
              popoverContent={
                <span>서비스 이용을 위해 공인인증서가 필요해요.</span>
              }
              isBlue={false}
            />
          </div>
        </h1>
        {reportStep3Contents.impersonationPhone}
        <ReportActionItem
          title="‍‍명의도용방지서비스 (M-Safer)"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button
              onClick={() => {
                window.open("https://www.msafer.or.kr/index.do", "_blank");
              }}
              size="sm"
            >
              바로 가기
            </Button>
          }
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">5</span>
          휴대폰 소액결제차단 신청
          <div className="flex ml-[5px] items-center">
            <TipPopover
              popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
              popoverContent={reportStep3Contents.micropaymentPopover}
              isBlue={false}
            />
          </div>
        </h1>
        {reportStep3Contents.micropaymentContent}
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">6</span>
          여신거래 안심차단 서비스 신청
          <div className="flex ml-[5px] items-center">
            <TipPopover
              popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
              popoverContent={
                <span>
                  해제 시 비대면 처리가 불가해서 타은행 방문이 필요해요.
                </span>
              }
              isBlue={false}
            />
          </div>
        </h1>
        {reportStep3Contents.blockCreditTransaction}
      </div>
    </div>
  );
};

export default ReportStep3;
