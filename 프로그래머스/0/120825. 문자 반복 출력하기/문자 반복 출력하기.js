function solution(my_string, n) {
    let result = '';
    for(const char of my_string){
         result += char.repeat(+n)
    }
    return result;
}