function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let start = 0;
    let end = people.length -1;
    let count = 0;
    while(start <= end){
        if(people.at(start) + people.at(end) <= limit){
            count++;
            start++;
            end--;
        }else{
            end--;
            count++;
        }
    }
    return count;
}