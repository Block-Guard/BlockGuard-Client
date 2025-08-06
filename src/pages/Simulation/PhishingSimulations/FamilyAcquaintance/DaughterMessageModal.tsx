import MessageIcon from "@/assets/simulation/family-acquaintance/message-app-icon.svg";

export const DaughterMessageModal = () => {
    return (
        <div className="absolute top-18 translate-[2.5%] min-h-28 p-3 bg-gray-100/90 rounded-[10px] outline-1 outline-offset-[-1px] outline-zinc-300 
            flex flex-col justify-start items-start gap-3 
            w-[95%]">

            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2.5">
                    <img src={MessageIcon} alt="메세지 아이콘" />
                    <span className="text-black text-lg font-semibold leading-relaxed">
                        메시지
                    </span>
                </div>

                <span className="text-gray-500 text-base font-medium leading-normal">
                    지금
                </span>
            </div>

            <div className="flex flex-col text-black text-lg  leading-relaxed">
                <span className="font-semibold">
                    사랑하는 딸
                </span>
                <span className="font-medium">
                    엄마 이제 폰 터치하지 말고 볼일 보면돼 내가할게~
                </span>
            </div>

        </div>
    )
}