function solution(common) {
    let pre = 0;
    if(common.at(1) - common.at(0) === common.at(-1) - common.at(-2)){
       return common.at(-1) + (common.at(1) - common.at(0));
    }else{
        return common.at(-1) * (common.at(1) / common.at(0));
    }
}