import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import ClickAnimation from "../../../../assets/lottie/click-black.json";
import useDelayRender from "../../../../hooks/useDelayRender";
import { useEffect, useRef, useState } from "react";
import { MESSAGE_DELAY_MS } from "../constants/delay-ms";
import ReceivedMessage from "../../../../components/SimulationMessage/ReceivedMessage";
import SelectSendMessage from "../../../../components/SimulationMessage/SelectSendMessage";
import { familyAcquaintanceMsg } from "../constants/familyAcquaintanceMsg";

import IdCardDummy from "../../../../assets/simulation/family-acquaintance/idcard-dummy-image.svg"
import CreditCardDummy from "../../../../assets/simulation/family-acquaintance/credit-card-dummy-image.svg"

const DaughterMessagePage = () => {
    const [isAllLoaded, setIsAllLoaded] = useState(false);
    const navigate = useNavigate();
    const handleClickLink = () => navigate("/simulation/family-acquaintance/remote-app");

    // const handleOption = (stepId) =>{
    //     if(userAnswer[stepId] === 3){

    //     }
    // }

    const FakeMessages = [
        <div>
            123
        </div>
    ]

    const renderedMessages = useDelayRender(FakeMessages, MESSAGE_DELAY_MS);

    const [userAnswer, setUserAnswer] = useState([0, 0, 0]);

    const bottomRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsAllLoaded(true);
    //     }, 7500);
    // }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [renderedMessages]);


    return (
        <div className="w-full flex flex-col items-center">

            <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
                10월 30일 (화) 오전 9:41
            </p>
            <div className="w-full flex flex-col gap-[20px] px-[15px]">


                <ReceivedMessage content={familyAcquaintanceMsg.step0} />

                <SelectSendMessage
                    option1={familyAcquaintanceMsg.step1.answer1}
                    option2={familyAcquaintanceMsg.step1.answer2}
                    option3={familyAcquaintanceMsg.step1.answer3}
                    selectedOption={userAnswer[0]}
                    handleToSelectOption={handleOption}
                />

                <ReceivedMessage content={familyAcquaintanceMsg.step2} />

                <SelectSendMessage
                    option1={familyAcquaintanceMsg.step3.answer1}
                    option2={familyAcquaintanceMsg.step3.answer2}
                    option3={familyAcquaintanceMsg.step3.answer3}
                    selectedOption={userAnswer[1]}
                    handleToSelectOption={() => { }}
                />

                <ReceivedMessage content={familyAcquaintanceMsg.step4} />
                <SelectSendMessage
                    option1={familyAcquaintanceMsg.step5.answer1}
                    option2={familyAcquaintanceMsg.step5.answer2}
                    option3={familyAcquaintanceMsg.step5.answer3}
                    selectedOption={userAnswer[2]}
                    handleToSelectOption={() => { }}
                />

                <div className="flex flex-col justify-center items-end gap-1.5">
                    <div className="flex flex-col justify-end items-end max-w-[300px] h-48 px-3.5 py-2.5 bg-blue-100 rounded-[20px] gap-2.5">
                        <img className="w-64 h-40" src={IdCardDummy} />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-end gap-1.5">
                    <div className="flex justify-end items-end max-w-[300px] h-48 px-3.5 py-2.5 bg-blue-100 rounded-[20px] gap-2.5">
                        <img className="w-64 h-40" src={CreditCardDummy} />
                    </div>
                </div>

                <ReceivedMessage content={familyAcquaintanceMsg.step6} />

                <div className="relative">
                    <ReceivedMessage content={familyAcquaintanceMsg.step7} />

                    <Lottie
                        animationData={ClickAnimation}
                        loop
                        autoplay
                        className="absolute top-0 right-1/2 translate-[35%] w-25 z-50"
                        onClick={handleClickLink}
                    />
                </div>


                 <div ref={bottomRef} />
            </div>
        </div>
    )
}

export default DaughterMessagePage;