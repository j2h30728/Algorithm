function solution(board, moves) {
    const stack = [];
    let count = 0;
    
    const calculate = (num) => {
        for(let i = 0; i < board.length; i++){
            if(board[i][num] !== 0){
                const catched = board[i][num];
                board[i][num] = 0;
                
                if(stack.at(-1) === catched) {
                    count += 2;
                    stack.pop();
                }else{
                    stack.push(catched);
                }
                break;
            }
        }
    }
    
    moves.forEach(move => {
        calculate(move - 1);
    });
    
    return count;
    
}