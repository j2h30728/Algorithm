function solution(polynomial) {
    if(polynomial === "x")return "x";
    if(polynomial === "0" )return "0";
    let xNum =0;
    let num = 0;
    polynomial.split(' + ').forEach(x=>{
        if(!isNaN(Number(x))){
            num += Number(x);
        }else{
            let xNuma = x.slice(0,-1);
            (xNuma === "") ? xNum++ : xNum +=Number(xNuma);
        }
        
    })
    if(xNum && num) return xNum === 1 ? ["x",num].join(' + ') : [xNum+"x",num].join(' + ')
    if(!xNum && num)return num.toString();
    if(xNum > 0 && !num ) return xNum + 'x';
    return "";
}