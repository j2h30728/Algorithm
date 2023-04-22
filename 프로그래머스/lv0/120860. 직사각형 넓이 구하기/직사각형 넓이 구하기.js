function solution(dots) {
    const arr1 = new Map(dots.map(x=>x[0]))
    const arr2 = new Map(dots.map(x=>x[1]))
    console.lod( Math.max(...arr1))
}

// function solution(dots) {
//     const arr1 =dots.sort((a,b)=> a[0]-b[0]);
//     const arr2 = dots.sort((a,b)=> a[1]-b[1]);
//     return (arr1[0][0] - arr1[3][0]) * (arr2[0][1] - arr2[3][1])
// }