function solution(myStr) {    
    let string = ''
    for(const str of myStr){
        if(str === 'a' || str === 'b' || str === 'c' ){
            string += ' '
        }else {
            string += str;
        }
    }
    const result  = string.split(' ').filter(x=>x.length > 0);
    return result.length === 0 ? ["EMPTY"] : result;
}