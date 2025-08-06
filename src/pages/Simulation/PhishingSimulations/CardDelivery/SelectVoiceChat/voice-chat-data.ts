export interface VoiceCallData {
  voiceCall: string;
  options: string[];
}
export const deliveryDriverCallFirstData = {
  voiceCall: `안녕하세요, 00카드 배송기사입니다.\n000님 맞으시죠?\n오늘 10시에 신청하신 카드 전달드리러 방문 예정인데, 자택에 계실예정이신가요? `,
  options: [
    "“그런 카드 신청한 적이 없는데, 무슨 일이죠?”",
    "“제가 아닌 것 같은데요..?”",
    "“네? 카드 발급 신청한 적 없는데요?”",
  ],
};
export const deliveryDriverCallSecondData = {
  voiceCall: `본인이 발급하신게 아니라고요?\n분명히 본인 명의가 맞으신데...\n그럼 카드사 고객센터 1899-6077로 전화하셔서 직접 카드발급 취소요청을 해주셔야합니다.`,
  options: ["“확인했습니다.”", "“전화해보겠습니다.”", "“네, 알겠습니다.”"],
};

export const cardCompanyStaffCallData = {
  voiceCall: `안녕하세요,\n00카드 사고처리 접수팀입니다.\n무엇을 도와드릴까요? 
`,
  options: [
    `“제가 재발급 신청한 적 없는\n카드가 배송 온다고 해서요.”`,
    `“제 명의로 카드가 잘못 발급된것 같아요”`,
    `“방금 어떤 분이 배달 중이라며\n카드 취소하라고 하는데요. 무슨 일인가요?”`,
  ],
};
