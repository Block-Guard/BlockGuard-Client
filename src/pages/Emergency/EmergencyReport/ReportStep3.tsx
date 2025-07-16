import { useState } from "react";
import RequiredActionCheck from "./components/RequiredActionCheck";
import RecommendedList from "./components/RecommendedList";
import OpenedDescCard from "./components/OpenedDescCard";
import ReportActionItem from "./components/ReportActionItem";
import Button from "../../../components/Button/Button";

import TipIcon from "../../../assets/icons/tip-blue-icon.svg";
import TipRedIcon from "../../../assets/icons/tip-red-icon.svg";
import WriteIcon from "../../../assets/report-guide/report-write-icon.png";

const ReportStep3 = () => {
  const [isBlockedBadApp, setBlockedBadApp] = useState(false);
  const [
    isRegisteredPersonalInformExposed,
    setIsRegisteredPersonalInformExposed,
  ] = useState(false);

  return (
    <div className="w-full flex flex-col mb-40">
      <div className="flex flex-col gap-[10px] p-6">
        <div className="flex flex-col gap-[30px]">
          <span className="font-semibold">
            보이스피싱 피해 이후에는 노출된 개인정보를 악용하여{" "}
            <span className="text-[#F00]">
              추가적인 사기 피해로 이어질 가능성이 높아요.
            </span>
            <br />
            피해 확산을 막기 위해서는 명의 도용사실확인 등을 통해 개인정보 보호
            조치를 신속히 진행해야 해요.
            <br />
            만약 개인정보가 유출된 상황이라면,{" "}
            <span className="text-[#F00]">신분증 재발급</span>과{" "}
            <span className="text-[#F00]">공동인증서 폐기</span> 후 재발급도
            잊지마세요!
          </span>
          <div className="flex flex-col gap-[10px]">
            <span className="text-highlight-1 text-[16px] font-bold leading-5">
              필수 조치
            </span>
            <RequiredActionCheck
              index={1}
              title="지급정지 요청하기"
              isDone={isBlockedBadApp}
              setIsDone={setBlockedBadApp}
            />
            <RequiredActionCheck
              index={2}
              title="개인정보노출자 등록"
              isDone={isRegisteredPersonalInformExposed}
              setIsDone={setIsRegisteredPersonalInformExposed}
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
          <img src={TipRedIcon} alt="Tip" />
        </h1>
        <p className="text-[18px] font-normal">
          악성 앱이 설치되면 휴대폰이 해킹되어 내 개인정보가 모두 범죄 집단에게
          노출되기 때문에 설치된 악성앱을 찾아내서 바로 삭제하는게 가장 좋아요.
          <br />
          <br />
          어렵다면 바로{" "}
          <span className="text-[#F00]">전원을 끄거나 비행기모드로 전환</span>
          하고, 다른 전화기나 인터넷을 사용하여 신고절차를 진행하세요.
        </p>
        <div>
          <OpenedDescCard
            title="악성앱 설치여부 조회하기"
            desc="먼저, 휴대폰에 설치된 앱을 확인하고 의심스러운 앱을 삭제하세요. 모바일 백신 앱이나 경찰청 시티즌코난(안드로이드), 피싱아이즈(ios) 앱을 통해 ‘악성 앱 검사’를 실시하면 악성앱 설치 여부를 빠르게 확인할 수 있어요."
          />
          <OpenedDescCard
            title="원격조종 앱 확인 및 삭제하기"
            desc={`파일에서 직접 원격조종 앱(QuickSupport, Host, AnyDesk 등) 악성 설치파일이 있는지 확인하고 삭제하세요. \n\ni) 안드로이드 사용자: 휴대폰 설정 → 애플리케이션 → 내 파일-> 좌측 하단 열기버튼-> 다운로드-> 원격조종 앱 선택→ 휴지통 \n\nii) IOS 사용자: 파일 앱 접속-> 다운로드 폴더-> 악성 설치 파일 (.apk) 및 의심스러운 파일 삭제`}
            tipIcon={
              <img src={TipIcon} onClick={() => console.log("팁 보이기")} />
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
              <img src={TipIcon} onClick={() => console.log("팁 보이기")} />
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
        <p className="text-[18px] font-normal">
          개인정보노출자로 등록된 사람의 명의로 금융거래가 이루어질경우 강화된
          본인 확인절차를 진행하게됨으로써 명의도용을 예방할 수 있어요.
        </p>
        <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
          <p>
            <span className="text-primary-400">①</span> 금융감독원
            개인정보노출자 사고예방시스템(pd.fss.or.kr) 접속 또는 거래은행
            영업점 방문하기
          </p>
          <p>
            <span className="text-primary-400">②</span> 이용약관, 개인정보제공
            등 동의 후 휴대전화 인증하기
          </p>
          <p>
            <span className="text-primary-400">③</span> 개인정보 노출 사실
            등록하여 입출금계좌 신규, 대출, 신용카드 발급 등 제한(금융회사별
            제한 내용이 다르므로 거래중인 금융회사 앞 확인 필요)
          </p>
        </div>
        <ReportActionItem
          title="‍개인정보노출자 사고예방시스템"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={() => {}} size="sm">
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
          <img className="ml-[5px]" src={TipRedIcon} alt="Tip" />
        </h1>
        <p className="text-[18px] font-normal">
          본인 명의로 개설된 전 금융권 계좌 및 대출현황을 확인하여 추가 피해를
          방지할 수 있어요.
        </p>
        <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
          <p>
            <span className="text-primary-400">①</span> 금융결제원
            계좌정보통합관리서비스(www.payinfo.or.kr) 접속
          </p>
          <p>
            <span className="text-primary-400">②</span> 주민등록번호 입력,
            공동인증서 로그인 후 휴대전화 인증
          </p>
          <p>
            <span className="text-primary-400">③</span> ‘내계좌한눈에’ 메뉴
            클릭하여 본인명의로 개설된 예금 · 대출 계좌 상세내역 확인(은행,
            계좌번호, 개설일, 잔고 등)
          </p>
          <p>
            <span className="text-primary-400">④</span> 명의도용 계좌 개설 및
            비대면 대출이 실행된 경우 즉시 해당 금융회사에 피해사실 신고 및
            지급정지 신청
          </p>
        </div>
        <ReportActionItem
          title="‍계좌정보통합관리서비스"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={() => {}} size="sm">
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
          <img className="ml-[5px]" src={TipRedIcon} alt="Tip" />
        </h1>
        <p className="text-[18px] font-normal">
          본인 명의로 개통된 휴대폰 가입사실현황 조회 후 추가적인 휴대폰 신규
          개통을 차단할 수 있어요.
        </p>
        <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
          <p>
            <span className="text-primary-400">①</span> 한국정보통신진흥협회
            명의도용방지서비스(www.msafer.or.kr) 접속
          </p>
          <p>
            <span className="text-primary-400">②</span> 공동인증서 또는
            카카오페이 인증 로그인
          </p>
          <p>
            <span className="text-primary-400">③</span> ‘가입사실현황조회
            서비스’ 메뉴 클릭하여 본인명의로 개설된 휴대전화 확인
          </p>
          <p>
            <span className="text-primary-400">④</span> 명의도용 휴대전화가
            개통된 경우 즉시 해당 통신사에 회선해지 신청 및 명의도용 신고
          </p>
          <p>
            <span className="text-primary-400">⑤</span> ‘가입제한 서비스’ 메뉴
            클릭하여 본인명의 휴대전화 신규개설 차단
          </p>
        </div>
        <ReportActionItem
          title="‍‍명의도용방지서비스 (M-Safer)"
          emoticon={<img src={WriteIcon} alt="이모티콘" />}
          shortcutButton={
            <Button onClick={() => {}} size="sm">
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
          <img className="ml-[5px]" src={TipRedIcon} alt="Tip" />
        </h1>
        <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
          휴대폰 소액결제 → 결제 변경 → ‘이용한도를 0원으로 설정’ 후 이용 한도
          변경
        </div>
        <p className="text-[18px] font-normal">
          이용 중인 통신사 고객센터(114) 문의 또는 통신사 앱을 통해 신청이
          가능하며, 소액결제 원천차단의 경우 각 통신사별로 상이하므로 통신사로
          문의하는걸 권장해요. 
        </p>
      </div>
      <div className="w-full h-[1px] bg-monochrome-400 my-4" />
      <div className="flex flex-col gap-5 p-6">
        <h1 className="flex flex-row text-[20px] font-bold leading-9">
          <span className="text-primary-400 mr-[11px]">6</span>
          여신거래 안심차단 서비 신청
          <img className="ml-[5px]" src={TipRedIcon} alt="Tip" />
        </h1>
        <p className="text-[18px] font-normal">
          여신거래 안심차단 서비스는 개인의 신규 여신거래(신용대출, 카드론,
          신용카드 발급 등)를 사전에 차단하여 금융사기 피해를 예방하는
          서비스예요.
          <br />
          <br />
          신분증을 지참하여 가까운 은행 또는 카드사 영업점에 방문 하여 신청하면
          돼요. 최근 대부분 금융사는 모바일 앱과 웹사이트를 통해 비대면으로도
          신청을 지원하고 있어요.
        </p>
      </div>
    </div>
  );
};

export default ReportStep3;
