interface PageIndexItemProps {
    pageNumber: number;
    currentPage: number;
    setPage : React.Dispatch<React.SetStateAction<number>>
}

export const PageIndexItem = ({ pageNumber, currentPage, setPage }: PageIndexItemProps) => {
    const handleMovePage = () => setPage(pageNumber);
    if(pageNumber < 0){
        return null;
    }
    return (
        <>
            {
                pageNumber === currentPage ? (
                    <div className="flex justify-center items-center w-8 h-8 bg-[#D3E1FF] rounded-full
                    text-center text-primary-400 text-lg font-bold leading-snug"
                    onClick={handleMovePage}>
                        {pageNumber}
                    </div>
                ) : (
                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full
                    text-center text-[#79818A] text-lg font-bold leading-snug"
                    onClick={handleMovePage}>
                        {pageNumber}
                    </div>
                )
            }
        </>

    )
}