export const reportStep1Contents = {
  policeCaseFile: (
    <p className="text-[18px] font-normal ">
      112에 전화 또는 온라인으로 빠르게 신고접수부터 진행해주세요.
      <br />
      <br />
      경찰청 사이버신고센터(eCRM)에서 미리 온라인 신고 접수를 하고 현장에
      방문하면 미리 진술서를 작성하고 증거자료를 제출하여 접수시간을 단축 할 수
      있어요.
    </p>
  ),
  evidence: (
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
        원격제어 앱 캡쳐나 출금화면캡쳐, 문자대화내역, 상세계좌 거래내역 등
      </span>
      을 증거자료로 캡쳐해가는게 좋아요.
    </p>
  ),
  goPoliceOffice: (
    <p className="text-[18px] font-normal ">
      위에서 확보한 증거와 신분증을 들고 가까운 사이버 수사대를 방문해주세요.{" "}
      <span className="text-highlight-1">
        온라인으로 신고접수를 했더라도 반드시 현장 방문접수
      </span>
      를 해야해요.
      <br />
      <br />
      경찰서에 방문하기 전, 아래 사건사고사실확인원 작성 양식을 참고하여 미리
      내용을 구상해보는 것도 좋아요.
      <br />
      <br />
      발급 사유 / 용도 / 발급 위치 설명과 문자, 통화, 송금내역 등 항목별
      증거물을 정리해서 작성해보세요.
      <br />
      <br />
      추후 반드시 이 문서를 은행에 제출해야 피해금 환급 신청이 가능해요.
    </p>
  ),
  policePopover: (
    <div className="flex flex-col gap-2">
      <span>i) 온라인 접수 후에도 반드시 경찰서에 방문해야해요.</span>
      <span>ii) 본인인증이 필요해요.</span>
    </div>
  ),
};

export const reportStep2Contents = {
  requestToStopPayment: (
    <p className="text-[18px] font-normal">
      보이스피싱 피해 직후 1차적으로 빠른 계좌 지급정지가 진행되는게 중요해요.
      <br />
      <br />
      피해금이 현금으로 인출되버리면 배상받기가 힘들어질 수 있기 때문에,
      담당기관에 피해 사실을 알리고 가능한 빠르게 지급정지를 요청해야해요.
      <br />
      <br />
      경찰청이나 금융감독원에 전화신청 혹은 금융결제원 계좌통합관리 서비스에서
      온라인으로 신청해요.
    </p>
  ),
  policePopover: (
    <span>
      금융사 및 통신사와 협업한 경찰청 통합신고 대응센터로 연결되어 신고부터
      피해구제까지 원스톱 대응이 가능해요.
    </span>
  ),
  callCenterPopover: (
    <div className="flex flex-col gap-2">
      <span>
        i) 휴대폰이 해킹되었을 확률이 높으니, 다른사람의 휴대전화를 사용하여
        은행 콜센터에 전화하는걸 권장해요.
      </span>
      <span>ii) 금융감독원 콜센터는 24시간 언제든 상담이 가능해요.</span>
    </div>
  ),
  payinfoServicePopover: (
    <span>온라인 신청은 공동 인증서와 휴대폰 본인확인이 필요해요. </span>
  ),
};

export const reportStep3Contents = {
  topContent: (
    <span className="font-semibold">
      보이스피싱 피해 이후에는 노출된 개인정보를 악용하여{" "}
      <span className="text-[#F00]">
        추가적인 사기 피해로 이어질 가능성이 높아요.
      </span>
      <br />
      피해 확산을 막기 위해서는 명의 도용사실확인 등을 통해 개인정보 보호 조치를
      신속히 진행해야 해요.
      <br />
      만약 개인정보가 유출된 상황이라면,{" "}
      <span className="text-[#F00]">신분증 재발급</span>과{" "}
      <span className="text-[#F00]">공동인증서 폐기</span> 후 재발급도
      잊지마세요!
    </span>
  ),
  blockBadAppPopover: (
    <span>
      악성 앱이 설치되면 휴대폰으로 거는 전화가 모두 범죄 집단으로 연결되기
      때문에 반드시 다른 전화기나 인터넷을 사용하여 신고절차를 진행해야 해요.
    </span>
  ),
  blockBadAdd: (
    <p className="text-[18px] font-normal">
      악성 앱이 설치되면 휴대폰이 해킹되어 내 개인정보가 모두 범죄 집단에게
      노출되기 때문에 설치된 악성앱을 찾아내서 바로 삭제하는게 가장 좋아요.
      <br />
      <br />
      어렵다면 바로{" "}
      <span className="text-[#F00]">전원을 끄거나 비행기모드로 전환</span>
      하고, 다른 전화기나 인터넷을 사용하여 신고절차를 진행하세요.
    </p>
  ),
  appConfirmDeletePopover: (
    <div className="flex flex-col gap-2">
      <span>
        i) 악성파일(.apk) 예시 부고장.apk | m부고장.apk | efine.apk |
        govkorea.apk | kca.apk | 000 live.apk 등
      </span>
      <span>
        ii) 통신사 대리점, A/S센터 방문하면 휴대전화에 최근 설치된 모르는 앱을
        삭제해줘요
      </span>
    </div>
  ),
  resetPhonePopover: (
    <span>
      초기화하기 전에 증거확보나 중요한 데이터는 보관해두는걸 잊지 마세요 ! 
    </span>
  ),
  registerPersonalInformContent: (
    <>
      <p className="text-[18px] font-normal">
        개인정보노출자로 등록된 사람의 명의로 금융거래가 이루어질경우 강화된
        본인 확인절차를 진행하게됨으로써 명의도용을 예방할 수 있어요.
      </p>
      <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
        <p>
          <span className="text-primary-400">①</span> 금융감독원 개인정보노출자
          사고예방시스템(pd.fss.or.kr) 접속 또는 거래은행 영업점 방문하기
        </p>
        <p>
          <span className="text-primary-400">②</span> 이용약관, 개인정보제공 등
          동의 후 휴대전화 인증하기
        </p>
        <p>
          <span className="text-primary-400">③</span> 개인정보 노출 사실
          등록하여 입출금계좌 신규, 대출, 신용카드 발급 등 제한(금융회사별 제한
          내용이 다르므로 거래중인 금융회사 앞 확인 필요)
        </p>
      </div>
    </>
  ),
  isOpenedAccountContents: (
    <>
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
    </>
  ),
  impersonationPhone: (
    <>
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
          <span className="text-primary-400">②</span> 공동인증서 또는 카카오페이
          인증 로그인
        </p>
        <p>
          <span className="text-primary-400">③</span> ‘가입사실현황조회 서비스’
          메뉴 클릭하여 본인명의로 개설된 휴대전화 확인
        </p>
        <p>
          <span className="text-primary-400">④</span> 명의도용 휴대전화가 개통된
          경우 즉시 해당 통신사에 회선해지 신청 및 명의도용 신고
        </p>
        <p>
          <span className="text-primary-400">⑤</span> ‘가입제한 서비스’ 메뉴
          클릭하여 본인명의 휴대전화 신규개설 차단
        </p>
      </div>
    </>
  ),
  micropaymentPopover: (
    <span>
      번호도용 차단 서비스 신청 시 내 번호로 웹사이트를 통한 문자발송 차단 등
      일부 제한되는 부분 있으므로 통신사와 상담후 신청하는게 좋아요.
    </span>
  ),
  micropaymentContent: (
    <>
      <div className="p-[15px] flex flex-col gap-[10px] rounded-[15px] border border-monochrome-200 text-lg leading-[27px] font-normal">
        휴대폰 소액결제 → 결제 변경 → ‘이용한도를 0원으로 설정’ 후 이용 한도
        변경
      </div>
      <p className="text-[18px] font-normal">
        이용 중인 통신사 고객센터(114) 문의 또는 통신사 앱을 통해 신청이
        가능하며, 소액결제 원천차단의 경우 각 통신사별로 상이하므로 통신사로
        문의하는걸 권장해요. 
      </p>
    </>
  ),
  blockCreditTransaction: (
    <p className="text-[18px] font-normal">
      여신거래 안심차단 서비스는 개인의 신규 여신거래(신용대출, 카드론, 신용카드
      발급 등)를 사전에 차단하여 금융사기 피해를 예방하는 서비스예요.
      <br />
      <br />
      신분증을 지참하여 가까운 은행 또는 카드사 영업점에 방문 하여 신청하면
      돼요. 최근 대부분 금융사는 모바일 앱과 웹사이트를 통해 비대면으로도 신청을
      지원하고 있어요.
    </p>
  ),
};

export const reportStep4Contents = {
  topContent: (
    <span className="font-semibold">
      보이스피싱 피해구제 신청은 피해금을 입금한 계좌의 금융회사 또는
      사기이용계좌를 관리하는 해당 금융회사 지점에 피해자가{" "}
      <span className="text-[#F00]">반드시 지급정지신청 이후 3영업일 이내</span>
      에 직접 방문해 진행해야 해요.
      <br />
      <br />
      방문 시 반드시 ➊신고접수 서류 발급과 ➋신분증 ➌피해구제 신청서 세 가지
      서류를 함께 지참해 주세요.
    </span>
  ),
  evidenceContent: (
    <p className="text-[18px] font-normal">
      피해구제 접수를 위해 신고접수서류가 필요해요.
      <br />
      <br />
      가까운 경찰서(사이버 수사대)에 방문하여 피해 사건을 접수하고{" "}
      <span className="font-semibold">‘신고접수 서류 발급’</span>을
      발급받으세요.
    </p>
  ),
  writeDamageRelief: (
    <>
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
          <span className="text-primary-400">-</span> 피해 사실을 입증하는 서류
          (통장 거래내역, 통화내역 등)를 첨부합니다.
        </p>
      </div>
    </>
  ),
  writeApplicationPopover: (
    <div className="flex flex-col gap-2">
      <span>
        i) 서면접수를 하지않고 3영업일+14일이 경과할 경우, 피해구제신청이 없었던
        것으로 간주되므로 빠른 시일 내에 서면접수를 완료해주세요.
      </span>
      <span>
        ii) 피해금 입금내역 등 증거자료 출력이 가능하다면 첨부해주세요.
      </span>
    </div>
  ),
  writeApplicationContent: (
    <p className="text-[18px] font-normal">
      피해금을 입금한 계좌의 금융회사 또는 사기이용계좌를 관리하는 해당 금융회사
      지점에 직접 방문해서 진행해주세요.
      <br />
      <br />
      방문 시 반드시 ➊사건사고사실확인원(경찰서에서 발급)과 ➋신분증 ➌피해구제
      신청서 세 가지 서류를 함께 지참해 주세요.
    </p>
  ),
  damageRefundContent: (
    <p className="text-[18px] font-normal">
      피해자의 피해구제신청에 따라 금융회사와 금융감독원은 사기이용계좌 명의인의
      채권에 대해 채권소멸절차를 진행하게 됩니다.
      <br />
      <br />
      채권소멸절차가 개시된 경우, 금융감독원 보이스피싱지킴이 홈페이지
      ‘채권소멸절차 개시공고’를 통해 개시공고를 확인할 수 있어요. 여기서
      채권소멸은 사기이용계좌 예금주의 예금 잔액에 대한 권리를 없애는 것을
      말해요.
      <br />
      <br />
      금융감독원의 채권소멸절차 개시 공고일로부터 2개월이 지나면 사기이용계좌의
      채권이 소멸되며, 14일 이내에 환급금이 결정된 후 피해환급금이 지급돼요.
    </p>
  ),
};
