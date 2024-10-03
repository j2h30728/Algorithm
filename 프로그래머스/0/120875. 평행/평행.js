function solution(dots) {
    
    const cal = (a, b, c, d) => {
        if((b[0] - a[0]) * (d[1] - c[1]) === (b[1] - a[1]) * (d[0] - c[0])){
            return 1;
        }
        return 0;
    }
    const [d1, d2, d3, d4] = dots;
    
    return (cal(d1, d2, d3, d4) || cal(d1, d3, d2, d4) || cal(d1, d4, d2, d3));
}

