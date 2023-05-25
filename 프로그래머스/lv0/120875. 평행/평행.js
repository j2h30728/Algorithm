function solution(dots) {
    const [a,b,c,d] = dots;
    let count = 0;
    if( cal(a,b,c,d,) || cal(a,c,b,d,) || cal(a,d,b,c)){
        return 1;
    }
    return 0;
}

function cal (a,b,c,d){
    let x , y;
    x = (a[1]-b[1]) / (a[0]-b[0])
    y = (c[1]-d[1]) / (c[0]-d[0]) 
    
    return (x === y) ? 1 : 0;
}

//몫과 나머지가 같은 경우  = 겹침
//몫만 같은경우 = 평행