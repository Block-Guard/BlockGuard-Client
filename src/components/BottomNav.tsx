import { useLocation } from "react-router-dom";
import BottomNavItem from "./BottomNavItem";
import { useEffect, useState } from "react";

const BottomNav = () => {
    const [selectedMenu, setSelectedMenu] = useState("home");
    const location = useLocation();

    useEffect(() => {
        const selected = location.pathname;
        if (selected === "/home" || selected === "/contents" || selected === "/ems" || selected === "/my") {
            setSelectedMenu(selected);
        }
    }, [location.pathname]);

    return (
        <div
            className="flex flex-row justify-between items-center
        w-[393px] h-10 pt-4 pl-5 pr-5 bg-white border-t border-gray-200 box-border"
        >
            <BottomNavItem
                imageOnSrc="/icons/Home-icon-on.svg"
                imageOffSrc="/icons/Home-icon-off.svg"
                isSelected={selectedMenu === "/home"}
                text="홈"
            />

            <BottomNavItem
                imageOnSrc="/icons/Contents-icon-on.svg"
                imageOffSrc="/icons/Contents-icon-off.svg"
                isSelected={selectedMenu === "/create"}
                text="콘텐츠"
            />

            <BottomNavItem
                imageOnSrc="/icons/EMSInteract-icon-on.svg"
                imageOffSrc="/icons/EMSInteract-icon-off.svg"
                isSelected={selectedMenu === "/create"}
                text="긴급대응"
            />

            <BottomNavItem
                imageOnSrc="/icons/My-icon-on.svg"
                imageOffSrc="/icons/My-icon-off.svg"
                isSelected={selectedMenu === "/my"}
                text="마이"
            />
        </div>
    );
};

export default BottomNav;