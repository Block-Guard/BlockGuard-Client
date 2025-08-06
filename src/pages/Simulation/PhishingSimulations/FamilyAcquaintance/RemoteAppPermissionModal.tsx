import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
} from "../../../../components/ui/dialog"
import Lottie from "lottie-react";
import ClickAnimation from "../.../../../../../assets/lottie/click-black.json";

interface RemoteAppPermissionModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const RemoteAppPermissionModal = ({ isOpen, setIsOpen }: RemoteAppPermissionModalProps) => {
    const navigate = useNavigate();
    const handleAccpetRemote = () => navigate("/simulation/family-acquaintance/after-remote");

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90%] pt-9 py-11 pb-6 h-44 bg-[#E9E9EB] rounded-none" showCloseButton={false}>
                <div className="flex items-center gap-10">
                    <div className="flex flex-col gap-5">
                        <span className="text-black text-xl font-medium leading-none">
                            원격 지원을 허용하시겠습니까?
                        </span>
                        <span className="text-black text-lg font-normal leading-none">
                            ‘피싱범1234’Android 장치를 원격 지원하도록 허용하시겠습니까?
                        </span>

                        <div className="flex justify-end gap-5 relative">
                        <div className="text-right justify-start text-[#0080FF] text-base font-semibold leading-none">
                            거부
                        </div>
                        <div className="text-right justify-start text-[#0080FF] text-base font-semibold leading-none relative"
                            onClick={handleAccpetRemote}>
                            허용
                        </div>
                        <Lottie
                            animationData={ClickAnimation}
                            loop
                            autoplay
                            className="absolute -top-15 -right-5 translate-[35%] w-25 z-50 pointer-events-none"
                        />
                    </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
