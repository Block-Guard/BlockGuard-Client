import LocationIcon from "@/assets/simulation/loan-investment/location-icon.svg";
import AddressIcon from "@/assets/simulation/loan-investment/address-icon.svg";
import PhoneIcon from "@/assets/simulation/loan-investment/phone-icon.svg";
import CameraIcon from "@/assets/simulation/loan-investment/camera-icon.svg";
import InternalCallIcon from "@/assets/simulation/loan-investment/internal-call-icon.svg";
import StorageIcon from "@/assets/simulation/loan-investment/storage-icon.svg";
import SMSIcon from "@/assets/simulation/loan-investment/sms-icon.svg";
import OKIcon from "@/assets/simulation/loan-investment/ok-icon.svg";
import BankingIcon from "@/assets/simulation/loan-investment/banking-icon.svg";
import LoanBagIcon from "@/assets/simulation/loan-investment/loan-bag-icon.svg";
import SupportMoneyIcon from "@/assets/simulation/loan-investment/support-money-icon.svg";

export const permissionList = [
    {
        id: 0,
        icon: LocationIcon,
        title: "위치",
        description: "이 기기의 위치정보에 액세스",
    },
    {
        id: 1,
        icon: PhoneIcon,
        title: "전화",
        description: "전화 걸기 및 관리",
    },
    {
        id: 2,
        icon: CameraIcon,
        title: "카메라",
        description: "사진 및 동영상 촬영",
    },
    {
        id: 3,
        icon: AddressIcon,
        title: "주소록",
        description: "주소록에 액세스",
    },
    {
        id: 4,
        icon: InternalCallIcon,
        title: "통화 기록",
        description: "통화 기록 읽고 쓰기",
    },
    {
        id: 5,
        icon: StorageIcon,
        title: "저장공간",
        description: "기기 사진, 미디어, 파일 액세스",
    },
    {
        id: 6,
        icon: SMSIcon,
        title: "SMS",
        description: "SMS 메시지 전송 및 보기",
    },
]

export const fakeLoanTiemList = [
    {
        id: 0,
        icon: OKIcon,
        title: "안심 대출조회",
        description: "신용등급 영향없이 간편한 조회 ",
    },
    {
        id: 1,
        icon: BankingIcon,
        title: "예상상품 안내 및 계좌개설",
        description: "어디서나 간편한 계좌개설",
    },
    {
        id: 2,
        icon: LoanBagIcon,
        title: "대출 신청하기",
        description: "XX은행이 간편하게 대출신청을 도와드려요",
    },
    {
        id: 3,
        icon: SupportMoneyIcon,
        title: "정부지원금 신청",
        description: "대출금리 최소 연 2.3%~최대 6.9%상품",
    }
]

export const loanInputInfoList = [
    {
        id: 0,
        label: "이름",
        placeholder: "예) 홍길동",
    },
    {
        id: 1,
        label: "휴대폰",
        placeholder: "-없이 입력",
    },
    {
        id: 2,
        label: "주민번호",
        placeholder: "",
    },
    {
        id: 3,
        label: "직장명/사업자명",
        placeholder: "",
    },
    {
        id: 4,
        label: "연봉/매출",
        placeholder: "",
    },
    {
        id: 5,
        label: "필요금액",
        placeholder: "",
    },
    {
        id: 6,
        label: "대출신청 현황",
        placeholder: "",
    }
]