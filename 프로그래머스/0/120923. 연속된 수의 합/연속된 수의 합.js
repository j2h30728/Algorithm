function solution(num, total) {
    let start = Math.floor((total / num) / 2);
    let end = start + num - 1;
    let sum = 0;
    for(let i = start; i < start + num; i++){
        sum += i;
    }
    while(sum !== total){
        if(sum < total){
            sum -= start;
            end++;
            sum += end;
            start++;
        }else{
            sum -= end;
            end--;
            start--;
            sum += start;
        }
    }
    const arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}