import Lottie from "lottie-react";
import { MessageContent } from "./components/MessageContent";
import ClickAnimation from "../../../../../assets/lottie/click-black.json";
import { useNavigate } from "react-router-dom";

const FakeAdMessagePage = () => {
    const navigate = useNavigate();
    const handleClickNumber = () => navigate("/simulation/loan-investment/call-app");
    return (
        <div className="w-full flex flex-col items-center">
            <div className="absolute top-17 w-12 h-12 rounded-full border border-primary-400 border-dashed z-50" 
                onClick={handleClickNumber}/>
            <Lottie
                animationData={ClickAnimation}
                loop
                autoplay
                className="absolute top-5 right-1/2 translate-[65%] w-25 pointer-events-none z-50"
              />
            <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
                10월 30일 (화) 오전 9:41
            </p>
            <div className="w-full flex flex-col gap-[30px] px-[15px]">
                <div className="whitespace-pre-line p-[10px] max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                    <MessageContent/>
                </div>
            </div>
        </div>
    )
}

export default FakeAdMessagePage;