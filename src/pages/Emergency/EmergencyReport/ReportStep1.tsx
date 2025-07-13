import RequiredCheckList from "./components/RequiredCheckList";
import { useState } from "react";
import PhoneIcon from "../../../assets/report-guide/report-phone-icon.png";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";
import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import Button from "../../../components/Button/Button";
import ReportActionItem from "./components/ReportActionItem";
import ReportCheckList from "./components/ReportCheckList";

const ReportStep1 = () => {
  const [reportReceived, setReportReceived] = useState(false);
  const [secureEvidence, setSecureEvidence] = useState(false);
  const [caseFiled, setCaseFiled] = useState(false);

  const [isEvidenceChecked, setIsEvidenceChecked] = useState(false);
  const [haveIdChecked, setHaveIdChecked] = useState(false);

  return (
    <div className="w-full flex flex-col mb-40">
      <div className="flex flex-col gap-[10px] p-6">
        <span className="text-highlight-1 text-[16px] font-bold leading-5">
          필수 조치
        </span>
        <RequiredCheckList
          index={1}
          title="신고 접수하기"
          isDone={reportReceived}
          setIsDone={setReportReceived}
        />
        <RequiredCheckList
          index={2}
          title="증거 확보하기"
          isDone={secureEvidence}
          setIsDone={setSecureEvidence}
        />
        <RequiredCheckList
          index={3}
          title="경찰서 방문 및 사건접수"
          isDone={caseFiled}
          setIsDone={setCaseFiled}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">1</span>
          경찰서 신고 접수
        </h1>
        <p className="text-[18px] font-normal ">
          112에 전화 또는 온라인으로 빠르게 신고접수부터 진행해주세요.
          <br />
          <br />
          경찰청 사이버신고센터(eCRM)에서 미리 온라인 신고 접수를 하고 현장에
          방문하면 미리 진술서를 작성하고 증거자료를 제출하여 접수시간을 단축 할
          수 있어요.
        </p>
        <div className="flex flex-col gap-[10px]">
          <ReportActionItem
            title="경찰청 통합신고 대응센터 (112)"
            emoticon={<img src={PhoneIcon} alt="이모티콘" />}
            shortcutButton={
              <Button onClick={() => {}} size="sm">
                바로 걸기
              </Button>
            }
          />
          <ReportActionItem
            title="경찰청 사이버 신고센터"
            emoticon={<img src={WriteIcon} alt="이모티콘" />}
            shortcutButton={
              <Button onClick={() => {}} size="sm">
                바로 가기
              </Button>
            }
            tipIcon={<img src={TipIcon} alt="팁" />}
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">2</span>
          증거 확보하기
        </h1>
        <p className="text-[18px] font-normal ">
          <span className="font-bold">
            경찰서에 방문하기 전, 피해 증거 (문자, 송금내역, 통화기록 등)을
            가능하다면 모두 확보
          </span>
          해주세요. 문자/통화 내용은 꼭 스크린샷 또는 녹음파일로 보관해주세요.
          <br />
          <br />
          특히,{" "}
          <span className="text-highlight-1">
            원격제어 앱 캡쳐나 출금화면캡쳐, 문자대화내역,상세계좌 거래내역 등
          </span>
          을 증거자료로 캡쳐해가는게 좋아요.
        </p>
        <ReportCheckList
          isEvidenceChecked={isEvidenceChecked}
          haveIdChecked={haveIdChecked}
          setIsEvidenceChecked={setIsEvidenceChecked}
          setHaveIdChecked={setHaveIdChecked}
        />
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row gap-[11px] text-2xl font-bold leading-9">
          <span className="text-primary-400">3</span>
          경찰서 방문 및 사건접수
        </h1>
        <p className="text-[18px] font-normal ">
          위에서 확보한 증거와 신분증을 들고 가까운 사이버 수사대를
          방문해주세요.{" "}
          <span className="text-highlight-1">
            온라인으로 신고접수를 했더라도 반드시 현장 방문접수
          </span>
          를 해야해요.
          <br />
          <br />
          경찰서에 방문하기 전, 아래 사건사고사실확인원 작성 양식을 참고하여
          미리 내용을 구상해보는것도 좋아요.
          <br />
          <br />
          발급 사유 / 용도 / 발급 위치 설명과 문자, 통화, 송금내역 등 항목별
          증거물을 정리해서 작성해보세요.
          <br />
          <br />
          추후 반드시 이 문서를 은행에 제출해야 피해금 환급 신청이 가능해요.
        </p>
        <ReportActionItem
          title="사건사고사실 확인원"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={() => {}} size="sm">
              문서보기
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ReportStep1;
