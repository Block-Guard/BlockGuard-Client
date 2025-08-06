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

const ReportStep4 = () => {
  const {
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

  const topRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);
  const handleOpenPdf = () => {
    window.open("/files/피해구제신청서.pdf", "_blank");
  };
  return (
    <div className="w-full flex flex-col mb-40">
      <div ref={topRef} />
      <div className="flex flex-col gap-[10px] p-6">
        <div className="flex flex-col gap-[30px]">
          <span className="font-semibold">
            보이스피싱 피해구제 신청은 피해금을 입금한 계좌의 금융회사 또는
            사기이용계좌를 관리하는 해당 금융회사 지점에 피해자가{" "}
            <span className="text-[#F00]">
              반드시 지급정지신청 이후 3영업일 이내
            </span>
            에 직접 방문해 진행해야 해요.
            <br />
            <br />
            방문 시 반드시 ➊사건사고사실확인원(경찰서에서 발급)과 ➋신분증
            ➋피해구제 신청서 세 가지 서류를 함께 지참해 주세요.
          </span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-highlight-1 text-[16px] font-bold leading-5">
              필수 조치
            </span>
            <RequiredActionCheck
              index={1}
              title="사건사고사실확인원 발급"
              isDone={isIssuedAccidentFactsConf}
              setIsDone={setIsIssuedAccidentFactsConf}
            />
            <RequiredActionCheck
              index={3}
              title="서면접수 (피해구제신청)"
              isDone={didWrittenSubmission}
              setIsDone={setDidWrittenSubmission}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-primary-400 text-[16px] font-bold leading-5">
              권장 조치
            </span>
            <RecommendedList index={2} title="피해구제 신청서 작성" />
            <RecommendedList index={4} title="채권소멸절차 및 피해금 환급 " />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">1</span>
          증거 확보하기
        </h1>
        <p className="text-[18px] font-normal">
          피해구제 접수를 위해 신고접수서류가 필요해요.
          <br />
          <br />
          가까운 경찰서(사이버 수사대)에 방문하여 피해 사건을 접수하고{" "}
          <span className="font-semibold">‘사건사고사실확인원’</span>을
          발급받으세요.
        </p>
        <ReportOneCheck
          title="사건사고사실확인원 발급️"
          isChecked={isIssuedAccidentFactsConfList}
          setIsChecked={setIsIssuedAccidentFactsConfList}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">2</span>
          피해구제 신청서 작성
        </h1>
        <p className="text-[18px] font-normal">
          금융사에 방문하기 전 피해구제신청서를 미리 작성하면 빠른 사건접수가
          가능해요.
          <br />
          <br />
          <span className="text-highlight-1">
            반드시 서류를 출력해서 자필로 작성해주세요
          </span>
        </p>
        <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
          <h3 className="font-semibold leading-[27px]">
            피해구제 신청서 작성 시 유의사항
          </h3>
          <p>
            <span className="text-primary-400">-</span> 사기범에게 걸려온
            전화번호, 사기 내용, 피해 금액 등을 정확히 기재합니다.
          </p>
          <p>
            <span className="text-primary-400">-</span> 개인정보(이름,
            주민등록번호 등)를 정확하게 기재합니다.
          </p>
          <p>
            <span className="text-primary-400">-</span> 피해 사실을 입증하는
            서류 (통장 거래내역, 통화내역 등)를 첨부합니다.
          </p>
        </div>
        <ReportActionItem
          title="피해구제 신청서 작성예시"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
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
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">3</span>
          서면접수(피해구제신청)
          <TipPopover
            popoverTrigger={<img src={TipRedIcon} alt="Tip" />}
            popoverContent={
              <div className="flex flex-col gap-2">
                <span>
                  i) 서면접수를 하지않고 3영업일+14일이 경과할 경우,
                  피해구제신청이 없었던 것으로 간주되므로 빠른 시일 내에
                  서면접수를 완료해주세요.
                </span>
                <span>
                  ii) 피해금 입금내역 등 증거자료 출력이 가능하다면
                  첨부해주세요.
                </span>
              </div>
            }
            isBlue={false}
          />
        </h1>
        <p className="text-[18px] font-normal">
          피해금을 입금한 계좌의 금융회사 또는 사기이용계좌를 관리하는 해당
          금융회사 지점에 직접 방문해서 진행해주세요.
          <br />
          <br />
          방문 시 반드시 ➊사건사고사실확인원(경찰서에서 발급)과 ➋신분증
          ➋피해구제 신청서 세 가지 서류를 함께 지참해 주세요.
        </p>
        <ReportOneCheck
          title="필수 서류 지참하기"
          isChecked={hasBringRequiredDocs}
          setIsChecked={setHasBringRequiredDocs}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
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
        <p className="text-[18px] font-normal">
          피해자의 피해구제신청에 따라 금융회사와 금융감독원은 사기이용계좌
          명의인의 채권에 대해 채권소멸절차를 진행하게 됩니다.
          <br />
          <br />
          채권소멸절차가 개시된 경우, 금융감독원 보이스피싱지킴이 홈페이지
          ‘채권소멸절차 개시공고’를 통해 개시공고를 확인할 수 있어요. 여기서
          채권소멸은 사기이용계좌 예금주의 예금 잔액에 대한 권리를 없애는 것을
          말해요.
          <br />
          <br />
          금융감독원의 채권소멸절차 개시 공고일로부터 2개월이 지나면
          사기이용계좌의 채권이 소멸되며, 14일 이내에 환급금이 결정된 후
          피해환급금이 지급돼요.
        </p>
        <ReportActionItem
          title="채권소멸절차 개시공고 확인"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
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
