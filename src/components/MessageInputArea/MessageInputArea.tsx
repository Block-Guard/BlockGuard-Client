import MessageFileIcon from "../../assets/icons/message-file-plus-icon.svg";

const MessageInputArea = () => {
  return (
    <div className="fixed bottom-0 flex flex-row gap-3 w-full pt-3 pb-9 px-4 justify-center z-50 bg-[#f9f9f9]">
      <img src={MessageFileIcon} />
      <div className="w-full py-2 px-5 rounded-[20px] border border-[#828282] text-sm text-[#b2b2b2]">
        iMessage
      </div>
    </div>
  );
};

export default MessageInputArea;
