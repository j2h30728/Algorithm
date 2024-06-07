const calulate = (number) => {
    if(number >= 50 && number % 2 === 0){
        return number / 2;
    }
    if(number <= 50 && number % 2 === 1){
        return number * 2 + 1;
    }
    return number;
}
function solution(arr) {
    let count = 0;
    let previouseArr;
    while(true){
        previouseArr = [...arr];
        arr = arr.map(x => calulate(x));
        if(previouseArr.every((x,i)=> x === arr[i])){
            break;
        }
        count++
    }
    return count;
}
