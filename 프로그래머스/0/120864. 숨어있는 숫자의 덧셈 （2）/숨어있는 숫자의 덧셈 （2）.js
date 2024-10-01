function solution(my_string) {
    const result = [];
    let temp = ''
    for(let i = 0; i < my_string.length + 1; i++){
        if(!isNaN(my_string[i])){
            temp += my_string[i];
        }else if(temp.length > 0){
            result.push(temp);
            temp = '';
        }
    }
    return result.reduce((acc, cur) => acc + +cur, 0);
}