import Lottie from "lottie-react";
import useDelayRender from "../../../../../hooks/useDelayRender";
import ClickAnimation from "../../../../../assets/lottie/click-black.json";
import FakeProfile from "../../../../../assets/simulation/loan-investment/fake-banker-profile.svg";
import DownLoadIcon from "../../../../../assets/simulation/loan-investment/download-blue-icon.svg";
import { InstallFakeAppDialog } from "./components/InstallFakeAppDialog";
import { useEffect, useRef, useState } from "react";
import { MESSAGE_DELAY_MS } from "../../constants/delay-ms";

const BankerMessagePage = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  const FakeMessages = [
    <div key={1} className="w-full flex flex-col gap-[30px] px-[15px]">
      <div className="whitespace-pre-line p-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
        안녕하세요~ <br />
        XX은행 상담원 OOO입니다. <br />
        고객님께서 문의주신 대출신청 상담문의 안내드립니다^^
      </div>
    </div>,
    <div key={2} className="w-full flex flex-col gap-[30px] px-[15px]">
      <img src={FakeProfile} alt="가짜프로필" className="w-40 h-44" />
    </div>,
    <div key={3} className="w-full flex items-center gap-[10px] px-[15px]">
      <div className="h-20 flex flex-col justify-between whitespace-pre-line px-4 py-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
        <div className="w-full text-monochrome-700 text-base font-normal leading-tight">
          XX은행 대출신청서.ZIP
        </div>
        <div className="w-full text-gray-500 text-[11px] font-normal leading-3">
          유효기간: ~2025.12.05
          <br />
          용량: 6.65 MB
        </div>
      </div>
      <div className="relative">
        <button className="flex justify-center items-center w-7 h-7 bg-[#e9e9eb] rounded-full border-[0.30px] border-neutral-400/40">
          <img src={DownLoadIcon} alt="다운로드" className="" />
        </button>
      </div>
    </div>,
    <div key={4} className="w-full flex flex-col gap-[30px] px-[15px] mb-3">
      <div className="whitespace-pre-line p-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
        1. XX어플 설치파일 클릭 후 압축풀기
        <br />
        2. XX은행 화면 나오시면 하단 다운로드
        <br />
        3. 다운로드 완료 후 설치
        <br />
        4. 설치 완료 후 접근권한 허용
        <br />
        (접근성-설치된 서비스-XX은행 어플 모든접근권한 허용 )<br />
        5.화면 나오시면 좌측아래 ‘대출 신청하기’ 버튼 클릭 후 신청서 작성
        해주세요^^
      </div>
    </div>,
  ];

  const [renderedMessages, isDone] = useDelayRender(
    FakeMessages,
    MESSAGE_DELAY_MS
  );

  const handleOpenDialog = () => {
    if (isDone) setIsOpenDialog(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsAllLoaded(true);
    }, 7500);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [renderedMessages]);

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
        10월 30일 (화) 오전 9:41
      </p>
      <div className="w-full flex flex-col gap-4 px-[15px] relative">
        {renderedMessages}
        {isOpenDialog || !isAllLoaded ? null : (
          <Lottie
            animationData={ClickAnimation}
            loop
            autoplay
            className="absolute top-70 left-36 translate-[60%] w-25 z-50"
            onClick={handleOpenDialog}
          />
        )}
        {/* 바텀 스크롤 타겟 */}
        <div ref={bottomRef} />
      </div>

      <InstallFakeAppDialog isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />
    </div>
  );
};

export default BankerMessagePage;
