const move = {
    up : [0, 1],
    down : [0 , -1],
    left : [-1, 0],
    right : [1 ,0]
}

function solution(keyinput, board) {
    const [x1, x2] = [-board[0] / 2, board[0] / 2];
    const [y1, y2] = [-board[1] / 2, board[1] / 2];
    const current = [0, 0];
    
    return keyinput.reduce(([x , y], cur) => {
        const [nx, ny] = [x + move[cur][0], y + move[cur][1]]
        if(nx >= x1 && nx <= x2 && ny >= y1 && ny <= y2 ){
            return [nx, ny];
        }
        return [x, y];
    },[0,0])

}
