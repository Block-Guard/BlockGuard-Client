import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: "lg" | "sm";
  isHighlight?: boolean;
  isBlur?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "lg",
  isHighlight = false,
  isBlur = false,
  disabled = false,
}) => {
  const fontSize = size === "lg" ? "22px" : "14px";
  const fontWeight = size === "lg" ? "font-semibold" : "font-normal";
  const paddingClass = size === "lg" ? "py-3" : "py-2 px-[10px]";
  const isDiabled = disabled ? "bg-monochrome-400" : "bg-primary-400";

  return (
    <>
      {isHighlight ? (
        <button
          className={`bg-gradient-highlight w-full pt-2 pb-2 text-[18px] font-semibold leading-7 text-monochrome-100 rounded-[10px] cursor-pointer`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : isBlur ? (
        <button
          className="button-bg-blur w-full py-[15px] text-[22px] text-monochrome-100 leading-8  font-semibold rounded-[15px] "
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <button
          className={`${isDiabled} w-full ${paddingClass} text-[${fontSize}] ${fontWeight} text-monochrome-100 rounded-xl cursor-pointer`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
