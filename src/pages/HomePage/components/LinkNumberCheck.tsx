import { useState } from "react";
import SearchIcon from "../../../assets/icons/search-icon.svg";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LinkNumberCheck = () => {
  const [urlNumber, setUrlNumber] = useState("");
  const navigate = useNavigate();
  const queryParams = new URLSearchParams();
  const isValidNumber = (inputs: string) => {
    if (!/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(inputs))
      return false;

    return true;
  }

  const isValidUrl = (inputs: string) => {
    if (!/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(inputs))
      return false;
    return true;
  }

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (isValidNumber(urlNumber)) {
        console.log(urlNumber, "에 대한 전화 번호 분석 요청");
        queryParams.set("url", "none");
        queryParams.set("number", urlNumber.trim())
        navigate(`/number-url-result?${queryParams.toString()}`);
      } else if (isValidUrl(urlNumber)) {
        console.log(urlNumber, "에 대한 URL 분석 요청");
        queryParams.set("number", "none");
        queryParams.set("url", urlNumber.trim())
        navigate(`/number-url-result?${queryParams.toString()}`);
      }
      else {
        setUrlNumber("");
        console.log(urlNumber)
        console.log("올바르지 못한 형식")

        toast("URL/전화번호 형식이 유효하지 않습니다. 다시 입력해주세요.")
      }
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
          value={urlNumber}
        />
      </div>
      <div className="w-full h-0.5 bg-white rounded-[90px]" />
    </div>
  );
};

export default LinkNumberCheck;
