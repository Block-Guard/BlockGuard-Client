export const getStepFromUrl = (url: string) => {
  return Number(url.split("/").pop());
};

export const getTitleFromUrl = (url: string) => {
  switch (getStepFromUrl(url)) {
    case 1:
      return "신고접수";
    case 2:
      return "계좌 지급정지 요청";
    case 3:
      return "추가피해 방지";
    case 4:
      return "피해구제 신청하기";
    default:
      return "";
  }
};
