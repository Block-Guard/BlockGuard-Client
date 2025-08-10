import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "../../../../components/ui/drawer";
import DarkBlueX from "../../../../assets/icons/close-darkblue-icon.svg";
import LinkIcon from "../../../../assets/analysis-result/link-icon.svg";
import Plus from "../../../../assets/analysis-result/plus-icon.svg";
import { dummyGuardians } from "../constants";
import { GuardianCallItem } from "./GuardianCallItem";
import { useEffect, useState } from "react";


interface GuardianCallDrawerProps {
  openGuardianCall: boolean
  setOpenGuardianCall: React.Dispatch<React.SetStateAction<boolean>>
}

export const GuardianCallDrawer = ({ openGuardianCall, setOpenGuardianCall }: GuardianCallDrawerProps) => {
  const [guardians, setGuardians] = useState(dummyGuardians.data.guardians)
  // const guardians = dummyGuardians.data.guardians;
  const handleCloseClick = () => {
    setOpenGuardianCall(false);
  }

  /** axios instance에 로그인 여부, 토큰 재발급 로직 추가해야 할듯 */
  const isLoggedIn = () =>{
    const token = localStorage.getItem("accessToken");
    if(!token || false)
      return false;
    else
      return true;
  }

  const getGuardians = () =>{

  }

  useEffect(()=>{
    if(isLoggedIn()){
      const response = getGuardians();
      // setGuardians(response);
    }
  }, [])

  return (
    <Drawer open={openGuardianCall} onOpenChange={setOpenGuardianCall}>
      <DrawerContent aria-label="보호자에게 알리기" className=" bg-[#EEF1F3]">
        <div className="flex flex-col justify-start px-6 bg-[#EEF1F3]">

          <div className="flex-4 flex justify-center items-center mb-7.5 ">
            <div className="flex-1 flex justify-start">
              <img src={LinkIcon} alt="아이콘" className="w-6 h-6" />
            </div>
            <DrawerTitle className="text-center justify-center text-slate-950 text-2xl font-bold leading-9">
              보호자에게 알리기
            </DrawerTitle>
            <button className="flex-1 flex justify-end" onClick={handleCloseClick}>
              <img src={DarkBlueX} alt="닫기" className="w-6 h-6" />
            </button>
          </div>

          <div aria-label="연락할 보호자 번호 리스트" className="flex flex-col gap-3 aria-describedby={undefined}">
            {
              guardians.length === 0 ? (
                <div className="pb-7.5">
                  <div className="h-36 mb-7.5 flex items-center justify-center text-center text-zinc-300 text-lg font-bold leading-snug">
                    지금은 등록한 번호가 없습니다
                  </div>
                  <button className="w-full px-3 py-3 bg-gray-200 rounded-2xl inline-flex justify-center items-center">
                    <img src={Plus} alt="아이콘" />
                    <span className="text-gray-400 text-lg font-bold leading-snug">
                      추가하기
                    </span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col pb-7.5 gap-3">
                  {guardians.map((guard) => 
                    <GuardianCallItem icon={guard.profileImageUrl} text={guard.name} phoneNumber={guard.phoneNumber} isPrimary={guard.isPrimary} key={guard.guardiansId}/>
                  )}
                </div>
              )
            }
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}