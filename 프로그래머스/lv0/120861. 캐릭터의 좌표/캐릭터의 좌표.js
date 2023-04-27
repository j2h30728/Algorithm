function solution(keyinput, board) {
    const newBoard = board.map(x=> Math.floor(x/2))
    let x=0;
    let y=0;
    for(let i =0; i< keyinput.length; i++){
        if(keyinput[i] === "left") {
            Math.abs(x - 1) <= newBoard[0] ? x-- : x 
        }
        if(keyinput[i] === "right") {
            Math.abs(x + 1) <= newBoard[0] ? x++ : x 
        }
        if(keyinput[i] === "down") {
            Math.abs(y - 1) <= newBoard[1] ? y-- : y
        }
        if(keyinput[i] === "up") {
            Math.abs(y + 1) <= newBoard[1] ? y++ : y
        }
    }
    return [x,y];
}