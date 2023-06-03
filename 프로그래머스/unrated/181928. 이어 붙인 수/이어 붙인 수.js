function solution(num_list) {
    let odd ="";
    let even= "";
    num_list.forEach(x=> (x%2 === 0) ? even += x.toString() : odd += x.toString());
    console.log(odd,even)
    return parseInt(odd) + parseInt(even);
}