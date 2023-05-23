function solution(board) {
    const dx =[1,1,0,-1,-1,-1,0,1];
    const dy =[0,-1,-1,-1,0,1,1,1];
    const n = board.length;
    let answer = n * n; //안전지대 갯수
    const danger = [];
    
    for(let i =0; i < board.length; i++){
        for (let j =0 ; j < board.length; j++){
            if(board[i][j] === 1){
                danger.push([i,j]);
                answer--;
            }
        }
    }
    
    if(answer === 0) return 0;
    
    danger.forEach(x=> {
        for(let k =0; k < 8; k++){
            const nx = x[0] + dx[k];
            const ny = x[1] + dy[k];
            
            if(nx >=0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0){
                board[nx][ny] = 1;
                answer--;
            }
        }
    })
    
    return answer;
}