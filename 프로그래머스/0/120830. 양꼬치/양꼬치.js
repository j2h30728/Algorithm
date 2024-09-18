function solution(n, k) {
    const serviceDrink = Math.floor(n / 10);
    return n * 12000 + (k - serviceDrink) * 2000;
}