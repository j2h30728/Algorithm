function solution(dartResult) {
    let index = 0;
    let answer = [];
    let num = [];
    for(const ch of dartResult){
        if(!Number.isNaN(ch * 1)){
           if(dartResult[index] === '1' && dartResult[index+1] === '0') {
            num.push(10);
           }else if ( dartResult[index] === '0'&& num.at(-1) === 10){
               continue;
           } else{
               num.push(ch * 1)
           }
        }
        if(ch === "S"){
            answer.push(num.at(-1) * 1)
        }
        if(ch === "D"){
            answer.push(Math.pow(num.at(-1),2) )
        }
        if(ch === 'T'){
            answer.push(Math.pow(num.at(-1),3) )
        }
        if(ch === '*'){
            answer[answer.length-1] = answer.at(-1) * 2;
            if(answer.length >=2 ){
             answer[answer.length-2] = answer.at(-2) * 2;   
            }
        }
        if(ch === '#'){
            answer[answer.length-1] = answer.at(-1) * -1;
        }

        index++;
    }
    return answer.reduce((acc,curr)=> acc+curr,0);
}