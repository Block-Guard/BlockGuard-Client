export const surveyContent = [
    {
        question: "연락방식을 선택해 주세요",
        isEssential: true,
        answers: ["문자", "전화", "메신저", "기타"],
        progress: 1
    },
    {
        question: "상대방은 누구였나요?",
        isEssential: true,
        answers: ["자녀(딸/아들)", "금융기관", "수사기관", "택배기사", "기타"],
        progress: 2
    },
    {
        question: "어떤 요청을 받으셨나요?",
        isEssential: true,
        answers: ["송금요청", "URL 클릭", "앱 설치", "개인정보 입력", "계좌이체 유도", "기타"],
        progress: 3
    },
    {
        question: "어떤 정보를 요구했나요?",
        isEssential: true,
        answers: ["신분증", "보안카드 번호", "대출 이력", "주민등록번호", "휴대폰 인증번호", "기타"],
        progress: 4
    },
    {
        question: "설치를 요청한 앱의 종류는 어떤것이었나요?",
        isEssential: false,
        answers: ["서민금융지원 등 대출어플", "카드사/은행 어플", "부고/청첩장 어플", "원격제어 어플", "기타"],
        progress: 5
    },
    {
        question: "외진장소, ATM기 근처 등에서 통화를 유도했나요?",
        isEssential: false,
        answers: ["네", "아니오"],
        progress: 6
    },
    {
        question: "의심스러운 링크나 전화번호를 입력해주세요",
        isEssential: false,
        answers: [],
        progress: 7
    },
    {
        question: "문자 내용을 입력해 주세요",
        isEssential: false,
        answers: [],
        progress: 8
    },
    {
        question: "의심스러웠던 당시 상황을 자세히 진술해주세요",
        isEssential: true,
        answers: [],
        progress: 9
    }
];