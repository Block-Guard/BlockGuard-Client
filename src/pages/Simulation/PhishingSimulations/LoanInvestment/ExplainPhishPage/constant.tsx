export interface FraudMethods{
    id: number;
    text: string;
}

export interface FraudFeatrue{
    id: number;
    title: string;
    description: string[];
   
}

export interface ExplainInfo{
    title: React.ReactNode;
    description: React.ReactNode;
    methods: FraudMethods[];
    features: FraudFeatrue[];
    knowhow: FraudFeatrue[];
}

export const explainPhishLoan:ExplainInfo = {
    title: (<div className="w-full text-stone-50 text-3xl font-extrabold leading-13">
                    대출사기형<br />
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
                를 유도하는 방식<br/>
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
                ,"대출은 공식 은행앱 또는 은행 창구를 방문하는게 안전한 방법이예요 "
            ],
        },
    ]
}