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
          className="rounded-full"
          src={userInfo?.profileImageUrl || BlockeeMyPage}
          style={{
            width: userInfo.profileImageUrl ? "118px" : "175px",
            height: userInfo.profileImageUrl ? "118px" : "",
            marginTop: userInfo.profileImageUrl ? "18px" : "",
            marginBottom: userInfo.profileImageUrl ? "18px" : "",
          }}
        />
        <h2 className="font-semibold text-[20px]">{userInfo?.name} 님</h2>
        <span className="text-[#00487C]">{userInfo?.email}</span>
      </div>
    )
  );
};

export default LoginedUserInfoSection;
