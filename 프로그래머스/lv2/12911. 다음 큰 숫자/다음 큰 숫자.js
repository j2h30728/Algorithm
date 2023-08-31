function solution(n) {
    let temp= n + 1;
    while(true){
        if(oneCount(n) === oneCount(temp)){
            return temp;
        }
        temp++;
    }
}

function oneCount (num){
    return num.toString(2).split('').filter(x=>x==='1').length
}