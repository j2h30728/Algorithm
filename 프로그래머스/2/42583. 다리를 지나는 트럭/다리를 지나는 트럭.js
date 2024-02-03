function solution(bridge_length, weight, truck_weights) {
    const onBridge = [];
    const times = [];
    let time = 0;
    
    while(truck_weights.length > 0 || onBridge.length > 0){
        time++;
        if(times.length > 0 && times[0] === time){
            times.shift();
            onBridge.shift();
        }
        
        const sum = onBridge.reduce((acc,cur)=>acc+cur,0);
        if(sum + truck_weights[0] <= weight && onBridge.length < bridge_length ){
            onBridge.push(truck_weights.shift());
            times.push(time+bridge_length);
        }
    }
    return time;
}