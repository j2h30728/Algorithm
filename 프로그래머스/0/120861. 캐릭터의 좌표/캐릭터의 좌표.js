function solution(keyinput, board) {
    const move = {
        up : [0, 1],
        down : [0 , -1],
        left : [-1, 0],
        right : [1 ,0]
    }
    const current = [0, 0];
    
    keyinput.forEach((dir) => {
        const moving = move[dir];
        if(isValidMoving(board[0], current[0] + moving[0])){
            current[0] += moving[0];
        }
        if(isValidMoving(board[1], current[1] + moving[1])) {
            current[1] += moving[1];
        }
    })
    return current;
}


function isValidMoving (boardValue, calculateValue) {
    return Math.abs(calculateValue) <= Math.floor(boardValue / 2);
}