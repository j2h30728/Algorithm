function solution(s) {
    let count = 0;
    function helper (str){
        if(str.length === 0) return;
        let xCount = 0;
        let otherCount = 0;
        let index = 0;
        for(let i =0 ; i < str.length ; i++){
            (str[i] === str[0]) ? xCount++ : otherCount++;
            if(xCount===otherCount) {
                index = i;
                break;
            }
            index = str.length;
        }      
        count++;
        helper(str.slice(index+1)) 
    }
    helper(s);
    return count;
}