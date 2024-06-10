function solution(arr) {
    var answer = [];
    let i = 0;
    while(i < arr.length){
        if(answer.length === 0){
            answer.push(arr.at(i));
            i++;
        }else{
            if(answer.at(-1) === arr.at(i)){
                answer.pop();
                i++;
            }else{
                answer.push(arr.at(i));
                i++;
            }
        }
    }
    return answer.length === 0 ? [-1] : answer;
}