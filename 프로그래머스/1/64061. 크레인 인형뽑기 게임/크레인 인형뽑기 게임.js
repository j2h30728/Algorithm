function solution(board, moves) {
    const lanes = [...Array(board[0].length)].map(() => []);
    
    for(let i = board.length - 1; i >= 0; i--){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j]){
                lanes[j].push(board[i][j]);
            }
        }
    }
    const stack = [];
    let count = 0;
    for(const move of moves){
        if(lanes[move - 1].length > 0){
            const poped = lanes[move - 1].pop();

            if(stack.length > 0 && stack.at(-1) === poped) {
                stack.pop();
                count += 2;
            }else {
                stack.push(poped);
            }
        }     
    }
    
    return count;
}