function solution(sides) {
    const [a, b] = sides;

    return (a + b) - Math.abs(a - b) - 1;
}
