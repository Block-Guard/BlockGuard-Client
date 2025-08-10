import { useEffect, useState } from "react";
import NewsLinesItem from "./NewsLinesItem";
import type { NewsItem } from "../../../types/api-types";
import { getSelectedNewsApi } from "../../../apis/news";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: 1,
    title: "검찰청 범죄 연루 경고",
    publishedAt: "1시간 전",
    url: "https://example.com/article/1",
    newspaper: "서울신문",
    imageUrl: "https://image/1"

  },
  {
    id: 2,
    title: "김철수, 범죄 혐의 부인",
    publishedAt: "어제",
    url: "https://example.com/article/2",
    newspaper: "동아일보",
    imageUrl: null
  }
]


const NewsLines = () => {
  const navigate = useNavigate();
  const [selectedNews, setSelectedNews] = useState<NewsItem[]>([]);
  const handleMoreNews = () => navigate("/news/home")
  const getSelectedNews = async () => {
    return await getSelectedNewsApi();
  }

  useEffect(() => {
    const process = async () => {
      try {
        const response = getSelectedNews();
        setSelectedNews(await response)
      } catch (error) {
        console.error("뉴스 리스트 조회 페이지에서 로드 오류 발생 - 더미데이터 로드", error);
        setSelectedNews(dummyData);
      }
    }
    process();
  }, [])

  return (
    <div className="mx-6">
      <div className="flex flex-row justify-between items-center">
        <div className="text-slate-950 text-xl font-bold leading-loose">
          주간 피싱 사례
        </div>
        <button
          type="button"
          aria-label="뉴스 페이지로 이동"
          className="text-center text-gray-200 text-sm font-medium hover:cursor-pointer"
          onClick={handleMoreNews}
        >
          전체보기
        </button>
      </div>

      <div className="grid grid-rows-2 grid-flow-col overflow-x-scroll gap-x-2.5 gap-y-2.5 pb-3">
        {
          selectedNews.map((news) => {
            return <NewsLinesItem title={news.title} publishedAt={news.publishedAt}
              url={news.url} newspaper={news.newspaper} imageUrl={news.imageUrl} key={news.id} />
          })
        }
      </div>
    </div>
  );
};

export default NewsLines;
