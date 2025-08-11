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
import { getGuardiansListApi } from "../../apis/guardians";

const EditNOKPage = () => {
  const navigate = useNavigate();
  const [nokList, setNokList] = useState<NOKInfoType[]>([]);
  const [primaryNokInfo, nonPrimaryNokInfoList] = partition<NOKInfoType>(
    nokList,
    "isPrimary"
  );
  const [addNokMode, setAddNokMode] = useState(false);
  const [isChangedFlag, setIsChangedFlag] = useState(false);

  const getNokList = async () => {
    try {
      const response = await getGuardiansListApi();
      if (response) setNokList(response);
    } catch (error) {
      console.error("보호자 목록 조회 클라이언트 측 오류 메시지", error);
    }
  };

  useEffect(() => {
    getNokList();
  }, [isChangedFlag]);

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
          <RegisterNewNokCard
            setAddNokMode={setAddNokMode}
            setIsChangedFlag={setIsChangedFlag}
          />
        ) : nokList.length !== 0 ? (
          <>
            {primaryNokInfo[0] && (
              <div className="flex flex-col gap-[11px]">
                <span className="text-[16px] text-[#6e6e6e] font-semibold">
                  대표 보호자
                </span>
                <NOKInfoCard
                  nokInfo={primaryNokInfo[0]}
                  setIsChangedFlag={setIsChangedFlag}
                />
              </div>
            )}
            {nonPrimaryNokInfoList.length !== 0 && (
              <div className="flex flex-col gap-[11px]">
                <span className="text-[16px] text-[#6e6e6e] font-semibold">
                  보호자 목록
                </span>
                <div className="flex flex-col gap-5">
                  {nonPrimaryNokInfoList.map((nok) => (
                    <NOKInfoCard
                      key={nok.guardiansId}
                      nokInfo={nok}
                      setIsChangedFlag={setIsChangedFlag}
                    />
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
          className="absolute bottom-20 w-full flex flex-col px-7 pt-6 pb-8 gap-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
          }}
        >
          {/* 수동으로 form을 submit하도록 수정 */}
          <Button
            onClick={() => {
              const form = document.getElementById(
                "register-nok-form"
              ) as HTMLFormElement;
              if (form) form.requestSubmit();
            }}
          >
            + 추가하기
          </Button>
          <Button isWhite={true} onClick={() => setAddNokMode(false)}>
            취소하기
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
