import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import ClickAnimation from "../../../../assets/lottie/click-black.json";
import { useEffect, useRef, useState } from "react";
import { MESSAGE_DELAY_MS } from "../constants/delay-ms";
import ReceivedMessage from "../../../../components/SimulationMessage/ReceivedMessage";
import SelectSendMessage from "../../../../components/SimulationMessage/SelectSendMessage";
import { familyAcquaintanceMsg } from "../constants/familyAcquaintanceMsg";

import IdCardDummy from "../../../../assets/simulation/family-acquaintance/idcard-dummy-image.svg"
import CreditCardDummy from "../../../../assets/simulation/family-acquaintance/credit-card-dummy-image.svg"

const DaughterMessagePage = () => {
    const navigate = useNavigate();
    const handleClickLink = () => navigate("/simulation/family-acquaintance/remote-app");

    const [step, setStep] = useState<number | undefined>();
    const [selectedFirstStepAnswer, setSelectedFirstStepAnswer] = useState(0);
    const [selectedSecondStepAnswer, setSelectedSecondStepAnswer] = useState(0);
    const [selectedThirdStepAnswer, setSelectedThirdStepAnswer] = useState(0);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(0);
        }, MESSAGE_DELAY_MS);
        return () => clearTimeout(timer);
    }, []);

    const onClickFirstStep = (selected: number) => {
        if (selectedFirstStepAnswer === 0) {
            setSelectedFirstStepAnswer(selected);
            const timer = setTimeout(() => {
                setStep(2);
            }, MESSAGE_DELAY_MS);
            return () => clearTimeout(timer);
        }
    };

    const onClickSecondStep = (selected: number) => {
        if (selectedSecondStepAnswer === 0) {
            setSelectedSecondStepAnswer(selected);
            const timer = setTimeout(() => {
                setStep(5);
            }, MESSAGE_DELAY_MS);
            return () => clearTimeout(timer);
        }
    };

    const onClickThirdStep = (selected: number) => {
        if (selectedThirdStepAnswer === 0) {
            setSelectedThirdStepAnswer(selected);
            const timer = setTimeout(() => {
                setStep(6);
            }, MESSAGE_DELAY_MS);
            return () => clearTimeout(timer);
        }
    };

    useEffect(() => {
        // 타이머가 필요한 step들을 배열로 관리
        const stepsWithDelay = [0, 2, 4, 6, 7, 8, 9];

        if (typeof step === 'number' && stepsWithDelay.includes(step)) {
            const timer = setTimeout(() => {
                setStep(step + 1);
            }, MESSAGE_DELAY_MS);

            return () => clearTimeout(timer);
        }
    }, [step, setStep]);

    useEffect(() => {
        // step이 바뀐 후 렌더가 완료되면 스크롤
        const timeout = setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return () => clearTimeout(timeout);
    }, [step]);


    return (
        step !== undefined && (
            <div className="w-full flex flex-col items-center">

                <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
                    10월 30일 (화) 오전 9:41
                </p>
                <div className="w-full flex flex-col gap-[20px] px-[15px]">
                    <ReceivedMessage content={familyAcquaintanceMsg.step0} />

                    {step >= 1 && (
                        <SelectSendMessage
                            option1={familyAcquaintanceMsg.step1.answer1}
                            option2={familyAcquaintanceMsg.step1.answer2}
                            option3={familyAcquaintanceMsg.step1.answer3}
                            selectedOption={selectedFirstStepAnswer}
                            handleToSelectOption={onClickFirstStep}
                        />
                    )}

                    {step >= 2 && <ReceivedMessage content={familyAcquaintanceMsg.step2} />}

                    {step >= 3 && <SelectSendMessage
                        option1={familyAcquaintanceMsg.step3.answer1}
                        option2={familyAcquaintanceMsg.step3.answer2}
                        option3={familyAcquaintanceMsg.step3.answer3}
                        selectedOption={selectedSecondStepAnswer}
                        handleToSelectOption={onClickSecondStep}
                    />}

                    {step >= 4 && <ReceivedMessage content={familyAcquaintanceMsg.step4} />}
                    {step >= 5 && <SelectSendMessage
                        option1={familyAcquaintanceMsg.step5.answer1}
                        option2={familyAcquaintanceMsg.step5.answer2}
                        option3={familyAcquaintanceMsg.step5.answer3}
                        selectedOption={selectedThirdStepAnswer}
                        handleToSelectOption={onClickThirdStep}
                    />}

                    {step >= 6 &&
                        <div className="flex flex-col justify-center items-end gap-1.5">
                            <div className="flex flex-col justify-end items-end max-w-[300px] h-48 px-3.5 py-2.5 bg-blue-100 rounded-[20px] gap-2.5">
                                <img className="w-64 h-40" src={IdCardDummy} />
                            </div>
                        </div>
                    }

                    {step >= 7 &&
                        <div className="flex flex-col justify-center items-end gap-1.5">
                            <div className="flex justify-end items-end max-w-[300px] h-48 px-3.5 py-2.5 bg-blue-100 rounded-[20px] gap-2.5">
                                <img className="w-64 h-40" src={CreditCardDummy} />
                            </div>
                        </div>
                    }

                    {step >= 8 && <ReceivedMessage content={familyAcquaintanceMsg.step6} />}

                    {step >= 9 &&
                        <div className="relative">
                            <ReceivedMessage content={familyAcquaintanceMsg.step7} />

                            <Lottie
                                animationData={ClickAnimation}
                                loop
                                autoplay
                                className="absolute top-0 left-40 translate-[35%] w-25 z-50"
                                onClick={handleClickLink}
                            />
                        </div>
                    }


                    <div ref={bottomRef} />
                </div>
            </div>
        )
    )
}

export default DaughterMessagePage;