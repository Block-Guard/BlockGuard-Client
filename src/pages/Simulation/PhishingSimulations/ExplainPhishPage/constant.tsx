export interface FraudMethods {
    id: number;
    text: string;
}

export interface FraudFeatrue {
    id: number;
    title: string;
    description: string[];

}

export interface ExplainInfo {
    title: React.ReactNode;
    description: React.ReactNode;
    methods: FraudMethods[];
    features: FraudFeatrue[];
    knowhow: FraudFeatrue[];
}

/** 대출 사기형 설명 정보 */
export const explainPhishLoan: ExplainInfo = {
    title: (<div className="w-full text-stone-50 text-[28px] font-extrabold leading-11">
        대출사기형<br/>
        보이스피싱 유형
    </div>),
    description: (
        <div className="w-full leading-l5">
            <span className="text-[#FFFF00] text-xl font-bold">
                저금리 대출, 정부지원 대출 등 대출 상담
            </span>
            <span className="text-gray-100 text-xl font-medium">
                으로 접근해 개인정보나 돈을 편취하는 사기 수법으로, 기존 고금리 대출 상환이나 신용등급을 높여준다는 명목으로
            </span>
            <span className="text-[#FFFF00] text-xl font-bold">
                &nbsp; 개인 계좌 이체
            </span>
            <span className="text-gray-100 text-xl font-medium">
                를 유도하는 방식<br />
            </span>
        </div>
    ),
    methods: [
        {
            id: 0,
            text: "저금리 대출 안내 문자 발송",
        },
        {
            id: 1,
            text: "금융사 직원을 사칭한 대출 상담",
        },
        {
            id: 2,
            text: "대출 승인을 명목으로 선입금 유도",
        },
        {
            id: -1,
            text: "대출 신청서를 핑계로 악성앱 설치 유도",
        }
    ],
    features: [
        {
            id: 0,
            title: "정부지원 상품 또는 저금리 대환 대출 빙자",
            description: ["정부나 공공기관을 사칭하여 저금리 정부지원 대출 또는 대환 대출을 받을 수 있다고 속임"],
        },
        {
            id: 1,
            title: "대출승인 목적 등으로 입금 요구",
            description: ["신용점수 향상, 거래실적 필요, 기존대출 상환 등의 명목으로 선입금을 요구해요."],
        },
        {
            id: 2,
            title: "대출신청서 작성으로 앱 설치 유도",
            description: ["대출신청서를 빙자한 파일 전송 또는 보안 앱 설치를 명목으로 악성 앱 링크를 전달해요."],
        },
    ],
    knowhow: [
        {
            id: 0,
            title: "해당 금융기관에 직접 문의하세요",
            description: ["금융사 홈페이지에 기재된 공식 대표번호로 전화해 해당 직원의 재직여부를 확인해보세요.", "이때, 악성앱으로 휴대폰이 해킹된 상황이라면 다른휴대폰을 이용하세요!"]
        },
        {
            id: 1,
            title: "대출 승인을 위한 선입금 요구는 무조건 거절",
            description: ["'대환대출 승인 조건' 또는 '중복대출에 따른 법 위반’ 해소를 위한 입금요구는 사기범의 전형적인 자금편취 수법입니다. "],
        },
        {
            id: 2,
            title: "정식 금융기관은 먼저 대출을 권유하지 않아요",
            description: ["은행이나 카드사 등 정식 금융기관은 고객에게 먼저 전화나 문자로 대출상담을 진행하지 않아요!"
                , "대출은 공식 은행앱 또는 은행 창구를 방문하는게 안전한 방법이예요 "
            ],
        },
    ]
}

/** 지인 사칭형 설명 정보 */
export const explainPhishFamAqui: ExplainInfo = {
    title: (<div className="w-full text-stone-50 text-[28px] font-extrabold leading-11">
        가족/지인사칭형<br />
        메신저피싱
    </div>),
    description: (
        <div className="w-full leading-l5">
            <span className="text-[#FFFF00] text-xl font-bold">
                가족, 친구 등 지인
            </span>
            <span className="text-gray-100 text-xl font-medium">
                을 사칭하며 메신저나 연락처를 도용해 접근하는 방식으로 휴대폰 고장, 공인인증서 오류 등
            </span>
            <span className="text-[#FFFF00] text-xl font-bold">
                &nbsp; 긴급한 상황을 연출
            </span>
            <span className="text-gray-100 text-xl font-medium">
                하며 금전/상품권/개인정보를 요구하는 수법
            </span>
        </div>
    ),
    methods: [
        {
            id: 0,
            text: "메신저 또는 문자로 가족/지인을 사칭",
        },
        {
            id: 1,
            text: "송금 요청 또는 신분증 등의 개인정보 요구",
        },
        {
            id: 2,
            text: "피해자 개인정보로 휴대폰/계좌 개설",
        },
        {
            id: -1,
            text: "피해자 명의로 금융권 대출",
        }
    ],
    features: [
        {
            id: 0,
            title: "개인정보 및 금전이체 요구",
            description: ["휴대폰 고장, 카드분실 등의 긴급한 사정을 이유로 급전 요청이나 개인정보를 요구해요 "],
        },
        {
            id: 1,
            title: "직접 통화요청 회피",
            description: ["핸드폰 고장수리 때문에 PC나 다른 휴대폰으로 메신저를 보낸다면서 직접 통화를 회피해요 "],
        },
        {
            id: 2,
            title: "대출신청서 작성으로 앱 설치 유도",
            description: ["문화상품권, 편의점에서 판매하는 기프트카드, 모바일 결제 인증번호 등 상품권 대리구매를 유도해요"],
        },
    ],
    knowhow: [
        {
            id: 0,
            title: "가족/지인이 맞는지 직접 통화로 확인하기",
            description: ["긴급한 상황을 연출하더라도 직접 전화로 사실을 확인하기 전에는 절대 송금하면 안돼요!", "같이 가족/지인끼리만 아는 정보를 물어보며 확인해보세요."]
        },
        {
            id: 1,
            title: "메신저를 통해 개인정보 보내지 않기",
            description: ["신분증사진, 카드번호 등의 개인정보를 요청하더라도 절대 전송하지 마세요! 특히, 원격제어 어플을 설치하면 휴대폰이 해킹될 수 있어요."],
        },
        {
            id: 2,
            title: "본인이 아닌 타인계좌로 송금요청시 거절",
            description: ["선배 또는 지인 등 본인이 아닌 타인의 계좌로 송금을 요청시 피싱일 확률이 높아요. 일단 의심하고 송금 요청을 거절하세요."],
        },
    ]
}

/** 검찰 공공기관 사칭형 */
export const explainPhishPublicOrg: ExplainInfo = {
    title: (<div className="w-full text-stone-50 text-[28px] font-extrabold leading-11">
        기관사칭형<br />
        보이스피싱 유형
    </div>),
    description: (
        <div className="w-full leading-l5">
            <span className="text-[#FFFF00] text-xl font-bold">
                검찰 또는 경찰
            </span>
            <span className="text-gray-100 text-xl font-medium">
                을  사칭하여 고소장 접수,
                범죄 연루 등을 빌미로  개인정보(신분증, 계좌번호 등)나 ‘안전계좌 송금’을 요구해 금전을 탈취하는
            </span>
            <span className="text-[#FFFF00] text-xl font-bold">
                &nbsp; 피싱 사기 수법
            </span>
        </div>
    ),
    methods: [
        {
            id: 0,
            text: "검찰, 경찰 수사관을 사칭해 전화",
        },
        {
            id: 1,
            text: "“고소장 접수” “범죄 연루” 등 겁을 주며 협박",
        },
        {
            id: 2,
            text: "공문서 파일/ 사진 발송",
        },
        {
            id: -1,
            text: "신분증 요구 + 안전 계좌 송금 유도",
        }
    ],
    features: [
        {
            id: 0,
            title: "지금 안 하면 안 됩니다!",
            description: ["긴급성을 강조하는 말투를 사용해서 판단력을 흐리게 만들어요"],
        },
        {
            id: 1,
            title: "신뢰성 확보 시도",
            description: ["공문서 위장, 실제 기관명 도용 등으로 신뢰감을 확보해요"],
        },
        {
            id: 2,
            title: "신분증/ 계좌 요청",
            description: ["개인정보를 빼내어 범죄에 악용하거나 명의도용을 위해 신분증이나 계좌를 요청해요 "],
        },
    ],
    knowhow: [
        {
            id: 0,
            title: "반드시 다른 전화기로 직접 확인하기!",
            description: ["경찰 또는 검찰이라며 전화로 비밀 수사에 협조하라면 보이스피싱!", "가족이나 지인의 휴대폰으로 해당 기관에 직접 전화해 확인 내 전화는 해킹 중일 수 있으니 주의하세요!"]
        },
        {
            id: 1,
            title: "개인정보 절대 전달 금지!",
            description: ["신분증, 계좌번호, 비밀번호 등의 개인정보는 절대로 전달하면 안 돼요!", "문자, 카톡, 메일로 개인정보를 요청하는 건 무조건 보이스피싱, 잊지 마세요!"],
        },
        {
            id: 2,
            title: "자금이체를 요구 = 100% 보이스피싱!",
            description: ["“안전조치” 명목으로 송금, 이체, 현금 전달 요구", "= 전부 사기!"
                , "“금융기관/검찰에서 만나자”는 말에도 속지 마세요"
            ],
        },
    ]
}

/** 카드 배송 사칭형 */
export const explainPhishDeliCard: ExplainInfo = {
    title: (<div className="w-full text-stone-50 text-[28px] font-extrabold leading-11">
        카드 배송형<br />
        보이스피싱 유형
    </div>),
    description: (
        <div className="w-full leading-l5">
            <span className="text-[#FFFF00] text-xl font-bold">
                신규 발급 카드 배송
            </span>
            <span className="text-gray-100 text-xl font-medium">
                을 명목으로 피해자에게 접근해
            </span>
            <span className="text-[#FFFF00] text-xl font-bold">
                &nbsp;가짜 고객센터 번호로 전화
            </span>
            <span className="text-gray-100 text-xl font-medium">
                를 유도한 뒤, 명의도용을 명목으로 악성앱을 설치하게 하여 금융기관과 수사기관 사칭해
            </span>
            <span className="text-[#FFFF00] text-xl font-bold">
                &nbsp;자금을 탈취
            </span>
            <span className="text-gray-100 text-xl font-medium">
                하는 다중 사칭형 피싱 수법
            </span>
        </div>
    ),
    methods: [
        {
            id: 0,
            text: "우체국 집배원을 사칭하여 카드배송",
        },
        {
            id: 1,
            text: "가짜 카드사 고객센터로 전화유도",
        },
        {
            id: 2,
            text: "명의도용 확인을 명목으로 악성앱 설치 유도",
        },
        {
            id: -1,
            text: "수사기관을 사칭하여  금전 갈취",
        }
    ],
    features: [
        {
            id: 0,
            title: "정교한 기관 사칭 시나리오",
            description: ["카드배송원→ 카드사 → 금융기관 → 검찰 순으로", "신뢰를 구축하며 피해자를 가스라이팅하는 수법"]
        },
        {
            id: 1,
            title: "범죄 연루를 명목으로 자금 탈취",
            description: ["수사기관을 사칭하여  범죄에 연루되었다며 불안과 공포심을 유발하여 자금을 탈취해요"],
        },
        {
            id: 2,
            title: "실제처럼 꾸며진 앱과 실물 카드",
            description: ["가짜 실물카드를 직접 배송하거나 실제 은행사나 정부기관과 매우 유사한 ui의 악성앱 설치를 유도해요."],
        },
    ],
        knowhow: [
        {
            id: 0,
            title: "배송원이 안내한 고객센터 번호는 가짜예요",
            description: ["카드 배송업체에서는 카드사 고객센터 번호를 안내하거나 고객센터로 연락을 요구하지 않아요.",
                "카드 신청을 한 적이 없다면, 카드사 공식 대표번호나 112에 직접 문의하세요."
            ],
        },
        {
            id: 1,
            title: "수사기관은 자금이체를 요구하지 않아요",
            description: ["금융기관, 수사기관은 절대 직접 자금이체나 앱 설치, 휴대전화 신규개통을 요구하지 않아요!",
                "공식 앱스토어 링크를 보내더라도 의심하고 거절해야해요."
            ],
        },
        {
            id: 2,
            title: "카드사의 공식 고객센터 번호를 확인하세요",
            description: ["안내받은 카드사 고객센터가 아닌  카드사 홈페이지에서 대표번호를 직접 검색해 확인하세요"],
        },
    ],
}