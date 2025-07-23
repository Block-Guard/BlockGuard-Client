import {
  Drawer,
  DrawerContent,
  DrawerTitle
} from "../../../../components/ui/drawer";
import { ReportCallItem } from "./ReportCallItem";
import PhoneCall from "../../../../assets/icons/phone-call-icon.png";
import DarkBlueX from "../../../../assets/icons/close-darkblue-icon.svg";
interface ReportCallDrawerProps {
  openReportCall: boolean
  setOpenReportCall: React.Dispatch<React.SetStateAction<boolean>>
}

export const ReportCallDrawer = ({ openReportCall, setOpenReportCall }: ReportCallDrawerProps) => {
  const handleCloseClick = () => {
    setOpenReportCall(false);
  }
  return (
    <Drawer open={openReportCall} onOpenChange={setOpenReportCall}>
      <DrawerContent aria-label="신고할 공공기관 번호 모음" className="h-96 bg-[#EEF1F3]">
        <div className="flex flex-col justify-start px-4 bg-[#EEF1F3]">

          <div className="flex-4 flex justify-center items-center mb-7.5 ">
            <div className="flex-1 flex justify-start">
              <></>
            </div>
            <DrawerTitle className="text-center justify-center text-slate-950 text-2xl font-bold leading-9">
              신고 접수하기
            </DrawerTitle>
            <button className="flex-1 flex justify-end" onClick={handleCloseClick}>
              <img src={DarkBlueX} alt="닫기" className="w-6 h-6" />
            </button>
          </div>

          <div aria-label="공공기관 번호 리스트" className="flex flex-col gap-3 aria-describedby={undefined}">
            <ReportCallItem icon={PhoneCall} text={"금융 감독원 (1132)"} handleCallClick={() => console.log("전화연결")} />
            <ReportCallItem icon={PhoneCall} text={"경찰청 통합신고 대응센터 (112)"} handleCallClick={() => console.log("전화연결")} />
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}