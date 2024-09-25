const isValidMove = (x, y) =>{
    if(x <= 5 && y <= 5 && x >= -5 && y >= -5){
       return true;
       }else{
        return false;
    }
}
const updatePosition = (x, y, dir) => {
    switch(dir){
        case 'U':
            return [x, y + 1];
        case 'D':
            return [x, y - 1];
        case 'R':
            return [x + 1, y];
        case 'L':
            return [x - 1, y];
    }
}

function solution(dirs) {
    const visitedSet = new Set();
    let x = 0;
    let y = 0;
    for(const dir of dirs){
        const [nx, ny] = updatePosition(x, y, dir);
        if(!isValidMove(nx, ny)){
            continue;
        }
        visitedSet.add(`${x},${y}-${nx},${ny}`);
        visitedSet.add(`${nx},${ny}-${x},${y}`);
        x = nx;
        y = ny;
    }
    return visitedSet.size / 2;
}