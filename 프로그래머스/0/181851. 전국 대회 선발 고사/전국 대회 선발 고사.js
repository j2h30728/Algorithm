function solution(rank, attendance) {
    const arr = [];
    let count = 3;
    rank.forEach((x, i)=>{
        if(attendance[i]){
            arr.push([x, i]);
        }
    })
    arr.sort((a,b)=>a[0] - b[0]);
    const [first, second, third] = arr;
    return first[1] * 10000 + second[1] * 100 + third[1];
}