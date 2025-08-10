import BlockeeProfile from "@/assets/characters/default-profile-img.png";
import ViewMoreIcon from "@/assets/icons/view-more-icon.svg";
import type { NOKInfoType } from "../../../types/nok-info-types";

type Props = {
  nokInfo: NOKInfoType;
};

const NOKInfoCard = ({ nokInfo }: Props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-5 py-[10px] bg-white rounded-[12px] shadow-[0_2px_19px_rgba(0,0,0,0.25)]">
      <div className="flex flex-row gap-[25px]">
        <img
          className="w-18 h-18 rounded-full"
          src={nokInfo.profileImageUrl || BlockeeProfile}
        />
        <div className="relative flex flex-col gap-[3px] justify-center">
          <span className="text-lg font-semibold">{nokInfo.name}</span>
          <span className="text-[17px] text-[#00487C]">
            {nokInfo.phoneNumber}
          </span>
          {nokInfo.isPrimary && (
            <div className="absolute top-2.5 -right-9 rounded-sm bg-primary-400 text-white text-[10px] font-semibold py-1 px-2">
              대표
            </div>
          )}
        </div>
      </div>
      <img src={ViewMoreIcon} />
    </div>
  );
};

export default NOKInfoCard;
