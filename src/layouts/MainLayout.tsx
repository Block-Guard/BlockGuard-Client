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
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
