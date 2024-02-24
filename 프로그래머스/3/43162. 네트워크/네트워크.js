function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let network = 0;
    
    
    function dfs(start){
        visited[start] = true;
        for(let i = 0; i < n; i++){
            if(!visited[i] && computers[start][i]){
                dfs(i);
            }
        }
    }
    for(let i = 0; i < n; i++){        
        if(!visited[i]){
            dfs(i);
            network++;
        }
    }
    return network;
}