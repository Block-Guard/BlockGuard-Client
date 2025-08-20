import React from "react";

type Props = {
  title?: React.ReactNode;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  bgColor?: string;
};

const AutoColorHeader = ({
  title = <></>,
  leftChild = <></>,
  rightChild = <></>,
  bgColor = "#fff",
}: Props) => {
  return (
    <header
      className="w-full flex flex-row items-center px-6 py-[19px] z-50 max-w-[800px] transition-colors duration-150 ease-in-out"
      style={{ background: `${bgColor}` }}
    >
      <div className="flex-1 flex justify-start">{leftChild}</div>
      <div className="flex-4 flex justify-center">{title}</div>
      <div className="flex-1 flex justify-end">{rightChild}</div>
    </header>
  );
};

export default AutoColorHeader;
