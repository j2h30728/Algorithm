class Queue {
    items = [];
    front = 0;
    rear = 0;
    push(item){
        this.items.push(item);
        this.rear++;
    }
    pop(){
        return this.items[this.front++]
    }
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(maps) {
    const moves = [[-1, 0], [0, -1],[0 ,1],[1, 0]];
    
    const totalX = maps.length;
    const totalY = maps[0].length;
    
    const dist = Array.from({length : totalX}, () => Array(totalY).fill(-1));
    
    const bfs = (start) =>{
        const queue = new Queue();
        queue.push(start);
        const [curX , curY] = start;
        dist[curX][curY] = 1;
        
        while(!queue.isEmpty()){
            const here = queue.pop();
            const [hereX, hereY] = here;
            
            for(const[moveX, moveY] of moves){
                const newX = moveX + hereX;
                const newY = moveY + hereY;
                
                if(newX < 0 || newY < 0 || newX >= totalX || newY >= totalY ){
                    continue;
                }
                if(maps[newX][newY] === 0){
                    continue;
                }
                if(dist[newX][newY] === -1){
                    queue.push([newX,newY]);
                    dist[newX][newY] = dist[hereX][hereY] + 1;
                }
            }
        }
    }
    bfs([0,0]);
    return dist[totalX - 1][totalY - 1];
}