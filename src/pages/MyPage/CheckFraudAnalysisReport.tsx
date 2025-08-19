import { useNavigate } from "react-router-dom"
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import { useEffect, useState } from "react";
import { getFraudRecordApi } from "../../apis/mypage";
import type { FraudRecordItem } from "../../types/api-types";
import FraudRecordCard from "./components/FraudRecordCard";


const CheckFraudAnalysisReport = () => {
  const navigate = useNavigate();
  const [recordList, setRecordList] = useState<FraudRecordItem[] | undefined>([]);

  const getFraudRecord = async () => {
    try {
      const response = await getFraudRecordApi();
      setRecordList(response);
    } catch (error) {
      console.error("사기 분석 기록 조회 중 에러 발생", error);
    } 
  }

  useEffect(() => {
    getFraudRecord();
  }, []);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <header
        className="w-full fixed flex flex-row items-center px-6 py-[19px] z-50 max-w-[800px] bg-white"
      >
        <div className="flex gap-4 w-full">
          <img
            src={LeftArrowIcon}
            className="py-[5.5px] pr-1"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-xl text-black font-bold leading-8">
            사기분석 기록 조회
          </h1>
        </div>
      </header>
      <div className="overflow-y-scroll pb-10 flex flex-col gap-4.5 px-6 mt-[86px]">
        {
          (!recordList || recordList?.length === 0) &&
          <div className="mt-[50%] inline-flex justify-center items-center text-center text-black text-xl">
            사기 분석 결과가 없습니다.
          </div>
        }
        {
          (recordList ?? []).map((record) => {
            return <FraudRecordCard
              recordDate={record.analyzedAt}
              riskLevel={record.riskLevel}
              resultType={record.estimatedFraudType}
              key={record.fraudAnalysisRecordId} />
          })
        }
      </div>
    </div>
  )
};

export default CheckFraudAnalysisReport;
