import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const HomeLayout = () => {
    return (
        <div className="flex flex-col justify-between w-[390px] h-[844px]">
            <main className="relative flex flex-col justify-between  bg-[#ffffff]">
                <Outlet /> {/* 홈 페이지 등 상단, 하단바 필요한 페이지가 여기에 렌더링됨 */}
            </main>
            <BottomNav/>
        </div>
    )
}
export default HomeLayout;