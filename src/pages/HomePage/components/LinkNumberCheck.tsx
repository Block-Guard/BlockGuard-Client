import { useState } from "react";
import SearchIcon from "../../../assets/icons/Search-icon.svg";

const LinkNumberCheck = () => {
  const [urlNumber, setUrlNumber] = useState("");

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(urlNumber); //임시
    }
  };

  return (
    <div
      className="flex flex-col justify-between w-full h-28 pr-4 pl-4 pb-4 pt-3
                 bg-white/10 rounded-[20px] border-2 border-white/60"
    >
      <div className="justify-center text-white text-2xl font-bold leading-9">
        클릭 한 번으로 위험 확인
      </div>
      <div className="flex flex-row text-white/50 text-sm font-medium leading-none">
        <img src={SearchIcon} className="mr-1" alt="돋보기 아이콘" />
        <input
          type="text"
          className="w-full focus:outline-none focus:ring-0 text-white text-sm font-medium leading-none"
          onChange={(e) => setUrlNumber(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          placeholder="URL / 전화번호를 검색해보세요"
        />
      </div>
      <div className="w-full h-0.5 bg-white rounded-[90px]" />
    </div>
  );
};

export default LinkNumberCheck;
