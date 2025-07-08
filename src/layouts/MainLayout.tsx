import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col justify-between w-full h-full">
            <main className="h-[100vh] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar">
                <Outlet />{" "}
                {/* 사기분석 등 하단바 필요없는 페이지가 여기에 렌더링됨 */}
            </main>
        </div>
    );
}
export default MainLayout;