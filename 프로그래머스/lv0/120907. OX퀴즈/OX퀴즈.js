function solution(quiz) {
    const arr = []
    quiz.forEach(num=> {
        let sum = 0;
        const [x,operator , y, _, result] =num.split(" ")
        if(operator === "+") {
            sum = Number(x) +  Number(y) == Number(result) 
        }else {
            sum = Number(x) -  Number(y) == Number(result)
        }
        sum ? arr.push('O') : arr.push('X')
    })
    return arr;
}