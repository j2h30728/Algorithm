function solution(s) {
    const sLength = Math.ceil(s.length/2)
    return s.substring(sLength-1, s.length % 2 === 0 ? sLength+1 : sLength)
    // if(s.length%2 ===1) return s[Math.floor(s.length/2)];
    // return s[s.length/2-1]+s[s.length/2]
}

solution("Mozilla")