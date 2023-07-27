function solution(board, moves) {
    const result = [];
    let count = 0;
    moves.forEach((x)=>{
        for(let i =0; i < board.length; i++){
            if(board[i][x-1] > 0){
                if(result.at(-1) === board[i][x-1]){
                    count++;
                    result.pop();
                } else{
                    result.push(board[i][x-1]);
                }
                board[i][x-1] = 0;
                break;
            }
        }
    })
    return count * 2;
}