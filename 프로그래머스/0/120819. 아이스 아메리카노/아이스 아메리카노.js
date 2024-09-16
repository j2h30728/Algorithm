function solution(money) {
    const AMERICANO = 5500;
    const formatMoney = money.toString().replaceAll(',','');
    return [Math.floor(formatMoney / AMERICANO), formatMoney % AMERICANO];
}