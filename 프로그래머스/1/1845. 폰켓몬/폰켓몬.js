function solution(nums) {
    const set = new Set(nums);
    const k = Math.floor(nums.length / 2);
    return Math.min(k, set.size);
}