import { useNavigate } from "react-router-dom";
import type { MypageMenuType } from "../constants/mypage-types";
import { toast } from "sonner";

type Props = {
  title: string;
  menus: MypageMenuType[];
};

const SettingsSectionPanel = ({ title, menus }: Props) => {
  const navigate = useNavigate();

  const handleClickMenu = (menu: string) => {
    switch (menu) {
      case "회원정보 수정":
        navigate("/mypage/edit-user-info");
        break;
      case "보호자 등록 / 수정":
        navigate("/mypage/edit-nok");
        break;
      case "사기 분석 기록":
        navigate("/mypage/check-fraud-analysis-report");
        break;
      case "1:1 문의":
        console.log("1:1 문의하기");
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSc8wVuMOD68WBVtVXAbjr6vU3YQahF0NZG1ZBu5l7yuigQD-w/viewform?usp=send_form",
          "_blank"
        );
        break;
      case "서비스 이용약관":
        window.open("/files/terms-of-service.pdf", "_blank");
        break;
      case "개인정보 처리방침":
        window.open("/files/privacy-policy.pdf", "_blank");
        break;
      case "로그아웃":
        localStorage.clear();
        toast("로그아웃 되었습니다.");
        navigate("/login");
        break;
      case "계정 탈퇴":
        console.log("계정 탈퇴하기");
        break;
      default:
        return;
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] text-[#6e6e6e]">{title}</h3>
      <div className="bg-white rounded-[12px] py-2 pl-[15px]">
        {menus.map((menu, index) => (
          <div
            key={menu.menuTitle}
            className="flex flex-row gap-2 cursor-pointer"
            onClick={() => handleClickMenu(menu.menuTitle)}
          >
            <img src={menu.menuIcon} />
            <div
              className="w-full flex items-center py-4 pl-2"
              style={{
                borderBottom:
                  index === menus.length - 1 ? "" : "0.6px solid #d9d9d9",
              }}
            >
              <span className="text-sm">{menu.menuTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsSectionPanel;
