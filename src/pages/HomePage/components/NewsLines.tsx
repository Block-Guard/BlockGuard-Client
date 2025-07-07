import NewsLinesItem from "./NewsLinesItem";

const NewsLines = () => {

    return (
        <div className="p-4">
            <div className="flex flex-row justify-between items-center">
                <div className="text-slate-950 text-xl font-bold leading-loose">
                    최신 뉴스
                </div>
                <button type="button" aria-label="뉴스 페이지로 이동" className="text-center text-gray-200 text-sm font-medium hover:cursor-pointer">
                    전체보기
                </button>
            </div>

            <div className="flex flex-row overflow-x-scroll no-scrollbar">
                <NewsLinesItem />
                <NewsLinesItem />
                <NewsLinesItem />
            </div>
        </div>
    )
}

export default NewsLines;