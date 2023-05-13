function solution(price, money, count) {
    const total = price * count * (count + 1) /2;
    return total > money ? total - money : 0;
    // var total = 0;
    // for (let i = 1; i<= count; i++){
    //     total += price * i
    // }
    // return total >= money ? total-money : 0;
}