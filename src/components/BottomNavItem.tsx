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
    navigate(`/${text}`);
  };
  return (
    <>
      {isSelected ? (
        <div
          className="flex flex-col w-25 h-7 justify-center items-center 
                bg-[#FFFFFF] rounded-[10px]"
          onClick={handleClick}
        >
          <img className="w-6 h-6" src={imageOnSrc} />
          <div className="text-center justify-start text-blue-500 text-xs font-extrabold font-pretendard">
            {text}
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col w-25 h-7 justify-center items-center"
          onClick={handleClick}
        >
          <img className="w-6 h-6" src={imageOffSrc} />
          <div className="text-center justify-start text-gray-400 text-xs font-medium font-pretendard">
            {text}
          </div>
        </div>
      )}
    </>
  );
};

export default BottomNavItem;
