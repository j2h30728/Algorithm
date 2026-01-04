/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for(const asteroid of asteroids){
        let isDestroyed = false;
        
        while(stack.length > 0 && asteroid < 0 && stack.at(-1) > 0){
            const top = stack.pop();
            
            if(Math.abs(top) > Math.abs(asteroid)){
                stack.push(top);
                isDestroyed = true;
                break;
            }else if (top + asteroid === 0){
                isDestroyed = true;
                break;
            }
        }
        
        if(!isDestroyed){
            stack.push(asteroid);
        }
    }
    return stack;
};