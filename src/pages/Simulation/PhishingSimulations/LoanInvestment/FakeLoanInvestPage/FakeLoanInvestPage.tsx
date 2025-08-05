import FakeBankApp from "@/assets/simulation/loan-investment/fake-bank-app-icon.svg";
import MenuIcon from "@/assets/simulation/loan-investment/menu-button-icon.svg";
import ArrowLeftDarkBlue from "@/assets/icons/arrow-left-darkblue-icon.svg";
import { useNavigate } from "react-router-dom";
import { LoanInfoInput } from "./components/LoanInfoInput";
import { useState } from "react";
import { loanInputInfoList } from "../constant";
import Button from "../../../../../components/Button/Button";
import Lottie from "lottie-react";
import ClickAnimation from "../../../../../assets/lottie/click-black.json";
import { FakeLoanModal } from "./components/FakeLoanModal";

const FakeLoanInvestPage = () => {
  const navigate = useNavigate();
  const [switches, setSwitches] = useState(
    Array(loanInputInfoList.length).fill(false)
  );
  const [isReminded, setIsReMinded] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAutoFilled, setIsAutoFilled] = useState(false);

  const [inputValues, setInputValues] = useState(
    loanInputInfoList.map(() => "")
  );

  const toggleOne = (id: number) => {
    setSwitches((prev) => {
      const copy = [...prev];
      copy[id] = !copy[id];
      return copy;
    });
  };

  const handleAutoFill = () => {
    setSwitches(Array(loanInputInfoList.length).fill(true));
    setInputValues(loanInputInfoList.map((item) => item.example));
    setIsAutoFilled(true);
  };

  const handleBtnClick = () => {
    if (!isAutoFilled) {
      /** 전부 내용이 없는 경우, 리마인드 */
      setIsReMinded(true);
    } else {
      /** 전부 내용이 있는 경우 팝업 */
      setIsQuizOpen(true);
    }
  };
  const handleBackClick = () =>
    navigate("/simulation/loan-investment/fake-app-home");
  return (
    <div className="h-[100vh]">
      <FakeLoanModal isQuizOpen={isQuizOpen} resetPage={setIsQuizOpen} />
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center h-[87px] px-6 py-4.5 z-50 bg-white">
        <div className="flex items-center gap-3">
          <img src={FakeBankApp} alt="앱아이콘" className="w-16 h-16" />
          <div className="justify-start text-black text-xl font-bold leading-normal">
            XX은행
          </div>
        </div>
        <div>
          <img src={MenuIcon} alt="가짜메뉴버튼" className="w-11 h-11" />
        </div>
      </header>
      <div className="flex justify-start items-center w-full h-16 mt-[87px] px-6 py-7.5 gap-3 bg-zinc-100 border-b border-neutral-400">
        <button onClick={handleBackClick}>
          <img src={ArrowLeftDarkBlue} alt="뒤로가기" className="w-2.5 h-5" />
        </button>
        <span className="justify-start text-neutral-700 text-xl font-semibold leading-loose">
          대출신청
        </span>
      </div>
      <div className="flex flex-col p-6 gap-5">
        {loanInputInfoList.map((info) => {
          return (
            <div className="relative">
              <LoanInfoInput
                label={info.label}
                placeholder={info.placeholder}
                inputState={switches[info.id]}
                inputStateSetter={() => toggleOne(info.id)}
                handlAutoFill={info.id === 0 ? handleAutoFill : undefined}
                isReminded={isReminded}
                value={inputValues[info.id]}
                onChangeValue={(val: string) => {
                  const newValues = [...inputValues];
                  newValues[info.id] = val;
                  setInputValues(newValues);
                }}
                key={info.id}
              />
            </div>
          );
        })}
      </div>
      {!isAutoFilled && (
        <Lottie
          animationData={ClickAnimation}
          loop
          autoplay
          className="absolute top-48 left-8 w-25 pointer-events-none z-40"
        />
      )}
      <div className="p-6 mt-[57px] relative">
        <Button onClick={handleBtnClick} size="lg" isHighlight={false}>
          신청하기
        </Button>
        {isAutoFilled && !isQuizOpen ? (
          <Lottie
            animationData={ClickAnimation}
            loop
            autoplay
            className="absolute left-50 bottom-10 translate-[50%] w-25 pointer-events-none"
          />
        ) : null}
      </div>
    </div>
  );
};

export default FakeLoanInvestPage;
