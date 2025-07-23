import TypeFeatureCard from "./TypeFeatureCard"
import FileIcon from "../../../../assets/analysis-result/file-icon.png"

export const TypeFeature = () => {
    const handleNewsClick = () => console.log("아마 뉴스로 이동일듯?")

    return (
        <div className="flex flex-col gap-2.5 w-full mb-7.5">
            <div className="text-slate-950 text-xl font-bold leading-loose">
                이 유형의 주요 특징은?
            </div>
            <TypeFeatureCard
                title={"지금 안 하면 안 됩니다!"}
                content={<>긴급성을 강조하는 말투를 사용해서 <br />판단력을 흐리게 만들어요</>} />
            <TypeFeatureCard
                title={"신뢰성 확보 시도"}
                content={<>공문서 위장, 실제 기관명 도용 등으로  <br />신뢰감을 확보해요</>} />
            <TypeFeatureCard
                title={"신분증/ 계좌 요청"}
                content={<>개인정보를 빼내어 범죄에 악용하거나 <br />명의도용을 위해 신분증이나 계좌를 요청해요 </>} />

            <button className="w-full h-11 my-2.5 px-4 bg-blue-500 rounded-[10px] inline-flex justify-center items-center gap-1.5"
                onClick={handleNewsClick}>
                <div className="flex items-center text-white text-2xl font-bold leading-9 gap-1.5">
                    <img src={FileIcon} alt="아이콘" className="w-6 h-6" /> 관련 피해 사례 더보기
                </div>
            </button>
        </div>
    )
}