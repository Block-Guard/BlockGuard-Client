import BlockeeWarning from "../../../assets/characters/blockee-warning.svg";
import BlockeeSafe from "../../../assets/characters/blockee-safe.svg";
import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import RiskRed from "../../../assets/analysis-result/risk-level-red.png";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.png";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.png";
import type { FraudFeature, ScamType, ScamTypeDataSegment, stringSurveyData } from "../../../types/fraud-types";
import jsonData from './fraudFeatureData.json';
export const riskState = [
    {
        state: "risk",
        bgColor: "#F24E4E",
        text: "사기 위험도가 높은 상황",
        text2: "분석 결과 위험",
        bubbleChat: RiskChatBubble,
        character: BlockeeWarning,
        boardImg: RiskRed,
        degree: 155,
    },
    {
        state: "warn",
        bgColor: "#FFCD42",
        text: "사기 위험도 주의 상황",
        text2: "분석 결과 주의",
        bubbleChat: WarnChatBubble,
        character: BlockeeWarning,
        boardImg: RiskYellow,
        degree: 90,
    },
    {
        state: "safe",
        bgColor: "#40D479",
        text: "사기 위험도가 낮은 상황",
        text2: "분석 결과 안전",
        character: BlockeeSafe,
        bubbleChat: SafeChatBubble,
        boardImg: RiskGreen,
        degree: 30,
    },
];

/** 선택 데이터 기본 값으로 채우는 용도 */
export const initSurvey: stringSurveyData = {
    contactMethod: "",
    counterpart: "",
    requestedAction: [],
    requestedInfo: [],

    LinkType: "",
    pressuredInfo: false,
    appOrLinkRequest: false,
    thirdPartyConnect: false,
    authorityPressure: false,
    accountOrLinkRequest: false,

    suspiciousLinks: "",
    suspiciousPhoneNumbers: "",
    messageContent: "",
    additionalDescription: ""
}

export const fraudFeatureList: Record<ScamType, FraudFeature[]> = jsonData

export const scamTypes = [
    {
        name: '보이스 피싱',
        children: [
            { name: '기관 사칭형' },
            { name: '대출 사기형' },
            { name: '카드사 사칭형' }
        ]
    },
    {
        name: '메신저 피싱',
        children: [
            { name: '가족/지인 사칭형' }
        ]
    },
    {
        name: '스미싱',
        children: [
            {
                name: '경조사 사칭형',
                children: [
                    { name: '돌잔치 초대장형' },
                    { name: '모바일 청첩장형' },
                    { name: '부고 문자형' }
                ]
            },
            {
                name: '공공기관 사칭형',
                children: [
                    { name: '범칙금/과태료 부과형' },
                    { name: '건강보험공단 사칭형' },
                    { name: '경찰 출석요구형' },
                    { name: '국세청 사칭형' }
                ]
            },
            { name: '알바/부업 사기형' },
            { name: '정부 지원금 위장형' },
            { name: '택배 사기형' },
            {
                name: '투자사기형',
                children: [
                    { name: '가상화폐 사기형' },
                    { name: '주식투자 사기형' },
                    { name: '청약 공모주 사기형' }
                ]
            },
            {
                name: '허위결제 사기형'
                // 하위 분류가 없으므로 children 속성 없음
            }
        ]
    },
];

export const ScamTypeData: Record<ScamType, ScamTypeDataSegment[]> = {
    "기관 사칭형": [
        { text: '해당 메시지는 ', className: 'font-medium' },
        { text: '검찰 또는 경찰을 사칭', className: 'font-bold' },
        { text: '하여 고소장 접수,범죄 연루 등을 빌미로 개인정보(신분증, 계좌번호 등)나 ‘안전계좌 송금’을 요구해 금전을 탈취하는 ', className: 'font-medium' },
        { text: '피싱 사기 수법입니다.', className: 'text-red-500 font-bold' },
    ],
    "대출 사기형": [
        { text: '해당 메시지는 ', className: 'font-medium' },
        { text: '저금리 대출, 정부지원 대출 등 대출 상담', className: 'font-bold' },
        { text: '으로 접근해 기존 고금리 대출 상환이나 신용등급 상승 등을 명목으로 개인정보나 자금을 편취하는 ', className: 'font-medium' },
        { text: '대출 사기형 수법입니다.', className: 'text-red-500 font-bold' },
    ],
    "카드사 사칭형": [
        { text: '실제 카드사와 ', className: 'font-medium' },
        { text: '유사한 전화번호', className: 'font-bold' },
        { text: '를 사용해 \n카드 허위발급, 명의도용 등 긴급한 상황을 연출하고, ', className: 'font-medium whitespace-pre-line' },
        { text: '개인정보 유출이나 상담 연결을 유도하는', className: 'text-red-500 font-bold' },
        { text: ' 피싱 수법입니다.', className: 'font-medium' },
    ],
    "가족/지인 사칭형": [
        { text: '해당 메시지는 연락처 도용이나 ', className: 'font-medium' },
        { text: '가족, 친구 등 지인', className: 'font-bold' },
        { text: '을 사칭하여 메신저로 접근하는 방식으로, 긴급한 상황을 연출하며 ', className: 'font-medium' },
        { text: '금전 또는 개인정보를 요구', className: 'text-red-500 font-bold' },
        { text: '하는 피싱 사기 수법입니다.', className: 'font-medium' },
    ],
    "돌잔치 초대장형": [
        { text: '실제 ', className: 'font-medium' },
        { text: '지인 번호나 이름을 사칭해', className: 'font-bold' },
        { text: ' 돌잔치 초대장을 발송하는 수법으로, 링크를 클릭할시 주소록에 저장된 지인들에게 동일한 ', className: 'font-medium' },
        { text: '메시지를 재발송해 2차 피해를 유발', className: 'text-red-500 font-bold' },
        { text: '하기도 합니다.', className: 'font-medium' },
    ],
    "모바일 청첩장형": [
        { text: '실제 ', className: 'font-medium' },
        { text: '지인 번호나 이름을 사칭해', className: 'font-bold' },
        { text: ' 결혼식 청첩장을 발송하는 수법으로, 링크를 클릭할시 주소록에 저장된 지인들에게 동일한 ', className: 'font-medium' },
        { text: '메시지를 재발송해 2차 피해를 유발', className: 'text-red-500 font-bold' },
        { text: '하기도 합니다.', className: 'font-medium' },
    ],
    "부고 문자형": [
        { text: '지인 또는 친척을 사칭', className: 'font-bold' },
        { text: '해 부고장 문자를 보내는 수법으로, 악성링크 클릭시 ', className: 'font-medium' },
        { text: '휴대폰을 해킹해 2차 피해를 유발', className: 'text-red-500 font-bold' },
        { text: '하며, 실제 부고문자와 거의 유사해 피해사례가 증가하고 있습니다.', className: 'font-medium' },
    ],
    "벌칙금/과태료 부과형": [
        { text: '경찰청·교통안전공단 등 공공기관을 사칭해 \n교통법규 위반, 쓰레기 무단투기 등의 명목으로 ', className: 'font-medium' },
        { text: '범칙금·과태료 부과 문자를 발송', className: 'font-bold' },
        { text: '하고, 링크 클릭 시 ', className: 'font-medium' },
        { text: '악성앱 설치 또는 가짜 민원 사이트', className: 'text-red-500 font-bold' },
        { text: '로 연결해 개인정보를 탈취하는 수법입니다. ', className: 'font-medium' },

    ],
    "건강보험공단 사칭형": [
        { text: '국민건강보험공단을 사칭하여 이메일, 문자 등으로 ', className: 'font-medium' },
        { text: '보험료 환급,체납,건강검진 결과 확인 등을 미끼', className: 'font-bold' },
        { text: '로 링크 클릭을 유도하고 ', className: 'font-medium' },
        { text: '가짜 건강보험공단 사이트로 연결', className: 'text-red-500 font-bold' },
        { text: '해 악성앱 설치 또는개인정보·금융정보를 탈취하는 수법입니다.', className: 'font-medium' },
    ],
    "경찰 출석 요구형": [
        { text: '경찰서·검찰청·법원 등을 사칭해', className: 'font-medium' },
        { text: ' ‘사건번호’, ‘출석요구서’, ‘소환장 발부’ 등의 명목', className: 'font-bold' },
        { text: '으로 긴급 문자를 발송하고, 링크 클릭 시 ', className: 'font-medium' },
        { text: '가짜 기관 사이트 또는 악성앱 설치로 연결돼', className: 'text-red-500 font-bold' },
        { text: ' 개인정보·금융정보를 탈취하는 수법입니다.', className: 'font-medium' },
    ],
    "국세청 사칭형": [
        { text: '이메일, 문자 메시지 등을 통해 ', className: 'font-medium' },
        { text: '국세청을 사칭하여 세금 신고, 환급, 세무조사 등의 키워드', className: 'font-bold' },
        { text: '로 사용자의 주의를 끌고, ', className: 'font-medium' },
        { text: '실제 국세청 웹사이트와 유사한 페이지', className: 'text-red-500 font-bold' },
        { text: '로 개인 정보를 탈취하거나 악성앱을 설치하게 하는 수법입니다. ', className: 'font-medium' },

    ],
    "알바/부업 사기형": [
        { text: '지정 ', className: 'font-medium' },
        { text: ' 쇼핑몰 구매·리뷰 대행을 미끼', className: 'font-bold' },
        { text: '로 원금과수익금 환급을 약속한 뒤, 초기 소액 정산으로 신뢰를 쌓고 고액을 유도해 돌려주지 않거나 ', className: 'font--medium' },
        { text: '통장·체크카드를 받아 보이스피싱 범죄 등에 악용', className: 'text-red-500 font-bold' },
        { text: '하기도 하는 수법입니다.', className: 'font-medium' },
    ],
    "정부 지원금 위장형": [
        { text: '정부나 공공기관을 사칭해 ', className: 'font-medium' },
        { text: '‘지원금 지급·신청·확인’ 안내 문자를 발송한 후', className: 'font-bold' },
        { text: ' 짧은 URL이나 유사 공식 도메인 링크를 클릭하게 유도하며, \n사용자가 링크에 접속하면 ', className: 'font-medium' },
        { text: '악성앱 설치나 개인정보·금융정보를 탈취', className: 'text-red-500 font-bold' },
        { text: '하는 수법입니다', className: 'font-medium' },
    ],
    "택배 사기형": [
        { text: '택배회사를 사칭해', className: 'font-medium' },
        { text: '‘배송 완료’, ‘주소 오류’, ‘미수령 택배’ ', className: 'font-bold' },
        { text: '등의 문자메시지를 발송하고, 단축 URL이나 ', className: 'font-medium' },
        { text: '가짜 배송조회 페이지로 접속을 유도', className: 'text-red-500 font-bold' },
        { text: '해 악성 앱 설치 또는 개인정보·금융정보를 탈취하는 수법입니다.', className: 'font-medium' },
    ],
    "가상화폐 사기형": [
        { text: '실제 카드사와 유사한 전화번호로 ', className: 'font-medium' },
        { text: '결제 승인 문자 내용을 발송', className: 'font-bold' },
        { text: '해 피해자가 본인 명의로 결제가 진행된 것처럼 속이고, ', className: 'font-medium' },
        { text: '상담 연결을 유도해 보이스피싱으로 이어지는 수법', className: 'text-red-500 font-bold' },
        { text: '입니다.', className: 'font-medium' },
    ],
    "주식투자 사기형": [
        { text: '실제 가상자산 거래소처럼 위장해 투자를 유도하거나 ', className: 'font-medium' },
        { text: '‘로그인 감지’, ‘자산 소각 예정’, ‘해외 IP 차단’', className: 'font-bold' },
        { text: ' 등 긴급 상황을 연출하고, 피해자를 ', className: 'font-medium' },
        { text: '가짜 거래소사이트·상담센터로 유도', className: 'text-red-500 font-bold' },
        { text: '해 개인정보와 자산을 탈취하는 수법입니다.', className: 'font-medium' },
    ],
    "청약 공모주 사기형": [
        { text: '투자 전문가나 커뮤니티를 사칭해 ', className: 'font-medium' },
        { text: '‘고수익 보장’ ‘급등 종목 추천’ 등으로 유인', className: 'font-bold' },
        { text: '하고, 오픈채팅방·텔레그램 등 외부 메신저로 유도해 개인정보나 금전을 탈취하며, 링크 클릭 시 악성 사이트나 사기 조직과 연결되는 수법입니다.', className: 'font-medium' },

    ],
    "허위결제 사기형": [
        { text: '상장 예정 기업·증권사를 사칭해 ', className: 'font-medium' },
        { text: '‘사전신청 할인’ ‘청약 공모주 당첨’ 등의', className: 'font-bold' },
        { text: ' 문구로 유인하고, 가짜 공모주 신청 페이지에서 개인정보를 탈취해 보이스피싱 등 2차 범죄에 악용하는 피싱수법입니다.', className: 'font-medium' },
    ]
}