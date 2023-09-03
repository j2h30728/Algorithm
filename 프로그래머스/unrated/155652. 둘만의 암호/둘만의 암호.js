const change = (wordCode,skip) =>{
    if(wordCode > 'z'.charCodeAt(0)){
        return 'a'.charCodeAt(0) + wordCode -'z'.charCodeAt(0) - 1;
    }
    return wordCode;
}

function solution(s, skip, index) {
    const skipCode = skip.split('').map(x=>x.charCodeAt(0))
    let result = ""
    const arr = s.split('')
    arr.map(word => {
        let newCode;
        for(let i = 1; i <= index; i++){
            newCode = newCode ?  change(newCode + 1) : word.charCodeAt(0) + 1;
            while(skipCode.includes(change(newCode))){
                newCode++;
                newCode = change(newCode);
            }
        }
        result += String.fromCharCode(newCode);
    })
    return result;
}