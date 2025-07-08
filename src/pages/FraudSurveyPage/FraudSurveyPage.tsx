import { useState } from "react";
import Button from "../../components/Button/Button";
import SurveyButton from "./components/SurveyButton";

const FraudSurveyPage = () => {
    const [selectedItem, setSelectedItem] = useState("");

    return (
        <div className="w-full px-6">
            <div>
                상단바
            </div>
            <div>
                프로그래스 바
            </div>

            <div className="self-stretch justify-start">
                <span className="text-slate-950 text-2xl font-bold font-['Pretendard'] leading-9">
                    어떤 요청을 받으셨나요?
                </span>
                <span className="text-red-500 text-2xl font-bold font-['Pretendard'] leading-9">
                    *
                </span>
            </div>
            <SurveyButton selectedItem={selectedItem} text="문자" setSelctedItem={setSelectedItem} />
            <SurveyButton selectedItem={selectedItem} text="전화" setSelctedItem={setSelectedItem} />
            <SurveyButton selectedItem={selectedItem} text="메신저" setSelctedItem={setSelectedItem} />
            <SurveyButton selectedItem={selectedItem} text="기타" setSelctedItem={setSelectedItem} />

            <Button onClick={() => { }} size="lg" isHighlight={false} disabled={selectedItem === ""}>
                다음
            </Button>
        </div>
    )
}

export default FraudSurveyPage;