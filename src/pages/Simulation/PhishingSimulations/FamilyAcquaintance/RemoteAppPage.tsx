import Header from "../../../../components/Header/Header";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import CloseIcon from "@/assets/icons/close-darkblue-icon.svg";
import { LucideArrowLeft } from "lucide-react";
import { LucideArrowRight } from "lucide-react";
import { LucideRefreshCcw } from "lucide-react";
import LockIcon from "../../../../assets/simulation/family-acquaintance/lock-icon.svg"
import { useNavigate } from "react-router-dom";
import { RemoteAppPermissionModal } from "./RemoteAppPermissionModal";
import { useState } from "react";
import ClickAnimation from "../../../../assets/lottie/click-black.json";
import Lottie from "lottie-react";
const RemoteAppPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleBackClick = () => { navigate("/simulation/family-acquaintance/family-message") }
    const handleCloseClick = () => { navigate("/simulation/select-type") }
    const handleSendId = () => { setIsModalOpen(true) }

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

            <main className="flex flex-col items-center w-full h-full  mt-[68px]">
                <div className="w-full h-16 pl-6 pr-4 py-4 bg-[#0094FF] inline-flex justify-start items-center gap-10">
                    <div className="justify-start text-white text-xl font-semibold leading-none">
                        TeamViewer QuickSupport
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full bg-[#E5E5E5] pt-11 pb-4 gap-[20px]">
                    <div className=" text-zinc-700 text-xl font-medium leading-none">
                        이 장치에 연결하는 방법
                    </div>

                    <div className="w-72 h-36 border border-black">
                        <div className="flex justify-between items-center w-full h-10 p-2.5 border-b-1 border-black">
                            <div className="flex gap-1">
                                <LucideArrowLeft />
                                <LucideArrowRight />
                                <LucideRefreshCcw />
                            </div>

                            <div className="flex items-center h-5 border gap-1 px-1 border-black">
                                <img src={LockIcon} alt="아이콘"
                                    className="w-2.5 h-2.5" />
                                <span className="text-[#0080FF] text-xs font-normal leading-none">
                                    https://start.teamviewer.com
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center justify-start">
                        <span className="text-zinc-700/70 text-lg font-medium leading-none">
                            다른 기기에서<br />
                        </span>
                        <span className="text-zinc-700/70 text-lg font-normal leading-none">
                            https://start.teamviewer.com<br />
                        </span>
                        <span className="text-zinc-700/70 text-lg font-medium leading-none">
                            으로 이동하십시오. <br />
                        </span>
                    </div>

                    <div className="w-8 h-1.5 relative mt-4">
                        <div className="w-1.5 h-1.5 left-0 top-0 absolute bg-sky-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[13px] top-0 absolute bg-neutral-500 rounded-full" />
                        <div className="w-1.5 h-1.5 left-[26px] top-0 absolute bg-neutral-500 rounded-full" />
                    </div>
                </div>
                <div className="flex flex-col items-center min-h-68 bg-white py-12.5 gap-12">

                    <div className="w-full flex justify-center items-center gap-4">
                        <span className="text-center text-zinc-700/70 text-xl font-medium leading-none">
                            귀하의 ID
                        </span>
                        <span className="text-black text-4xl font-normal leading-none">
                            588 472 999
                        </span>
                    </div>

                    <div className="relative">
                        <button className="w-40 h-10 bg-[#0094FF] text-white text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                            onClick={handleSendId}>
                            내 ID 전송...
                        </button>
                        <Lottie
                            animationData={ClickAnimation}
                            loop
                            autoplay
                            className="absolute -bottom-2 left-8 translate-[45%] w-25 z-50 pointer-events-none"
                        />
                    </div>

                </div>

                <div className="flex justify-start items-center gap-2.5 w-full h-16 border-t-2 p-6 text-center">
                    <div className="w-2 h-2 bg-lime-600 rounded-full" />
                    연결(보안 연결)할 준비가 되었습니다.
                </div>
            </main>
            <RemoteAppPermissionModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    )
}

export default RemoteAppPage;