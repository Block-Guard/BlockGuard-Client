import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftArrowIcon from "../../assets/icons/arrow-left-darkblue-icon.svg";
import SortIcon from "../../assets/news/sort-icon.svg";
import NewsCardItem from "./components/NewsCardItem";
import { useEffect, useState } from "react";
import { getNewsListApi } from "../../apis/news";
import type { NewsItem } from "../../types/api-types";

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

const RecentNewsPage = () => {
    const navigate = useNavigate();
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const handleBackClick = () => navigate(-1)
    const handleCategory = (selectedCategory: string) => setCategory(selectedCategory);
    const handleSortClick = () => setSort(!sort);
    const categoryList = [
        "전체", "보이스 피싱", "메신저 피싱", "스미싱", "기타"
    ];


    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(true)
    const [category, setCategory] = useState(categoryList[0]);


    const getNewsList = async (page: number, sort: boolean, category: string) => {
        if (sort) {
            return await getNewsListApi(page, "published_at_desc", category);
        }
        else {
            return await getNewsListApi(page, "published_at_asc", category);
        }
    }

    useEffect(() => {
        const process = async () => {
            try {
                const response = getNewsList(page, sort, category);
                setNewsData((await response).news)
                console.log("전체 뉴스 조회 요청", page, sort, category)
            } catch (error) {
                console.error("전체 뉴스 리스트 조회 페이지에서 로드 오류 발생 - 더미데이터 로드", error);
                setNewsData(dummyData);
            }
        }
        process();
    }, [category, page, sort])

    return (
        <div className="flex flex-col w-screen h-screen box-border">
            <Header
                leftChild={
                    <button onClick={handleBackClick}>
                        <img src={LeftArrowIcon} alt="뒤로가기" />
                    </button>
                }
            />
            <main className="mt-[57px] px-6 pb-6">
                <div className="h-9 flex justify-around text-lg font-semibold leading-relaxed overflow-x-scroll no-scrollbar">
                    {
                        categoryList.map((item) => {
                            return (
                                <>
                                    {
                                        item === category ? (
                                            <div className="flex flex-col justify-between items-center text-primary-400 leading-tight"
                                                onClick={() => handleCategory(item)}>
                                                {item}
                                                <div className="w-[120%] h-[5px] bg-primary-400 rounded-[90px] relative z-10" />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col text-[#79818A] leading-tight"
                                                onClick={() => handleCategory(item)}>
                                                {item}
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                        )
                    }
                </div>

                <div className="w-full h-[5px] bg-[#E4E7E9] rounded-[90px] relative bottom-[5px]" />

                <button className="inline-flex justify-start text-gray-900/50 text-sm font-norma mt-10.5 gap-2"
                    onClick={handleSortClick}>
                    <img src={SortIcon} alt="정렬 아이콘" className="w-4.5 h-4.5" />
                    {
                        sort ? "최신순" : "오래된순"
                    }
                </button>
                {
                    newsData.map((news) => {
                        return <NewsCardItem title={news.title} publishedAt={news.publishedAt}
                            url={news.url} newspaper={news.newspaper} imageUrl={news.imageUrl} key={news.id} />
                    })
                }
            </main>

            <footer className="w-full h-[88px] flex justify-between border-t-1 border-#E4E7E9] px-6 pt-4 pb-10.5">

                <button onClick={handleBackClick}>
                    <svg className={page === 1 ? 'text-[#D9D9D9]' : 'text-[#79818A]'} width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17.5195L1 9.51953L9 1.51953" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                    <div className="flex justify-center items-center w-8 h-8 bg-[#D3E1FF] rounded-full
                    text-center text-primary-400 text-lg font-bold leading-snug">
                        1
                    </div>
                    
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full
                    text-center text-[#79818A] text-lg font-bold leading-snug">
                        2
                    </div>
                    
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full
                    text-center text-[#79818A] text-lg font-bold leading-snug">
                        3
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full
                    text-center text-[#79818A] text-lg font-bold leading-snug">
                        4
                    </div>

                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full
                    text-center text-[#79818A] text-lg font-bold leading-snug">
                        5
                    </div>

                <button onClick={handleBackClick}>
                    <svg className={page === 5 ? 'text-[#D9D9D9]' : 'text-[#79818A]'} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.794433 1L6.79443 7L0.794434 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

            </footer>
        </div>
    )
}

export default RecentNewsPage;