export const getTheme = (riskLevel: string) => {
    if (riskLevel === "위험") return 0;
    if (riskLevel === "주의") return 1;
    if (riskLevel === "안전") return 2;
    return 0;
};

