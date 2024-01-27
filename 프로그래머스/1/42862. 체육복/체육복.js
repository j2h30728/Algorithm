function solution(n, lost, reserve) {
    let count = n - lost.length;
    lost.sort();
    lost = lost.filter(num => {
        const sameValueIndex = reserve.indexOf(num);
        if(sameValueIndex !== -1){
            count++;
            reserve.splice(sameValueIndex,1);
            return false;
        }
        return true;
    })
    
    
    lost.forEach(num => {
        const downValueIndex = reserve.indexOf(num - 1);
        const upValueIndex = reserve.indexOf(num + 1);

        if(downValueIndex !== -1){
            count++;
            reserve.splice(downValueIndex,1);
        }else if(upValueIndex !== -1){
            count++;
            reserve.splice(upValueIndex,1);
        }
    })
    return count;
}