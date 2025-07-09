import { useNavigate } from "react-router-dom";

const FraudLandingPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/fraud-analysis/survey")
    }
    return (
        <div className="w-full h-full relative p-6 bg-primary-400 rounded-bl-[20px] rounded-br-[20px]"
            onClick={handleClick}>

            <div className="text-white text-3xl font-extrabold leading-loose">
                AI 사기유형 진단 서비스
            </div>

            <div className="text-gray-200 text-lg font-normal leading-relaxed">
                의심스러운 연락을 받았다면
                지금 피싱여부를 진단해보세요!
            </div>

            <img
                src="/homeBackgroundShield.svg"
                className="absolute right-0 top-33"
            />

            <div className="w-full mt-35 mb-5 text-white text-xl font-medium leading-normal">
                ‘AI 사기유형 진단 서비스’는 피싱 상황이 의심될 때
                대화 내용 분석을 통해 위험 상황을 판단해 주는 서비스예요.
            </div>
            <div className="w-full text-white text-xl font-medium leading-normal">
                분석을 위해 진행되는 사전 설문을 꼼꼼히 입력해 주실수록
                진단의 정확도가 올라가요.
            </div>

            <div className="absolute bottom-40 right-10">
                <img src="/Blockee-cropped-fit.svg" width="144px" height="126px" />
            </div>

            <div className="flex justify-center relative top-70 text-white/50 text-xl font-semibold leading-loose">
                화면을 터치하여 시작하세요!
            </div>
        </div >
    )
}

export default FraudLandingPage;