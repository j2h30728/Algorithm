function solution(my_string, m, c) {
    let result = ''
    for(let i = 0; i < my_string.length ; i += m){
        result += my_string.slice(i).at(c - 1);
    }
    return result;
}