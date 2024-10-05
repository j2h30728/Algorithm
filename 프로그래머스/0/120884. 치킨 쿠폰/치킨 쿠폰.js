function solution(chicken) {
    let count = 0;
    while(chicken >= 10){
        const service = Math.floor(chicken / 10)
        count += service;
        chicken = (chicken % 10) + service;
    }
    return count;
}