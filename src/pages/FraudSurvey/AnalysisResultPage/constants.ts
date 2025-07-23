
import PhoneCall from "../../../assets/icons/phone-call-icon.png";
import Siren from "../../../assets/icons/siren-icon.svg";

import BlockeeWarning from "../../../assets/characters/blockee-warning.svg";
import BlockeeSafe from "../../../assets/characters/blockee-safe.svg";

import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import SmartPhone from "../../../assets/analysis-result/smartphone-icon.png";
import RiskRed from "../../../assets/analysis-result/risk-level-red.svg";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.svg";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.svg";
import IndicatorArrow from "../../../assets/analysis-result/indicator-arrow.svg"
import FileIcon from "../../../assets/analysis-result/file-icon.png"


export const riskState = [
    {
        state: "risk",
        bgColor: "#F24E4E",
        text: "사기 위험도가 높은 상황",
        bubbleChat: RiskChatBubble,
        character: BlockeeWarning,
        boardImg: RiskRed,
        degree: 135,
    },
    {
        state: "warn",
        bgColor: "#FFCD42",
        text: "사기 위험도 주의 상황",
        bubbleChat: WarnChatBubble,
        character: BlockeeWarning,
        boardImg: RiskYellow,
        degree: 90,
    },
    {
        state: "safe",
        bgColor: "#40D479",
        text: "사기 위험도가 낮은 상황",
        character: BlockeeSafe,
        bubbleChat: SafeChatBubble,
        boardImg: RiskGreen,
        degree: 45,
    },
];

export const dummyResponse = {
    "code": 2014,
    "message": "사기 분석이 완료되었습니다.",
    "data": {
        "riskLevel": "위험", // "주의", "안전"
        "score": 94.2,
        "estimatedFraudType": "기관 사칭형",//"PROSECUTOR_IMPERSONATION",
        "keywords": ["검찰", "송금", "서민금융"],
        "explanation": "검찰을 사칭해 송금 및 개인정보를 요구하며, 서민금융을 사유로 앱 설치를 유도하는 전형적인 사기입니다.",
        "recommendedAction": "즉시 앱 삭제 및 112에 신고하세요."
    }
}
