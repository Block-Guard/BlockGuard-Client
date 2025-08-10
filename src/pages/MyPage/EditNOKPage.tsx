import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import Button from "../../components/Button/Button";

const EditNOKPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f1f4ff] min-h-[calc(100vh-85px)]">
      <Header
        leftChild={
          <img
            src={LeftArrowIcon}
            className="py-[5.5px] pr-1"
            onClick={() => navigate(-1)}
          />
        }
        title={
          <h1 className="text-xl text-monochrome-700 font-bold leading-8">
            보호자 등록 / 수정
          </h1>
        }
        bgColor="#F1F4FF"
      />
      <main className="px-7 pt-22 pb-30"></main>
      <div className="absolute px-7 w-full bottom-30">
        <Button onClick={() => {}}>+ 보호자 추가 등록하기</Button>
      </div>
    </div>
  );
};

export default EditNOKPage;
