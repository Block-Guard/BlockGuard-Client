import React from "react";

type Props = {
  title: React.ReactNode;
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
};

const Header = ({ title, leftChild, rightChild }: Props) => {
  return (
    <header className="w-full fixed flex flex-row items-center px-6 py-[19px]">
      <div className="flex-1 flex justify-start">{leftChild}</div>
      <div className="flex-3 flex justify-center">{title}</div>
      <div className="flex-1 flex justify-end">{rightChild}</div>
    </header>
  );
};

export default Header;
