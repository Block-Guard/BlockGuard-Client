import ArrowRightDarkBlue from "@/assets/icons/arrow-right-darkblue-icon.svg"
import { useNavigate } from "react-router-dom";

interface FakeLoanItemProps{
    icon:string;
    title:string; 
    description: string;
}

export const FakeLoanItem = ({icon, title, description}: FakeLoanItemProps) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        if(title === "대출 신청하기")
            navigate("/simulation/loan-investment/fake-loan-invest")
        console.log("가짜 은행 상품 클릭", title);
    }
    return (
        <div className="flex justify-between items-center w-full h-25.5 px-6 py-3 bg-zinc-300/20 border-t border-sky-700">
            <div className="flex">
                <div className="flex justify-center items-center mr-6 w-20 h-20 bg-blue-100/70 rounded-full">
                    <img src={icon} alt="아이콘" />
                </div>

                <div className="flex flex-col justify-center ">
                    <div className="w-full h-9 text-slate-950 text-xl font-bold leading-normal tracking-tight">
                        {title}
                    </div>
                    <div className="w-full h-4 text-neutral-500 text-sm font-medium leading-tight">
                        {description}
                    </div>
                </div>
            </div>

            <button onClick={handleClick}>
                <img src={ArrowRightDarkBlue} alt="진행버튼" />
            </button>
        </div>
    )
}