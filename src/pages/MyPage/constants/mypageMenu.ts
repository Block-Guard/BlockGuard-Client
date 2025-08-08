import EditUserInfoIcon from "@/assets/mypage/edit-user-info-icon.svg";
import EditNOKIcon from "@/assets/mypage/edit-nok-icon.svg";
import FraudAnalysisReportIcon from "@/assets/mypage/fraud-analysis-record-icon.svg";
import InquiryIcon from "@/assets/mypage/inquiry-icon.svg";
import TermOfUseIcon from "@/assets/mypage/term-of-use-icon.svg";
import PrivacyPolicyIcon from "@/assets/mypage/privacy-policy-icon.svg";
import LogoutIcon from "@/assets/mypage/logout-icon.svg";
import AccountWithdrawalIcon from "@/assets/mypage/account-withdrawal-icon.svg";

export const mypageMenus = {
  personalSettings: [
    {
      menuTitle: "회원정보 수정",
      menuIcon: EditUserInfoIcon,
    },
    {
      menuTitle: "보호자 등록 / 수정",
      menuIcon: EditNOKIcon,
    },
    {
      menuTitle: "사기 분석 기록",
      menuIcon: FraudAnalysisReportIcon,
    },
  ],
  serviceInfo: [
    {
      menuTitle: "1:1 문의",
      menuIcon: InquiryIcon,
    },
    {
      menuTitle: "서비스 이용약관",
      menuIcon: TermOfUseIcon,
    },
    {
      menuTitle: "개인정보 처리방침",
      menuIcon: PrivacyPolicyIcon,
    },
  ],
  account: [
    {
      menuTitle: "로그아웃",
      menuIcon: LogoutIcon,
    },
    {
      menuTitle: "계정 탈퇴",
      menuIcon: AccountWithdrawalIcon,
    },
  ],
};
