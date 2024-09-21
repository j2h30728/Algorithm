function solution(numbers, direction) {
    const RIGHT = "right";
    const LEFT = "left";
    if(direction === RIGHT){
        return [...numbers.slice(-1), ...numbers.slice(0, -1)];
    } else{
        return [...numbers.slice(1), ...numbers.slice(0, 1)];
    }
}