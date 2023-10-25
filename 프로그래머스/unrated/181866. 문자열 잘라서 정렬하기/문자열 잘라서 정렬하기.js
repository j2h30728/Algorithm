function solution(myString) {
    return myString.split('x').filter(x=>x).sort((a,b)=>{
        if(a > b){
            return 1;
        }else if(a < b){
            return -1;
        }
    })
}