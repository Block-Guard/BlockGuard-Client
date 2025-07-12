import { useLocation } from "react-router-dom";
import BottomNavItem from "./BottomNavItem";
import { useEffect, useState } from "react";
import HomeIconOn from "../../assets/icons/Home-icon-on.svg";
import HomeIconOff from "../../assets/icons/Home-icon-off.svg";
import EmergencyIconOn from "../../assets/icons/EMSInteract-icon-on.svg";
import EmergencyIconOff from "../../assets/icons/EMSInteract-icon-off.svg";
import ContentIconOn from "../../assets/icons/Contents-icon-on.svg";
import ContentIconOff from "../../assets/icons/Contents-icon-off.svg";
import MyIconOn from "../../assets/icons/My-icon-off.svg"; // 아이콘 추가해야함
import MyIconOff from "../../assets/icons/My-icon-off.svg";

const BottomNav = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const selected = location.pathname;
    console.log(selected);
    if (
      selected === "/home" ||
      selected === "/contents" ||
      selected === "/emergency" ||
      selected === "/my"
    ) {
      setSelectedMenu(selected);
    }
  }, [location.pathname]);

  return (
    <div
      className="flex flex-row justify-between items-center
        h-10 pt-8 pl-5 pr-5 pb-13
         bg-white border-t border-gray-200 box-border z-50"
    >
      <BottomNavItem
        imageOnSrc={HomeIconOn}
        imageOffSrc={HomeIconOff}
        isSelected={selectedMenu === "/home"}
        text="홈"
      />

      <BottomNavItem
        imageOnSrc={EmergencyIconOn}
        imageOffSrc={EmergencyIconOff}
        isSelected={selectedMenu === "/emergency"}
        text="긴급대응"
      />

      <BottomNavItem
        imageOnSrc={ContentIconOn}
        imageOffSrc={ContentIconOff}
        isSelected={selectedMenu === "/create"}
        text="콘텐츠"
      />

      <BottomNavItem
        imageOnSrc={MyIconOn}
        imageOffSrc={MyIconOff}
        isSelected={selectedMenu === "/my"}
        text="마이"
      />
    </div>
  );
};

export default BottomNav;
