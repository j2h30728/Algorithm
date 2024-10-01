function solution(dots) {
    const arr = Array.from({length : 2} , () => new Set())
    
    dots.forEach(([x,y])=>{
        arr[0].add(x);
        arr[1].add(y);
    })
    
    return (Math.max(...arr[0]) - Math.min(...arr[0])) * (Math.max(...arr[1]) - Math.min(...arr[1]));
}