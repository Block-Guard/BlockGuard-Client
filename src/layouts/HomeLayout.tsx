import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const HomeLayout = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <main className="h-[calc(100vh-85px)] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar">
        <Outlet />{" "}
        {/* 홈 페이지 등 상단, 하단바 필요한 페이지가 여기에 렌더링됨 */}
      </main>
      <BottomNav />
    </div>
  );
};
export default HomeLayout;
