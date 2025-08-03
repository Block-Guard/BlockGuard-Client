import Favorite from "../../../assets/simulation/phone-button-icons/favorite-gray-icon.svg";
import RecentCall from "../../../assets/simulation/phone-button-icons/recent-call-icon.svg";
import Address from "../../../assets/simulation/phone-button-icons/address-gray-icon.svg";
import KeyPad from "../../../assets/simulation/phone-button-icons/keypad-blue-icon.svg";
import VoiceMail from "../../../assets/simulation/phone-button-icons/voicemail-gray-icon.svg";

export const CallAppNav = () => {
    return (
        <nav className="w-full h-20 px-5 py-1 flex justify-around items-center">
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={Favorite} alt="아이콘" className="w-6 h-6"/>
                <span className="text-center justify-start text-neutral-400 text-[10px] font-medium">
                    즐겨찾기
                </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <img src={RecentCall} alt="아이콘"  className="w-6 h-6"/>
                <span className="text-center justify-start text-neutral-400 text-[10px] font-medium">최근 통화</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <img src={Address} alt="아이콘"  className="w-6 h-6"/>
                <span className="text-center justify-start text-neutral-400 text-[10px] font-medium">연락처</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <img src={KeyPad} alt="아이콘"  className="w-6 h-6"/>
                <span className="text-center justify-start text-neutral-400 text-[10px] font-medium">키패드</span>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <img src={VoiceMail} alt="아이콘"  className="w-6 h-6"/>
                <span className="text-center justify-start text-neutral-400 text-[10px] font-medium">음성 사서함</span>
            </div>
        </nav>
    )
}