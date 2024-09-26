const NUMBERS = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
function solution(numbers) {
    NUMBERS.forEach((num, i) => {
        numbers = numbers.replaceAll(num,i);
    })
    return +numbers;
}