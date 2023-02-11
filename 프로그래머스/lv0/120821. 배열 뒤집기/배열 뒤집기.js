function solution(num_list) {
    const answer =[]
    for(let i = 0; i < num_list.length ; i++){
        answer[i] = num_list[num_list.length-i-1]
    }
    return answer
}