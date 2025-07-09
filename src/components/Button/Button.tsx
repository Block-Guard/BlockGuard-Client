import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: "lg" | "sm";
  isHighlight?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "lg",
  isHighlight = false,
  disabled = false,
}) => {
  const fontSize = size === "lg" ? "22px" : "14px";
  const fontWeight = size === "lg" ? "font-bold" : "font-normal";
  const paddingClass = size === "lg" ? "pt-3 pb-3" : "pt-2 pb-2";
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