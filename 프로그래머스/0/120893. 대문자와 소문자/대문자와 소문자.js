function solution(my_string) {
    let result = '';
    for(const char of my_string){
        if('a' <= char && 'z' >= char){
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    }
    return result;
}