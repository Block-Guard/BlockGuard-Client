const FraudLinkNumPage = () => {

    return (
        <div className="flex flex-col w-full h-full px-6">
            <div className="mt-9 mb-9">
                <span className="text-slate-950 text-2xl font-bold leading-9">
                    의심스러운 링크나 전화번호를
                    입력해주세요
                </span>
                <span className="text-zinc-300 text-2xl font-bold leading-9">
                    {" (선택)"}
                </span>
            </div>

            <div className="flex flex-col gap-4">
                <div data-property-1="Default" className="w-full p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 inline-flex justify-start items-center gap-1.5">
                    <div className="w-80 justify-center text-zinc-300 text-lg font-medium leading-relaxed">링크 (URL)</div>
                </div>

                <div data-property-1="Default" className="w-full p-4 rounded-xl outline-2 outline-offset-[-2px] outline-gray-100 inline-flex justify-start items-center gap-1.5">
                    <div className="w-80 justify-center text-zinc-300 text-lg font-medium leading-relaxed">전화번호</div>
                </div>

            </div>

        </div>
    )
}

export default FraudLinkNumPage;