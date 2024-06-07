const calIndex = ( n, slicer, arr)=>{
    const [a,b,c] = slicer;
    switch(n){
        case 1:
            return arr.slice(0, b + 1);
        case 2:
            return arr.slice(a);
        case 3:
            return arr.slice(a, b + 1);
        case 4:
            return arr.slice(a, b + 1).filter((x,i)=> i % c === 0);
            
    }
}
function solution(n, slicer, num_list) {
    
    return calIndex(n, slicer, num_list);
}