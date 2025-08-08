import BlockeeMyPage from "../../assets/characters/blockee-mypage.png";
import SettingsSectionPanel from "./components/SettingsSectionPanel";
import { mypageMenus } from "./constants/mypageMenu";

const MyPage = () => {
  return (
    <div className="bg-[#f1f4ff] py-13 px-7">
      <div className="flex flex-col items-center">
        <img className="w-45" src={BlockeeMyPage} />
        <h2 className="font-semibold text-[20px]">블락가드 님</h2>
        <span className="text-[#00487C]">Blockguard@gmail.com</span>
      </div>
      <div className="flex flex-col gap-9 mt-18">
        <SettingsSectionPanel
          title="개인 설정"
          menus={mypageMenus.personalSettings}
        />
        <SettingsSectionPanel
          title="서비스 정보"
          menus={mypageMenus.serviceInfo}
        />
        <SettingsSectionPanel title="계정" menus={mypageMenus.account} />
      </div>
    </div>
  );
};

export default MyPage;
