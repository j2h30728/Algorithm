function solution(tickets) {
    const routes = {};
    tickets.forEach(([from,to])=>{
        if(!routes[from]) routes[from] = [];
        routes[from].push(to);
    })
    
    for (const from in routes){
        routes[from].sort();
    }
    
    const path = [];
    function dfs (current) {
        const destination = routes[current] || [];
        while(destination.length > 0){
            const next = routes[current].shift();
            dfs(next);
        }
        path.push(current);
    }
    
    dfs('ICN');
    return path.reverse();
}