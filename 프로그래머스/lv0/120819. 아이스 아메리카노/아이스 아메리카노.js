function solution(money) {
   const americano =  Math.floor(money/5500)
   const remain = money%5500
    var answer = [americano, remain];
    return answer;
}