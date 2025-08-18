import TrashCanIcon from "../../../assets/icons/trashcan.svg"

interface FraudRecordCardProps {
    recordDate: string;
    riskLevel: string;
    resultType: string;
}

const FraudRecordCard = ({ recordDate, riskLevel, resultType }: FraudRecordCardProps) => {
    function formatDateTime(dateString: string) {
        const date = new Date(dateString);

        // 각 날짜 및 시간 요소 추출
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        // 형식에 맞게 조합하여 반환
        return `${year}-${month}-${day} | ${hours}:${minutes}`;
    }

    return (
        <div className="flex justify-between w-full px-6 py-5 border-[1.5px] border-primary-400 rounded-[10px] text-black font-medium">
            <div className="flex flex-col gap-1">
                <span className="flex justify-between text-lg">
                    {formatDateTime(recordDate)}

                </span>
                <span className="text-base">
                    분석 결과 {riskLevel}_{resultType}
                </span>
            </div>

            <div className="flex flex-col gap-1 justify-between items-end">
                <button>
                    <img src={TrashCanIcon} alt="삭제버튼" />
                </button>

                <span className="text-primary-400 text-xs font-medium">
                    상세보기
                </span>
            </div>

        </div>
    )
}

export default FraudRecordCard;