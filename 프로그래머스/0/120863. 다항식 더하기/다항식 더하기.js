function solution(polynomial) {
    const poly = polynomial.split(' ');
    const current = [0 ,0];
    for(let i = 0; i < poly.length; i++){
        if(i % 2 === 1){
            continue;
        } else if(poly[i].endsWith('x')){
            current[0] += +poly[i].slice(0, -1) || 1; 
        }else{
            current[1] += +poly[i]
        }
    }
    const x = current[0] === 1 ? "x" : current[0] !== 0 ? `${current[0]}x` : 0;
    const num = current[1] !== 0 ? `${current[1]}` : 0;
    return [x, num].filter( x => x !== 0).join(' + ') || 0;
}