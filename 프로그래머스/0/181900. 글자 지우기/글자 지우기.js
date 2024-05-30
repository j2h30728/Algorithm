function solution(my_string, indices) {
    indices.sort((a,b)=> a-b);
    let result = '';
    for(let i =0 ; i < my_string.length; i++){
        if(!indices.includes(i)){
            result += my_string[i];
        }
    }
    return result;
}