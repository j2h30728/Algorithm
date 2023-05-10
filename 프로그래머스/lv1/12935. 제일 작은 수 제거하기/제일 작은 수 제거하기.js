function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    if(arr.length < 1)return [-1]
    return arr;    
    // if(arr.length === 1) return [-1]
    // let min= Infinity;
    // let index = 0;
    // arr.forEach((x,idx)=> {
    //     if(min > x){
    //         min = x
    //         index = idx
    //     }
    // })
    // return [...arr.slice(0,index),...arr.slice(index+1)]
}