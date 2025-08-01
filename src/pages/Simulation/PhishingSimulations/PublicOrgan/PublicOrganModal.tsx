import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../../../components/ui/dialog";

import Blockee from "../../../../assets/character-cropped-fit-image.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const PublicOrganModal = ({ isOpen, onOpenChange }: Props) => {
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [isCorrected, setIsCorrected] = useState(false);

  const onClickAnswer = (answer: number) => {
    if (selectedAnswer === 0) {
      setSelectedAnswer(answer);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedAnswer === 1) {
        setIsCorrected(true);
      } else if (selectedAnswer === 2 || selectedAnswer === 3) {
        setSelectedAnswer(0);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedAnswer]);

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);

    if (!open) {
      console.log("모달이 닫혔습니다.");

      setSelectedAnswer(0);
      setIsCorrected(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[425px] bg-transparent border-none shadow-none "
        showCloseButton={false}
        onInteractOutside={(e) => {
          if (isCorrected) e.preventDefault();
        }}
      >
        <div className="p-5 flex flex-col gap-5 items-center rounded-[20px] bg-monochrome-200">
          {isCorrected ? (
            <div className="w-full flex flex-col items-center gap-[10px]">
              <img className="w-[43px]" src={Blockee} />
              <div className="w-full flex flex-col items-center gap-[15px]">
                <h3 className="text-[22px] font-semibold text-[#437EFC]">
                  정답입니다!
                </h3>
                <div className="h-[1px] w-full bg-monochrome-500 mx-[22px]" />
                <p className="text-center font-medium">
                  이 대응은 피해금을 지키기 위한
                  <br />
                  <span className="text-[#437EFC] font-semibold">
                    유일한 방법
                  </span>
                  입니다.
                </p>
                <p className="text-center font-medium">
                  송금 직후 30분~1시간 내에
                  <br />
                  지급정지 요청 → 수사 요청으로
                  <br />
                  이어지면 피해금이 회수될 확률이
                  <br />
                  매우 높아집니다.
                </p>
              </div>
            </div>
          ) : (
            <>
              <DialogTitle className="text-[20px] font-semibold leading-6">
                만약 당황해서 "안전계좌로
                <br />
                송금"했다면 어떻게 해야 할까?
              </DialogTitle>
              <div className="w-full flex flex-col gap-[5px]">
                <button
                  className="w-full h-15 bg-white rounded-[50px] text-[16px] font-medium leading-5"
                  style={{
                    background:
                      selectedAnswer !== 0
                        ? selectedAnswer === 1
                          ? "#437EFC"
                          : "#E4E7E9"
                        : "#fff",
                    color:
                      selectedAnswer !== 0
                        ? selectedAnswer === 1
                          ? "#fff"
                          : "#79818A"
                        : "#000b25",
                  }}
                  onClick={() => onClickAnswer(1)}
                >
                  바로 경찰청 112에 신고하고,
                  <br />
                  해당 계좌 지급정지를 요청한다
                </button>
                <button
                  className="w-full h-15 bg-white rounded-[50px] text-[16px] font-medium leading-5"
                  style={{
                    background:
                      selectedAnswer !== 0
                        ? selectedAnswer === 2
                          ? "#F24E4E"
                          : "#E4E7E9"
                        : "#fff",
                    color:
                      selectedAnswer !== 0
                        ? selectedAnswer === 2
                          ? "#fff"
                          : "#79818A"
                        : "#000b25",
                  }}
                  onClick={() => onClickAnswer(2)}
                >
                  상대에게 다시 연락해서
                  <br />
                  돌려달라고 요청한다
                </button>
                <button
                  className="w-full h-15 bg-white rounded-[50px] text-[16px] font-medium leading-5"
                  onClick={() => onClickAnswer(3)}
                  style={{
                    background:
                      selectedAnswer !== 0
                        ? selectedAnswer === 3
                          ? "#F24E4E"
                          : "#E4E7E9"
                        : "#fff",
                    color:
                      selectedAnswer !== 0
                        ? selectedAnswer === 3
                          ? "#fff"
                          : "#79818A"
                        : "#000b25",
                  }}
                >
                  앱을 삭제하고 아무 일 없었던 척한다
                </button>
              </div>
            </>
          )}
        </div>
        {isCorrected ? (
          <button
            className="w-full h-16 rounded-[90px] flex bg-[#437efc] text-white text-[20px] font-semibold justify-center items-center"
            onClick={() => navigate("/simulation/select-type")}
          >
            피해 유형 더 알아보기
          </button>
        ) : selectedAnswer !== 0 ? (
          selectedAnswer === 1 ? (
            <div className="w-full h-16 flex flex-row rounded-[90px] gap-[15px] bg-white text-[#437efc] text-[20px] font-semibold justify-center items-center">
              정답이에요!
              <img className="w-[43px]" src={Blockee} />
            </div>
          ) : (
            <div className="w-full h-16 flex flex-row rounded-[90px] gap-[15px] bg-white text-[#F24E4E] text-[20px] font-semibold justify-center items-center">
              다시 시도해보세요!
              <img className="w-[43px]" src={Blockee} />
            </div>
          )
        ) : (
          <div className="h-16" />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PublicOrganModal;
