function solution(sides) {
    sides.sort((a, b) => a - b);
    const [x, y, most] = sides;
    return most < x + y ? 1 : 2;
}