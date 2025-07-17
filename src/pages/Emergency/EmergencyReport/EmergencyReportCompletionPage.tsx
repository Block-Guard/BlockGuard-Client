import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import BlockeeCompletionIcon from "../../../assets/report-guide/blockee-completion.png";
import Button from "../../../components/Button/Button";

const EmergencyReportCompletionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        leftChild={
          <img
            className="py-[5.5px] pr-1"
            src={LeftArrowIcon}
            onClick={() => navigate(-1)}
          />
        }
      />
      <div className="relative h-[calc(100vh-70px)] pb-10 flex flex-col px-6 mt-[70px] justify-center items-center gap-4">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="font-bold text-2xl leading-9">
            신고 접수를 완료했어요!
          </h1>
          <p className="text-primary-300 font-medium text-lg leading-7">
            빠른 신고 접수는 더 큰<br />
            피해를 막을 수 있어요!
          </p>
        </div>
        <img src={BlockeeCompletionIcon} alt="완료 이미지" />
      </div>
      <div className="absolute w-full bottom-8 px-6">
        <Button onClick={() => navigate("/emergency")}>확인</Button>
      </div>
    </div>
  );
};

export default EmergencyReportCompletionPage;
