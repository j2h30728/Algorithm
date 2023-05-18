function solution(s, n) {
    let result = "";
    for(let i of s){
        result += calCode(i,n);
    }
    return result;
}

function calCode (str, n) {
    const smallZ = "z".charCodeAt(0);
    const smallA = "a".charCodeAt(0);
    const bigZ = "Z".charCodeAt(0);
    const overflow = smallZ - smallA + 1;
    
    const code = str.charCodeAt(0) + n;
    if(str === " ") return " ";
    if(str >= "a" && str <="z") {
        if(code > smallZ ) return String.fromCharCode(code- overflow);
    }
    if(str >= "A" && str <="Z") {
        if(code > bigZ) return String.fromCharCode(code - overflow);

    }
    return String.fromCharCode(code);

}