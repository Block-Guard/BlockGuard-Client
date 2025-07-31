import FakeAppLogo from "@/assets/simulation/loan-investment/fake-bank-app-logo.svg"
import FakeAppText from "@/assets/simulation/loan-investment/fake-bank-app-text-img.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const FakeAppLandingPage = ()=>{
    const navigate = useNavigate();
    const loadNextPage = () => navigate("/simulation/loan-investment/fake-app-home")
    useEffect(()=>{
        setTimeout(loadNextPage, 1000);
    }, [])
    return(
        <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#0154AA]">
            <img src={FakeAppLogo} alt="가짜어플로고" className="w-44 h-44"/>
            <img src={FakeAppText} alt="가짜어플이름" className="w-40 h-16 relative -left-2 mb-13.5"/>
            <div className="w-full h-7 text-center text-white text-xl font-semibold leading-none">
                믿을 수 있는 자산관리 금융그룹 
            </div>
        </div>
    )
}

export default FakeAppLandingPage;