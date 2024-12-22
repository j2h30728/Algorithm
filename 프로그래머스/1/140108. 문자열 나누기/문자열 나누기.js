function solution(s) {
    const result = [];
    let temp = '';
    let head = null;
    
    let sameCount = 0;
    let differCount = 0;
    for(const char of s){
        if(head === null) head = char; 
        
        if(head === char){
            sameCount++;
        }else{
            differCount++;
        }
        temp += char;
        if(sameCount === differCount){
            result.push(temp);
            temp = '';
            head = null;
        }
    }
    return head  === null ? result.length  : result.length + 1;
}

