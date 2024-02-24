function solution(progresses, speeds) {
    const days = progresses.map((progress,i)=> Math.ceil((100 - progress) / speeds[i]));
    const result = [];    
    let maxDay = days[0]
    let count = 1;
    for(let i = 1; i < days.length; i++){
        if(days[i] <= maxDay ){
            count++;
        }else{
            maxDay = days[i];
            result.push(count);
            count = 1;
        }
    }
    result.push(count);
    return result;
}