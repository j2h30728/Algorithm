function solution(n, info) {
    // n 화살 갯수
    // info  어피치가 맞춘 갯수
    let maxDiff = 0;
    let maxRyanInfo = [];
    
    const ryanInfo = Array(11).fill(0);
    
    
    const backTracking = (idx, remainArrows) => {
        
        if(idx === 11 || remainArrows === 0){
            if(remainArrows > 0) {
                ryanInfo[10] += remainArrows;
            }
            
            let apeachScore = 0;
            let ryanScore = 0;
            
            for(let i = 0; i < 11; i++){
                if(info[i] === 0 && ryanInfo[i] === 0 ){
                    continue;
                }
                
                if(info[i] >= ryanInfo[i]){
                    apeachScore += (10 - i);
                }else{
                    ryanScore += (10 - i); 
                }
            }
            
            if(ryanScore > apeachScore) {
                const scoreDiff = ryanScore - apeachScore;
                
                if(scoreDiff >  maxDiff){
                    maxDiff = scoreDiff;
                    maxRyanInfo = [...ryanInfo];
                } 
                else if(scoreDiff === maxDiff){ // 점수차이가 낮을 경우 낮은 점수를 더 많이 맞힌 방법
                    for(let j = 10; j >= 0; j--){
                        if(ryanInfo[j] > maxRyanInfo[j]){
                            maxRyanInfo = [...ryanInfo];
                            break;
                        }
                        if(ryanInfo[j] < maxRyanInfo[j]){ // 화살수가 남음
                            break;
                        }
                    }
                }

            }
            if(remainArrows > 0) {
                ryanInfo[10] -= remainArrows;
            }
            
            return;
        }  
        if(remainArrows > info[idx]){
            ryanInfo[idx] = info[idx] + 1;
            backTracking(idx + 1,  remainArrows - ryanInfo[idx]);
            ryanInfo[idx] = 0;
        }
        
        ryanInfo[idx] = 0; // 안쏘고 넘어갈때
        backTracking(idx + 1, remainArrows);
    }
    backTracking(0, n);

    if(maxRyanInfo.length === 0) {
        return [-1];
    }
    
    return maxRyanInfo;
}