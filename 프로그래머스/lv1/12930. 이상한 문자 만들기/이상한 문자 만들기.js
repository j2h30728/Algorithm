function solution(s) {
    const newArr = s.split(' ')
   return newArr.map(str=> str.split('').map((x,idx)=> ((idx % 2 === 0) ? x.toUpperCase() : x.toLowerCase())).join('')).join(' ')
}