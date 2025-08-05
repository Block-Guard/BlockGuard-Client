import useDelayRender from "../../../../../../hooks/useDelayRender";
import VoiceFrequency from "../../../../../../assets/simulation/phone-button-icons/voice-frequency-sign.svg";
import { useNavigate } from "react-router-dom";
import { MESSAGE_DELAY_MS } from "../../../constants/delay-ms";


const VoiceChats = [
    (<div className="w-full p-2.5 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5">
        “네 안녕하세요 고객님 XX은행 상담원 홍길동입니다. 서민 안심금융 대출상품 보고 연락 주신거 맞으실까요?
        성함이랑 주민번호 알려주시면 제가
        대출 가능 여부 확인 해드리겠습니다”
    </div>),
    (<div className="w-full p-2.5 bg-white/75 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 inline-flex flex-col justify-start items-center gap-2.5">
        “기다려주셔서 감사합니다. <br />
        고객님 대출 가능여부 확인되셨고요,<br />
        현재 고객님은 정부협약 특별 우대상품 대상자라서 신청이 가능하십니다.<br />
        제가 신청절차 도와드릴거라 지금
        문자로 신청서 파일 하나 보내드릴건데 확인 한번해주겠습니까”
    </div>),
    (
        <div className="w-full flex p-4 justify-center items-center text-center text-white" >
            화면을 클릭해 진행해주세요
        </div>
    )
]

const VoiceChatRenderer = () => {
    const navigate = useNavigate();
    const handleClickScreen = () => navigate("/simulation/loan-investment/message-app");
    const renderedChats = useDelayRender(VoiceChats, MESSAGE_DELAY_MS);
    return (
        <div className="h-[50%] flex flex-col justify-start items-start gap-2.5 mb-25" onClick={handleClickScreen}>
            <div className="flex w-full gap-5 mb-2.5">
                <div className="min-w-14 justify-start text-stone-200 text-xl font-medium">
                    상담원
                </div>
                <img src={VoiceFrequency} alt="통화 음성표" className="w-full" />
            </div>
            {renderedChats}
        </div>
    );
};

export default VoiceChatRenderer;