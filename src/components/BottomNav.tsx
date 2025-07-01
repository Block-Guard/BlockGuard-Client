const BottomNav = () =>{

    return (
        <div>
                        <div className="inline-flex justify-start items-center gap-14">
                <div className="text-center justify-start text-blue-500 text-xs font-extrabold font-['Pretendard']">홈</div>
                <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-5 h-5 left-[0.82px] top-[0.82px] absolute bg-blue-500" />
                </div>
                <div className="text-center justify-start text-gray-400 text-xs font-medium font-['Pretendard']">콘텐츠</div>
                <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-5 h-5 left-[0.82px] top-[0.91px] absolute bg-gray-400" />
                </div>
                <div className="text-center justify-start text-gray-400 text-xs font-medium font-['Pretendard']">긴급대응</div>
                <div className="w-6 h-6 relative overflow-hidden" />
                <div className="w-6 h-6 relative overflow-hidden">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-gray-400" />
                </div>
                <div className="w-10 text-center justify-start text-gray-400 text-xs font-medium font-['Pretendard']">마이</div>
            </div>
        </div>
    )
}

export default BottomNav;