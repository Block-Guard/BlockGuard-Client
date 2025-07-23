import ReactingCard from "./ReactingCard";
import PhoneCall from "../../../../assets/icons/phone-call-icon.png";
import Siren from "../../../../assets/icons/siren-icon.svg";
import SmartPhone from "../../../../assets/analysis-result/smartphone-icon.png";
import { useNavigate } from "react-router-dom";

const BottomCard = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => navigate("/home");
    const handleGuardianClick = () => console.log("보호자 바텀시트");
    const handleCallClick = () => console.log("전화 태그 연결");
    const handleReportClick = () => navigate("/emergency/report-overview");

    return (
        <div className="w-full h-96 px-6 py-7.5 bg-gradient-highlight-2 rounded-tl-[20px] rounded-tr-[20px] inline-flex flex-col justify-start items-center gap-7">
            <div className="text-center justify-center text-white text-2xl font-bold leading-9">
                지금 이렇게 하세요
            </div>

            <div className="w-full flex justify-between gap-2">
                <ReactingCard icon={<img className="w-6 h-7" src={PhoneCall} alt="전화 아이콘" />} title={<>신고<br />접수하기</>} btnText={"전화 연결"} handleBtn={handleCallClick} />
                <ReactingCard icon={<img className="w-6 h-7" src={Siren} alt="사이렌 아이콘" />} title={<>피해대응<br />절차보기</>} btnText={"바로가기"} handleBtn={handleReportClick} />
                <ReactingCard icon={<img className="w-6 h-7" src={SmartPhone} alt="스마트폰 아이콘" />} title={<>보호자에게<br />알리기</>} btnText={"공유하기"} handleBtn={handleGuardianClick} />
            </div>

            <button className="text-center justify-center text-white text-base font-bold underline leading-normal" onClick={handleHomeClick}>
                홈으로 돌아가기
            </button>
        </div>
    )
}

export default BottomCard;