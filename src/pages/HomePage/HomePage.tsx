import HomeCheck from "./components/HomeCheck";
import NewsLines from "./components/NewsLines";
import ReportResponse from "./components/ReportResponse";

const HomePage = () => {
  return (
    <div className="overflow-y-scroll no-scrollbar mb-10 flex flex-col gap-10">
      <HomeCheck />
      <ReportResponse />
      <NewsLines />
    </div>
  );
};

export default HomePage;
