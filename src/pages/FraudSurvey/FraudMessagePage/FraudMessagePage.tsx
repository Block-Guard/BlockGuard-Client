import { useEffect, useRef, useState } from "react";
import ImgUploadIcon from "../../../assets/icons/image-upload-icon.svg";
import XWhiteIcon from "../../../assets/icons/x-white-icon.svg";

const FraudMessagePage = () => {

  const [msgText, setMsgText] = useState('');
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImg = () => {
    fileInputRef.current?.click();
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const files = e.target.files;
    if(!files)
        return;

    const newImageUrls = Array.from(files).map((file)=> URL.createObjectURL(file));

    setPreviewImage(prev => [...prev, ...newImageUrls]);
  }

  const handleDeleteImage = (deleteIndex: number) => {
    console.log(deleteIndex, "번째 이미지 제거하기");
    URL.revokeObjectURL(previewImage[deleteIndex]); // 생성된 URL 메모리 제거용
    const deleted = previewImage.filter((_img, index) => index !== deleteIndex)
    setPreviewImage(deleted);
  }

  useEffect(()=>{
    // 컴포넌트 unmount시 클린 업으로 url 메모리 제거
    return ()=>{
      previewImage.forEach(file => URL.revokeObjectURL(file))
    }
  }, [previewImage])

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
        <div className="inline-flex justify-start items-start gap-1.5 w-full h-38 p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100">
          <textarea className="w-full h-full text-zinc-300 text-lg font-medium leading-relaxed"
            onChange={(e) => setMsgText(e.target.value)} placeholder="텍스트로 붙여넣기" />
        </div>

        <div className="w-full h-60 flex justify-center items-center rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 p-4">
          {previewImage.length === 0 ? (
            <img src={ImgUploadIcon} alt="이미지 업로드" />
          ) : (
            <div className="grid grid-cols-3 gap-2.5 w-full h-full overflow-y-scroll">
              {previewImage.map((imageUrl, index)=>(
                <div className="w-24 h-24 outline-2 outline-offset-[-2px] outline-gray-100" key={index}>
                  <img className="w-full h-full" src={imageUrl} alt="프리뷰 이미지" />

                  <div className="w-8 h-8 bg-slate-950/30 relative bottom-24 left-16">
                    <img className="w-full h-full" onClick={()=>handleDeleteImage(index)}
                    src={XWhiteIcon} alt="삭제버튼"/>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 이미지 파일 input 숨김 처리 + ref 연결*/}
          <form>
            <input className="hidden" type="file" multiple 
            accept="image/*" ref={fileInputRef} onChange={handleFileChange}/>
          </form>
        </div>

        <div className="h-11 px-6 py-3.5 bg-gray-100 rounded-[10px] inline-flex justify-center items-center gap-2.5"
          onClick={handleUploadImg}>
          <div className="text-gray-400 text-lg font-medium leading-relaxed">
            캡처 이미지 첨부
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudMessagePage;
