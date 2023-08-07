function solution(players, callings) {
    const obj = players.reduce((acc,key,index)=> {
        acc[key] = index;
        return acc;
    },{})
    
    callings.forEach((player)=>{
        const rank = obj[player]
        obj[player] -= 1;
        
        const prev = players[rank-1];
        obj[prev] += 1;
        
        players[rank-1] = player;
        players[rank] = prev;

    })
    
    return players;
}

