function solution(my_string, queries) {
    queries.forEach(([s, e])=>{
        const temp = my_string.slice(s, e + 1).split('').reverse().join('');
        my_string = my_string.slice(0, s) + temp + my_string.slice(e + 1);
    })
    return my_string;
}