import { useEffect, useRef, useState } from "react";
import { formatCallTime } from "../../../../../utils/formatCallTime";
import OnThePhoneComponentExtend from "./components/OnThePhoneComponentExtend";
import { useNavigate } from "react-router-dom";
import VoiceChatRenderer from "./components/VoiceChat";
const BankerCallPage = () => {
    const [callTime, setCallTime] = useState(0);
    const [isNavigated, setIsNavigated] = useState(false);
    const navigate = useNavigate();

    const arsVoice = "/sounds/iphone-ringtone.mp3";
    const arsRef = useRef<HTMLAudioElement | null>(null);
    const policeVoice = "/sounds/police-voice-exam.mp3";
    const voiceRef = useRef<HTMLAudioElement | null>(null);

    // 벨소리 재생
    useEffect(() => {
        arsRef.current = new Audio(arsVoice);
        arsRef.current.play().catch((error) => {
            console.error("ARS 음성 로드 실패", error);
        });

        return () => {
            arsRef.current?.pause();
            arsRef.current = null;
        };
    }, []);

    // 0번 키패드 클릭 시 화면이 변경되며 경찰 음성 재생됨
    const onClickArsRespond = () => {
        setIsNavigated(true);
        if (arsRef.current) {
            arsRef.current.pause();
            arsRef.current.currentTime = 0;
        }
        // 가짜 은행원 음성 재생
        const voice = new Audio(policeVoice);
        voiceRef.current = voice;
        voice.play().catch((error) => {
            console.error("가짜 은행원 음성 로드 실패", error);
        });

        // 음성 재생이 끝나면 이동
        voice.onended = () => {
            voiceRef.current = null;
            navigate("/simulation/loan-investment/message-app");
        };
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCallTime((prev) => prev + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [callTime]);

    
    return (
        <div className="h-dvh flex flex-col justify-between items-center px-10 pb-[34px]">
            <div className="pt-18 flex flex-col text-monochrome-100 text-center">
                <span className="text-2xl font-medium h-[29px]">
                    {formatCallTime(callTime)}
                </span>
                <span className="text-[44px] font-semibold">02-851-5396</span>
            </div>
            {/* 키패드 0번 누르면 음성 시작 */}
            {isNavigated ? (
                /** 은행원 음성 메세지 시간 차 렌더링 */
                <VoiceChatRenderer />

            ) : (
                <OnThePhoneComponentExtend needsKeypad={true} handleClick={onClickArsRespond} />
            )}
        </div>
    );
};

export default BankerCallPage;
