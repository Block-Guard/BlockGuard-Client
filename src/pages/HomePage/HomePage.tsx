import { useEffect, useRef } from "react";
import HomeCheck from "./components/HomeCheck";
import NewsLines from "./components/NewsLines";
import ReportResponse from "./components/ReportResponse";

const HomePage = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "instant" });
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
