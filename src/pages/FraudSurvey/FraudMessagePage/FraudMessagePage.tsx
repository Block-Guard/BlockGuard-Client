import ImgUploadIcon from "../../../assets/icons/ImageUpload-icon.svg";

const FraudMessagePage = () => {
  return (
    <div className="flex flex-col w-full h-full px-6">
      <div className="mt-9 mb-9">
        <span className="text-slate-950 text-2xl font-bold leading-9">
          문자 내용을 입력해 주세요
        </span>
        <span className="text-zinc-300 text-2xl font-bold leading-9">
          {" (선택)"}
        </span>
        <div className="text-gray-400 text-lg font-medium leading-relaxed">
          붙여넣기 또는 캡처 이미지를 첨부해 주세요!
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 inline-flex justify-start items-center gap-1.5">
          <div className="w-80 text-zinc-300 text-lg font-medium leading-relaxed">
            텍스트로 붙여넣기
          </div>
        </div>

        <div className="w-full h-60 flex justify-center items-center rounded-xl outline-2 outline-offset-[-2px] outline-gray-100">
          <img src={ImgUploadIcon} alt="이미지 업로드" />
        </div>

        <div className="w-[50%] h-11 px-6 py-3.5 bg-gray-100 rounded-[10px] inline-flex justify-center items-center gap-2.5">
          <div className="text-gray-400 text-lg font-medium leading-relaxed">
            캡처 이미지 첨부
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudMessagePage;
