import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface ResponsibleTextAreaProps{
    rowCount? :number;
    handleChange : (value:string) => void;
    placeholder? : string;
    preValue? :string;
}

const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;
    return (...args: any[])=>{
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(()=>{
            func(...args);
        }, delay);
    };
};

const ResponsibleTextArea = ({ rowCount=1, handleChange, placeholder="", preValue="" }:ResponsibleTextAreaProps) => {
    const textarea = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState(preValue);
    const handleResizeHeight = useCallback(() => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height = textarea.current.scrollHeight + 'px'
        }
    },[]);

    const debouncedResizeHeight = useCallback(debounce(handleResizeHeight, 200),[handleResizeHeight])

    const handleChangeValueHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        handleChange(newValue);
        debouncedResizeHeight();
    }

    useEffect(()=>{
        handleResizeHeight();
    },[handleResizeHeight]);

    return (
        <textarea
            rows={rowCount}
            className={`w-full p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100
                            text-lg font-medium leading-relaxed text-[#000b25]
                                    focus:bg-monochrome-200
                                    placeholder-zinc-300
                                    resize-none no-scrollbar
                                    ${preValue.trim() ? "bg-monochrome-200" : 'bg-white'}
                                    `}
            placeholder={placeholder}
            onChange={handleChangeValueHeight} ref={textarea} value={value}/>
    )
}

export default React.memo(ResponsibleTextArea);