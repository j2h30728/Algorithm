function solution(answers) {
    const paterns = [ [1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const result = paterns.map((patern,index) => {
        return answers.filter((x,i) => patern[i % patern.length] === x).length;
    });
    const max = Math.max(...result);
    return result.map((x,i) => [x,i + 1]).filter(x => x[0] === max).sort((a, b)=> a[0] - b[0]).map(x => x[1]);
}
