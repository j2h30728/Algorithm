function solution(board) {
    const bomb = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const row = board.length;
    const column = board[0].length;
    
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < column; j++){
            if(board[i][j] === 1 && board[i][j] !== -1){
                bomb.forEach(([x, y]) => {
                    const nx = i + x;
                    const ny = j + y;
                    if(nx < row && nx >= 0 && ny < column && ny >= 0 ){
                        if(board[nx][ny] !== 1) board[nx][ny] = -1;
                    }
                });
            }
        }
    }
    let count = 0;
    board.forEach(x => x.forEach((y => {
        if(y === 0) count++;
    })))
    return count;
}