import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "../components/BottomNav/BottomNav";
import { useEffect, useRef } from "react";

const MainLayout = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <main className="h-[calc(100vh-85px)] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar">
        <div ref={topRef} />
        <Outlet />
        {/* 홈 페이지 등 상단, 하단바 필요한 페이지가 여기에 렌더링됨 */}
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
