function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        }
        if(stk.length > 0 && stk.at(-1) < arr.at(i)){
            stk.push(arr[i]);
            i++;
        }
        if(stk.length > 0 && stk.at(-1) >= arr.at(i)){
            stk.pop();
        }
    }
    return stk;
}