

import BlockeeWarning from "../../../assets/characters/blockee-warning.svg";
import BlockeeSafe from "../../../assets/characters/blockee-safe.svg";

import RiskChatBubble from "../../../assets/analysis-result/chat-bubble-result-risk.svg";
import WarnChatBubble from "../../../assets/analysis-result/chat-bubble-result-warn.svg";
import SafeChatBubble from "../../../assets/analysis-result/chat-bubble-result-safe.svg";
import RiskRed from "../../../assets/analysis-result/risk-level-red.svg";
import RiskYellow from "../../../assets/analysis-result/risk-level-yellow.svg";
import RiskGreen from "../../../assets/analysis-result/risk-level-green.svg";


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

export const dummyGuardians = {
    "code": 2010,
    "message": "보호자 목록 조회가 완료되었습니다.",
    "data": {
        "guardians": [
            {
                "guardiansId": 1,
                "name": "홍길동",
                "phoneNumber": "010-1234-5678",
                "isPrimary": false,
                "profileImageUrl": "https://cdn.example.com/guardians/1/new-avatar.png"
            },
            {
                "guardiansId": 2,
                "name": "김철아",
                "phoneNumber": "010-1234-5678",
                "isPrimary": false,
		        "profileImageUrl": null
            },
            {
                "guardiansId": 3,
                "name": "김철삼",
                "phoneNumber": "010-1234-5678",
                "isPrimary": true,
		        "profileImageUrl": null
            },
            {
                "guardiansId": 4,
                "name": "김철사",
                "phoneNumber": "010-1234-5678",
                "isPrimary": false,
		        "profileImageUrl": null
            },
            {
                "guardiansId": 5,
                "name": "김철오",
                "phoneNumber": "010-1234-5678",
                "isPrimary": false,
		        "profileImageUrl": null
            },
            {
                "guardiansId": 6,
                "name": "김철육",
                "phoneNumber": "010-1234-5678",
                "isPrimary": false,
		        "profileImageUrl": null
            },
        ]
    }
}