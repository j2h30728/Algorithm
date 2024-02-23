function solution(numbers) {
    const result = numbers.map(x=>String(x)).sort((a,b)=> (b+a) * 1 - (a+b) * 1 ).join('');
    return result[0]  == 0 ? '0' :  result;
}