import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftArrowIcon from "../../assets/icons/arrow-left-darkblue-icon.svg";
import NewsCardItem from "./components/NewsCardItem";
import { useEffect, useState } from "react";
import { getNewsListApi, getSelectedNewsApi } from "../../apis/news";
import type { NewsItem } from "../../types/api-types";
import NewsLinesItem from "../HomePage/components/NewsLinesItem";


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


const NewsHomePage = () => {
    const navigate = useNavigate();
    const [selectedNews, setSelectedNews] = useState<NewsItem[]>([]);
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const handleBackClick = () => navigate(-1)
    const handleMoreNews = () => navigate("/news/recent")
    const getSelectedNews = async () => {
        return await getSelectedNewsApi();
    }

    const getNewsList = async () => {
        return await getNewsListApi();
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

            try {
                const response = getNewsList();
                setNewsData((await response).news)
                console.log("주요 뉴스 조회 요청")
            } catch (error) {
                console.error("뉴스 리스트 조회 페이지에서 로드 오류 발생 - 더미데이터 로드", error);
                setNewsData(dummyData);
            }
        }
        process();
    }, [])

    return (
        <div className="flex flex-col w-screen h-screen">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowIcon} alt="뒤로가기" />
                    </button>
                }
            />
            <main className="mt-[57px] px-6 pb-6">
                <span className="w-full inline-flex justify-between items-center">
                    <h1 className=" text-monochrome-700 text-xl font-bold leading-loose ">
                        주요 피싱 사례
                    </h1>
                </span>
                <div className="flex flex-row overflow-x-scroll gap-x-4 pb-3">
                    {
                        selectedNews.map((news) => {
                            return <NewsLinesItem title={news.title} publishedAt={news.publishedAt}
                                url={news.url} newspaper={news.newspaper} imageUrl={news.imageUrl} key={news.id} />
                        })
                    }
                </div>

                <span className="w-full inline-flex justify-between items-center mt-7.5">
                    <h1 className=" text-monochrome-700 text-xl font-bold leading-loose ">
                        최신 기사
                    </h1>
                    <p className="text-zinc-300 text-sm font-medium"
                    onClick={handleMoreNews}>
                        더보기
                    </p>
                </span>

                {
                    newsData.map((news) => {
                        return <NewsCardItem title={news.title} publishedAt={news.publishedAt}
                            url={news.url} newspaper={news.newspaper} imageUrl={news.imageUrl} key={news.id} />
                    })
                }
            </main>
        </div>
    )
}

export default NewsHomePage;