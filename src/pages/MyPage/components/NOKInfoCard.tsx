import BlockeeProfile from "@/assets/characters/default-profile-img.png";
import ViewMoreIcon from "@/assets/icons/view-more-icon.svg";
import type { NOKInfoType } from "../../../types/nok-info-types";
import MyPageMenuPopover from "./MyPageMenuPopover";
import {
  deleteGuardianApi,
  updateIsGuardianPrimary,
} from "../../../apis/guardians";
import { useState } from "react";
import EditNokInfoCard from "./EditNokInfoCard";
import { toast } from "sonner";

type Props = {
  nokInfo: NOKInfoType;
  setIsChangedFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

const NOKInfoCard = ({ nokInfo, setIsChangedFlag }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const handleUpdateIsPrimary = async () => {
    try {
      await updateIsGuardianPrimary(nokInfo.guardiansId, !nokInfo.isPrimary);
      setIsChangedFlag((prev) => !prev);
      if (nokInfo.isPrimary) {
        toast("대표 보호자 해제가 되었습니다.");
      } else {
        toast("대표 보호자 설정이 완료되었습니다.");
      }
    } catch (error) {
      console.error("보호자 대표 여부 수정 클라 측 에러 메시지", error);
    }
  };
  const deleteGuardian = async () => {
    try {
      await deleteGuardianApi(nokInfo.guardiansId);
      setIsChangedFlag((prev) => !prev);
      toast("보호자가 삭제되었습니다.");
    } catch (error) {
      console.error("보호자 삭제 클라 측 에러 메시지", error);
    }
  };

  return editMode ? (
    <EditNokInfoCard
      nokInfoProps={nokInfo}
      setEditMode={setEditMode}
      setIsChangedFlag={setIsChangedFlag}
    />
  ) : (
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
      <MyPageMenuPopover
        popoverTrigger={<img src={ViewMoreIcon} />}
        popoverContent={
          <div className="flex flex-col gap-1 text-[16px] leading-9">
            <span
              style={{ color: nokInfo.isPrimary ? "#437EFC" : "" }}
              onClick={handleUpdateIsPrimary}
            >
              {nokInfo.isPrimary ? "대표 보호자 해제" : "대표 보호자 설정"}
            </span>
            <span onClick={() => setEditMode(true)}>보호자 수정</span>
            <span onClick={deleteGuardian}>보호자 삭제</span>
          </div>
        }
      />
    </div>
  );
};

export default NOKInfoCard;
