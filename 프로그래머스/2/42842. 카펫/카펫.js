function solution(brown, yellow) {
    // 가로  >= 세로
    const total = brown + yellow;
    
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow % i === 0){
            const yellowWidth = yellow / i;
            const yellowHeight = i;
            
            const width = yellowWidth + 2;
            const height = yellowHeight + 2;
            
            if(width * height === total){
                return [width, height];
            }
        }
    }
}