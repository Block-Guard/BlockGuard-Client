type Props = {
  mainText: string;
  subText?: string;
};

const KeypadButton = ({ mainText, subText }: Props) => {
  return (
    <div className="w-[81px] h-[81px] flex flex-col justify-center items-center rounded-full text-monochrome-100 bg-white/30 backdrop-blur-[6.2752px]">
      <span
        className="text-[35px]"
        style={{ marginTop: mainText === "*" ? "10px" : "" }}
      >
        {mainText}
      </span>
      {mainText !== "*" && mainText !== "#" && (
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

export default KeypadButton;
