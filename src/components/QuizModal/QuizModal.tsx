import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog";
import Blockee from "../../assets/character-cropped-fit-image.svg";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;

  modalTitle: React.ReactNode;
  answerDesc: React.ReactNode;
  option1: React.ReactNode;
  option2: React.ReactNode;
  option3: React.ReactNode;
  correctAnswer: 1 | 2 | 3;
  navigateTo: string;
};

const QuizModal = ({
  isOpen,
  onOpenChange,
  modalTitle,
  answerDesc,
  option1,
  option2,
  option3,
  correctAnswer,
  navigateTo,
}: Props) => {
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
      if (selectedAnswer === correctAnswer) {
        setIsCorrected(true);
      } else if (
        selectedAnswer === 1 ||
        selectedAnswer === 2 ||
        selectedAnswer === 3
      ) {
        setSelectedAnswer(0);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedAnswer, correctAnswer]);

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);

    if (!open) {
      setSelectedAnswer(0);
      setIsCorrected(false);
    }
  };

  const renderOption = (index: 1 | 2 | 3, content: React.ReactNode) => {
    const isSelected = selectedAnswer === index;
    const isWrong =
      selectedAnswer !== 0 && selectedAnswer !== correctAnswer && isSelected;
    const isCorrect =
      selectedAnswer !== 0 && correctAnswer === index && isSelected;

    const backgroundColor = isCorrect
      ? "#437EFC"
      : isWrong
      ? "#F24E4E"
      : selectedAnswer !== 0
      ? "#E4E7E9"
      : "#fff";

    const textColor = isCorrect
      ? "#fff"
      : isWrong
      ? "#fff"
      : selectedAnswer !== 0
      ? "#79818A"
      : "#000b25";

    return (
      <button
        className="w-full h-15 bg-white rounded-[50px] text-[16px] font-medium leading-5"
        style={{ background: backgroundColor, color: textColor }}
        onClick={() => onClickAnswer(index)}
      >
        {content}
      </button>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[425px] bg-transparent border-none shadow-none"
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
                {answerDesc}
              </div>
            </div>
          ) : (
            <>
              <DialogTitle className="text-[20px] font-semibold leading-6">
                {modalTitle}
              </DialogTitle>
              <div className="w-full flex flex-col gap-[5px]">
                {renderOption(1, option1)}
                {renderOption(2, option2)}
                {renderOption(3, option3)}
              </div>
            </>
          )}
        </div>

        {isCorrected ? (
          <button
            className="w-full h-16 rounded-[90px] flex bg-[#437efc] text-white text-[20px] font-semibold justify-center items-center"
            onClick={() => navigate(navigateTo)}
          >
            피해 유형 더 알아보기
          </button>
        ) : selectedAnswer !== 0 ? (
          selectedAnswer === correctAnswer ? (
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

export default QuizModal;
