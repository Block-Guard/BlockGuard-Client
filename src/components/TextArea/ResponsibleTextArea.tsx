import { useRef } from "react";

interface ResponsibleTextAreaProps{
    rowCount? :number;
    handleChange : (value:string) => void;
    placeholder? : string;
    preValue? :string | string[];
}

const ResponsibleTextArea = ({ rowCount=1, handleChange, placeholder="", preValue="" }:ResponsibleTextAreaProps) => {
    const textarea = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = () => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height = textarea.current.scrollHeight + 'px'
        }
    }
    const handleChangeValueHeight = (value:string) => {
        handleResizeHeight();
        handleChange(value);
    }

    return (
        <textarea
            rows={rowCount}
            className="w-full p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100
                            text-lg font-medium leading-relaxed text-slate-950
                                    focus:bg-monochrome-200
                                    placeholder-zinc-300"
            placeholder={placeholder}
            onChange={((e) => handleChangeValueHeight(e.target.value))} ref={textarea} defaultValue={preValue}/>
            
    )
}

export default ResponsibleTextArea;