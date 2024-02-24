function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const numSet = new Set();
    
    const makeCombination = (acc, nums) => {
        if (acc.length > 0) numSet.add(parseInt(acc));
        if (nums.length === 0) return;

        nums.forEach((num, index) => {
            const newNums = nums.slice(0, index).concat(nums.slice(index + 1));
            makeCombination(acc + num, newNums);
        });
    };

    makeCombination("", numbers.split(""));
    return Array.from(numSet).filter(isPrime).length;
}
