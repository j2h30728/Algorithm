function solution(s){
    // let pCount = 0;
    // let yCount = 0;
    // for(ch of s.toLowerCase()){
    //     if(ch === 'p') {
    //         pCount++; 
    //     }else if (ch === 'y'){
    //         yCount++;
    //     }    
    // }
    // return (pCount === yCount) ? true : false;
    return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}