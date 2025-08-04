import Header from "../../../components/Header/Header";
import LeftArrowIcon from "../../../assets/icons/arrow-left-darkblue-icon.svg";
import { useNavigate } from "react-router-dom";
import { phishingTypeData } from "../constants";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import PhishingTypeCard from "./components/PhishingTypeCard";
import SimulationLoading from "./components/SimulationLoading";

const SimulationSelect = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const onClickToSimulation = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        switch (selectedType) {
          case 1:
            navigate("/simulation/public-organ/step1");
            break;
          case 3:
            navigate("/simulation/loan-investment/step1");
            break;
          case 4:
            navigate("/simulation/card-delivery/first-message");
            break;
          default:
            navigate("/simulation/select-type");
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  if (isLoading) {
    return <SimulationLoading />;
  }

  return (
    <div className="flex flex-col h-full">
      <Header
        leftChild={
          <img
            src={LeftArrowIcon}
            className="py-[5.5px] pr-1"
            onClick={() => navigate("/simulation")}
          />
        }
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
            <PhishingTypeCard
              key={item.id}
              selectedType={selectedType}
              id={item.id}
              title={item.title}
              defaultIcon={item.defaultIcon}
              selectedIcon={item.selectedIcon}
              setSelectedType={setSelectedType}
            />
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
          <Button onClick={onClickToSimulation}>다음</Button>
        </div>
      )}
    </div>
  );
};

export default SimulationSelect;
