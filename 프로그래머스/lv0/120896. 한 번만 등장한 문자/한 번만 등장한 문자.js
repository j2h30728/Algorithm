function solution(s) {
    const obj={}
    s.split('').reduce((acc,curr)=>{
        if(obj[curr]=== undefined) return obj[curr] = 1;
        obj[curr]++
    },obj)
    console.log(obj)
    return Object.keys(obj).filter(x=> obj[x] === 1).sort().join('')
}