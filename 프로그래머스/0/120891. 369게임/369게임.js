function solution(order) {
    let count = 0;
    order.toString().split('').forEach(x => {
        if( x == 3 || x == 6 || x == 9) count++;
    });
    return count;
}