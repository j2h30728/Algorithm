function solution(s) {
    let count =0;
    let zero = 0;
    function helper(str){
        if(str.length === 1)return 1;
        count++;
        const newStr = str.split('').filter(x=>{
            if(x === "0") {
                zero++;
                return false;
            }else{
                return true;
            }
        }).join('');
        helper(newStr.length.toString(2));
    }
    helper(s);
    return [count,zero];
}
/*
function solution(s) {
    let count =0;
    let zero = 0;
    function helper(str){
        count++;
        if(str.length === 1)return 1;
        
        const newStr = str.split('').filter(x=>{
            if(x === "0") {
                zero++;
            }else{
                return x;
            }
        }).join('');
        console.log(parseInt(newStr, 2))
        // return helper(parseInt(newStr, 2).toString())
    }
    helper(s);
    return [count,zero];
}

*/

