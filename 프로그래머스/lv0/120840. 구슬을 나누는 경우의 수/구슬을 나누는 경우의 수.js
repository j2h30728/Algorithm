function solution(balls, share) {
    if(balls-share === 0 ) return 1
    let a = 1
    let b = 1
    let c = 1
    for(let i = balls; i >0; i--){
        a *= i
    }
    for(let i = share; i >0; i--){
        b *= i
    }
    for(let i =balls-share ; i >0; i--){
        c *= i
    }
    return Math.floor(a/(b*c));
}