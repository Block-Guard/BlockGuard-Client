interface SurveyButtonProps {
    selectedItem: string;
    text: string;
    setSelctedItem: React.Dispatch<React.SetStateAction<string>>;
}

const SurveyButton = ({ selectedItem, text, setSelctedItem }: SurveyButtonProps) => {
    return (
        <div className="w-full mb-4">
            {selectedItem === text ? (
                <div data-property-1="Selected" className="w-full h-15 px-4 py-3.5 bg-blue-300 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={() => setSelctedItem("")}>
                    <div className="text-white text-xl font-bold leading-loose">
                        {text}
                    </div>
                </div>
            ) : (
                <div data-property-1="Default" className="w-full h-15 px-4 py-3.5 bg-gray-100 rounded-xl inline-flex justify-center items-center gap-1.5"
                    onClick={() => setSelctedItem(text)}>
                    <div className="text-slate-950 text-xl font-semibold leading-loose">
                        {text}
                    </div>
                </div>
            )}
        </div>
    )
}

export default SurveyButton;