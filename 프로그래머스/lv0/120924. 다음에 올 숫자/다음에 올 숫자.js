function solution(common) {
    if(common.length === 2) return common[1] - common[0];
    // const end =common[common.length - 1];
    // const start = common[0];
    const endIdx =common.length-1;
    if(common[1]- common[0] === common[endIdx] - common[endIdx-1]) {
        return common[1] - common[0] + common[endIdx]
    }
    return common[1] / common[0] * common[endIdx]
}