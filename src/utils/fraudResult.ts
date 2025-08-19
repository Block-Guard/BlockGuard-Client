import { scamTypes } from "../pages/FraudSurvey/AnalysisResultPage/constants";

export const getTheme = (riskLevel: string) => {
    if (riskLevel === "위험") return 0;
    if (riskLevel === "주의") return 1;
    if (riskLevel === "안전") return 2;
    return 0;
};

export const findMiddleCategoryName = (inputName: string): string | null => {
  // 최상위 분류를 순회
  for (const topCategory of scamTypes) {
    if (!topCategory.children) continue;

    // 중간 분류를 순회
    for (const middleCategory of topCategory.children) {
      // 입력된 이름이 중간 분류 이름과 일치하는 경우
      if (middleCategory.name === inputName) {
        return middleCategory.name;
      }

      // 입력된 이름이 세부 분류에 있는지 확인
      if (middleCategory.children) {
        // 세부 분류를 순회
        for (const detailCategory of middleCategory.children) {
          if (detailCategory.name === inputName) {
            // 세부 분류를 찾았다면, 그 부모인 중간 분류의 이름을 반환
            return middleCategory.name;
          }
        }
      }
    }
  }

  return null;
};