function solution(name, yearning, photo) {
    const map = new Map();
    name.forEach((x, i) => {
        map.set(name[i], yearning[i]);
    });
    return photo.map((names) => names.map(name => map.get(name) ?? 0).reduce((acc, cur) => acc + cur, 0));
}