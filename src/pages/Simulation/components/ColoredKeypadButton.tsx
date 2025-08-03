type Props = {
  mainText: string | React.ReactNode;
  subText?: string | React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

const WhiteKeypadButton = ({ mainText, subText, bgColor = "#e5e5e5", textColor = "#151515" }: Props) => {
  return (
    <div className="min-w-16 min-h-16 max-w-20 max-h-20 flex flex-col justify-center items-center rounded-full backdrop-blur-[6.2752px]"
    style={{color: textColor, backgroundColor: bgColor}}>
      <span
        className="text-[35px]"
        style={{ marginTop: mainText === "*" ? "10px" : "" }}
      >
        {mainText}
      </span>
      { mainText !== "*" && mainText !== "#" && typeof(mainText) === "string" && (
        <span
          className="font-bold h-[15px]"
          style={{
            marginTop: "-10px",
            fontSize: subText === "+" ? "14px" : "10px",
          }}
        >
          {subText}
        </span>
      )}
    </div>
  );
};

export default WhiteKeypadButton;
