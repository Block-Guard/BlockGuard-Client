import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogFooter,
} from "../../../../../../components/ui/dialog"
import FakeAppLogo from "../../../../../../assets/simulation/loan-investment/fake-bank-app-icon.svg"
import Lottie from "lottie-react";
import ClickAnimation from "../../../../../../assets/lottie/click-black.json";
import { useRef, useState } from "react";

interface InstallFakeAppDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const InstallFakeAppDialog = ({ isOpen, setIsOpen }: InstallFakeAppDialogProps) => {
    const navigate = useNavigate();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleInstall = () => {
        if (intervalRef.current) return;
        setProgress(0);

        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                const next = prev + (100/(3));
                if (next >= 100) {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    return 100;
                }
                return next;
            });
        }, 100);

        navigate("/simulation/loan-investment/fake-app-permmision")
    };
    const [progress, setProgress] = useState(0);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90%] p-5 h-36 bg-[#E9E9EB]" showCloseButton={false}>
                <div className="flex items-center gap-10">
                    <img src={FakeAppLogo} alt="가짜 로고" />
                    <div className="flex flex-col gap-2.5">
                        <span className="text-black text-xl font-medium leading-none">
                            XX은행 대출신청
                        </span>
                        {
                            progress === 0 ? (
                                <span className="text-black text-sm font-normal leading-none">
                                    이 애플리케이션을 설치하시겠습니까?
                                </span>
                            ) : (
                                <span className="text-black text-sm font-normal leading-none">
                                    다운로드 하는 중...
                                </span>
                            )
                        }

                    </div>
                </div>

                <DialogFooter>
                    {progress === 0 ? (
                        <div className="flex justify-around">
                            <div className="text-right justify-start text-sky-500 text-base font-semibold leading-none"
                                onClick={() => setIsOpen(false)}>
                                취소
                            </div>
                            <div className="text-right justify-start text-sky-500 text-base font-semibold leading-none relative"
                                onClick={handleInstall}>
                                설치
                                <div className="absolute -top-2 -translate-[15%] flex justify-center items-center w-12 h-12 rounded-full border border-primary-400 border-dashed z-10"></div>
                                <Lottie
                                    animationData={ClickAnimation}
                                    loop
                                    autoplay
                                    className="absolute bottom-0 right-1/9 translate-[60%] w-25 pointer-events-none z-50"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <div className="w-full h-[5px] bg-neutral-200 rounded-2xl" />
                            <div
                                className="absolute w-full h-[5px] bg-primary-400 rounded-2xl transition-all duration-200"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}

                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
