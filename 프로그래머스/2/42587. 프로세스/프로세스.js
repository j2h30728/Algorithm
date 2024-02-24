function solution(priorities, location) {
    const arr = priorities.map((priority, index) => ({priority, index}));
    let count = 0;

    while (arr.length > 0) {
        const current = arr.shift();
        if (arr.some(item => item.priority > current.priority)) {
            arr.push(current);
        } else {
            count++;
            if (current.index === location) {
                return count;
            }
        }
    }
    return count;
}
