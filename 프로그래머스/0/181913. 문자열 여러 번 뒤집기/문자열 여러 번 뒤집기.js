function solution(my_string, queries) {
    let arr = [...my_string]
    queries.forEach(([start, end])=>{
        const changeString = arr.slice(start, end + 1)
        arr.splice(start, changeString.length , ...changeString.reverse())
    })
    return arr.join('');
}