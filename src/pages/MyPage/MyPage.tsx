import { useEffect, useState } from "react";
import { getUserInfoApi } from "../../apis/mypage";
import SettingsSectionPanel from "./components/SettingsSectionPanel";
import { mypageMenus } from "./constants/mypageMenu";
import { type UserInfoType } from "../../types/user-info-types";

import LoginedUserInfoSection from "./components/LoginedUserInfoSection";
import NotLoginedUserInfoSection from "./components/NotLoginedUserInfoSection";

import BlockeeGlitered from "@/assets/characters/blockee-glitering.svg";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await getUserInfoApi();
      setUserInfo(response);
    } catch (error) {
      console.error("유저 정보 조회 클라이언트 측 오류 메시지", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-[100vh] bg-white z-500">
        <div className="relative h-[100vh] pb-10 flex flex-col px-6 mt-[70px] justify-center items-center gap-4">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="font-bold text-2xl leading-9">마이페이지 이동 중</h1>
            <p className="text-primary-300 font-medium text-lg leading-7">
              잠시만 기다려주세요
            </p>
          </div>
          <img src={BlockeeGlitered} alt="캐릭터" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f1f4ff] py-13 min-h-[calc(100vh-85px)]">
      {userInfo ? (
        <LoginedUserInfoSection userInfo={userInfo} />
      ) : (
        <NotLoginedUserInfoSection />
      )}

      <div className="flex flex-col gap-9 mt-18 px-7">
        {userInfo && (
          <SettingsSectionPanel
            title="개인 설정"
            menus={mypageMenus.personalSettings}
          />
        )}
        <SettingsSectionPanel
          title="서비스 정보"
          menus={mypageMenus.serviceInfo}
        />
        {userInfo && (
          <SettingsSectionPanel title="계정" menus={mypageMenus.account} />
        )}
      </div>
    </div>
  );
};

export default MyPage;
