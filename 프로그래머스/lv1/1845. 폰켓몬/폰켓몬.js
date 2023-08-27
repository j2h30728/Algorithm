function solution(nums) {
    const max = nums.length / 2;
    const obj = {};
    nums.forEach(num=>{
         obj.hasOwnProperty(num) ? obj[num] += 1 : obj[num] = 1;
    })
    const keyLength = Object.keys(obj).length;
    return max <= keyLength ? max : keyLength;
}