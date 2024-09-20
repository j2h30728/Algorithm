function solution(rsp) {
    const SCISSORS = 2;
    const ROCK = 0;
    const PAPER = 5;
    
    const result = {
        '2' : ROCK,
        '0' : PAPER,
        '5' : SCISSORS,
    }
    return rsp.split('').map(x => result[x]).join('');
}