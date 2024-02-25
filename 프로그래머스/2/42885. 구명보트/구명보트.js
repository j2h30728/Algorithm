function solution(people, limit) {
    people.sort((a,b)=> a - b);
    let min = 0;
    let max = people.length - 1;
    let count = 0;
    
    while(min <= max){
        if(people[min] + people[max] <= limit){
            min++;
        }
        max--;
        count++;
    }
    
    return count;
}