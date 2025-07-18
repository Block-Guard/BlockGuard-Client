import { useEffect, useRef, useState } from "react";
import ImgUploadIcon from "../../../assets/icons/image-upload-icon.svg";
import XWhiteIcon from "../../../assets/icons/x-white-icon.svg";
import { useFraudSurveyContext } from "../../../hooks/useFraudSurvey";

const FraudMessagePage = () => {
  const { allAnswers, updateAnswers } = useFraudSurveyContext();

  const [localFiles, setLocalFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 변경 시 localStorage에 지속성을 부여하는 함수
  const updatePersistentState = async (filesToSave: File[]) => {
    if (filesToSave.length > 0) {
      const promises = filesToSave.map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
          reader.readAsDataURL(file);
        });
      });
      const base64Strings = await Promise.all(promises);
      updateAnswers({ imageBase64: base64Strings });
    } else {
      // 저장할 파일이 없으면 localStorage도 비움
      updateAnswers({ imageBase64: [] });
    }
  };

  // 처음 마운트 될 때 localStorage에서 Base64 값 로드하여 File 객체 모두 복원
  useEffect(() => {
    const restoreState = async () => {
      const savedBase64Images = (allAnswers.imageBase64 as string[]) || [];
      if (savedBase64Images.length > 0) {
        setPreviewUrls(savedBase64Images); // 미리보기 즉시 복원

        // Base64를 다시 File 객체로 변환하여 로컬 상태도 복원 (중요!)
        const promises = savedBase64Images.map(async (b64, index) => {
          const res = await fetch(b64);
          const blob = await res.blob();
          return new File([blob], `restored_image_${index}.png`, { type: blob.type });
        });
        const restoredFiles = await Promise.all(promises);
        setLocalFiles(restoredFiles);
      }
    };
    restoreState();
  }, []); // 최초 한 번만 실행

  // 클린업 매소드로 생성된 Object URL 정리
  useEffect(() => {
    return () => {
      previewUrls.forEach(url => {
        if (url.startsWith('blob:')) URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

  const handleUploadImg = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files);
    const updatedFiles = [...localFiles, ...newFiles];
    // 원본 파일은 로컬 상태에 저장
    // setLocalFiles(prev => [...prev, ...newFiles]);
    setLocalFiles(updatedFiles);

    // 미리보기는 빠른 Object URL로 생성
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);

    // 변경된 파일 목록으로 즉시 지속성 업데이트
    updatePersistentState(updatedFiles);
  };

  const handleDeleteImage = (deleteIndex: number) => {
    const updatedFiles = localFiles.filter((_, index) => index !== deleteIndex);
    setLocalFiles(updatedFiles);

    const urlToDelete = previewUrls[deleteIndex];
    if (urlToDelete && urlToDelete.startsWith('blob:')) {
      URL.revokeObjectURL(urlToDelete);
    }
    setPreviewUrls(prev => prev.filter((_, index) => index !== deleteIndex));

    // 변경된 파일 목록으로 즉시 지속성 업데이트
    updatePersistentState(updatedFiles);
  };

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
          <textarea
            className="w-full h-full text-zinc-300 text-lg font-medium leading-relaxed"
            value={allAnswers.messageContent as string || ''}
            onChange={(e) => updateAnswers({ messageContent: e.target.value })}
            placeholder="텍스트로 붙여넣기"
          />
        </div>
        <div className="w-full h-60 flex justify-center items-center rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 p-4">
          {previewUrls.length === 0 ? (
            <button onClick={handleUploadImg} className="flex justify-center items-center w-full h-full">
              <img src={ImgUploadIcon} alt="이미지 업로드" />
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-2.5 w-full h-full overflow-y-scroll">
              {previewUrls.map((imageUrl, index) => (
                <div className="w-24 h-24 relative" key={index}>
                  <img className="w-full h-full object-cover rounded-md" src={imageUrl} alt="프리뷰 이미지" />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="w-8 h-8 bg-slate-950/30 relative bottom-24 left-16">
                    <img className="w-full h-full" src={XWhiteIcon} alt="삭제버튼" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-11 px-6 py-3.5 bg-gray-100 rounded-[10px] inline-flex justify-center items-center gap-2.5" onClick={handleUploadImg}>
          <div className="text-gray-400 text-lg font-medium leading-relaxed">
            캡처 이미지 첨부
          </div>
        </div>

        <input className="hidden" type="file" multiple accept="image/*" ref={fileInputRef} onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default FraudMessagePage;