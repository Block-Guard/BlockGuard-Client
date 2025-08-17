import BlockeeWarning from "../../../assets/characters/blockee-warning.png";
import BlockeeSafe from "../../../assets/characters/blockee-safe.png";
import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import RiskRed from "../../../assets/analysis-result/risk-level-red.png";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.png";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.png";
import type {
  FraudFeature,
  ScamType,
  stringSurveyData,
} from "../../../types/fraud-types";
import jsonData from "./fraudFeatureData.json";
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
  additionalDescription: "",
};

export const fraudFeatureList: Record<ScamType, FraudFeature[]> = jsonData;

export const scamTypes = [
  {
    name: "보이스 피싱",
    children: [
      { name: "기관 사칭형" },
      { name: "대출 사기형" },
      { name: "카드사 사칭형" },
    ],
  },
  {
    name: "메신저 피싱",
    children: [{ name: "가족/지인 사칭형" }],
  },
  {
    name: "스미싱",
    children: [
      {
        name: "경조사 사칭형",
        children: [
          { name: "돌잔치 초대장형" },
          { name: "모바일 청첩장형" },
          { name: "부고 문자형" },
        ],
      },
      {
        name: "공공기관 사칭형",
        children: [
          { name: "범칙금/과태료 부과형" },
          { name: "건강보험공단 사칭형" },
          { name: "경찰 출석요구형" },
          { name: "국세청 사칭형" },
        ],
      },
      { name: "알바/부업 사기형" },
      { name: "정부 지원금 위장형" },
      { name: "택배 사기형" },
      {
        name: "투자사기형",
        children: [
          { name: "가상화폐 사기형" },
          { name: "주식투자 사기형" },
          { name: "청약 공모주 사기형" },
        ],
      },
      {
        name: "허위결제 사기형",
        // 하위 분류가 없으므로 children 속성 없음
      },
    ],
  },
];
