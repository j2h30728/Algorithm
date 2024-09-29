function solution(n, computers) {
    const isVisited = Array.from({length : n} , () => false);
    let count = 0;
    for(let i = 0 ; i < n; i++){
        if(!isVisited[i]){
            dfs(computers, isVisited, i);
            count++;
        }
    }
    return count;
}

function dfs (computers, isVisited, node) {
    isVisited[node] = true;
    for(let idx = 0; idx < computers[node].length; idx++){
        if(computers[node][idx] && !isVisited[idx]){
            dfs(computers, isVisited, idx)
        }
    }
}