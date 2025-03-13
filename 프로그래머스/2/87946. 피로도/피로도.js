function solution(k, dungeons) {
    const n = dungeons.length
    const visited = (new Array(n)).fill(false);
    let maxCount = 0;
    
    const backTracking = (count, fatigue) => {
        maxCount = Math.max(count, maxCount);
        
        for(let i = 0; i < n; i++){
            const [need, using] = dungeons[i]
            if(!visited[i] && fatigue >= need){
                visited[i] = true;
                backTracking(count + 1, fatigue - using);
                visited[i] = false;
            }
        }
    }
    backTracking(0, k);
    
    return maxCount;
}