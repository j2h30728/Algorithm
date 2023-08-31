function solution(balls, share) {
    let a = 1
    let b = 1
    let c = 1
    for(let i = 1; i <= balls; i++){
        a *= i
    }
    for(let i = 1; i <=share; i++){
        b *= i
    }
        for(let i = 1; i <=balls-share; i++){
        c *= i
    }

    return Math.round(a/(b*c));
}