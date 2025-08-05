import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "@/assets/icons/close-darkblue-icon.svg";
import UserIcon from "@/assets/simulation/family-acquaintance/user-in-square-icon.svg";
import { DaughterMessageModal } from "./DaughterMessageModal";
import { useEffect, useState } from "react";
import { FamilyAcquaintanceModal } from "./FamilyAcquaintanceModal";

const AfterRemotePage = () => {
    const navigate = useNavigate();
    const [isMessaged, setIsMessaged] = useState(false);
    const [isQuizOpen, setIsQuisOpen] = useState(false);
    const handleBackClick = () => { navigate("/simulation/family-acquaintance/family-message") }
    const handleCloseClick = () => { navigate("/simulation/select-type") }
    const handleQuizOpen = () => setIsQuisOpen(true);

    useEffect(() => {
        setTimeout(() => {
            setIsMessaged(true);
        }, 2000);

        // 별도 클릭 없이 퀴즈 팝업
        // setTimeout(() => {
        //     setIsQuisOpen(true);
        // }, 5000);
    }, [])

    return (
        <div className="relative flex flex-col justify-between w-full h-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img
                            src={LeftArrowIcon}
                            alt="뒤로가기"
                            className="py-[5.5px] pr-1"
                        />
                    </button>
                }
                rightChild={
                    <button onClick={handleCloseClick}>
                        <img src={CloseIcon} alt="창닫기" />
                    </button>
                }
                bgColor="#fff"
            />
            <div className="mt-[68px] w-full h-16 pl-6 pr-4 py-4 bg-[#0094FF] inline-flex justify-start items-center gap-10">
                <div className="justify-start text-white text-xl font-semibold leading-none">
                    TeamViewer QuickSupport
                </div>
            </div>
            {
                isMessaged &&
                <DaughterMessageModal />
            }
            <FamilyAcquaintanceModal isQuizOpen={isQuizOpen} resetPage={setIsQuisOpen} />

            <main className="flex flex-col items-start w-full h-full bg-[#E5E5E5] gap-2.5 p-6">

                <div className="max-w-65 h-28 px-3.5 py-2.5 bg-white flex flex-col justify-center items-center gap-2.5">
                    <div className="flex gap-4">
                        <img src={UserIcon} alt="아이콘" />
                        <span className="justify-start text-black text-lg font-normal leading-relaxed">
                            피싱범1234이(가) 장치에 연결했습니다...
                        </span>
                    </div>

                    <div className="w-full text-right flex justify-end items-end text-zinc-800 text-sm font-medium leading-snug">
                        오후 12:30
                    </div>
                </div>

                <div className="w-full justify-start text-zinc-700 text-lg font-medium leading-relaxed">
                    화면 공유 작동 중
                </div>

                {/* 자동으로 넘어가게 할 시 제거 */}
                {isMessaged &&
                    <div className="w-full h-full flex p-4 justify-center items-center text-center text-monochrome-600"
                        onClick={handleQuizOpen} >
                        화면을 클릭해 진행해주세요
                    </div>}
            </main>

        </div>
    )
}

export default AfterRemotePage;