const LinkNumberCheck = () => {
    return (
        <div
            className="w-[344px] h-28 p-4
                 bg-white/10 rounded-[20px] border-2 border-white/60"
        >
            <div className="justify-center text-white text-2xl font-bold font-pretendard leading-9">
                클릭 한 번으로 위험 확인
            </div>
            <img src="icons/Search-icon.svg" alt="돋보기 아이콘" />
            <input type="text" placeholder="URL / 전화번호를 검색해보세요" />
            <div className="w-80 h-0.5 bg-white rounded-[90px]" />
        </div>
    )
}

export default LinkNumberCheck;