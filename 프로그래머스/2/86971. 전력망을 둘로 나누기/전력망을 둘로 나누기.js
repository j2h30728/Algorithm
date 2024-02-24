function solution(n, wires) {
    const graph = Array.from({length : n + 1}, () => []);
    
    wires.forEach(([v1,v2])=>{
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    function dfs (start, visited){
        visited[start] = true;
        let nodes = 1;
        graph[start].forEach(next =>{
            if(!visited[next]){
                nodes += dfs(next,visited);
            }
        })
        return nodes;
    }
    
    let minDiffrence = n;
    wires.forEach(([v1,v2])=>{
        const index1 = graph[v1].indexOf(v2);
        const index2 = graph[v2].indexOf(v1);
        graph[v1].splice(index1, 1);
        graph[v2].splice(index2, 1);
        
        const visited = Array.from({length : n + 1}, ()=>false);
        const subtreeSize = dfs(v1, visited);
        const difference = Math.abs(subtreeSize - (n - subtreeSize));
        
        minDiffrence = Math.min(minDiffrence, difference);
        
        graph[v1].push(v2);
        graph[v2].push(v1);
        
    });
    return minDiffrence;
}