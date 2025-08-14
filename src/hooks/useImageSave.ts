import { useState, useEffect, useCallback } from 'react';
import { useFraudSurveyContext } from './useFraudSurvey';
import { toast } from 'sonner';

export interface ImageState {
    file: File;
    previewUrl: string;
}

const FILE_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB

// Base64를 File 객체로 변환하는 헬퍼 함수
const base64ToFile = async (base64: string, index: number): Promise<File> => {
    const res = await fetch(base64);
    const blob = await res.blob();
    return new File([blob], `restored_image_${index}.png`, { type: blob.type });
};

// File을 Base64로 변환하는 헬퍼 함수
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};

export const useImageSave = (maxFiles: number) => {
    const { allAnswers, updateAnswers } = useFraudSurveyContext();
    const [images, setImages] = useState<ImageState[]>([]);
    const [isInitializing, setIsInitializing] = useState(true);

    // 컴포넌트 마운트 시 localStorage에서 상태 복원
    useEffect(() => {
        const restoreState = async () => {
            const savedBase64s = (allAnswers.imageBase64 as string[]) || [];
            if (savedBase64s.length > 0) {
                const restoredFiles = await Promise.all(savedBase64s.map(base64ToFile));
                const initialImages = restoredFiles.map(file => ({
                    file,
                    // Base64 문자열은 `fetch`를 통해 로드되므로 그대로 프리뷰 URL로 사용 가능
                    previewUrl: URL.createObjectURL(file),
                }));
                setImages(initialImages);
            }
            setIsInitializing(false);
        };
        restoreState();
        // 클린업: 컴포넌트 언마운트 시 모든 blob URL 해제
        return () => {
            images.forEach(image => URL.revokeObjectURL(image.previewUrl));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // 최초 1회만 실행

    // images 상태가 변경될 때마다 localStorage 업데이트
    useEffect(() => {
        // 초기화 중에는 실행하지 않음
        if (isInitializing) return;

        const updatePersistentState = async () => {
            const files = images.map(img => img.file);
            if (files.length > 0) {
                const base64Strings = await Promise.all(files.map(fileToBase64));
                updateAnswers({ imageFiles: files, imageBase64: base64Strings });
            } else {
                updateAnswers({ imageFiles: [], imageBase64: [] });
            }
        };

        updatePersistentState();
    }, [images, isInitializing, updateAnswers]);

    const addFiles = useCallback((newFiles: File[]) => {
        if (images.length + newFiles.length > maxFiles) {
            toast(`이미지는 최대 ${maxFiles}장까지 첨부 가능합니다.`);
            return;
        }
        const isOversize = newFiles.find(file=>file.size > FILE_SIZE_LIMIT)
        if(isOversize){
            toast(`이미지 용량은 최대 5MB까지 첨부 가능합니다.`)
            return;
        }
        const newImageStates = newFiles.map(file => ({
            file,
            previewUrl: URL.createObjectURL(file),
        }));
        setImages(prevImages => [...prevImages, ...newImageStates]);
    }, [images.length, maxFiles]);

    const deleteFile = useCallback((deleteIndex: number) => {
        const urlToRevoke = images[deleteIndex]?.previewUrl;
        if (urlToRevoke) {
            URL.revokeObjectURL(urlToRevoke);
        }
        setImages(prevImages => prevImages.filter((_, index) => index !== deleteIndex));
    }, [images]);

    return { images, addFiles, deleteFile, isInitializing };
};