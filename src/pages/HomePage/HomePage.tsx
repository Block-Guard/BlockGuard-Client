import { useEffect, useRef } from "react";
import HomeCheck from "./components/HomeCheck";
import NewsLines from "./components/NewsLines";
import ReportResponse from "./components/ReportResponse";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
    if (localStorage.getItem("first-use") !== "false") {
      navigate("/onboarding");
    }
  }, []);
  return (
    <div className="overflow-y-scroll no-scrollbar mb-10 flex flex-col gap-8">
      <HomeCheck topRef={topRef} />
      <ReportResponse />
      <NewsLines />
    </div>
  );
};

export default HomePage;
