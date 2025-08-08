import type { UserInfoType } from "../../../types/user-info-types";
import BlockeeMyPage from "@/assets/characters/blockee-mypage.png";

type Props = {
  userInfo: UserInfoType;
};

const LoginedUserInfoSection = ({ userInfo }: Props) => {
  return (
    userInfo && (
      <div className="flex flex-col items-center">
        <img
          className="w-45 rounded-full"
          src={userInfo?.profileImageUrl || BlockeeMyPage}
        />
        <h2 className="font-semibold text-[20px]">{userInfo?.name} 님</h2>
        <span className="text-[#00487C]">{userInfo?.email}</span>
      </div>
    )
  );
};

export default LoginedUserInfoSection;
