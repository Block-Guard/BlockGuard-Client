import {
  Drawer,
  DrawerContent,
} from "../../../../components/ui/drawer";

interface GuardianCallDrawerProps{
  openGuardianCall: boolean
  setOpenGuardianCall: React.Dispatch<React.SetStateAction<boolean>>
}

export const GuardianCallDrawer = ({openGuardianCall, setOpenGuardianCall}:GuardianCallDrawerProps) => {
  return (
    <Drawer open={openGuardianCall} onOpenChange={setOpenGuardianCall}>
      <DrawerContent>
        <div className="p-4 bg-[#EEF1F3]">
          <div className="text-center justify-center text-slate-950 text-2xl font-bold font-['Pretendard'] leading-9">
            신고 접수하기
            </div>
            
          <div className="w-80 px-3 py-3 bg-blue-100 rounded-2xl outline-1 outline-offset-[-1px] outline-white/60 inline-flex justify-between items-center">
          123
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}