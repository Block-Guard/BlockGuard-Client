import BlockeeProfile from "@/assets/characters/default-profile-img.png";
import EditProfileImgIcon from "@/assets/icons/edit-profilte-img-icon.svg";
import NokInfoInput from "./NokInfoInput";

type Props = {};

const RegisterNewNokCard = (props: Props) => {
  return (
    <div className="flex flex-col p-4 pb-10 gap-7.5 bg-white rounded-[12px] shadow-[0_2px_19px_rgba(0,0,0,0.25)]">
      <div className="flex flex-row items-center justify-start gap-6 ml-1">
        <div className="relative">
          <img className="w-25 h-25 rounded-full" src={BlockeeProfile} />
          <img
            className="absolute bottom-0 right-[3px] w-6 h-6"
            src={EditProfileImgIcon}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[17px] text-[#79818A] font-semibold leading-[22.5px]">
            블락가드
          </span>
          <span className="text-[15px] text-[#79818A] leading-[22.5px]">
            010-23**-**78
          </span>
        </div>
      </div>
      <NokInfoInput
        input="예시"
        onChangeInput={(e) => console.log(e.target.value)}
        placeholder="닉네임 입력"
        desc="영문, 한글, 숫자 조합으로 최소 1자에서 최대 12자까지 입력"
      />
      <NokInfoInput
        input="예시2"
        onChangeInput={(e) => console.log(e.target.value)}
        placeholder="닉네임 입력"
        desc="영문, 한글, 숫자 조합으로 최소 1자에서 최대 12자까지 입력"
      />
    </div>
  );
};

export default RegisterNewNokCard;
