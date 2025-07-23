import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import { useNavigate } from "react-router-dom";
import { phishingTypeData } from "../constants";
import { useState } from "react";
import Button from "../../../components/Button/Button";

const SimulationSelect = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(0);

  const onClickSelectType = (selectedId: number) => {
    if (selectedType === selectedId) {
      setSelectedType(0);
    } else {
      setSelectedType(selectedId);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        leftChild={<img src={LeftArrowIcon} onClick={() => navigate(-1)} />}
      />
      <div
        className="flex flex-col gap-7 pb-30 px-6 mt-[72px] max-w-[800px]"
        style={{ paddingBottom: selectedType !== 0 ? "120px" : "0" }}
      >
        <h1 className="text-monochrome-700 text-2xl font-bold leading-9">
          체험 하고 싶은
          <br />
          피싱유형을 선택해주세요
        </h1>
        <div className="grid grid-cols-2 grid-flow-row gap-x-3 gap-y-4">
          {phishingTypeData.map((item) => (
            <div
              key={item.id}
              className="bg-monochrome-200 py-[22px] flex flex-col items-center gap-1 rounded-[12px]"
              style={{
                background: selectedType === item.id ? "#87AEFD" : "#eef1f3",
              }}
              onClick={() => onClickSelectType(item.id)}
            >
              <img
                className="w-[46px]"
                src={
                  selectedType === item.id
                    ? item.selectedIcon
                    : item.defaultIcon
                }
                alt="피싱 아이콘"
              />
              <span
                className="whitespace-pre-line text-lg font-bold leading-[27px] text-center"
                style={{ color: selectedType === item.id ? "#fff" : "#000" }}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {selectedType !== 0 && (
        <div
          className="fixed bottom-0 w-full pt-10 pb-10 px-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)",
          }}
        >
          <Button
            onClick={() => console.log(selectedType, "번 타입 시뮬레이션")}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
};

export default SimulationSelect;
