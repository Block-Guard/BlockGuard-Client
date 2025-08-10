export const surveyContent = [
    {
        question: "연락방식을 선택해 주세요",
        isEssential: true,
        isMultiple: false,
        answers: ["문자", "전화", "문자 및 전화 (연계 사용)", "기타"],
        progress: 1
    },
    {
        question: "상대방은 누구였나요?",
        isEssential: true,
        isMultiple: false,
        answers: ["가족 / 친구 / 지인", "금융기관", "수사기관", "정부 / 공공기관", "택배기사", "투자회사 / 가상화폐 거래소",
            "기타"
        ],
        progress: 2
    },
    {
        question: "어떤 요청을 받으셨나요?",
        isEssential: true,
        isMultiple: true,
        answers: ["송금 / 현금 인출", "상품권 / 기프트카드 구매", "개인정보(금융정보 포함)", "앱 설치(링크클릭) / 파일 다운로드", 
            "지원금 / 환급금 수령", "상담 연결유도", "기타"],
        progress: 3
    },
    {
        question: "문자 또는 통화에서 언급된 내용은 어떤 것인가요",
        isEssential: true,
        isMultiple: true,
        answers: ["휴대폰 고장 / 인증 오류 / 상품권 구매", 
            "범죄 연루 / 대포통장 / 안전계좌", 
            "저금리 대출 / 상환 / 정부지원", 
            "카드 발급 / 명의도용 / 보안점검", 
            "배송 조회 / 주소 확인", "주식 추천 / 리딩방 / 청약 당첨",
            "기타"],
        progress: 4
    },
    {
        question: "설치나 클릭을 유도한 링크의 종류는 어떤 것이었나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["카드사 / 은행 / 대출신청 앱", "정부·공공기관 사이트", "원격제어·보안점검 앱", "경조사 초대장", 
            "투자 리딩방 / 가상화폐 거래소", "배송조회 페이지",
            "기타"],
        progress: 5
    },
        {
        question: "설치나 클릭을 유도한 링크의 종류는 어떤 것이었나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["카드사 / 은행 / 대출신청 앱", "정부·공공기관 사이트", "원격제어·보안점검 앱", "경조사 초대장", 
            "투자 리딩방 / 가상화폐 거래소", "배송조회 페이지",
            "기타"],
        progress: 5
    },
        {
        question: "설치나 클릭을 유도한 링크의 종류는 어떤 것이었나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["카드사 / 은행 / 대출신청 앱", "정부·공공기관 사이트", "원격제어·보안점검 앱", "경조사 초대장", 
            "투자 리딩방 / 가상화폐 거래소", "배송조회 페이지",
            "기타"],
        progress: 5
    },
    {
        question: "개인정보 유출이나 범죄 연루 등을 언급하며 심리적으로 압박을 주었나요? ",
        isEssential: false,
        isMultiple: false,
        answers: ["네", "아니오"],
        progress: 6
    },
        {
        question: "보안점검 또는 금융 거래를 이유로 앱 설치나 링크 접속을 요청받았나요? ",
        isEssential: false,
        isMultiple: false,
        answers: ["네", "아니오"],
        progress: 7
    },
        {
        question: "다른 상담원이나 수사관에게 연결해 주겠다며 전화를 넘긴적이 있었나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["네", "아니오"],
        progress: 8
    },
        {
        question: "상대방이 직책(검찰, 금융감독원 등)을 강조하며 권위적인 태도를 보였나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["네", "아니오"],
        progress: 9
    },
        {
        question: "범죄 연루나 대출 조건 등을 이유로 계좌이체나 현금 인출을 유도했나요?",
        isEssential: false,
        isMultiple: false,
        answers: ["네", "아니오"],
        progress: 10
    },
    {
        question: "의심스러운 링크나 전화번호를 입력해주세요",
        isEssential: false,
        isMultiple: false,
        answers: [],
        progress: 11
    },
    {
        question: "문자 내용을 입력해 주세요",
        isEssential: false,
        isMultiple: false,
        answers: [],
        progress: 12
    },
    {
        question: "의심스러웠던 당시 상황을 자세히 진술해주세요",
        isEssential: true,
        isMultiple: false,
        answers: [],
        progress: 13
    }
];