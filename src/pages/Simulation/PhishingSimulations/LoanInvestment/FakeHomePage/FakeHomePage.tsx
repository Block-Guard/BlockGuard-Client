import FakeBankApp from "@/assets/simulation/loan-investment/fake-bank-app-icon.png";
import MenuIcon from "@/assets/simulation/loan-investment/menu-button-icon.svg";
import FakeLoanImg from "@/assets/simulation/loan-investment/fake-loan-img.svg";
import { FakeLoanItem } from "./components/FakeLoanItem";
import { fakeLoanTiemList } from "../constant";
import Lottie from "lottie-react";
import ClickAnimation from "../../../../../assets/lottie/click-black.json";
const FakeHomePage = () => {
  return (
    <div className="flex flex-col h-dvh overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center h-[87px] px-6 py-4.5 z-50 bg-white">
        <div className="flex items-center gap-3">
          <img src={FakeBankApp} alt="앱아이콘" className="w-16 h-16" />
          <div className="justify-start text-black text-xl font-bold font-['Pretendard'] leading-normal">
            XX은행
          </div>
        </div>
        <div>
          <img src={MenuIcon} alt="가짜메뉴버튼" className="w-11 h-11" />
        </div>
      </header>

      <div className="relative">
        <div className="w-full h-2 bg-[#0154AA] mt-[87px] mb-10" />
        <div className="absolute top-16 z-0 -right-1 flex justify-center items-end origin-top-left rotate-[9.45deg] rounded-[6px] w-28 h-17 bg-[#0154AA] py-1">
          <div className="origin-top-left justify-start text-white text-2xl font-bold leading-9">
            youth
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center flex-grow">
        <div className="flex gap-2 px-5.5">
          <div className=" text-[#0154AA] text-5xl font-bold leading-[67.50px]">
            i-ONE
          </div>
          <img src={FakeLoanImg} />
        </div>

        <div className="justify-start px-5.5 mb-9 whitespace-nowrap text-ellipsis">
          <span className="text-green-600 text-2xl font-semibold leading-10">
            i-ONE 뱅크 업으로 쉽고 빠르게!
            <br />
          </span>
          <span className="text-green-600 text-xl font-semibold leading-loose tracking-wide">
            -대학(원)생, 미취업청년, 사회초년생 대상
          </span>
        </div>
      </div>

      <div className="flex justify-center w-full h-20 bg-[#0154AA] py-3.5 px-15.5 gap-3 whitespace-nowrap text-ellipsis">
        <div className="relative top-1 h-7 inline-flex items-center text-white text-base font-semibold leading-normal">
          믿을 수 있는 자산관리
        </div>
        <div className="h-14 inline-flex items-center text-white text-4xl font-bold leading-10">
          XX은행
        </div>
      </div>

      {fakeLoanTiemList.map((loanItem) => {
        return (
          <div className="relative" key={loanItem.id}>
            <FakeLoanItem
              icon={loanItem.icon}
              title={loanItem.title}
              description={loanItem.description}
              key={loanItem.id}
            />
            {loanItem.id === 2 ? (
              <Lottie
                animationData={ClickAnimation}
                loop
                autoplay
                className="absolute right-4 bottom-8 translate-[50%] w-25 pointer-events-none"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default FakeHomePage;
