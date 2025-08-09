import NewsDefaultImg from "../../../assets/news/news-default-image.svg";

interface NewsCardItemProps{
    title: string;
    publishedAt: string;
    url: string;
    newspaper: string;
    imageUrl: string|null;
}

const NewsCardItem = ({title, publishedAt, url, newspaper, imageUrl}: NewsCardItemProps) =>{
    const handleClickNews = () => window.open(url, "_blank");
    return(

        <div className="w-full flex gap-[13px] border-b-1 py-2.5" onClick={handleClickNews}>
            {imageUrl === null ? 
            <img src={NewsDefaultImg} alt="기본 뉴스 이미지"
            className="w-20 h-20 object-fill rounded-[20px]"/>
            :
            <img src={imageUrl} alt="뉴스 이미지"
            className="w-20 h-20 object-fill rounded-[20px] border-1 border-[#E4E7E9]"/>
            }
            <div className="flex flex-col justify-between">
                <div className="text-slate-950 text-lg font-medium leading-relaxed">
                    {title}
                </div>
                <span className="text-gray-500 text-[10px] font-normal leading-3">
                    {publishedAt} | {newspaper}
                </span>
            </div>
        </div>
    )
}

export default NewsCardItem;