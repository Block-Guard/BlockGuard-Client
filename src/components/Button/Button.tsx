import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick: () => void;
  size?: "lg" | "sm";
  isWhite?: boolean;
  isHighlight?: boolean;
  isBlur?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  size = "lg",
  isWhite = false,
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
          type={type}
          className={`max-w-[800px] bg-gradient-highlight w-full pt-2 pb-2 text-[18px] font-semibold leading-7 text-monochrome-100 rounded-[10px] cursor-pointer`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : isBlur ? (
        <button
          type={type}
          className="button-bg-blur w-full py-[15px] text-[22px] text-monochrome-100 leading-8  font-semibold rounded-[15px] "
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      ) : isWhite ? (
        <button
          type={type}
          className={`max-w-[800px] w-full ${paddingClass} text-[${fontSize}] ${fontWeight} bg-monochrome-100 text-primary-400 rounded-xl cursor-pointer border border-[#437efc]`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          type={type}
          className={`max-w-[800px] ${isDiabled} w-full ${paddingClass} text-[${fontSize}] ${fontWeight} text-monochrome-100 rounded-xl cursor-pointer`}
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
