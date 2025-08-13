import NewsDefaultImg from "../../../assets/news/news-default-image.svg";

interface NewsCardItemProps{
    title: string;
    publishedAt: string;
    url: string;
    newspaper: string;
    imageUrl: string|null;
}

const NewsLinesItem = ({title, publishedAt, url, newspaper, imageUrl}: NewsCardItemProps) =>{
    const handleClickNews = () => window.open(url, "_blank");
    return (
        <div className="flex flex-col min-w-60 min-h-40 bg-gray-100 rounded-[20px] outline-2 outline-offset-[-2px] outline-white/60 justify-start items-center overflow-hidden"
        onClick={handleClickNews}>
            {imageUrl === null ? 
            <img src={NewsDefaultImg} alt="기본 뉴스 이미지"
            className="self-stretch h-40 rounded-tl-[20px] rounded-tr-[20px] border-1 border-[#E4E7E9]"/>
            :
            <img src={imageUrl} alt="뉴스 이미지"
            className="self-stretch h-40 rounded-tl-[20px] rounded-tr-[20px] border-1 border-[#E4E7E9] object-cover
            "/>
            }

            <div className="flex flex-col justify-between items-start pt-2.5 pl-3 pr-3 pb-4">
                <div className="h-11 text-slate-950 text-base font-bold leading-snug line-clamp-2">
                    {title}
                </div>

                <div className="text-gray-500 text-[10px] font-normal">
                    {publishedAt} | {newspaper}
                </div>
            </div>
        </div>
    )
}

export default NewsLinesItem;