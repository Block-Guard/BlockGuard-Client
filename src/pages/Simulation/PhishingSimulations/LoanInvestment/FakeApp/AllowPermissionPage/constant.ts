import LocationIcon from "@/assets/simulation/loan-investment/location-icon.svg";
import AddressIcon from "@/assets/simulation/loan-investment/address-icon.svg";
import PhoneIcon from "@/assets/simulation/loan-investment/phone-icon.svg";
import CameraIcon from "@/assets/simulation/loan-investment/camera-icon.svg";
import InternalCallIcon from "@/assets/simulation/loan-investment/internal-call-icon.svg";
import StorageIcon from "@/assets/simulation/loan-investment/storage-icon.svg";
import SMSIcon from "@/assets/simulation/loan-investment/sms-icon.svg";

export const permissionList = [
    {
        id: 0,
        icon: LocationIcon,
        title: "위치" ,
        description:"이 기기의 위치정보에 액세스",
    },
    {
        id: 1,
        icon:PhoneIcon,
        title: "전화",
        description:"전화 걸기 및 관리",
    },
    {
        id: 2,
        icon:CameraIcon,
        title: "카메라",
        description:"사진 및 동영상 촬영",
    },
    {
        id: 3,
        icon:AddressIcon,
        title: "주소록",
        description:"주소록에 액세스",
    },
    {
        id: 4,
        icon:InternalCallIcon,
        title: "통화 기록",
        description:"통화 기록 읽고 쓰기",
    },
    {
        id: 5,
        icon:StorageIcon,
        title: "저장공간",
        description:"기기 사진, 미디어, 파일 액세스",
    },
    {
        id: 6,
        icon:SMSIcon,
        title: "SMS",
        description:"SMS 메시지 전송 및 보기",
    },
]