import { useRef } from "react";
import ImgUploadIcon from "../../../assets/icons/image-upload-icon.svg";
import XWhiteIcon from "../../../assets/icons/x-white-icon.svg";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";
import ResponsibleTextArea from "../../../components/TextArea/ResponsibleTextArea";
import { useImageSave } from "../../../hooks/useImageSave";

const MAX_IMAGES = 2; // 상수로 관리

const FraudMessagePage = () => {
  const { allAnswers, updateAnswers } = useFraudSurveyContext();

  const { images, addFiles, deleteFile} = useImageSave(MAX_IMAGES);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMsgText = (value:string) =>{
    updateAnswers({"messageContent" : value});
  }

  const handleUploadImg = () => {
    fileInputRef.current?.click();
  };

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    addFiles(Array.from(files));

    // 파일 선택 후 input의 value를 초기화하여 같은 파일을 다시 선택할 수 있도록 함
    e.target.value = "";
  };

  return (
    <div className="flex flex-col w-full h-full px-6">
      <div className="mt-9 mb-9">
        <span className="text-slate-950 text-2xl font-bold leading-9">
          문자 내용을 입력해 주세요
        </span>
        <div className="text-gray-400 text-lg font-medium leading-relaxed">
          붙여넣기 또는 캡처 이미지를 첨부해 주세요!
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 pb-6">
 
          <ResponsibleTextArea rowCount={3} handleChange={handleMsgText} 
          preValue={allAnswers["messageContent"] as string}
          placeholder="텍스트로 붙여넣기"/>
          
        <div className="w-full h-60 flex justify-center items-center rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 p-4">
          {images.length === 0 ? (
            <button onClick={handleUploadImg} className="flex justify-center items-center w-full h-full">
              <img src={ImgUploadIcon} alt="이미지 업로드" />
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-2.5 w-full h-full overflow-y-scroll">
              {images.map((image, index) => (
                <div className="w-24 h-24 relative" key={index}>
                  <img className="w-full h-full object-cover rounded-md" src={image.previewUrl} alt="프리뷰 이미지" />
                  <button
                    onClick={() => deleteFile(index)}
                    className="w-8 h-8 bg-slate-950/30 absolute top-1 right-1 flex justify-center items-center">
                    <img className="w-5 h-5" src={XWhiteIcon} alt="삭제버튼" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <input className="hidden" type="file" multiple accept="image/*" ref={fileInputRef} onChange={handleFileChange} />

        <button className="h-11 px-6 py-3.5 bg-gray-100 rounded-[10px] inline-flex justify-center items-center gap-2.5" onClick={handleUploadImg}>
          <div className="text-gray-400 text-lg font-medium leading-relaxed">
            캡처 이미지 첨부
          </div>
        </button>
      </div>
    </div>
  );
};

export default FraudMessagePage;