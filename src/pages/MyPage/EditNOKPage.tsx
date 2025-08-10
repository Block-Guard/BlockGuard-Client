import { useNavigate } from "react-router-dom";
import { partition } from "lodash";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import NOKInfoCard from "./components/NOKInfoCard";
import LeftArrowIcon from "@/assets/icons/arrow-left-darkblue-icon.svg";
import { useEffect, useState } from "react";
import { type NOKInfoType } from "../../types/nok-info-types";
import EmptyNokListCard from "./components/EmptyNokListCard";
import RegisterNewNokCard from "./components/RegisterNewNokCard";
import { toast } from "sonner";

const EditNOKPage = () => {
  const navigate = useNavigate();
  const [nokList, setNokList] = useState<NOKInfoType[]>([]);
  const [primaryNokInfo, nonPrimaryNokInfoList] = partition<NOKInfoType>(
    nokList,
    "isPrimary"
  );
  const [addNokMode, setAddNokMode] = useState(false);

  const getNokList = async () => {};

  useEffect(() => {
    getNokList();
  }, []);

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
      <main className="px-7 pt-22 pb-30 flex flex-col gap-9">
        {addNokMode ? (
          <RegisterNewNokCard />
        ) : nokList.length !== 0 ? (
          <>
            <div className="flex flex-col gap-[11px]">
              <span className="text-[16px] text-[#6e6e6e] font-semibold">
                대표 보호자
              </span>
              <NOKInfoCard nokInfo={primaryNokInfo[0]} />
            </div>
            {nonPrimaryNokInfoList.length !== 0 && (
              <div className="flex flex-col gap-[11px]">
                <span className="text-[16px] text-[#6e6e6e] font-semibold">
                  보호자 목록
                </span>
                <div className="flex flex-col gap-5">
                  {nonPrimaryNokInfoList.map((nok) => (
                    <NOKInfoCard key={nok.guardiansId} nokInfo={nok} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyNokListCard setAddNokMode={setAddNokMode} />
        )}
      </main>
      {addNokMode ? (
        <div
          className="absolute bottom-20 w-full px-7 pt-6 pb-8"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
          }}
        >
          <Button
            onClick={() => {
              toast("새로운 보호자가 등록되었습니다.");
              setAddNokMode(false);
            }}
          >
            + 추가하기
          </Button>
        </div>
      ) : (
        nokList.length !== 0 && (
          <div
            className="absolute bottom-20 w-full px-7 pt-6 pb-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
            }}
          >
            <Button onClick={() => setAddNokMode(true)}>
              + 보호자 추가 등록하기
            </Button>
          </div>
        )
      )}
    </div>
  );
};

export default EditNOKPage;
