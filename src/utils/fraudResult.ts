export const getTheme = (riskLevel: string) => {
    if (riskLevel === "위험") return 0;
    if (riskLevel === "주의") return 1;
    if (riskLevel === "안전") return 2;
    return 0;
};


interface NodeType{
    name: string;
    children?: NodeType[];
}

/** 재귀적으로 Map을 채워나가는 헬퍼 함수 */
const createMapImmutable = (nodes: NodeType[], topLevelName: string): Record<string, string> => {
    let map: Record<string, string> = {};

    for (const node of nodes) {
        // 현재 노드 맵
        const currentNodeMap = { [node.name]: topLevelName };
        // 자식 노드가 있다면 재귀적으로 자식 맵 생성
        const childrenMap = node.children ? createMapImmutable(node.children, topLevelName) : {};

        // 현재 맵, 자식 맵들을 모두 합쳐서 새로운 맵을 만듦
        map = { ...map, ...currentNodeMap, ...childrenMap };
    }

    return map;
}

/** 계층 없앤 버전으로 반환 */
export const createScamMapImmutable = (data: NodeType[]): Record<string, string> => {
    // reduce를 사용하여 각 최상위 아이템별로 생성된 맵을 하나로 합칩니다.
    return data.reduce((acc, topLevelItem) => {
        const newMap = createMapImmutable([topLevelItem], topLevelItem.name);
        return { ...acc, ...newMap };
    }, {});
}