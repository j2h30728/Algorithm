function solution(nums) {
    let result = 0;
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum % 2 === 0){
                    continue;
                }
                if(isPrimse(sum)) result++;
            }
        }
    }
    return result;
}

function isPrimse (num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}