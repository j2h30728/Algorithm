function solution(n, m, section) {
    let count = 0;
    let end = 0;
    for(const i of section){
        if(end < i ){
            count++;
            end = i +  m - 1
        }
    }
    return count;
}