import { useContext, useEffect, useState } from "react";
import RequiredActionCheck from "./components/RequiredActionCheck";
import OpenedDescCard from "./components/OpenedDescCard";
import ReportActionItem from "./components/ReportActionItem";
import PhoneIcon from "../../../assets/report-guide/report-phone-icon.png";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import Button from "../../../components/Button/Button";
import TipPopover from "./components/TipPopover";
import { ReportButtonStateContext } from "../../../layouts/ReportStepLayout";

const ReportStep2 = () => {
  const context = useContext(ReportButtonStateContext);
  if (!context) throw new Error("ReportButtonStateContext is null");
  const { setCurrentStepCompleted } = context;

  const [isRequestedToStopPayment, setIsRequestedToStopPayment] =
    useState(false);
  // 서버에서 해당 상태값 받아오기
  useEffect(() => {
    setCurrentStepCompleted(isRequestedToStopPayment);
  }, [isRequestedToStopPayment]);

  return (
    <div className="w-full flex flex-col mb-40">
      <div className="flex flex-col gap-[10px] p-6">
        <span className="text-highlight-1 text-[16px] font-bold leading-5">
          필수 조치
        </span>
        <RequiredActionCheck
          index={1}
          title="지급정지 요청하기"
          isDone={isRequestedToStopPayment}
          setIsDone={setIsRequestedToStopPayment}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-2xl font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">1</span>
          지급정지 요청하기
          <span className="text-highlight-1">*</span>
        </h1>
        <p className="text-[18px] font-normal">
          보이스피싱 피해 직후 1차적으로 빠른 계좌 지급정지가 진행되는게
          중요해요.
          <br />
          <br />
          피해금이 현금으로 인출되버리면 배상받기가 힘들어질 수 있기 때문에,
          담당기관에 피해 사실을 알리고 가능한 빠르게 지급정지를 요청해야해요.
          <br />
          <br />
          경찰청이나 금융감독원에 전화신청 혹은 금융결제원 계좌통합관리
          서비스에서 온라인으로 신청해요.
        </p>
        <OpenedDescCard
          title="본인 계좌 일괄 지급정지란?"
          desc="개인 및 금융정보 유출이 의심되는 경우, 본인 명의의 모든 계좌를 조회하여 피해가 우려되는 계좌의 지급정지를 신청하는 서비스를 의미해요."
        />
        <div className="flex flex-col gap-[10px]">
          <ReportActionItem
            title="경찰청 통합신고 대응센터 (112)"
            emoticon={<img src={PhoneIcon} alt="이모티콘" />}
            shortcutButton={
              <Button onClick={() => {}} size="sm">
                바로 걸기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={
                  <span>
                    금융사 및 통신사와 협업한 경찰청 통합신고 대응센터로
                    연결되어 신고부터 피해구제까지 원스톱 대응이 가능해요.
                  </span>
                }
              />
            }
          />
          <ReportActionItem
            title="금융감독원 콜센터 (1132)️️️️️️️️"
            emoticon={<img src={PhoneIcon} alt="이모티콘" />}
            shortcutButton={
              <Button onClick={() => {}} size="sm">
                바로 걸기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={
                  <div className="flex flex-col gap-2">
                    <span>
                      i) 휴대폰이 해킹되었을 확률이 높으니, 다른사람의
                      휴대전화를 사용하여 은행 콜센터에 전화하는걸 권장해요.
                    </span>
                    <span>
                      ii) 금융감독원 콜센터는 24시간 언제든 상담이 가능해요.
                    </span>
                  </div>
                }
              />
            }
          />
          <ReportActionItem
            title="금융결제원 계좌 통합관리 서비스 ️️️️️️️️️️️️️"
            emoticon={<img src={WriteIcon} alt="이모티콘" />}
            shortcutButton={
              <Button onClick={() => {}} size="sm">
                바로 가기
              </Button>
            }
            tipIcon={
              <TipPopover
                popoverTrigger={<img src={TipIcon} alt="팁" />}
                popoverContent={
                  <span>
                    온라인 신청은 공동 인증서와 휴대폰 본인확인이 필요해요. 
                  </span>
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReportStep2;
