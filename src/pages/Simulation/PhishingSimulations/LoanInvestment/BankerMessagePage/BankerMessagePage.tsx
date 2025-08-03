import Lottie from "lottie-react";
import useDelayRender from "../../../../../hooks/useDelayRender";
import ClickAnimation from "../../../../../assets/lottie/click-black.json";
import FakeProfile from "../../../../../assets/simulation/loan-investment/fake-banker-profile.svg";
import DownLoadIcon from "../../../../../assets/simulation/loan-investment/download-blue-icon.svg";
import { InstallFakeAppDialog } from "./components/InstallFakeAppDialog";
import { useState } from "react";


const BankerMessagePage = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const FakeMessages = [
        (
            <div className="w-full flex flex-col gap-[30px] px-[15px]">
                <div className="whitespace-pre-line p-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                    안녕하세요~ <br />
                    XX은행 상담원 홍길동입니다. <br />
                    고객님께서 문의주신 대출신청 상담문의 안내드립니다^^
                </div>
            </div>

        ),
        (
            <div className="w-full flex flex-col gap-[30px] px-[15px]">
                <img src={FakeProfile} alt="가짜프로필" className="w-40 h-44" />
            </div>
        ),
        (
            <div className="w-full flex items-center gap-[10px] px-[15px]">
                <div className="h-20 flex flex-col justify-between whitespace-pre-line px-4 py-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                    <div className="w-full text-monochrome-700 text-base font-normal leading-tight">
                        XX은행 대출신청서.ZIP
                    </div>
                    <div className="w-full text-gray-500 text-[11px] font-normal leading-3">
                        유효기간: ~2025.12.05<br />
                        용량: 6.65 MB
                    </div>
                </div>

                <div className="relative">
                    <div className="flex justify-center items-center w-12 h-12 rounded-full border border-primary-400 border-dashed z-10">
                        <button className="flex justify-center items-center w-7 h-7 bg-[#e9e9eb] rounded-full border-[0.30px] border-neutral-400/40"
                            onClick={() => setIsOpenDialog(true)}>
                            <img src={DownLoadIcon} alt="다운로드" className="" />
                        </button>
                    </div>

                    <Lottie
                        animationData={ClickAnimation}
                        loop
                        autoplay
                        className="absolute bottom-0 right-1/9 translate-[50%] w-25 pointer-events-none z-50"
                    />
                </div>
            </div>
        ),
        (
            <div className="w-full flex flex-col gap-[30px] px-[15px]">
                <div className="whitespace-pre-line p-3 max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
                    1. XX어플 설치파일 클릭 후 압축풀기<br />
                    2. XX은행 화면 나오시면 하단 다운로드<br />
                    3. 다운로드 완료 후 설치<br />
                    4. 설치 완료 후 접근권한 허용<br />
                    (접근성-설치된 서비스-XX은행 어플 모든접근권한 허용 )<br />
                    5.화면 나오시면  좌측아래 ‘대출 신청하기’ 버튼 클릭 후 신청서 작성 해주세요^^
                </div>
            </div>
        ),
        (
            <div className="flex flex-col justify-center items-end gap-1.5">
                <div className="px-3.5 py-2.5 bg-blue-100 rounded-[20px] inline-flex justify-center items-center gap-2.5">
                    <div className="text-right justify-start text-black/40 text-base font-normal leading-tight">
                        진짜 XX은행 공식앱 맞나요? 스토어에도 없던데요?
                    </div>
                </div>
                <div className="px-3.5 py-2.5 bg-blue-100 rounded-[20px] inline-flex justify-center items-center gap-2.5">
                    <div className="text-right justify-start text-black/40 text-base font-normal  leading-tight">
                        대출 조건부터 먼저 설명해 주실 수 있나요?
                    </div>
                </div>
                <div className="px-3.5 py-2.5 bg-primary-400 rounded-[20px] text-right justify-start text-white text-base font-normal leading-tight">
                    네, 설치했어요. 그 다음에 뭐 하면 되죠?
                </div>
            </div>
        )
    ];
    const renderedMessages = useDelayRender(FakeMessages, 200);
    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-[11px] text-monochrome-500 font-medium pt-4 pb-4">
                10월 30일 (화) 오전 9:41
            </p>
            <div className="w-full flex flex-col gap-4 px-[15px]">
                {renderedMessages}
            </div>
            <InstallFakeAppDialog isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} />
        </div>
    )
}

export default BankerMessagePage;
