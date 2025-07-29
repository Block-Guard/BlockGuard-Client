import { useRef } from "react";

interface LoanInfoInputProps {
    label: string;
    placeholder: string;
    inputState: boolean;
    inputStateSetter: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoanInfoInput = ({ label, placeholder, inputState, inputStateSetter }: LoanInfoInputProps) => {
    const textForm = useRef<HTMLInputElement>(null);


    const handleChange = (e) => {
        // if (e.target.value !== null && e.target.value !== "")
            inputStateSetter(true)
    }
    return (
        <div className="flex flex-col">
            {
                inputState ? (
                    <span className="text-black text-base font-medium leading-normal">
                        {label}
                    </span>
                ) : (
                    <span className="text-red-600 text-base font-medium leading-normal">
                        {label}  &nbsp;{"*필수입력 항목입니다."}
                    </span>
                )
            }
            <input type="text"
                className={`w-full h-12 px-5 py-3 outline-2 outline-offset-[-2px]
                ${inputState ? "outline-gray-100" : "outline-red-600"}
                            text-lg font-medium leading-relaxed text-slate-950
                                    focus:bg-monochrome-200
                                    placeholder-zinc-300
                                    resize-none no-scrollbar
                                    ${inputState ? "bg-white":"bg-monochrome-200" }
                                    `}
                placeholder={placeholder}
                onChange={handleChange}
                ref={textForm} />
        </div>
    )
}