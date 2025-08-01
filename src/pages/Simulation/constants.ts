export const dummyPhishingExam = [
  {
    id: 1,
    title: "보이스 피싱",
    desc: "검찰 또는 공공기관 사칭 등의 수법을 통해 전화로 개인정보‧금융 정보를 빼내거나 재산을 편취하는 범죄",
    url: "https://ecrm.police.go.kr/minwon/main",
  },
  {
    id: 2,
    title: "메신저 피싱",
    desc: "카카오톡 등 모바일 메신저를 통해 이루어지는 피싱 범죄의 일종으로 가족, 친구 등 지인을 사칭하여 1:1 대화 또는 쪽지 등을 보내 자금을 가로채는 유형",
    url: "https://pf.kakao.com/_kpjPn",
  },
  {
    id: 3,
    title: "스미싱",
    desc: "수신된 문자메시지의 URL 클릭을 통해 개인정보를 빼내거나 악성 코드를 설치해 피해자가 모르는 사이에 소액결제 피해 발생 또는 개인·금융 정보를 탈취하는 범죄",
    url: "https://portal.kfb.or.kr/voice/bankphonenumber.php",
  },
  {
    id: 4,
    title: "기타 사기유형",
    desc: "큐싱, 몸캠피싱, 로맨스스캠, 취업사기, 피싱사이트 등 그 밖의 기타 피해유형",
    url: "https://pd.fss.or.kr/",
  },
];

import PublicOrganIcon from "@/assets/simulation/public-organ-icon.png";
import PublicOrganIconSelected from "@/assets/simulation/public-organ-icon-selected.png";

import FamilyAcquaintanceIcon from "@/assets/simulation/family-acquaintance-icon.png";
import FamilyAcquaintanceIconSelected from "@/assets/simulation/family-acquaintance-icon-selected.png";

import LoanInvestmentIcon from "@/assets/simulation/loan-investment-icon.png";
import LoanInvestmentIconSelected from "@/assets/simulation/loan-investment-icon-selected.png";

import CardDeliveryIcon from "@/assets/simulation/card-delivery-icon.png";
import CardDeliveryIconSelected from "@/assets/simulation/card-delivery-icon-selected.png";

import RandomScenarioIcon from "@/assets/simulation/random-scenario-icon.png";
import RandomScenarioIconSelected from "@/assets/simulation/random-scenario-icon-selected.png";

export const phishingTypeData = [
  {
    id: 1,
    title: `검찰/공공기관\n사칭형`,
    defaultIcon: PublicOrganIcon,
    selectedIcon: PublicOrganIconSelected,
  },
  {
    id: 2,
    title: `가족/지인\n사칭형`,
    defaultIcon: FamilyAcquaintanceIcon,
    selectedIcon: FamilyAcquaintanceIconSelected,
  },
  {
    id: 3,
    title: `대출/투자\n사칭형`,
    defaultIcon: LoanInvestmentIcon,
    selectedIcon: LoanInvestmentIconSelected,
  },
  {
    id: 4,
    title: `카드 배송\n사칭형`,
    defaultIcon: CardDeliveryIcon,
    selectedIcon: CardDeliveryIconSelected,
  },
  {
    id: 5,
    title: `랜덤 시나리오\n체험하기`,
    defaultIcon: RandomScenarioIcon,
    selectedIcon: RandomScenarioIconSelected,
  },
];
