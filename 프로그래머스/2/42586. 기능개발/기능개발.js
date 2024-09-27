function solution(progresses, speeds) {
    const queue = new Queue();
    for(let i = 0; i < progresses.length; i++){
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    const result = [];
    let tempMax = queue.pop();
    let count = 1;
    while(queue.size() > 0) {
        const poped = queue.pop()
        if(tempMax < poped){
            result.push(count);
            tempMax = poped
            count = 1;
        }else{
            count++;
        }
    }
    result.push(count);
    return result;
}


class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        return this.items[this.front++];
    }
    
    size (){
        return this.rear - this.front;
    }
}