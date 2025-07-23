import { useNavigate } from "react-router-dom";

type BottomNavItemProps = {
  imageOnSrc: string;
  imageOffSrc: string;
  isSelected: boolean;
  text: string;
};

const BottomNavItem = ({
  imageOnSrc,
  imageOffSrc,
  isSelected,
  text,
}: BottomNavItemProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    switch (text) {
      case "홈":
        navigate("/home");
        break;
      case "긴급대응":
        navigate("/emergency");
        break;
      case "학습":
        navigate("/simulation");
        break;
      case "마이":
        navigate("/my");
        break;
      default:
        return;
    }
  };
  return (
    <>
      {isSelected ? (
        <button
          className="flex flex-col w-25 h-7 justify-center items-center 
                bg-[#FFFFFF] rounded-[10px] cursor-pointer"
          onClick={handleClick}
        >
          <img className="w-6 h-6" src={imageOnSrc} />
          <div className="text-center justify-start text-blue-500 text-xs font-extrabold font-pretendard">
            {text}
          </div>
        </button>
      ) : (
        <button
          className="flex flex-col w-25 h-7 justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <img className="w-6 h-6" src={imageOffSrc} />
          <div className="text-center justify-start text-gray-400 text-xs font-medium font-pretendard">
            {text}
          </div>
        </button>
      )}
    </>
  );
};

export default BottomNavItem;
