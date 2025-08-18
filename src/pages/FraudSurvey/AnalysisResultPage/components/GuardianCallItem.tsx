import UserIcon from "../../../../assets/analysis-result/user-icon.svg";

interface GuardianCallItemProps {
    isPrimary: boolean;
    icon?: string | null;
    text: string;
    phoneNumber: string;
    userName: string;
}

export const GuardianCallItem = ({ isPrimary, icon = UserIcon, text, phoneNumber, userName }: GuardianCallItemProps) => {
    if (icon === null) {
        icon = UserIcon;
    }
    const handleMsgClick = () => {
        console.log("메세지 어플리케이션 이동, 사용자 이름 : ", userName, userName.length, msgTemplate);
    }
    // eslint-disable-next-line no-useless-escape
    const primaryText = `\(가족 대표\)`
    const msgTemplate = `[Block Guard] 보호대상자(${userName.trim()}) 통화/문자에서 고위험 사기 징후 감지 즉시 확인 바랍니다`;
    const encodedMsg = encodeURIComponent(msgTemplate);
    
    return (
        <div className="w-full px-3 py-3 bg-blue-100 rounded-2xl outline-1 outline-offset-[-1px] outline-white/60 inline-flex justify-between items-center">
            <div className="flex">
                <div className="w-11 h-11 mr-1.5 flex justify-center items-center bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(67,_126,_252,_0.30)_0%,_rgba(67,_126,_252,_0)_100%)] rounded-full">
                    {<img src={icon} alt="아이콘" className="w-6 h-6" />}
                </div>
                <div className="flex flex-col gap-0.5 justify-start items-center">
                    <span className="w-full inline-flex text-slate-950 text-base font-bold leading-tight whitespace-nowrap text-ellipsis overflow-x-clip">
                        {text}{isPrimary ? primaryText : null}
                    </span>

                    <span className="self-stretch justify-start text-gray-400 text-sm font-medium font-['Pretendard'] leading-tight">
                        {phoneNumber}
                    </span>
                </div>
            </div>
            <button className="px-2.5 py-2 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-2.5">
                <a href={`sms:${phoneNumber}?body=${encodedMsg}`} className="text-center justify-center text-white text-sm font-medium leading-tight"
                    onClick={handleMsgClick}>
                    메세지 전송
                </a>
            </button>
        </div>
    )
}