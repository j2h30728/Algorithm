function solution(my_string) {
    const a = 'a'.charCodeAt(0);
    const arr = Array.from({length : 52})
    const obj = {};
    makeAlphabetObject(obj);
    
    for(const char of my_string){
        obj[char] += 1;
    }
    return Object.values(obj);
}
function makeAlphabetObject (object) {
    for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++ ){
        const string = String.fromCharCode(i);
        object[string] = 0;
    }
    for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++ ){
        const string = String.fromCharCode(i);
        object[string] = 0;
    }
    return object;
}