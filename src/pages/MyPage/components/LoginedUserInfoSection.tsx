import type { UserInfoType } from "../../../types/user-info-types";
import BlockeeProfile from "@/assets/characters/default-profile-img.png";

type Props = {
  userInfo: UserInfoType;
};

const LoginedUserInfoSection = ({ userInfo }: Props) => {
  return (
    userInfo && (
      <div className="flex flex-col items-center">
        <img
          className="rounded-full w-32 h-32 mb-4.5 object-cover object-center bg-[#B7D1FF]"
          src={userInfo?.profileImageUrl || BlockeeProfile}
        />
        <h2 className="font-semibold text-[20px]">{userInfo?.name} 님</h2>
        <span className="text-[#00487C]">{userInfo?.email}</span>
      </div>
    )
  );
};

export default LoginedUserInfoSection;
