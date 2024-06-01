function solution(num_list) {
    return num_list.map(calDevideCount).reduce((acc,cur)=> acc + cur, 0)
}

function calDevideCount (number) {
    let count = 0;
    while(number > 1){
        if(number % 2 === 0){
            number /= 2;
            count++;
        }else{
            number = --number / 2;
            count++;
        }
    }
    return count;
}