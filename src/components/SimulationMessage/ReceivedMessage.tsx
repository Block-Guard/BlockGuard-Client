type Props = {
  content: string;
};

const ReceivedMessage = ({ content }: Props) => {
  return (
    <div className="whitespace-pre-line p-[10px] max-w-[300px] w-fit bg-[#e9e9eb] rounded-[20px] text-[15px] text-start">
      {content}
    </div>
  );
};

export default ReceivedMessage;
