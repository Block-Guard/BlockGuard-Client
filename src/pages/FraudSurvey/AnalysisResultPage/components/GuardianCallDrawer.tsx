import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "../../../../components/ui/drawer";
import DarkBlueX from "../../../../assets/icons/close-darkblue-icon.svg";
import LinkIcon from "../../../../assets/analysis-result/link-icon.svg";
import Plus from "../../../../assets/analysis-result/plus-icon.svg";
import { GuardianCallItem } from "./GuardianCallItem";
import { useEffect, useState } from "react";
import { getGuardiansListApi} from "../../../../apis/guardians";
import { useNavigate } from "react-router-dom";
import type { NOKInfoType } from "../../../../types/nok-info-types";
import { getUserInfoApi } from "../../../../apis/mypage";

interface GuardianCallDrawerProps {
  openGuardianCall: boolean
  setOpenGuardianCall: React.Dispatch<React.SetStateAction<boolean>>
}

export const GuardianCallDrawer = ({ openGuardianCall, setOpenGuardianCall }: GuardianCallDrawerProps) => {
  const navigate = useNavigate();
  const [guardians, setGuardians] = useState<NOKInfoType[]>([]);
  const [userName, setUserName] = useState("사용자");
  const handleCloseClick = () => {
    setOpenGuardianCall(false);
  }

  /** ✔ 추가하기 눌렀을 때 */
  const handleAddGuardian = () => {
    navigate("/mypage/edit-nok");
  }

  const handleLoginClick = () => navigate("/login");

  /** 토큰 만료 시간 판별 */
  const isTokenValid = (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  };

  /** axios instance에 로그인 여부, 토큰 재발급 api 추가해야 할듯 */
  const isLoggedIn = () => {
    const token = localStorage.getItem("accessToken");
    if (!token || !isTokenValid(token)) {
      return false;
    }
    else {
      return true;
    }
  }

  useEffect(() => {
    const process = async () => {
      try {
        setGuardians([]);
        const response = await getGuardiansListApi();
        console.log("불러온 보호자 목록 : ", response)

        if(response)
          setGuardians(response);

        const userInfoResponse = await getUserInfoApi();
        if(userInfoResponse)
          setUserName(userInfoResponse.name);

      } catch (err) {
        console.error("보호자 목록 조회 중 에러 발생 : ", err);
        setGuardians([]);
      }
    }
    if (isLoggedIn()) {
      process();
    }
  }, [])


  return (
    <Drawer open={openGuardianCall} onOpenChange={setOpenGuardianCall}>
      <DrawerContent aria-label="보호자에게 알리기" className=" bg-[#EEF1F3]"
      >
        <div className="flex flex-col px-6 bg-[#EEF1F3]">
          <div className="flex-4 flex items-center mb-7.5">
            <div className="flex-1 flex justify-start"/>
            <DrawerTitle className="text-center flex-4 flex justify-center text-slate-950 text-2xl font-bold leading-9">
              보호자에게 알리기
            </DrawerTitle>
            <button className="flex-1 flex justify-end" onClick={handleCloseClick}>
              <img src={DarkBlueX} alt="닫기" className="w-6 h-6" />
            </button>
          </div>

          <div aria-label="연락할 보호자 번호 리스트" className="overflow-y-auto"
            style={{
              flex: 1,
              minHeight: 0,
              maxHeight: "calc(80vh - 120px)",
              paddingBottom: "20px"
            }}>
            <div className="flex flex-col gap-3 pb-6">
              {
                (!guardians || guardians?.length === 0) ? (
                  <div className="pb-7.5">
                    {isLoggedIn() ? (
                      <>
                        <div className="h-36 mb-7.5 flex items-center justify-center text-center text-zinc-300 text-lg font-bold leading-snug">
                          지금은 등록한 번호가 없습니다
                        </div>
                        <button className="w-full px-3 py-3 bg-gray-200 rounded-2xl inline-flex justify-center items-center"
                          onClick={handleAddGuardian}>
                          <img src={Plus} alt="아이콘" />
                          <span className="text-gray-400 text-lg font-bold leading-snug">
                            추가하기
                          </span>
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="h-36 mb-7.5 flex items-center justify-center text-center text-zinc-300 text-lg font-bold leading-snug">
                          로그인 후 이용가능한 서비스입니다.
                        </div>
                        <button className="w-full px-3 py-3 bg-gray-200 rounded-2xl inline-flex justify-center items-center"
                          onClick={handleLoginClick}>
                          <span className="text-gray-400 text-lg font-bold leading-snug">
                            로그인하기
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    {guardians?.map((guard) =>
                      <GuardianCallItem icon={guard.profileImageUrl} text={guard.name} phoneNumber={guard.phoneNumber} isPrimary={guard.isPrimary} 
                      userName={userName} key={guard.guardiansId} />
                    )}
                  </>
                )
              }
            </div>
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}