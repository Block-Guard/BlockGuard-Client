type Props = {
  icon: string;
  desc: string;
  size?: "sm" | "lg";
  color?: string;
  onClick?: () => void;
};

const PhoneButton = ({ icon, desc, size = "lg", color, onClick }: Props) => {
  const sizeStyle =
    size === "lg"
      ? { width: "81px", height: "81px" }
      : { width: "51px", height: "51px" };
  const descFontSize = size === "lg" ? "16px" : "14px";

  const baseStyle = color
    ? { ...sizeStyle, backgroundColor: color }
    : sizeStyle;

  const baseClass =
    "flex justify-center items-center rounded-full" +
    (color ? "" : " bg-white/30 backdrop-blur-[6.2752px]");

  return (
    <div
      className="flex flex-col gap-2 items-center"
      style={{ width: size === "sm" ? "91px" : undefined }}
    >
      <div className={baseClass} style={baseStyle} onClick={onClick}>
        <img src={icon} />
      </div>
      <span
        className="text-monochrome-100 font-medium"
        style={{ fontSize: descFontSize }}
      >
        {desc}
      </span>
    </div>
  );
};

export default PhoneButton;
