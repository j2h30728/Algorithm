function solution(k, dungeons) {
    let maxDungeon = 0;
    
    function dfs (fatigue, count, visited) {
        maxDungeon = Math.max(maxDungeon, count);
        
        dungeons.forEach(([minFatigue, useFatigue],index)=>{
            if(!visited[index] && fatigue >= minFatigue ){
                visited[index] = true;
                dfs(fatigue - useFatigue, count + 1, visited);
                visited[index] = false;
            }
        })
    }
    
    dfs(k, 0 , Array(dungeons.length).fill(false));
    return maxDungeon;
}