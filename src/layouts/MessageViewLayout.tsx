import { Outlet } from "react-router-dom";
import MessageHeader from "../components/MessageHeader/MessageHeader";
import MessageInputArea from "../components/MessageInputArea/MessageInputArea";

type Props = {
  sender: string;
};

const MessageViewLayout = ({ sender }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <MessageHeader sender={sender} />
      <main className="h-[calc(100vh-210px)] bg-[#ffffff] overflow-hidden overflow-y-auto no-scrollbar mt-[123px]">
        <Outlet />
      </main>
      <MessageInputArea />
    </div>
  );
};

export default MessageViewLayout;
