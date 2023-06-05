function solution(food) {
//     let halfLength = food.reduce((acc,curr)=> acc + Math.floor(curr/2), 0)
//     console.log(halfLength);
    let word = "";
    for(let i =1 ; i < food.length; i++){
        word += `${i}`.repeat(Math.floor(food[i]/2));
    }
    return `${word}0${word.split('').reverse().join('')}`
}