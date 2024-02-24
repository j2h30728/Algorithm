function solution(clothes) {
    const map = {};
    clothes.forEach(([name,type])=> map[type] = (map[type] || 0) + 1);
    
    return Object.values(map).reduce((acc,cur)=> acc * (cur + 1) ,1) - 1;
    
}